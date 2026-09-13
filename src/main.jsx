import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const resumePath = '/张雨豪-简历.pdf'

const projects = [
  {
    id: '01',
    type: '个人项目',
    title: 'GoFun 活动票务与抢票系统',
    description: '面向活动票务与限时抢票场景，支持库存和选座两种模式，并覆盖主办方经营分析、活动审批和系统运行监控等功能。',
    stack: ['Go', 'Gin', 'GORM', 'MySQL', 'Redis', 'RabbitMQ', 'Prometheus'],
    outcomes: ['订单消费速率 260+ tx/s → 366+ tx/s', '混合流量吞吐 1.3k QPS → 2.1k QPS'],
    href: 'https://github.com/cheauncey33/gofun',
    details: [
      ['购票链路与库存控制', '库存型售票采用 Redis Lua 原子预扣 → 订单与 Outbox 同事务落库 → RabbitMQ 异步投递 → Consumer 最终确认数据库存；采用“一座一行”的座位级库存模型，通过数据库事务与条件更新实现多座位原子扣减。'],
      ['一致性与异常恢复', 'Outbox 负责订单和消息的一致性，消费端使用幂等、唯一约束和状态更新处理重复投递，以及支付回调与超时关单的并发竞态；Redis 记录库存预扣，后台任务分批恢复超时记录，并周期性以 MySQL 为基准校准 Redis 库存。'],
      ['压测与性能优化', '使用 Prometheus 监控接口延迟、事务耗时、连接池和 MQ 积压状况，配合分层压测定位热点库存和连接竞争问题，调整 Consumer 并发、拆分 HTTP/Worker 数据库连接池，并为活动目录增加短 TTL 缓存。'],
    ],
  },
  {
    id: '02',
    type: '实习项目',
    title: '光缆工艺报告审查智能体',
    description: '基于 RAG 与大模型的工程文档审查智能体，实现光缆工艺报告的自动化审查。',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'Workflow', 'RAG', 'Agent'],
    outcomes: ['600+ 测试案例 TOP 10 召回率 87%', '报告审查完成率 100%'],
    details: [
      ['知识库与检索链路', '使用 MinerU 对国标、行标及企业标准进行结构化解析，完成章节、表格等内容的结构化切分与元数据保留；结合 Dense 检索、全文检索、候选融合与 Reranker 精排，实现 600+ 测试案例 TOP 10 召回率达到 87%。'],
      ['固定工作流到 Agentic 审查', '针对复杂标准场景下单轮大模型判定不稳定的问题，引入审查 Agent，实现自主读取原文、补充检索、表格定位，提升表格取值、单位换算、适用条件等场景的审查准确性约 15%。'],
      ['Agent 工具优化与可靠性', '设计 row_filter 工具按参数精确匹配目标表格行，平均减少 search/read 工具调用 2.25 次/Case（32.1%）；通过 Checkpoint 持久化、Case 级状态记录与失败重试实现审查任务断点恢复。'],
    ],
  },
]

const skills = ['Go', 'MySQL', 'Redis', 'RabbitMQ', 'FastAPI', 'PostgreSQL', 'RAG', 'Agent']

function ArrowIcon({ direction = 'right' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`arrow-icon arrow-${direction}`}>
      <path d="M4 10h11M10.5 4.5 16 10l-5.5 5.5" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="external-icon">
      <path d="M11 4h5v5M16 4l-7.5 7.5M14 11.5V16H4V6h4.5" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="small-icon">
      <rect x="2.5" y="4.5" width="15" height="11" rx="1" />
      <path d="m3.5 6 6.5 5 6.5-5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="small-icon">
      <path d="M6.2 3.3 8.1 6.7 6.8 8.1c.8 1.8 2.1 3.1 3.9 3.9l1.4-1.3 3.4 1.9-.5 2.1c-.2.8-1 1.3-1.8 1.2C8 15.3 4.7 12 4.1 6.8c-.1-.8.4-1.6 1.2-1.8z" />
    </svg>
  )
}

function FileIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="small-icon">
      <path d="M5 2.5h6l4 4V17.5H5zM11 2.5v4h4M7.5 10h5M7.5 13h5" />
    </svg>
  )
}

function SectionLabel({ children }) {
  return <div className="section-label"><h2>{children}</h2></div>
}

function ProjectEntry({ project, isOpen, onToggle }) {
  return (
    <article className={`project-entry ${isOpen ? 'is-open' : ''}`}>
      <div className="project-meta">
        <span>{project.type}</span>
      </div>
      <button className="project-content" onClick={onToggle} aria-expanded={isOpen}>
        <div className="project-copy">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <span className="detail-toggle">{isOpen ? '收起详情' : '查看更多细节'} <ArrowIcon direction={isOpen ? 'up' : 'down'} /></span>
        </div>
        <div className="project-proof">
          <span className="proof-label">技术栈</span>
          <p>{project.stack.join('　')}</p>
          <span className="proof-label">项目结果</span>
          <ul>{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
        </div>
      </button>
      <div className="project-detail" hidden={!isOpen}>
        {project.details.map(([label, copy]) => (
          <div className="detail-line" key={label}>
            <strong>{label}</strong>
            <p>{copy}</p>
          </div>
        ))}
        {project.href && <a className="project-link" href={project.href} target="_blank" rel="noreferrer">查看 GitHub 仓库 <ExternalIcon /></a>}
      </div>
    </article>
  )
}

function App() {
  const [openProject, setOpenProject] = useState(null)

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="header-name" href="#top" aria-label="回到顶部">张雨豪</a>
        <nav aria-label="主导航">
          <a href="#experience">经历</a>
          <a href="#work">项目</a>
          <a href="#about">关于我</a>
        </nav>
        <div className="header-actions">
          <a href="mailto:cheauncey@163.com">邮箱</a>
          <a href={resumePath} download>简历 <ArrowIcon direction="down" /></a>
        </div>
      </header>

      <main id="top">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-main">
            <h1 id="hero-title">张雨豪</h1>
            <p className="hero-role">软件开发</p>
            <p className="hero-summary">武汉大学计算机技术硕士在读，主要做后端和 AI 应用开发。</p>
            <div className="hero-links">
              <a href="https://github.com/cheauncey33" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
              <a href={resumePath} download>下载简历 <ArrowIcon direction="down" /></a>
            </div>
          </div>
          <aside className="contact-note" aria-label="联系方式">
            <dl className="contact-list">
              <div><dt><MailIcon /> 邮箱</dt><dd><a href="mailto:cheauncey@163.com">cheauncey@163.com</a></dd></div>
              <div><dt><PhoneIcon /> 电话</dt><dd>19826563920</dd></div>
              <div><dt><FileIcon /> 状态</dt><dd>武汉大学 · 硕士在读</dd></div>
            </dl>
          </aside>
        </section>

        <section className="work-section page-width" id="work" aria-label="项目经历">
          <SectionLabel>项目经历</SectionLabel>
          <div className="project-list">
            {projects.map((project) => <ProjectEntry key={project.id} project={project} isOpen={openProject === project.id} onToggle={() => setOpenProject(openProject === project.id ? null : project.id)} />)}
          </div>
        </section>

        <section className="resume-grid page-width" id="experience" aria-label="实习经历与教育经历">
          <div className="resume-block">
            <SectionLabel>实习经历</SectionLabel>
            <div className="resume-item">
              <div className="item-date">2026.05<br />— 2026.08</div>
              <div>
                <h3>长飞光纤光缆股份有限公司</h3>
                <p className="item-role">AI 应用开发实习生</p>
                <p>参与企业内部系统与智能化工具开发，负责 AI 应用链路、数据处理与系统集成。</p>
              </div>
            </div>
          </div>
          <div className="resume-block education-block">
            <SectionLabel>教育经历</SectionLabel>
            <div className="education-list">
              <div className="education-item"><span>2021.09 — 2025.07</span><div><h3>安徽大学</h3><p>计算机科学与技术 · 本科</p></div></div>
              <div className="education-item"><span>2025.09 — 2027.07</span><div><h3>武汉大学</h3><p>计算机技术 · 硕士</p></div></div>
            </div>
            <p className="honors">安徽大学学业一等奖学金<br />安徽大学年度国元证券奖学金</p>
          </div>
        </section>

        <section className="about-section page-width" id="about" aria-label="关于我">
          <SectionLabel>关于我</SectionLabel>
          <div className="about-grid">
            <div className="about-copy">
              <p className="about-lead">喜欢阅读、运动，也会记录生活。</p>
              <p>平时会留一点时间阅读、散步和运动，也会记录一些日常。性格比较稳定，做事有耐心，遇到问题会尽量把它解决。</p>
            </div>
            <div className="life-list">
              <div><strong>兴趣爱好</strong><span>阅读、散步、记录生活</span></div>
              <div><strong>运动</strong><span>平时会运动，尽量保持状态</span></div>
              <div><strong>性格</strong><span>比较稳定，做事有耐心</span></div>
            </div>
          </div>
          <div className="skills-row"><span>个人技能</span><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <span>张雨豪　·　软件开发</span>
        <div><a href="https://github.com/cheauncey33" target="_blank" rel="noreferrer">GitHub <ExternalIcon /></a><a href="mailto:cheauncey@163.com">邮箱 <ExternalIcon /></a></div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
