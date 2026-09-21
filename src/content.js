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
    timeline: '经历',
    work: '项目',
    skills: '技能',
    menu: '菜单',
    close: '收起',
    langSwitch: 'English',
  },
  head: {
    eyebrow: '求职简历 · 2027 届秋招',
    nameEnLabel: 'Yuhao Zhang',
    eduLabel: '硕士',
    eduValue: '武汉大学 · 计算机技术',
    eduNote: '2025.09 — 2027.07',
    bachelorLabel: '本科',
    bachelorValue: '安徽大学 · 计算机科学与技术',
    bachelorNote: '2021.09 — 2025.07',
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
      '安徽大学英语社副社长 · 组织口语角、单词打卡',
      '安徽大学校园歌手大赛 · 同学叫我“毛不易本易”',
    ],
    interestLabel: '兴趣爱好',
    interests: ['音乐 · 孙燕姿', '乒乓球 · 樊振东', '游戏 · 三角洲 / LOL / 阴阳师'],
    interestNote: '英文名 Cheauncey 出自《老友记》',
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
        points: ['技术标准的解析、切分与检索链路搭建', 'Agent 工具设计：Function Calling / MCP', '长任务的断点恢复与上下文成本控制'],
      },
    ],
    stats: [
      { value: '366+', unit: 'tx/s', label: '订单消费速率', note: '优化前 260+', source: 'GoFun 票务系统', group: 'backend' },
      { value: '2.1k', unit: 'QPS', label: '混合流量吞吐', note: '优化前 1.3k', source: 'GoFun 票务系统', group: 'backend' },
      { value: '87%', unit: 'TOP 10', label: '标准条款召回率', note: '600+ 测试案例', source: '报告审查智能体', group: 'ai' },
      { value: '100%', unit: '', label: '报告审查完成率', note: '50 份报告 · 2500+ 审查项', source: '报告审查智能体', group: 'ai' },
    ],
  },
  skills: {
    label: '技能',
    title: '技术栈',
    intro: '按实际使用场景分组。带星级的是工具与框架，星级为自评熟悉程度；方法与协议类不评星。',
    groups: [
      {
        title: '编程语言',
        kind: 'stack',
        items: [
          { name: 'Go', level: 5 },
          { name: 'Python', level: 4 },
          { name: 'Java', level: 3 },
          { name: 'C / C++', level: 3 },
        ],
      },
      {
        title: '后端框架',
        kind: 'stack',
        items: [
          { name: 'Gin', level: 4 },
          { name: 'FastAPI', level: 4 },
          { name: 'GORM', level: 4 },
        ],
      },
      {
        title: '数据库与中间件',
        kind: 'stack',
        items: [
          { name: 'Redis', level: 5 },
          { name: 'MySQL', level: 4 },
          { name: 'PostgreSQL', level: 4 },
          { name: 'pgvector', level: 3 },
          { name: 'RabbitMQ', level: 4 },
        ],
      },
      {
        title: 'AI 应用 · 方法与工具',
        kind: 'concept',
        desc: '多为方法与协议，不按框架熟练度评星；具体用法见项目板块。',
        items: [
          { name: 'RAG / 检索增强' },
          { name: 'Agent / Workflow' },
          { name: 'Function Calling' },
          { name: 'MCP' },
          { name: 'Reranker 精排' },
          { name: 'Prompt Engineering' },
          { name: '文档解析（MinerU）' },
        ],
      },
      {
        title: '工程化与基础',
        kind: 'stack',
        items: [
          { name: 'Git', level: 4 },
          { name: 'Linux', level: 4 },
          { name: 'Docker', level: 3 },
          { name: 'Prometheus', level: 3 },
        ],
      },
    ],
  },
  work: {
    label: '项目',
    title: '项目展示',
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
        type: '个人项目 · 独立开发',
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
        type: '实习项目',
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
  timeline: {
    label: '经历',
    title: '教育、实习与科研',
    intro: '按时间倒序排列。',
    work: {
      company: '长飞光纤光缆股份有限公司',
      role: 'AI 应用开发实习生',
      date: '2026.05 — 2026.08',
      body: '参与企业内部系统与智能化工具开发，负责 AI 应用链路、数据处理与系统集成。主要工作为标准知识库与 RAG 检索链路构建、审查 Agent 的设计实现与工具优化、长任务可靠性改造。',
    },
    education: [
      { date: '2025.09 — 2027.07', school: '武汉大学', major: '计算机技术 · 硕士' },
      { date: '2021.09 — 2025.07', school: '安徽大学', major: '计算机科学与技术 · 本科', note: 'CET-4 608 · CET-6 514' },
    ],
    awardsTitle: '荣誉',
    awards: ['2021 年安徽大学学业一等奖学金', '2022 年安徽大学年度国元证券奖学金'],
    researchTitle: '科研',
    research: {
      title: 'SAFE 语义感知 RGB-Event 融合框架',
      body: '省级大学生创新创业训练计划项目。基于 CLIP 联合建模视觉与语义特征，用多模态 Transformer 完成跨模态特征交互；在 PokerEvent 数据集上取得 57.64% Top-1 Accuracy，成果发表于《Pattern Recognition》（CCF-B）。',
    },
  },
  footer: {
    rights: '基于 React + Vite 构建',
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
    timeline: 'Timeline',
    work: 'Work',
    skills: 'Skills',
    menu: 'Menu',
    close: 'Close',
    langSwitch: '中文',
  },
  head: {
    eyebrow: 'Resume · 2027 cohort, autumn recruitment',
    nameEnLabel: 'Yuhao Zhang',
    eduLabel: 'Master',
    eduValue: 'Wuhan University · Computer Technology',
    eduNote: '2025.09 — 2027.07',
    bachelorLabel: 'Bachelor',
    bachelorValue: 'Anhui University · Computer Science & Technology',
    bachelorNote: '2021.09 — 2025.07',
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
      'Vice president, English Club, Anhui University · ran speaking corner and vocabulary check-ins',
      'Campus singing contest at Anhui University · classmates nicknamed me "Mao Buyi"',
    ],
    interestLabel: 'Interests',
    interests: ['Music · Stefanie Sun', 'Table tennis · Fan Zhendong', 'Games · Delta Force / LOL / Onmyoji'],
    interestNote: 'My English name Cheauncey comes from Friends.',
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
        points: ['Parsing, chunking and retrieval over technical standards', 'Agent tool design: Function Calling / MCP', 'Resumable long runs and context cost control'],
      },
    ],
    stats: [
      { value: '366+', unit: 'tx/s', label: 'Order throughput', note: 'was 260+', source: 'GoFun ticketing', group: 'backend' },
      { value: '2.1k', unit: 'QPS', label: 'Mixed-load throughput', note: 'was 1.3k', source: 'GoFun ticketing', group: 'backend' },
      { value: '87%', unit: 'TOP 10', label: 'Clause recall', note: '600+ test cases', source: 'Report review agent', group: 'ai' },
      { value: '100%', unit: '', label: 'Report completion', note: '50 reports · 2500+ items', source: 'Report review agent', group: 'ai' },
    ],
  },
  skills: {
    label: 'Skills',
    title: 'Tech stack',
    intro: 'Grouped by where I actually used them. Tools and frameworks carry a self-assessed rating; methods and protocols are not rated.',
    groups: [
      {
        title: 'Languages',
        kind: 'stack',
        items: [
          { name: 'Go', level: 5 },
          { name: 'Python', level: 4 },
          { name: 'Java', level: 3 },
          { name: 'C / C++', level: 3 },
        ],
      },
      {
        title: 'Backend frameworks',
        kind: 'stack',
        items: [
          { name: 'Gin', level: 4 },
          { name: 'FastAPI', level: 4 },
          { name: 'GORM', level: 4 },
        ],
      },
      {
        title: 'Databases & middleware',
        kind: 'stack',
        items: [
          { name: 'Redis', level: 5 },
          { name: 'MySQL', level: 4 },
          { name: 'PostgreSQL', level: 4 },
          { name: 'pgvector', level: 3 },
          { name: 'RabbitMQ', level: 4 },
        ],
      },
      {
        title: 'AI applications · methods & tools',
        kind: 'concept',
        desc: 'Mostly methods and protocols, so no rating — the project section shows how each was used.',
        items: [
          { name: 'RAG / retrieval' },
          { name: 'Agent / Workflow' },
          { name: 'Function Calling' },
          { name: 'MCP' },
          { name: 'Reranker' },
          { name: 'Prompt Engineering' },
          { name: 'Doc parsing (MinerU)' },
        ],
      },
      {
        title: 'Infra & basics',
        kind: 'stack',
        items: [
          { name: 'Git', level: 4 },
          { name: 'Linux', level: 4 },
          { name: 'Docker', level: 3 },
          { name: 'Prometheus', level: 3 },
        ],
      },
    ],
  },
  work: {
    label: 'Work',
    title: 'Selected projects',
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
        type: 'Personal project · solo',
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
        type: 'Internship project',
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
  timeline: {
    label: 'Timeline',
    title: 'Education, internship & research',
    intro: 'Listed in reverse chronological order.',
    work: {
      company: 'YOFC (Yangtze Optical Fibre and Cable)',
      role: 'AI Application Development Intern',
      date: '2026.05 — 2026.08',
      body: 'Worked on internal systems and intelligent tooling: AI pipelines, data processing and system integration. Main contributions were the standards knowledge base and RAG retrieval pipeline, the review agent and its tooling, and reliability work for long-running tasks.',
    },
    education: [
      { date: '2025.09 — 2027.07', school: 'Wuhan University', major: 'Computer Technology · MSc' },
      { date: '2021.09 — 2025.07', school: 'Anhui University', major: 'Computer Science & Technology · BSc', note: 'CET-4 608 · CET-6 514' },
    ],
    awardsTitle: 'Awards',
    awards: ['Anhui University First-class Academic Scholarship, 2021', 'Anhui University Guoyuan Securities Scholarship, 2022'],
    researchTitle: 'Research',
    research: {
      title: 'SAFE: semantics-aware RGB-Event fusion framework',
      body: 'A provincial student innovation programme project. Visual and semantic features are modelled jointly with CLIP and fused through a multimodal Transformer — 57.64% Top-1 accuracy on PokerEvent, published in Pattern Recognition (CCF-B).',
    },
  },
  footer: {
    rights: 'Built with React + Vite',
    source: 'Source code',
    backToTop: 'Back to top',
  },
}

export const locales = { zh, en }
export const localeKeys = ['zh', 'en']
