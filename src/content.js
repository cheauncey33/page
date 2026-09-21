export const resumePath = `${import.meta.env.BASE_URL}张雨豪-简历.pdf`

export const profile = {
  nameZh: '张雨豪',
  nameEn: 'Yuhao Zhang',
  age: '23',
  email: 'cheauncey@163.com',
  phone: '19826563920',
  github: 'https://github.com/cheauncey33',
  githubLabel: 'cheauncey33',
  homepage: 'https://cheauncey.me',
  source: 'https://github.com/cheauncey33/cheauncey33.github.io',
  updated: '2026.09',
}

const zh = {
  meta: {
    title: '张雨豪 · 后端开发 / AI 应用 · 2027 届秋招',
    description:
      '张雨豪，武汉大学计算机技术硕士（2027 届），求职方向为后端开发与 AI 应用开发。项目：GoFun 高并发票务系统（订单消费 366+ tx/s）、光缆工艺报告审查智能体（600+ 测试案例 TOP 10 召回率 87%）。',
    keywords: '张雨豪,后端开发,Go,AI 应用开发,RAG,Agent,武汉大学,2027届秋招,个人主页',
  },
  nav: {
    intro: '概述',
    internship: '实习',
    work: '项目',
    menu: '菜单',
    close: '收起',
    langSwitch: 'English',
  },
  head: {
    nameEnLabel: 'Yuhao Zhang',
    education: [
      { date: '2021.09 — 2025.07', school: '安徽大学', degree: '本科', major: '计算机科学与技术' },
      { date: '2025.09 — 2027.07', school: '武汉大学', degree: '硕士', major: '计算机技术' },
    ],
    ageLabel: '年龄',
    ageValue: '23 岁',
    targetLabel: '目标岗位',
    targetValue: '后端开发 / AI 应用',
    targetNote: '2027 届应届硕士 · 秋招正式岗位',
    linksLabel: '作品集与在线资料',
    portfolioLabel: '项目作品集',
    githubLabel: 'GitHub',
    resumeLabel: '简历 PDF',
    resumeBtn: '简历',
    emailActionLabel: '复制邮箱地址',
    phoneActionLabel: '复制手机号',
    githubActionLabel: '打开 GitHub 主页',
    copied: '复制成功',
    campusLabel: '校园经历',
    campus: [
      '安徽大学英语社副社长',
      '安徽大学校园歌手大赛 · 院第四名',
    ],
    interestLabel: '兴趣爱好',
        interests: ['音乐', '乒乓球', '游戏', '美剧'],
    internshipLabel: '实习经历',
    internship: {
      date: '2026.05 — 2026.08',
      company: '长飞光纤光缆股份有限公司',
      role: 'AI 应用开发实习生',
    },
    projectsLabel: '项目经历',
    projects: ['GoFun 活动票务与抢票系统', 'SimpCode · 内网小模型 Coding Assistant'],
  },
  hero: {
    ariaLabel: '个人概述',
    role: '后端开发 / AI 应用 · 2027 届秋招',
    focusTitle: '主要学习与开发方向',
    focus: [
      {
        label: '后端开发',
        title: 'Go 高并发服务',
        points: ['并发场景下的库存一致性与异步下单链路', '分层压测定位瓶颈，量化优化前后差异', 'Outbox、幂等、重试等一致性设计'],
      },
      {
        label: 'AI 应用',
        title: 'RAG 与 Agent 落地',
        points: ['RAG 知识库构建与混合检索优化', '文档审查流程的自动化编排', '长任务的断点恢复与可观测性'],
      },
    ],
  },
  skills: {
    title: '技术栈',
    proficientLabel: '熟练',
    familiarLabel: '了解',
    groups: [
      { title: '编程语言', items: ['Go', 'Python'], familiar: ['Java', 'C / C++'] },
      { title: '开发框架', items: ['Gin', 'GORM', 'FastAPI', 'LangChain'] },
      { title: '数据库与中间件', items: ['Redis', 'MySQL', 'RabbitMQ'], familiar: ['PostgreSQL', 'pgvector'] },
      {
        title: 'AI 应用开发',
        items: [
          'RAG',
          'Agent / Workflow',
          'Function Calling',
          'Reranker',
          'MinerU',
        ],
      },
      { title: '系统与工程化', items: ['Git', 'Linux', 'Docker', 'Prometheus'] },
      { title: '网络基础', items: ['TCP/IP', 'HTTP', 'HTTPS', 'DNS'] },
    ],
  },
  work: {
    label: '项目',
    title: '项目展示',
    internshipTitle: '实习经历',
    projectTitle: '项目经历',
    intro: '两个项目分别对应后端与 AI 应用方向：一个高并发票务下单系统，一个工程文档审查智能体。',
    selectLabel: '选择项目',
    whyLabel: '为什么做',
    stackWhyLabel: '技术选型',
    stackLabel: '技术栈',
    outcomeLabel: '关键结果',
    more: '展开细节',
    less: '收起细节',
    repo: '查看 GitHub 仓库',
    items: [
      {
        id: 'gofun',
        type: 'project',
        title: 'GoFun 活动票务与抢票系统',
        summary:
          '面向活动票务与限时抢票场景，支持库存票与选座票两种模式，覆盖主办方经营分析、活动审批和系统运行监控。',
        background:
          '个人项目，独立设计并实现。目标是完整落地一条高并发下单链路：大量请求在短时间内争抢同一票档库存，并在同一条链路上同时满足吞吐、不超卖与不丢单三项约束。',
        stackWhy:
          '服务端采用 Go，并发模型简单、部署依赖少，适合 IO 密集的下单服务；Web 层使用 Gin，中间件即可覆盖鉴权、限流与日志需求。库存预扣通过 Redis + Lua 实现原子扣减，在入口层拦截大部分并发；订单与 Outbox 消息在同一 MySQL 事务中落库，保证写入一致；下单峰值由 RabbitMQ 异步削峰，消费端完成最终扣减确认。监控接入 Prometheus，采集接口延迟、事务耗时、连接池占用与 MQ 积压，作为压测调优的依据。',
        stack: ['Go', 'Gin', 'GORM', 'MySQL', 'Redis', 'RabbitMQ', 'Prometheus'],
        outcomes: [
          { value: '366+ tx/s', note: '订单消费速率（原 260+）' },
          { value: '2.1k QPS', note: '混合流量吞吐（原 1.3k）' },
        ],
        href: 'https://github.com/cheauncey33/gofun',
        details: [
          {
            title: '购票链路与库存控制',
            body: '库存型售票采用 Redis Lua 原子预扣 → 订单与 Outbox 同事务落库 → RabbitMQ 异步投递 → 消费端最终确认数据库存；选座采用“一座一行”的座位级库存模型，通过数据库事务与条件更新实现多座位原子扣减。',
          },
          {
            title: '一致性与异常恢复',
            body: 'Outbox 负责订单与消息的一致性，消费端用幂等、唯一约束与状态更新处理重复投递，以及支付回调与超时关单的并发竞态；Redis 记录库存预扣，后台任务分批恢复超时记录，并周期性以 MySQL 为基准校准 Redis 库存。',
          },
          {
            title: '压测与性能优化',
            body: '使用 Prometheus 监控接口延迟、事务耗时、连接池与 MQ 积压，配合分层压测定位热点库存和连接竞争，将单票档库存拆分为多分桶，调整消费端并发、拆分 HTTP / Worker 数据库连接池，并为活动目录增加短 TTL 缓存。',
          },
        ],
      },
      {
        id: '光缆工艺报告审查智能体',
        type: 'internship',
        title: '光缆工艺报告审查智能体',
        summary: '基于 RAG 与大模型的工程文档审查智能体，实现光缆工艺报告的自动化审查。',
        background:
          '实习项目。人工审查一份光缆工艺报告，需逐条比对国标、行标与企业内部标准，耗时长且容易漏项。项目将“条款检索”与“逐项判定”两个环节自动化，人工仅承担最终复核。',
        stackWhy:
          '文档解析与向量检索依赖 Python 生态，服务通过 FastAPI 提供接口；条款的结构化字段与向量统一存入 PostgreSQL + pgvector，检索与条件过滤在一次查询中完成，无需额外维护独立的向量库；Redis 用于缓存中间结果与会话状态。针对 Dense 检索中正确条款排名靠后的问题，在召回后增加一层 Reranker 精排；针对复杂条款单轮判定不稳定的问题，将固定工作流改为可自主补充检索、定位表格的审查 Agent。',
        stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'Workflow', 'RAG', 'Agent'],
        outcomes: [
          { value: '87%', note: 'TOP 10 召回率（600+ 测试案例）' },
          { value: '100%', note: '报告审查完成率（50 份真实报告）' },
        ],
        href: null,
        details: [
          {
            title: '知识库与检索链路',
            body: '使用 MinerU 对国标、行标及企业标准做结构化解析，完成章节、表格等内容的结构化切分与元数据保留；结合 Dense 检索、全文检索、候选融合与 Reranker 精排，在 600+ 测试案例上达到 87% 的 TOP 10 召回率。',
          },
          {
            title: '固定工作流到 Agentic 审查',
            body: '针对复杂标准场景下单轮判定不稳定的问题，引入审查 Agent，实现自主读取原文、补充检索与表格定位，在表格取值、单位换算、适用条件等场景的审查准确性提升约 15%。',
          },
          {
            title: 'Agent 工具优化与可靠性',
            body: '设计 row_filter 工具按参数精确匹配目标表格行，平均减少 search / read 工具调用 2.25 次/用例（32.1%）；针对候选 Chunk 过长的问题改为按关键词位置截取局部上下文，首轮候选上下文平均压缩 63%。通过 Checkpoint 持久化、用例级状态记录与失败重试实现断点恢复，异常后仅继续执行未完成项。',
          },
          {
            title: '连续运行验证',
            body: '设计并完成 50 份真实检测报告、2500+ 审查项的连续运行验证：报告审查完成率 100%，单份报告平均耗时约 12 分钟。',
          },
        ],
      },
    ],
  },
  footer: {
    source: '站点源码',
    backToTop: '回到顶部',
  },
}

const en = {
  meta: {
    title: 'Yuhao Zhang · Backend / AI Application · 2027 Graduate',
    description:
      'Yuhao Zhang, MSc candidate in Computer Technology at Wuhan University (2027 cohort), seeking backend and AI application roles. Projects: GoFun high-concurrency ticketing system (366+ tx/s) and an optical cable report review agent (87% recall@10 over 600+ test cases).',
    keywords: 'Yuhao Zhang,backend engineer,Go,AI engineering,RAG,Agent,Wuhan University,portfolio',
  },
  nav: {
    intro: 'Overview',
    internship: 'Internship',
    work: 'Work',
    menu: 'Menu',
    close: 'Close',
    langSwitch: '中文',
  },
  head: {
    nameEnLabel: 'Yuhao Zhang',
    education: [
      { date: '2021.09 — 2025.07', school: 'Anhui University', degree: 'BSc', major: 'Computer Science & Technology' },
      { date: '2025.09 — 2027.07', school: 'Wuhan University', degree: 'MSc', major: 'Computer Technology' },
    ],
    ageLabel: 'Age',
    ageValue: '23',
    targetLabel: 'Target role',
    targetValue: 'Backend / AI Application',
    targetNote: '2027 cohort MSc candidate · full-time position',
    linksLabel: 'Portfolio & links',
    portfolioLabel: 'Projects',
    githubLabel: 'GitHub',
    resumeLabel: 'Resume PDF',
    resumeBtn: 'Resume',
    emailActionLabel: 'Copy email address',
    phoneActionLabel: 'Copy phone number',
    githubActionLabel: 'Open GitHub profile',
    copied: 'Copied',
    campusLabel: 'Campus',
    campus: [
      'Vice president, English Club, Anhui University',
      'Campus singing contest at Anhui University',
    ],
    interestLabel: 'Interests',
        interests: ['Music', 'Table tennis', 'Games', 'US TV series'],
    internshipLabel: 'Internship',
    internship: {
      date: '2026.05 — 2026.08',
      company: 'YOFC',
      role: 'AI Application Development Intern',
    },
    projectsLabel: 'Projects',
    projects: ['GoFun Ticketing & Flash-Sale System', 'SimpCode · Internal small-model coding assistant'],
  },
  hero: {
    ariaLabel: 'Overview',
    role: 'Backend / AI application · 2027 campus recruitment',
    focusTitle: 'What I study and build',
    focus: [
      {
        label: 'Backend',
        title: 'Go services under load',
        points: ['Stock consistency and async order pipelines under concurrency', 'Layered load testing to locate bottlenecks and quantify gains', 'Outbox, idempotency and retries for consistency'],
      },
      {
        label: 'AI applications',
        title: 'RAG and agents in production',
        points: ['RAG knowledge-base construction and hybrid retrieval tuning', 'Automated orchestration for document-review workflows', 'Resumable, observable long-running jobs'],
      },
    ],
  },
  skills: {
    title: 'Tech stack',
    proficientLabel: 'Proficient',
    familiarLabel: 'Familiar',
    groups: [
      { title: 'Languages', items: ['Go', 'Python'], familiar: ['Java', 'C / C++'] },
      { title: 'Development frameworks', items: ['Gin', 'GORM', 'FastAPI', 'LangChain'] },
      { title: 'Databases & middleware', items: ['Redis', 'MySQL', 'RabbitMQ'], familiar: ['PostgreSQL', 'pgvector'] },
      {
        title: 'AI application development',
        items: [
          'RAG',
          'Agent / Workflow',
          'Function Calling',
          'Reranker',
          'MinerU',
        ],
      },
      { title: 'Systems & engineering', items: ['Git', 'Linux', 'Docker', 'Prometheus'] },
      { title: 'Networking', items: ['TCP/IP', 'HTTP', 'HTTPS', 'DNS'] },
    ],
  },
  work: {
    label: 'Work',
    title: 'Selected projects',
    internshipTitle: 'Internship experience',
    projectTitle: 'Project experience',
    intro:
      'Two projects, one on the backend side and one on the AI application side: a high-concurrency ticketing system and an engineering document review agent.',
    selectLabel: 'Choose a project',
    whyLabel: 'Why',
    stackWhyLabel: 'Stack rationale',
    stackLabel: 'Stack',
    outcomeLabel: 'Key results',
    more: 'Show details',
    less: 'Hide details',
    repo: 'View repository',
    items: [
      {
        id: 'gofun',
        type: 'project',
        title: 'GoFun Ticketing & Flash-Sale System',
        summary:
          'A ticketing system for events and flash sales supporting both stock-based and seat-selection modes, with organizer analytics, event approval and runtime monitoring.',
        background:
          'A solo project, designed and implemented independently. The goal was to build a complete high-concurrency ordering path: many requests competing for the same ticket-tier stock in a short window, with throughput, no-oversell and no-lost-order guarantees required on that single path.',
        stackWhy:
          'The service is written in Go: a straightforward concurrency model and few deployment dependencies suit an IO-heavy ordering service, while Gin covers the web layer and its middleware handles auth, rate limiting and logging. Stock pre-deduction is an atomic Redis + Lua operation that absorbs most of the concurrency; orders and Outbox messages are written in a single MySQL transaction to keep the two consistent; RabbitMQ buffers the ordering peak and the consumer side confirms the final deduction. Prometheus collects endpoint latency, transaction time, connection pool usage and MQ backlog as the basis for load-test tuning.',
        stack: ['Go', 'Gin', 'GORM', 'MySQL', 'Redis', 'RabbitMQ', 'Prometheus'],
        outcomes: [
          { value: '366+ tx/s', note: 'order throughput (was 260+)' },
          { value: '2.1k QPS', note: 'mixed-load throughput (was 1.3k)' },
        ],
        href: 'https://github.com/cheauncey33/gofun',
        details: [
          {
            title: 'Purchase path & stock control',
            body: 'Stock tickets go through atomic Redis Lua pre-deduction → order + Outbox written in one transaction → async RabbitMQ delivery → consumer-side confirmation in the database. Seat selection uses a one-row-per-seat inventory model, where a transaction with conditional updates makes multi-seat deduction atomic.',
          },
          {
            title: 'Consistency & failure recovery',
            body: 'The Outbox keeps orders and messages consistent; consumers handle redelivery with idempotency, unique constraints and state updates, plus the race between payment callbacks and timeout closure. Redis tracks pre-deductions, a background job recovers expired records in batches, and Redis stock is periodically reconciled against MySQL.',
          },
          {
            title: 'Load testing & optimization',
            body: 'Prometheus monitored endpoint latency, transaction time, connection pools and MQ backlog. Layered load tests located hot stock rows and connection contention; I split single-tier stock into multiple buckets, tuned consumer concurrency, split HTTP and worker database pools, and added a short-TTL cache for the event catalog.',
          },
        ],
      },
      {
        id: 'optical-cable-review-agent',
        type: 'internship',
        title: 'Optical Cable Process Report Review Agent',
        summary:
          'A RAG + LLM agent that automates the compliance review of optical cable process reports against industry standards.',
        background:
          'An internship project. Reviewing one optical cable process report by hand means checking it clause by clause against national, industry and internal standards, which is slow and easy to miss items. The project automates the two most mechanical steps — retrieving the relevant clause and judging each item — leaving the final sign-off to a human reviewer.',
        stackWhy:
          'Document parsing and vector retrieval rely on the Python ecosystem, with FastAPI exposing the service. Structured clause fields and embeddings live together in PostgreSQL + pgvector, so retrieval and filtering happen in a single query with no separate vector store to maintain; Redis caches intermediate results and session state. Because correct clauses rank low in dense retrieval results, a reranker was added after recall; because single-pass judgments were unstable on complex clauses, the fixed workflow became an agent able to retrieve again and locate tables on its own.',
        stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'Workflow', 'RAG', 'Agent'],
        outcomes: [
          { value: '87%', note: 'recall@10 across 600+ test cases' },
          { value: '100%', note: 'report completion rate (50 real reports)' },
        ],
        href: null,
        details: [
          {
            title: 'Knowledge base & retrieval',
            body: 'MinerU parsed national, industry and enterprise standards into structured chapters and tables with preserved metadata. Dense retrieval, full-text search, candidate fusion and a reranker together reached 87% recall@10 on 600+ test cases.',
          },
          {
            title: 'From fixed workflow to agentic review',
            body: 'Single-pass LLM judgments were unstable on complex clauses, so I introduced a review agent that reads source text autonomously, runs follow-up retrieval and locates tables precisely — about 15% better accuracy on table lookups, unit conversions and applicability conditions.',
          },
          {
            title: 'Tool design & reliability',
            body: 'A row_filter tool matches target table rows by parameters, cutting search / read calls by 2.25 per case on average (32.1%). Long candidates are truncated around keyword positions instead of being read whole, compressing first-round context by 63%. Checkpoint persistence, per-case state recording and retry logic let a run resume and process only unfinished items.',
          },
          {
            title: 'Continuous run validation',
            body: 'Designed and ran a continuous validation over 50 real inspection reports and 2500+ review items: 100% report completion, averaging about 12 minutes per report.',
          },
        ],
      },
    ],
  },
  footer: {
    source: 'Source code',
    backToTop: 'Back to top',
  },
}

export const locales = { zh, en }
export const localeKeys = ['zh', 'en']
