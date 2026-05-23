---
name: "Ryu"
subtitle: "Eternal Wanderer"
overview: "Ryu is the quintessential shoto in Street Fighter 6, featuring balanced fundamentals, a strong fireball game, and devastating anti-air options. His Denjin Charge system (QCB+P) powers up his special moves — giving Hadoken a wall-bounce, Shoryuken more damage and knockdown, and Hashogeki a launching follow-up. With solid pokes like 5MK and 2MP, excellent DP anti-airs, and versatile Drive Rush conversions, Ryu rewards players with strong fundamentals while remaining accessible for beginners."
keyMoves:
  - name: "Hadoken"
    input: "236P"
    description: "Ryu's signature fireball. LP version is 13f startup, -7 on block. HP version is 16f startup but deals 600 damage. OD version fires two hits and wall splats for combo follow-up. With Denjin Charge, Hadoken becomes a 2-hit projectile that wall bounces on hit (+62 KD), enabling full screen confirms into Drive Rush combo extensions."
    startup: 13
    active: 0
    recovery: 42
    damage: 500
  - name: "Shoryuken (LP)"
    input: "623P"
    description: "Ryu's invincible DP anti-air. LP version has 6f startup with invincibility frames 1-8, dealing 800 damage. HP version has 9f startup but deals 1200 damage. OD version is fully invincible frames 1-12 and launches for juggle follow-up. With Denjin Charge, HP Shoryuken gains a follow-up hit for extra damage and better knockdown (+46 KD)."
    startup: 6
    active: 8
    recovery: 30
    damage: 800
  - name: "Hashogeki"
    input: "214P"
    description: "Ryu's palm strike special. LP version is 14f startup, -4 on block. HP version is 18f startup but +2 on hit at close range. OD version deals 900 damage and wall splats. With Denjin Charge, Hashogeki launches the opponent on hit, enabling juggle combo routes like Denjin Hashogeki → dash → 5HP → HP Shoryuken for massive damage."
    startup: 14
    active: 3
    recovery: 24
    damage: 700
  - name: "Tatsumaki Senpukyaku"
    input: "214K"
    description: "Ryu's spinning kick. LK version is 14f startup, moves forward and hits low to the ground — good for closing distance in neutral. MK version is 17f startup, rises higher and deals more damage. HK version is 20f startup, full airborne rotation dealing 1200 damage. OD version hits multiple times and is +4 on block, excellent for pressure. All versions are airborne after frame 4, evading lows and throws."
    startup: 14
    active: 6
    recovery: 22
    damage: 600
  - name: "5MK (Collarbone Breaker)"
    input: "6+MK"
    description: "Ryu's best mid-range poke. 8f startup, +2 on hit, -3 on block with excellent range. This is Ryu's primary neutral tool — use it to control spacing, confirm into Drive Rush on hit, and safely challenge opponent pokes. The forward movement gives it deceptive range. Cancel into Hadoken or DR for extended pressure."
    startup: 8
    active: 4
    recovery: 18
    damage: 500
  - name: "2MP"
    input: "2+MP"
    description: "Ryu's primary confirm button. 6f startup, +5 on hit, +1 on block. Essential for hit-confirming into combos (2MP → 2HP → special). Also serves as a frame trap tool (+5 on hit means you can tick into throw or pressure). The low hitbox makes it useful against crouching opponents."
    startup: 6
    active: 3
    recovery: 14
    damage: 400
  - name: "Denjin Charge"
    input: "214P (hold)"
    description: "Ryu's unique charge mechanic. Activated by holding any punch button during Hashogeki or performing QCB+P. Powers up the next Hadoken (wall bounce), Shoryuken (extra hit + knockdown), or Hashogeki (launcher). Denjin state lasts until a powered-up move is used. Manage your Denjin timing — charging in neutral leaves you vulnerable, so charge after knockdowns or fullscreen."
    startup: 0
    active: 0
    recovery: 0
    damage: 0
  - name: "Shin Shoryuken (Level 2 Super)"
    input: "236236P"
    description: "Fully invincible frames 1-14. 7f startup dealing 2800 damage. Excellent reversal and anti-air. On hit gives KD +40 for strong oki. Can be combo'd after Denjin Hashogeki launch or OD Hadoken wall splat. Use as a reversal when cornered or to punish predictable jump-ins."
    startup: 7
    active: 0
    recovery: 0
    damage: 2800
  - name: "Shinku Hadoken (Critical Art / Level 3)"
    input: "236236K"
    description: "Fully invincible frames 1-22. 10f startup dealing 4000 damage (4500 as Critical Art). The ultimate comeback tool. Use to punish big whiffs, escape the corner, or close out a round. KD +18 on hit. Can be combo'd after most launchers in the corner."
    startup: 10
    active: 0
    recovery: 0
    damage: 4000
tips:
  - "开局用 HP Hadoken 控制远中距离，观察对手反应。对手跳入用 LP Shoryuken (6f startup, 无敌 1-8f) 对空。如果没有 Denjin Charge，起身或 fullscreen 时用 QCB+P 充能，为下一轮进攻做准备。5MK (8f, -3 on block) 是你最好的中距离 poke，打中可以 DR 取消延伸连段。"
  - "核心连段路线：2LP → 2LP → 2MP → 2HP → HP Shoryuken 是最基础的确认路线，伤害约 1800。中屏 BnB：2HP (7f launcher) → HP Tatsumaki 或 HP Shoryuken。Denjin 路线：Denjin Hashogeki → dash → 5HP → HP Shoryuken 约 2500+ 伤害。Drive Rush：2MP~DR → 5HP → 2HP → HP Shoryuken 约 2200。"
  - "立回核心是 5MK 和 2MP。5MK (+2 on hit, -3 on block) 在中距离 poke 非常安全，打中后可以 DR 延伸或 cancel Hadoken。2MP (+5 on hit, +1 on block) 是近中距离确认按钮。5HK (sweep) 是远距离 poke 但 -12 on block 非常危险，只在确认命中时使用。2MK (6f) 是低攻击可以取消 Hadoken。"
  - "Denjin Charge 管理是 Ryu 高手和新手的最大区别。最佳充能时机：击倒对手后（+30 KD 以上）、全屏距离、对手起身时。充能后的 Denjin Hadoken wall bounce 可以从全屏 DR 连段，Denjin Hashogeki launch 后接大伤害连段。不要在对手可以进攻时充能。"
  - "Drive Rush 是 Ryu 延伸连段和接近的关键。2MK~DR 或 2MP~DR 从中距离确认进入连段。Raw DR 可以穿过波动接近。被防时 2MP~DR → 5MP 是帧陷阱 (+5 → 8f 按钮可以 frame trap)。Drive Impact 后 +35 优势用 5HP 启动连段。"
  - "防守核心：LP Shoryuken 是你最可靠的反转（无敌 1-8f, 6f startup）。OD Shoryuken 完全无敌但消耗 meter。当没有 meter 时用 Drive Reversal 逃跑。2LP (4f) 是最快 button 用于 mash 对手 gap。对空是 Ryu 的强项——永远不要让对手 free jump-in。"
  - "对付波动角色（Guile, Luke, Akuma）：用 HP Hadoken 对波，Denjin Hadoken wall bounce 打破僵局。Perfect Parry 吸波节省 Drive Gauge。对付投技角色（Zangief, Manon）：保持中距离用 5MK 和 Hadoken 压制，绝对不要站在 SPD 范围内。对付 rushdown（Cammy, Kimberly）：用 Shoryuken 打断她们的进攻节奏。"
matchups:
  - opponent: "luke"
    difficulty: "even"
    summary: "Luke's mid-range tools and versatile Flash Knuckle match Ryu's fundamentals — a battle of neutral discipline"
    strategies:
      - "对手威胁：Luke 的 HP Sand Blast (+3 on hit) 在波动战中略优于你的 HP Hadoken，他的 2MP (6f, +5 on hit) 确认能力和你的差不多但 Flash Knuckle 的接近方式更多样。特别注意他的 Perfect Flash Knuckle HP (+4 on block) 压力循环——这是他近身最强工具。Luke 的 LP Rising Uppercut (5f) 反空和你的 LP Shoryuken (6f) 差不多快。"
      - "优势距离在中远距离：用 HP Hadoken 控制节奏，Denjin Charge 后 Denjin Hadoken wall bounce 可以打破 Luke 的 Sand Blast 节奏。5MK 在中距离和 Luke 的 5MK 交换是公平的。当 Luke 用 Flash Knuckle 接近时，用 LP Shoryuken 打掉——LP Flash Knuckle 是 -18 on block 可以重罚。"
      - "DI 在 Luke 出 5HP 或 sweep 时使用。DR 用于确认 2MP 命中后延伸连段。当 Luke 没有 meter 时他没有完全无敌的反转（除了 OD Rising Uppercut），这时可以大胆起身压制。CA 保留到关键时刻，Luke 的血量 10000 和你一样，需要耐心交换。"
    keyMoves: ["5MK", "HP Hadoken", "LP Shoryuken"]
  - opponent: "chun-li"
    difficulty: "disadvantageous"
    summary: "Chun-Li's superior poke range and Serenity Stream stance make approaching difficult — patience is mandatory"
    strategies:
      - "对手威胁：Chun-Li 的 5MP、2MP、5HP 判定距离极长，在中远距离完全压制你。她的 Serenity Stream 姿态可以避开你的 5LP、5MP 和 Hadoken，还能取消进入各种攻击。Kikoken 恢复比 Hadoken 快。她的 2HP 是优秀的 launcher 且比你的更安全。注意她的 Hazanshu (overhead) 是中距离 mix-up 工具。"
      - "接近方式非常困难——不要直接走过去。用 Perfect Parry 吸 Kikoken，DR 窿过她的长距离 poke。一旦进入 2MP 距离你的按钮质量和她的差不多。anti-air 她的 jump 用 LP Shoryuken。她的 Spinning Bird Kick 有一定 startup 可以用 2MP 在恢复帧打掉。角落里用 Denjin Hashogeki 压制她没有好的反转。"
      - "DI 在 Chun-Li 出 2HP 或 sweep 时使用——这些恢复帧长。DR 是你主要的接近手段，2MK~DR 从低攻击确认。Chun-Li 没有完全无敌的 DP（只有 OD Tensho Kicks），在角落可以大胆压制。CA 在她跳入或 Hazanshu whiff 时使用。"
    keyMoves: ["Drive Rush", "2MP", "LP Shoryuken"]
  - opponent: "jamie"
    difficulty: "advantageous"
    summary: "Ryu's strong neutral and anti-air tools keep Jamie's drink levels in check — pressure early before he powers up"
    strategies:
      - "对手威胁：Jamie 的威胁随喝酒等级增长。Level 0-1 时他是 SF6 最弱角色之一，趁这个窗口疯狂进攻。Level 4 时他的 frame trap 和 damage 大幅提升，需要更谨慎。他的 Bakki (step kick) 是快速接近工具但 -4 on block 可以用 2MP 惩罚。注意他的 command grab 在高酒等级范围增大。"
      - "优势距离在中远距离：用 HP Hadoken 逼他动，Jamie 没有好的全屏工具。5MK 和 2MP 在中距离比 Jamie 的普通技好。Jamie 想接近喝酒——不给他空间，每次他退后喝一口就用 DR 或 Hadoken 追击。anti-air 他的 jump-in 用 LP Shoryuken。当 Jamie 没有酒时大胆起身压制。"
      - "DI 在 Jamie 出 heavy attack 或 attempting drink 动作时使用。DR 用于快速接近不给他喝酒空间。Jamie 的 OD The Devil Inside (DP) 是他唯一反转但不是完全无敌。CA 在他 jump-in 或 whiff Bakkistartup 时使用。开局就压，不给 free drink。"
    keyMoves: ["HP Hadoken", "5MK", "LP Shoryuken"]
  - opponent: "guile"
    difficulty: "even"
    summary: "Classic fireball war — Denjin Charge and patience determine who controls the pace"
    strategies:
      - "对手威胁：Guile 的 Sonic Boom charge 比 Hadoken 快，Sonic Blade + Sonic Boom 组合让你波动对射很吃亏。他的 Flash Kick 是 SF6 最可靠的 anti-air 之一——不要跳。Guile 的 5HP 是 14f 但判定极远，2MK 是低 poke 很烦。注意他的 crouch charge 保持——随时可以出 Flash Kick 或 Sonic Boom。"
      - "波动对射策略：HP Hadoken 和 Sonic Boom 对波速度相近但 Guile 恢复更快。关键是用 Denjin Charge 打破僵局——Denjin Hadoken wall bounce 可以从全屏 DR 连段。Perfect Parry 吸 Sonic Boom 节省 Drive Gauge。Guile 没有 charge 时（比如刚出完 Flash Kick）是进攻窗口——用 DR 突进。"
      - "DI 在 Guile 出 Sonic Blade 或 heavy Sonic Boom 时使用。DR 在读准他的波动 timing 后突进。一旦进入中近距离用 2MP 和 5MP 压制——Guile 的近身 button 不如你的。Flash Kick LP 是 -25 on block 用重连段惩罚。CA 在他 whiff Flash Kick 或出 risky poke 时使用。"
    keyMoves: ["Denjin Charge", "HP Hadoken", "Drive Rush"]
  - opponent: "kimberly"
    difficulty: "even"
    summary: "Kimberly's mix-ups require calm anti-airs and disciplined defense — her weak reversal is your ticket to pressure"
    strategies:
      - "对手威胁：Kimberly 的核心是 run stop 混合（overhead/low/throw 三选一）和 teleport 接近。她的 teleport 有明显 startup 动画——用 2LP 或 2MP 打断。她的 5MK 是 7f 很快但 range 短。幻影 dive kick 角度变化大需要仔细 anti-air。她的 2HP 是 launcher 但 -14 on block 可以重罚。"
      - "中距离用 5MK 和 Hadoken 控制节奏。Kimberly 想用 speed 控制比赛节奏，你需要用 Hadoken 让她慢下来。anti-air 她的 run jump 和 dive kick 用 LP Shoryuken。当 Kimberly teleport 时根据距离反应——近身 2LP 打断，远距离等她出现后 punish。"
      - "关键信息：Kimberly 没有完全无敌的 DP（只有 OD Bushin Senpukyaku 作为反转），这意味着你可以大胆起身压制。DI 在她出 heavy run stop 或幻影 dive kick 时使用。DR 用于追击她 teleport 后的距离。CA 在她空中进攻时使用——她在空中无法变招。"
    keyMoves: ["LP Shoryuken", "5MK", "2MP"]
  - opponent: "juri"
    difficulty: "even"
    summary: "Both characters want mid-range control — managing Fuha stocks determines the flow"
    strategies:
      - "对手威胁：Juri 的核心是 Fuha stock 系统。有 stock 时她的 214HP (stock 消耗 hashogeki) 变成强大的中距离工具，623HP (stock DP) 伤害增加。她充 stock 时（214K 动作）是最脆弱的——这是你进攻的最佳窗口。Juri 的 5MP (5f) 和 2MP (6f) 速度和你的差不多但她的 2MK 低攻击 range 更长。"
      - "中距离是关键战场：用 5MK 和 HP Hadoken 和她交换。Juri 的 Ryodansatsu (sweep) 是 -9 on block 可以用 DR 或 2MP 惩罚。她的 5HP 是 -7 on block 用 2LP 确认惩罚。当 Juri 没有 Fuha stock 时她的伤害输出大幅下降，这时可以更激进地进攻。"
      - "DI 在 Juri 充 Fuha stock 时使用可以打断。DR 在她波动后突进。Juri 的 OD DP 是她最好的反转，有 meter 时不要 predictable 地进攻。CA 保留到中后期回合——Juri 的伤害输出很高你可能需要 CA 来追赶。"
    keyMoves: ["5MK", "2MP", "HP Hadoken"]
  - opponent: "ken"
    difficulty: "even"
    summary: "Shoto vs shoto mirror — subtle frame data differences and Jinrai Kick response decide the match"
    strategies:
      - "对手威胁：Ken 的核心威胁是 Jinrai Kick (236K) 的混合——high/low/throw 三选一。Jinrai 的 delay 版本可以 frame trap 打你 mash。他的 HP Shoryuken 完全无敌是强力反转。Ken 的 5MK 是很好的中距离 poke (+1 on hit)。他的 6HP target combo 入口是 -7 on block。注意他的 Dragonlash Kick 接近工具。"
      - "波动对射：HP Hadoken 和 Ken 的 Hadoken 完全相同，这是纯粹的节奏对决。用 5MK 在中距离比 Ken 的 5HK (sweep, -12 on block) 更安全。Ken 的 sweep 是 -9 on block 可以用 DR 惩罚。你的 Denjin Charge 给你额外的威胁维度——Denjin Hadoken wall bounce 打破波动僵局。"
      - "应对 Jinrai：不要乱按按钮，看清 Jinrai 的 delay 版本后再反应。LP Shoryuken 可以打掉 Ken 的 jump-in 和 risky 接近。DI 在 Ken 出 heavy Hadoken 或 sweep 时使用。DR 用于确认 2MP 后延伸连段。Ken 的 CA 是 10f startup 全程无敌，不要在他有 CA 时 whiff 大招。"
    keyMoves: ["5MK", "HP Hadoken", "LP Shoryuken"]
  - opponent: "blanka"
    difficulty: "advantageous"
    summary: "Blanka's gimmicks lose to Ryu's solid anti-air and consistent punish game"
    strategies:
      - "对手威胁：Blanka 的核心是 Blanka Ball (horizontal/vertical) 和 Electricity。LP Blanka Ball 是 -4 on block 可以用 2MP 惩罚。HP Blanka Ball 是 -10 on block 用重连段惩罚。Electricity 是 +4 on block 不要在范围内按按钮。Blanka 的 vertical ball (ground) 是 -26 on block 可以重罚。他的 5HK rolling attack 有长距离但 -6 on block。"
      - "用 HP Hadoken 和 5MK 在中远距离控制。Blanka 想用混乱移动和 Blanka Ball 接近——用 LP Shoryuken 打掉 horizontal ball，2MP 惩罚被防的 ball。Blanka 的 2LP 是 4f 可以 mash 你的 gap 但你的 2LP 也是 4f。在远距离用 Hadoken 逼他接近——Blanka 没有好的全屏工具。"
      - "DI 在 Blanka 出 Blanka Ball 或 vertical ball 时使用，armor 不能挡 DI。DR 用于在 Blanka Ball 被防后追击。anti-air 他的 jumping attacks 用 LP Shoryuken。Blanka 的 CA 有 invincible startup 不要 predictable 进攻。保持冷静不要被他混乱的移动吓到。"
    keyMoves: ["HP Hadoken", "LP Shoryuken", "5MK"]
  - opponent: "dhalsim"
    difficulty: "advantageous"
    summary: "Patient approach with Denjin Charge breaks through Dhalsim's zoning — once in, never let him escape"
    strategies:
      - "对手威胁：Dhalsim 在远距离用 Yoga Fire 和长 limb (5HP, 5MK, 2MK) 控制你。他的 Yoga Blast 和 5LP anti-air 非常可靠——不要盲目跳。他的 5HP limb 是 -4 到 -6 on block 取决于距离。Dhalsim 的 Yoga Teleport 可以逃跑但 26f startup 可以反应。他的 2HP 有 deceptive range。"
      - "接近策略：Perfect Parry 吸 Yoga Fire 节省 Drive Gauge，然后 DR 突进。HP Hadoken 可以和 Yoga Fire 对波但 Dhalsim 恢复更快。用 Denjin Charge 充能——Dhalsim 远距离 poke 的间隙给你充能空间。一旦进入中近距离，Dhalsim 没有好的反转选项（只有 OD Yoga Blast 和 CA），用 5MK 和 2MP 循环压制。"
      - "DI 在 Dhalsim出 Yoga Fire 或长 limb 时使用。DR 是你主要的接近手段——2MK~DR 从低攻击确认或 raw DR 穿波动。anti-air 他的 drill kick 用 LP Shoryuken。CA 在他 teleport 后或出 risky limb 时使用。不要让他 free 控制全屏距离。"
    keyMoves: ["Perfect Parry", "Drive Rush", "Denjin Charge"]
  - opponent: "e-honda"
    difficulty: "even"
    summary: "Honda's charge dependency means constant pressure denies his tools — keep him blocking"
    strategies:
      - "对手威胁：Honda 的核心是 Headbutt (buttslam) 和 Hundred Hand Slap (HHS)。HP Headbutt 是 -5 on block 可以用 2MP 或 DR 惩罚。HHS 是 -10 on block 用重连段惩罚。他的 Sumo Smash 有 armor 但可以用 DI 打断。Honda 的 5HP 是 16f startup 很慢用 2MP 在恢复帧打他。"
      - "持续进攻不给他 charge 时间是关键。HP Hadoken 逼他动——Honda 没有 charge 时几乎没有 threat。一旦接近用 5MK 和 2MP 循环压制。anti-air 他的 jump-in 用 LP Shoryuken。Honda 的 forward dash 是 16f 可以反应。他的 2LP 是 4f 可以 mash 但你的 2LP 也是 4f。"
      - "DI 在 Honda 出 HHS 或 charge heavy attack 时使用。DR 用于快速接近不给他 charge 空间。Honda 没有完全无敌的 DP（只有 OD Sumo Smash 作为反转），可以大胆起身压制。CA 在 Honda 出 headbutt landing recovery 时使用。"
    keyMoves: ["HP Hadoken", "5MK", "2MP"]
  - opponent: "dee-jay"
    difficulty: "even"
    summary: "Dee Jay's pressure loops can be disrupted with solid anti-air and punish — match his rhythm"
    strategies:
      - "对手威胁：Dee Jay 的核心是 MG Strike (air slash) 混合和 Jackknife Maximum (flash kick)。MG Strike 的 low/high 混合需要读取——不要乱按按钮，看清后再反应。Jackknife HP 是 -29 on block 重罚。Dee Jay 的 5MK 是很好的 poke 但 -3 on block。他的 Double Rolling Sobat 是 -4 on block 可以用 2MP 惩罚。"
      - "中距离用 5MK 和 HP Hadoken 和 Dee Jay 交换。你的 2MP (+5 on hit) 作为确认工具。Dee Jay 想保持压力循环——用 LP Shoryuken 打断他的 gap。他的 2HP 是 launcher 但 -14 on block 可以重罚。当 Dee Jay 没有 meter 时没有好的反转可以大胆进攻。"
      - "DI 在 Dee Jay 出 Jackknife 或 MG Strike heavy 版时使用。DR 用于打断他的压力循环或确认 2MP 后延伸。anti-air 他的 jump 用 LP Shoryuken。CA 在他 MG Strike 空中时使用可以打落地。"
    keyMoves: ["5MK", "LP Shoryuken", "2MP"]
  - opponent: "manon"
    difficulty: "disadvantageous"
    summary: "Manon's growing medal levels turn the match in her favor — rush early before command grab becomes lethal"
    strategies:
      - "对手威胁：Manon 的威胁随 Medal Level 增长（command grab damage 和 range 增加）。Level 0-1 时她的 command grab 范围很短可以大胆进攻。Level 3-4+ 时 command grab 变成巨大威胁。她的 5MP (8f) 和 2MP range 都不错。Manon 的 Renverse (command grab) 在 Level 5 时伤害极高。注意她的 hit confirm combo 会叠 medal。"
      - "开局立刻用 DR 和 5MK 接近不给她用 hit confirm 叠 medal 的空间。中远距离用 HP Hadoken 逼她动。Manon 没有 3f button（她的 2LP 是 4f）所以你可以在近距离用 2LP (4f) 和她公平竞争。保持在中距离用 5MK poke——太近会被 command grab，太远她可以 free poke。"
      - "DI 在 Manon 出 heavy attack 或 attempting medal combo 时使用。DR 用于快速接近和延伸连段。Manon 的 OD Chassé (reversal kick) 是她最好的反转但不是完全无敌。CA 在她 whiff command grab 或 risky approach 时使用。关键是早期建立优势。"
    keyMoves: ["Drive Rush", "5MK", "HP Hadoken"]
  - opponent: "marisa"
    difficulty: "advantageous"
    summary: "Marisa's slow armored attacks are easy to exploit with Ryu's fast buttons and Denjin tools"
    strategies:
      - "对手威胁：Marisa 的核心是 armored attacks (Gladius, Quadriga) 和巨大单发伤害。她的 5HP 是 14f startup 但 armored。她的 Gladius charge 版本有 super armor 但恢复帧长。Quadriga (approaching armor) 是主要的中距离威胁但 -15 on block 重罚。Marisa 的 2HP 是 -15 on block 可以重罚。"
      - "你的速度优势是关键。5MK (8f) 和 2MP (6f) 比 Marisa 的任何按钮都快。用快速 poke 在中距离骚扰，打中后 DR 取消延伸连段。Marisa 想让你在她 armor 范围内交换——不要硬碰硬，用快按钮打 armor gap。anti-air 她的 jump 用 LP Shoryuken。Denjin Hashogeki launch 后接大伤害连段对 Marisa 非常有效。"
      - "DI 在 Marisa 出 Gladius charge 或 Quadriga 时使用——armor 不能挡 DI。DR 用于确认 poke 命中后延伸。Marisa 的 SA2 是 armored reversal，有 meter 时不要 predictable。CA 在她 whiff Gladius 或 Quadriga 时使用。"
    keyMoves: ["5MK", "2MP", "LP Shoryuken"]
  - opponent: "jp"
    difficulty: "even"
    summary: "JP's zone control requires patient navigation — Denjin Charge helps break his fullscreen web"
    strategies:
      - "对手威胁：JP 的核心是 Torbalan (portal) 区域控制和 Eminence (远距离 anti-air)。不要站在全屏——逐步用 Hadoken 和 Perfect Parry 接近。JP 的 2HP 是很好的 poke 但 -13 on block 可以用 DR 惩罚。他的 5HP 是 -8 on block 用 2MP 惩罚。JP 的 5MP 是 7f startup 很快要小心。"
      - "接近策略：HP Hadoken 和 Perfect Parry 是你逐步接近的工具。Denjin Charge 后 Denjin Hadoken wall bounce 可以从全屏 DR 连段——这是打破 JP 全屏控制的关键。一旦进入中距离 JP 的普通技不如你的——用 5MK 和 2MP 控制地面。JP 的 Torbalan 有 startup 可以用 DR 打断。"
      - "DI 在 JP 出 Torbalan 或 heavy attack 时使用。DR 在读准他的 portal timing 后突进。JP 的 CA 是全程无敌的不要在他有 CA 时 whiff 大招。Shin Shoryuken (SA2) 可以作为反转在 JP 压制你时使用。"
    keyMoves: ["Denjin Charge", "Drive Rush", "5MK"]
  - opponent: "zangief"
    difficulty: "advantageous"
    summary: "Ryu's fireball and mid-range pokes keep Zangief out — never enter SPD range voluntarily"
    strategies:
      - "对手威胁：Zangief 的核心是 SPD (command grab) 和 armored attacks。HP SPD range 非常大——永远不要站在 SPD 范围内不动。如果你在近距离必须在按按钮或跳。Zangief 的 5LP 是 4f 很快不要小看他的近距离 button。他的 lariat 是 anti-air 但可以被低攻击 (2MK, 2LK) 打。他的 5HP 是 -6 on block 可以用 2MP 惩罚。"
      - "用 5MK、2MP、2MK 和 HP Hadoken 在中距离持续骚扰。这是 Ryu 最舒服的对局之一——你的波动和 poke 正好克制 Zangief 的接近方式。Zangief 的 forward dash 是 18f 可以反应，听到 dash 声音就跳或按 LP。anti-air 他的 jump 用 LP Shoryuken——他必须跳才能接近。"
      - "DI 在 Zangief 出 lariat 或 heavy normal 时使用——lariat 不能挡 DI。DR 用于确认 poke 命中后延伸连段。Zangief 的 SA1 和 SA3 都是 armored reversal 有 meter 时不要 predictable。CA 在 Zangief jump-in 或 whiff SPD 时使用。保持耐心不要贪刀。"
    keyMoves: ["HP Hadoken", "5MK", "LP Shoryuken"]
  - opponent: "lily"
    difficulty: "advantageous"
    summary: "Lily's Wind Stock dependency gives Ryu the neutral advantage — pressure before she stocks up"
    strategies:
      - "对手威胁：Lily 的核心是 Wind Stock 系统。她需要 charge (214P) 获取 stock，充能时是最脆弱的。有 stock 时她的 Tomahawk Buster (DP) 和 Condor Dive 变强。Lily 的 2LP 是 4f 可以在近距离 mash。她的 Condor Spire 是接近工具但 -6 on block 可以用 2MP 惩罚。5MP 是 9f startup 比你的慢。"
      - "中距离你的工具更优：5MK (8f) 和 2MP (6f) 的 frame data 比 Lily 的普通技好。用 HP Hadoken 控制远距离——Lily 没有好的全屏工具。当她充 Wind Stock 时用 DR 或 Hadoken 打断。anti-air 她的 Condor Dive 用 LP Shoryuken。保持中距离用 5MK poke 就能赢。"
      - "DI 在 Lily charge Wind Stock 或出 Condor Spire 时使用。DR 用于快速接近和打断她的充能。Lily 的 SA2 是 armored reversal 有 meter 时注意。CA 在她空中 Condor Dive 时使用。趁她没有 stock 时进攻是最有效的。"
    keyMoves: ["5MK", "HP Hadoken", "LP Shoryuken"]
  - opponent: "cammy"
    difficulty: "disadvantageous"
    summary: "Cammy's speed and pressure overwhelm Ryu's defense — anti-air and patient punish are essential"
    strategies:
      - "对手威胁：Cammy 的核心是 Cannon Strike (dive kick) 和 Spiral Arrow (slide)。Cannon Strike 角度变化大，anti-air 时机需要精确——用 LP Shoryuken 或 5MP 打她。Spiral Arrow 是 -6 到 -9 on block 取决于版本用 2MP 惩罚。Cammy 的 5MP 是 5f startup 比你的 2MP 快。Hooligan Combination 是空中混合但可以 anti-air 打掉。"
      - "中距离 Cammy 的速度比你快。5MP (5f) 和 2MP 让她在 close-mid range 有优势。你的最佳策略是保持中远距离用 HP Hadoken 控制她不让 free 接近。5MK 在中距离是她 button range 外的最佳 poke。anti-air 她的 dive kick 用 LP Shoryuken——这是你最重要的工具。"
      - "DI 在 Cammy 出 Spiral Arrow 或 heavy Cannon Strike 时使用。DR 用于确认 2MP 后延伸连段。Cammy 的 OD Cannon Spike 是她的反转但不是完全无敌。CA 在她 Cannon Strike 跳入时使用。整体策略是防守反击——不要和 Cammy 拼速度，用 anti-air 和 punish 赢。"
    keyMoves: ["LP Shoryuken", "HP Hadoken", "5MK"]
  - opponent: "rashid"
    difficulty: "even"
    summary: "Rashid's mobility is dangerous but predictable — anti-air discipline and fireball control win the match"
    strategies:
      - "对手威胁：Rashid 的核心是空中机动性（Eagle Spike, Ysaar glide）和 mix-up。Eagle Spike HP 版本是 -7 on block 用 2MP 惩罚。他的 Ysaar (whirlwind) 给额外 jump 和 glide option——不要追他空中等他落地。Rashid 的 5MP 是 6f startup 很快中距离要小心。他的 Arabian Sky High (overhead) 是 22f startup 比较慢可以反应。"
      - "保持中距离用 5MK 和 HP Hadoken 控制节奏。Rashid 想用 speed 控制比赛节奏——你需要用波动让他慢下来。anti-air 他的 Eagle Spike 用 LP Shoryuken。他的 2MK 是低 poke 有 range 但 -4 on block。当 Rashid 在空中时不要追他——等他落地再进攻。"
      - "DI 在 Rashid 出 Eagle Spike 或 heavy whirlwind move 时使用。DR 用于追击他 glide 后的着陆。Rashid 的 SA2 是快速反转。CA 在他 Eagle Spike whiff 或 glide landing 时使用。核心是冷静反应他的移动。"
    keyMoves: ["HP Hadoken", "LP Shoryuken", "5MK"]
  - opponent: "a-k-i"
    difficulty: "even"
    summary: "A.K.I.'s poison setup takes time — rush her down before the toxins take hold"
    strategies:
      - "对手威胁：A.K.I. 的核心是毒系统（toxic brew, 毒蛇 trap）。她需要时间设置毒 cloud 和 ground trap——趁她 setup 时用 Hadoken 或 DR 快速接近。被毒后不要慌——毒伤害是可以承受的继续进攻。她的 5MP 是 6f startup 很快但 range 短。Nightshade Pulse (projectile) startup 很慢 (20f+) 可以 DI 打断。"
      - "中近距离你的 button 质量更好。2MP (+5 on hit) 作为确认工具。A.K.I. 的 toxic command grab 需要近距离保持在 5MK 距离。她的 2HP 是 -10 on block 可以惩罚。用 HP Hadoken 控制远距离不给她 free setup 的空间。Denjin Hadoken wall bounce 打断她的 trap 设置。"
      - "DI 在 A.K.I. 出 Nightshade Pulse 或 setup toxic trap 时使用。DR 用于快速接近不给她 setup 时间。A.K.I. 的 OD Heel Strike 是她最好的反转但 range 有限。CA 在她 whiff toxic trap 或 jump-in 时使用。"
    keyMoves: ["5MK", "2MP", "HP Hadoken"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed's psycho flicker controls mid-range — use fireball superiority and Denjin tools to break through"
    strategies:
      - "对手威胁：Ed 的核心是 Psycho Flicker (长距离快速 poke) 和 Kill Rush (approaching armor move)。Psycho Flicker range 很长让中距离很危险——用 HP Hadoken 从更远距离攻击不要走进 Flicker range。Kill Rush 是 armored 但可以用 DI 打断。Ed 的 5MP 是 8f 和你差不多。他的 Snatcher (command grab) range 短保持中距离安全。"
      - "接近方式：Perfect Parry 吸他的 psycho ball，然后 DR 突进。HP Hadoken 控制远距离——Ed 没有好的全屏工具对付波动。Denjin Charge 后 Denjin Hadoken wall bounce 打破他的中距离控制。Ed 的 5HP 是 -6 on block 可以用 2MP 惩罚。角落里用 Denjin Hashogeki 压制。"
      - "DI 在 Ed 出 Kill Rush 或 Psycho Ball heavy 版时使用。DR 用于突破他的 flicker wall。Ed 的 SA2 是快速 armored reversal 有 meter 时不要 predictable。CA 在他 Psycho Rush whiff 或 risky approach 时使用。"
    keyMoves: ["HP Hadoken", "Denjin Charge", "2MP"]
  - opponent: "akuma"
    difficulty: "even"
    summary: "Akuma's damage is terrifying but his low health (9000) means one good read changes everything"
    strategies:
      - "对手威胁：Akuma 的伤害输出是 SF6 顶级。Demon Flip punch/kick/throw 混合需要读取——用 LP Shoryuken 打 flip punch，jump out 打 flip throw。他的 Gohadoken startup 比 Hadoken 快但可以通过 Denjin Hadoken wall bounce 反制。Akuma 的 5MP 是 5f startup 很快要小心。他的空中 Gohadoken (air fireball) 让他的 jump 变得复杂——anti-air 用 LP Shoryuken。"
      - "关键信息：Akuma 的 health 只有 9000（比你的 10000 少 1000），一个 Denjin Hashogeki → HP Shoryuken 连段可以重创他。中距离用 5MK 和 HP Hadoken 交换。Akuma 的 5HK 是 -6 on block 可以惩罚。波动对射用 Denjin Charge 打破僵局。他的 Raging Demon (SA1) 是 command grab 有 armor break——有 meter 时不要 predictable。"
      - "DI 在 Akuma 出 heavy Gohadoken 或 sweep 时使用。DR 用于确认 2MP 后延伸连段——对 Akuma 每个 hit 都很珍贵因为低血量。CA 在他 demon flip 或 whiff heavy attack 时使用。anti-air 是关键——不要让他 free jump-in 带着空中波动压制。"
    keyMoves: ["LP Shoryuken", "Denjin Charge", "5MK"]
  - opponent: "m-bison"
    difficulty: "disadvantageous"
    summary: "Bison's Psycho Power pressure is overwhelming — patient defense and Denjin charge reversal are key"
    strategies:
      - "对手威胁：M. Bison 的核心是 Psycho Crusher 接近和 Scissors Loop 压力。HP Psycho Crusher 是 -8 on block 用 2MP 惩罚。Scissors (LK version) 是 +1 on block 让他保持压力——不要乱按按钮等他 heavy 版本 (-6 on block) 再 punish。他的 5HP 是 -5 on block。Bison 的 2LP 是 4f 可以 mash。注意他的 Psycho Arrow 是快速接近工具。"
      - " Bison 需要 charge 时间出 Psycho Crusher 和 Scissors。持续的 HP Hadoken 压力不让他 free charge。用 Perfect Parry 吸他的波动节省 Drive Gauge。一旦进入中距离用 5MK 和 2MP 控制地面。Bison 的 5MP 是 7f startup 比你的 2MP (6f) 稍慢。当 Bison 没有 meter 时反转有限可以更激进。"
      - "DI 在 Bison 出 Psycho Crusher 或 heavy Scissors 时使用。DR 在波动命中后快速接近延伸连段。Bison 的 SA2 是 armored reversal 有 meter 时不要 predictable。CA 在他 whiff Psycho Crusher 或 Scissors 时使用。Shin Shoryuken 是你最好的反转工具。"
    keyMoves: ["HP Hadoken", "LP Shoryuken", "Denjin Charge"]
  - opponent: "terry"
    difficulty: "advantageous"
    summary: "Terry's solid neutral loses to Ryu's Denjin tools and better fireball game"
    strategies:
      - "对手威胁：Terry 的核心是 Power Wave (波动) 和 Burn Knuckle (approaching move)。Power Wave recovery 比 Hadoken 快但伤害低。Burn Knuckle HP 版本是 -9 on block 用 2MP 惩罚。他的 Rising Tackle 是 anti-air/DP 但不是完全无敌（OD 版本是）。Terry 的 5MP 是 8f 和你的 2MP 一样但 range 更短。他的 Crack Shoot (overhead) 是 20f startup 可以反应。"
      - "波动对射：HP Hadoken 和 Power Wave 对波你的优势更大因为 Denjin Charge。Denjin Hadoken wall bounce 打破 Power Wave 的节奏。中距离用 5MK 和 2MP 比 Terry 的普通技稍快。anti-air 他的 jump 用 LP Shoryuken。Terry 的 Burn Knuckle 恢复帧长是主要 punis 目标。"
      - "DI 在 Terry 出 Burn Knuckle 或 heavy Power Wave 时使用。DR 用于确认 2MP 后延伸连段。Terry 的 SA1 (Buster Wolf) 是 armored reversal 有 meter 时注意。CA 在他 whiff Burn Knuckle 或 jump-in 时使用。"
    keyMoves: ["HP Hadoken", "5MK", "Denjin Charge"]
  - opponent: "mai"
    difficulty: "disadvantageous"
    summary: "Mai's air mobility and fan projectiles make approaching a nightmare — extreme patience required"
    strategies:
      - "对手威胁：Mai 的核心是 fan projectile 和 air mobility。她的 fan 波动可以多角度发射让接近变得复杂。air fan 让她可以在空中持续骚扰，anti-air 很困难。她的 5MP 和 2MP range 都很长让中距离也不好打。Mai 的 Kachousen (multi-hit fan) 是强大的中距离工具。她的 command grab range 短保持中距离安全。"
      - "不要追她空中——等她落地再进攻。Perfect Parry 吸 fan 节省 Drive Gauge。HP Hadoken 和她的 fan 对波但她的恢复可能更快。Denjin Charge 后 Denjin Hadoken wall bounce 是打破她全屏控制的少数方式之一。一旦接近用 5MK 和 2MP 压制——她的近身 button 不如你的。"
      - "DI 在 Mai 出 fan projectile 或 air approach 时使用。DR 是你主要的接近手段——raw DR 穿波动。Mai 的 SA2 是快速 reversal 有 meter 时注意。CA 在她空中 fan whiff 或 landing 时使用。需要比平时更耐心不要急于冲进去。"
    keyMoves: ["Perfect Parry", "Drive Rush", "HP Hadoken"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena's capoeira range is deceptive — control spacing with 5MK and deny her healing windows"
    strategies:
      - "对手威胁：Elena 的核心是 deceptive range 的 capoeira kicks 和 healing ability。她的 5MK 和 2MK range 比看起来长需要保持适当距离。她的 healing 需要时间——不要给她 free heal 的机会保持压力。Elena 的 Lynx Tail 是 multi-hit 可以 DI 吸掉。她的 Mallet Smash (overhead) 是 22f startup 可以反应。"
      - "用 5MK 和 HP Hadoken 在中距离和她交换。Elena 的 5HP 是 -5 on block 用 2MP 惩罚。保持在 5MK 距离最有利——太近会被 capoeira mix-up 打太远她可以 heal 或 poke。2MP (+5 on hit) 作为确认工具。anti-air 她的 jump 用 LP Shoryuken。"
      - "DI 在 Elena 出 Lynx Tail 或 heavy capoeira move 时使用。DR 用于确认 2MP 后延伸连段。Elena 的 SA2 是 invincible reversal 有 meter 时注意。CA 在她 whiff capoeira kick 或 heal attempt 时使用。"
    keyMoves: ["5MK", "HP Hadoken", "2MP"]
  - opponent: "volcano-handshake"
    difficulty: "even"
    summary: "Limited matchup data — stick to fundamental Ryu gameplan with Denjin Charge pressure"
    strategies:
      - "Volcano Handshake 作为新角色数据有限。根据已有信息，他的核心工具是 Burning Fist 系列攻击具有高伤害但启动偏慢。用快按钮 (2MP 6f, 2LP 4f) 在他的 heavy attack gap 中插入。anti-air 用 LP Shoryuken 不要给他 free 的 jump-in。"
      - "保持标准 Ryu gameplan：中远距离用 5MK、2MP 和 HP Hadoken 控制。在他 whiff heavy attack 时用 DR 或 Hadoken 惩罚。如果他有 armored move 用 DI 打断。Denjin Charge 后 Denjin Hashogeki 是强力接近工具。接近后用 5MK 和 2MP 循环压制。"
      - "DI 在他出 heavy attack 或 charge move 时使用。DR 用于确认和延伸连段。CA 在关键时刻使用。根据实际对局经验调整策略。"
    keyMoves: ["5MK", "2MP", "LP Shoryuken"]
---

## Additional Notes

Ryu has been the face of Street Fighter since the series began in 1987. In Street Fighter 6, he returns with the Denjin Charge system that adds a new layer of strategy to his classic moveset.

### Core Combo Routes

| Situation | Combo | Damage |
|---|---|---|
| Light Confirm | 2LP → 2LP → 2MP → 2HP → HP Shoryuken | ~1800 |
| Midscreen BnB | 2HP → HP Tatsumaki / HP Shoryuken | ~2000 |
| Drive Rush Route | 2MP~DR → 5HP → 2HP → HP Shoryuken | ~2200 |
| Denjin Route | Denjin Hashogeki → dash → 5HP → HP Shoryuken | ~2500+ |
| Corner Denjin | Denjin Hadoken (wall bounce) → DR → 5HP → 2HP → HP Shoryuken | ~3000+ |
| Meterless Punish | 5HK (sweep) → 2LP → 2MP → 2HP → LP Shoryuken | ~1500 |
| OD Confirm | OD Hadoken (wall splat) → 5HP → HP Shoryuken | ~2300 |

### Key Frame Data Reference

| Move | Startup | On Hit | On Block | Notes |
|---|---|---|---|---|
| 2LP | 4f | +4 | -2 | Fastest normal |
| 2MP | 6f | +5 | +1 | Best confirm button |
| 5MK | 8f | +2 | -3 | Mid-range poke |
| 5HP | 8f | +3 | -6 | Heavy confirm |
| 2HP | 7f | +1 | -13 | Launcher (use in combos) |
| 5HK | 12f | KD | -12 | Sweep (risky on block) |
| LP Shoryuken | 6f | KD+26 | -27 | Anti-air DP (inv 1-8f) |
| HP Hadoken | 16f | +2 | -7 | Fireball control |
| Denjin Hadoken | 16f | KD+62 | -7 | Wall bounce confirm |

### Health and Movement

- **Health:** 10,000 (standard)
- **Forward Walk Speed:** 4.5
- **Back Walk Speed:** 3.0
- **Forward Dash:** 18 frames
- **Prejump Frames:** 4

### Season Updates

- **Feb 2024 Patch:** 5MK forward movement increased; HP Hashogeki recovery reduced by 2 frames
- **May 2024 Patch:** Denjin Charge duration extended; OD Hadoken wall splat timing adjusted
- **Dec 2024 Patch:** 2MP hitbox expanded downward; LP Shoryuken invincibility extended to frame 8 (was 6)
