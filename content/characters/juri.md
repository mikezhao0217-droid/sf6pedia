---
name: "Juri"
subtitle: "The Sadistic Thrill-Seeker"
overview: "Juri 是一名以 Fuhajin 蓄力系统为核心的高机动性压制角色。她通过 214K 储存最多 3 个 Fuhajin stock，消耗 stock 可以强化特殊技并获得额外的连段路线。拥有 stock 时 Juri 的进攻极具威胁——Go Ohsatsu 提供中距离突进，Shikusen 提供防空和连段 juggle，Tensenrin DP 提供无敌逆转。核心弱点是缺乏 stock 时进攻力大幅下降，需要在充电窗口和压制节奏之间找到平衡。"
keyMoves:
  - name: "Fuhajin (蓄力)"
    input: "214K"
    description: "Juri 的核心系统。储存 Fuhajin stock（最多 3 个）。充电动作有明显硬直，是对手进攻的最佳窗口。不同版本：LK 快速充电但距离短；MK 中速充电带前移；HK 充电最慢但可以接后续派生。OD 版本 (214KK) 充电更快且附带霸体。有 stock 时所有派生特殊技都会消耗 stock 获得强化。充电管理是 Juri 最重要的技能。"
    startup: 16
    active: 0
    recovery: 36
    damage: 0
  - name: "Go Ohsatsu (突进踢)"
    input: "236K（消耗 stock）"
    description: "消耗 1 个 stock 的中距离突进踢。LK 版本 10f 启动，+2 on hit / -6 on block，用于 poke 确认和压制衔接。MK 版本 14f 启动有更长距离。HK 版本 18f 启动但命中给 KD+26 的击倒，是连段终结器。OD 版本有装甲并且给更好的 juggle。有 stock 时从 5MP/2MP 取消到 Go Ohsatsu 是 Juri 最核心的确认路线。"
    startup: 10
    active: 4
    recovery: 40
    damage: 900
  - name: "Shikusen (翻转踢)"
    input: "214K（消耗 stock）"
    description: "消耗 1 个 stock 的翻转踢。LK 版本 6f 启动，有 7-18 帧上半身无敌，是优秀的 anti-air 工具。MK 版本 10f 启动命中后可以 juggle 追击。HK 版本 14f 启动给高击倒优势。OD 版本有完全无敌启动。空中命中给极佳追击机会。Feng Shui Engine (SA2) 激活时 Shikusen 不消耗 stock，让 Juri 可以无限使用。"
    startup: 6
    active: 12
    recovery: 48
    damage: 850
  - name: "Tensenrin (DP)"
    input: "623P"
    description: "Juri 的对空升龙拳。LP 版本 5f 启动，有上半身无敌，是最快的 anti-air 但不是完全无敌。MP 版本有更好的对空覆盖。HP 版本消耗 1 个 stock 获得完全无敌，是可靠的逆转工具。OD 版本 (623PP) 有完全无敌并且给更好的 juggle。HP 和 OD 版本是 Juri 最重要的防御工具。"
    startup: 5
    active: 8
    recovery: 42
    damage: 1000
  - name: "5MP (中距离 poke)"
    input: "5MP"
    description: "Juri 最核心的立回按钮。7f 启动，+5 on hit / -2 on block，距离优秀。可以取消到 Special 和 Drive Rush，是 Juri 确认体系的起点。有 stock 时 5MP → Go Ohsatsu 是最基础的确认路线。在 Feng Shui Engine 激活时可以形成连续压制。用最大距离 5MP 让对手难以惩罚。"
    startup: 7
    active: 4
    recovery: 18
    damage: 450
  - name: "2MP (下段确认)"
    input: "2MP"
    description: "快速下段 poke。6f 启动，+8 on hit / -1 on block。与 5MP 配合形成中/低二择确认体系。命中后可以 link 到 5HP 或直接取消到 Special。Drive Rush 后 +12 on hit 是极佳的进攻启动器。走路前进时用最大距离 2MP 可以 Counter-hit 确认到 5HP。"
    startup: 6
    active: 3
    recovery: 16
    damage: 300
  - name: "5MK (远距离 poke)"
    input: "5MK"
    description: "远距离中段 poke。9f 启动，+1 on hit / -4 on block，距离比 5MP 更远。用于在对手的 poke 范围外控制距离。可以取消到 Special 和 Drive Rush。Counter-hit 时可以确认到 5HP 或 DR 追击。是 Juri 在中远距离最重要的 spacing 工具。"
    startup: 9
    active: 5
    recovery: 22
    damage: 540
  - name: "6MK (跳跃踢)"
    input: "6MK"
    description: "前跳踢 command normal。20f 启动，可以跳过低段攻击。+2 on hit / -5 on block。用于跳过对手的低段 poke 并拉近距离。可以取消到 Special 和 Drive Rush，命中后确认到 Go Ohsatsu 或 DR 连段。在中距离对峙时作为预测性接近工具使用。"
    startup: 20
    active: 3
    recovery: 28
    damage: 600
  - name: "2HK (sweep)"
    input: "2HK"
    description: "远距离下段扫踢。12f 启动，命中给击倒。-9 on block 较为危险。有 stock 时可以取消到 Go Ohsatsu HK 做安全确认。主要用于惩罚对手后退或远距离 poke 的恢复帧。Counter-hit 时给长时间击倒可以接 okizeme。"
    startup: 12
    active: 6
    recovery: 30
    damage: 600
  - name: "Feng Shui Engine (SA2 / Install)"
    input: "214214P"
    description: "Juri 的 Install 超必杀。激活后 Juri 进入强化状态：所有 Fuhajin 派生技不消耗 stock，普通技获得额外取消路线，移动速度和伤害提升。SA2 的价值在于让 Juri 不再需要充电就可以持续压制——Go Ohsatsu 和 Shikusen 可以无限使用。是 Juri 最高回报的超级必杀，在角落激活后可以形成毁灭性的持续压制。激活瞬间有完全无敌。"
    startup: 8
    active: 0
    recovery: 0
    damage: 0
tips:
  - "开局先建立 Fuhajin stock：用 5MP poke 后趁距离拉开时 214K 充电，或者在击倒对手后利用 oki 时间充电。核心确认路线：5MP/2MP → 236K（Go Ohsatsu LK）是最稳定的中距离确认，给 +2 on hit 或安全取消。角落路线：5HP → 214K~MK（Shikusen）→ DR~5MP → 5HP → 236HK（Go Ohsatsu HK）是高伤害角落终结。Drive Rush 路线：5MP~DRC → 2MP → 5HP → 236HK 给 KD+26 和良好 oki。"
  - "Stock 管理是 Juri 的核心技能。有 3 个 stock 时你的进攻最强——Tensenrin HP 有完全无敌，Go Ohsatsu HK 给击倒，Shikusen 提供连段 juggle。0 个 stock 时你的进攻力大幅下降，需要退到中距离用 5MP/5MK poke 找充电机会。充电时机：击倒后、远距离拉扯时、对手不敢进攻时。不要在近距离硬充电——会被 punish。"
  - "中距离立回以 5MP 和 5MK 为主。5MP (+5/-2) 在最大距离 poke 后对手难以反击，5MK (+1/-4) 在更远距离控制空间。2MP (+8/-1) 作为下段确认配合使用。有 stock 时 5MP → Go Ohsatsu 是万能确认。对手出重攻击恢复帧时用 5HP 的前移特性 whiff punish。6MK 跳过低段攻击拉近距离也是好选择。"
  - "Drive Rush 是 Juri 从远距离确认进入连段的关键。DR~5MP 是最佳接近工具（+5 on block，命中 link 到 Go Ohsatsu）。DR~2MP 在近距离给 +12 on hit 确认到 5HP。DR~6MK 可以跳过对手的低段 poke。被防时 5MP~DRC → 2MP 形成帧陷阱。DI 后 +35 优势，用 5HP 或 6MK 开始压制循环。"
  - "防御方面 Juri 有不错的选项：HP Tensenrin (623HP) 消耗 1 个 stock 有完全无敌，是可靠的逆转。OD Tensenrin (623PP) 不消耗 stock 也有完全无敌。SA1 (236236K) 有 1-10 帧完全无敌是强力的打击/投无敌逆转。SA2 (214214P) 激活瞬间有无敌但启动慢。在被压制时 Drive Reversal 也是重要选项。"
  - "Feng Shui Engine (SA2) 激活后是 Juri 最强的状态。所有派生技不消耗 stock 意味着可以无限使用 Go Ohsatsu 和 Shikusen。新的取消路线让普通技可以连段到更多特殊技。配合 Drive Rush 可以形成几乎无法防守的持续压制。在角落激活 SA2 后对手几乎无法逃脱——用 5MP → Go Ohsatsu → Shikusen 循环持续压制直到击杀。SA2 的持续时间有限，激活后要全力进攻。"
  - "对不同距离的应对：远距离用 5MK 和 5HP poke，找充电机会。中距离是最佳作战距离——5MP/2MP 确认到 Go Ohsatsu。近距离用 2LP/2LK + 投技混合压制起身。被远距离角色拉开时不要急——用 6MK 前跳或 DR 快速拉近距离。注意 2HK sweep 的距离很长，是远距离惩罚的好工具。"
matchups:
  - opponent: "luke"
    difficulty: "even"
    summary: "双方都是进攻型角色，谁能先建立 Fuhajin stock 和节奏谁就赢"
    strategies:
      - "Luke 的核心威胁是 Flash Knuckle 系统和 Sand Blast 波动。HP Sand Blast 是 +3 on hit，不要让他免费发波——用 6MK 跳过波动或 DR 快速接近。Luke 的 Perfect Flash Knuckle HP (+4 on block) 是他的压制核心，被防后他会 mix 2LK/throw/frame trap，用延迟轻攻击打断。Luke 的 LP Rising Uppercut (5f) 是极强 anti-air，不要随意跳入——用 Shikusen LK (214K~LK) anti-air 他的跳跃进攻。"
      - "优势距离在中近距离：有 stock 时用 5MP → Go Ohsatsu 确认压制。Luke 的 5HP 是 -7 on block，确认后用 2LP 或 5LP 惩罚。Luke 没有 stock 时防御薄弱——他的 OD Rising Uppercut 需要消耗 Drive。一旦你拿到击倒，充电 1-2 个 Fuhajin 后起身压制。注意 Luke 的伤害输出很高，一个失误可能吃 3000+ 连段。"
      - "DI 在 Luke 出 5HP 或 sweep（-10 on block）时使用。DR 用于穿过 Sand Blast 快速接近。CA 保留到关键时刻——Luke 的血量和 Juri 一样是 10000，但他的伤害可能更高。SA2 的 Install 激活后持续压制不让他喘息。HP Tensenrin 用于逆转 Luke 的 Flash Knuckle 压制。"
    keyMoves: ["5MP", "Go Ohsatsu", "HP Tensenrin"]
  - opponent: "ryu"
    difficulty: "advantageous"
    summary: "Juri 的速度和 Fuhajin 压制克制 Ryu 的波动节奏，是有利对局"
    strategies:
      - "Ryu 的核心威胁是 Denjin Charge 强化波动和 Hadoken 控场。用 6MK 跳过波动或 DR 穿波快速接近。Ryu 的 5HK 和 sweep 是主要 poke 但比较慢——5HK 是 -2 on block，sweep 是 -10 on block 可以用 2LP 惩罚。Ryu 没有 Denjin 时 HP Hashogeki 是 -4 on block，可以惩罚。Ryu 的 LP Shoryuken 有完全无敌但只有 6f，你的 5MP 在最大距离 poke 是安全的。"
      - "优势距离在中近距离：5MP 和 2MP 确认体系让 Ryu 的波动节奏很难维持。有 stock 时 5MP → Go Ohsatsu LK (+2 on hit) 持续压制，Ryu 的 OD Shoryuken 消耗 Drive 可以耗尽他的资源。进入近距离后用 2LP/2LK + 投技混合。Ryu 没有逆转时可以大胆起身压制并趁机充电。"
      - "DI 在 Ryu 出 5HP 或 sweep 时使用。DR 在波动后突进。CA 在 Ryu 跳入或出重攻击恢复帧时使用。SA2 Install 后追击能力增强，Ryu 很难从你的压制循环中逃脱。HP Tensenrin 用于逆转 Ryu 的压制。Shikusen LK anti-air Ryu 的跳跃进攻非常有效。"
    keyMoves: ["5MP", "6MK", "Shikusen LK"]
  - opponent: "chun-li"
    difficulty: "even"
    summary: "Chun-Li 的长距离 poke 和 Serenity Stream 让接近有挑战，但 Juri 的确认体系在中近距离很强"
    strategies:
      - "Chun-Li 的核心威胁是 5MP/2MP/5HP 的极长距离和 Serenity Stream 姿态。她的按钮距离比 Juri 长，在远中距离要小心。Serenity Stream 姿态蹲低避开一些高段攻击，不要盲目出 5MP——等她姿态结束后再进攻。Chun-Li 的 2HP 是 -5 on block 可以用 Go Ohsatsu LK 惩罚。她的 Spinning Bird Kick 恢复帧长，用 5MP 确认惩罚。"
      - "接近方式：DR 穿过她的长距离 poke，6MK 跳过低段攻击拉近距离。一旦进入 5MP 距离，Juri 的确认体系开始发挥作用——5MP → Go Ohsatsu 比 Chun-Li 的确认更快。Chun-Li 的 OD Tensho Kicks 是她主要的逆转但不是完全无敌，你有 stock 时 HP Tensenrin 可以和她对拼。"
      - "DI 在 Chun-Li 出 2HP 或 sweep 时使用。DR 用于突破她的中距离 poke 墙。角落压制时用 2LP/投技混合，Chun-Li 的防御选项有限。CA 在她空中攻击时用 Shikusen LK anti-air 而不是跳起来对拼。注意 Chun-Li 的 SA1 是完全无敌的逆转。"
    keyMoves: ["DR", "5MP", "Shikusen LK"]
  - opponent: "jamie"
    difficulty: "advantageous"
    summary: "趁 Jamie 喝酒等级低时疯狂进攻不给他喘息空间，Juri 的确认体系在 Jamie Level 0-1 时碾压他"
    strategies:
      - "Jamie 的威胁随喝酒等级增长。Level 0-1 时他是最弱的角色之一，趁这个窗口疯狂进攻——开局立刻 DR 接近或用 6MK 前跳拉近距离。如果让他喝到 Level 4，他的 frame trap 和伤害大幅提升。Jamie 的 Bakushin（酒步）是 -4 on block 可以用 2LP 惩罚。他的 command grab 在有酒时范围增大但仍然可以跳开。"
      - "有 stock 时 Juri 的确认体系完全碾压 Level 0-1 的 Jamie。5MP → Go Ohsatsu 持续压制，他不喝酒就无法提升实力。Jamie 的 OD The Devil Inside 是他唯一的逆转但不是完全无敌——你有 HP Tensenrin 可以抗衡。击倒 Jamie 后充电 stock 然后起身压制，不给他喝酒的机会。"
      - "DI 在 Jamie 用重攻击或尝试喝酒时使用可以打断。DR 用于快速接近不给他喝酒空间。CA 在 Jamie 跳入或出危险大招时使用。SA2 Install 后持续用 Go Ohsatsu/Shikusan 循环压制，Jamie Level 0-1 时几乎无法防守。注意 Jamie Level 3+ 时他的打击/投混合非常危险。"
    keyMoves: ["5MP", "Go Ohsatsu", "DR"]
  - opponent: "guile"
    difficulty: "disadvantageous"
    summary: "Guile 的波动+反击系统让接近和充电都非常困难，是 Juri 最难打的对局之一"
    strategies:
      - "Guile 是 Juri 最难打的对局之一。Sonic Blade + Sonic Boom 组合让你很难接近和充电。不要跳入——Guile 的 Flash Kick 是最可靠的 anti-air 之一（LP 版本 4f 启动，完全无敌）。Juri 需要充电但充电动作在 Guile 面前是巨大破绽。方法是用 Perfect Parry 吸波节省 Drive Gauge，然后 DR 突进。6MK 在中距离跳过 Sonic Boom 但 Guile 可能反应。"
      - "一旦进入中近距离，用 5MP 快速 poke 后立刻取消到 Go Ohsatsu 确认——不要在 Guile 面前站太久因为他会后退重新开始波动循环。Guile 的 5HP 是 -6 on block，确认后用 2LP 或 Go Ohsatsu LK 惩罚。他的 2HK sweep 是 -10 on block，用 2LP 惩罚。Flash Kick LP 是 -25 on block，用重攻击或 Go Ohsatsu MK 惩罚。进入近距离后注意 Guile 的 Flash Kick 是完全无敌的逆转。"
      - "DI 在 Guile 出 Sonic Blade 或 heavy Sonic Boom 时使用。DR 在读准他的波动时机后突进，不要盲目 DR。CA 保留到关键时刻，Guile 防御很强所以可能需要 CA 来破防。SA2 的 Install 激活后你不再需要充电就可以持续压制——这是翻盘的关键。HP Tensenrin 用于逆转 Flash Kick 之外的压制。"
    keyMoves: ["DR", "Perfect Parry", "6MK"]
  - opponent: "kimberly"
    difficulty: "even"
    summary: "双方都想进攻，谁先拿到 Fuhajin stock 和 knockdown 谁就占据主动"
    strategies:
      - "Kimberly 的核心威胁是 Sprint 系统的 Overhead/Low/Stop 三择和 Shuriken Bomb setplay。她的速度和机动性极强，但她的防御薄弱。Kimberly 的 Sprint~Overhead (HK) 是 -3 on block 可以用 2LP 惩罚。她的 Sprint~Slide (MK) 命中给 KD+39 的击倒。Sprint~Stop 是假动作，不要被诱骗出重攻击。用 Shikusen LK anti-air 她的空中进攻。"
      - "中距离是关键战场：用 5MP 和 2MP 试探，有 stock 时确认到 Go Ohsatsu。Kimberly 的防御工具有限——她没有完全无敌的 DP（只有 OD Bushin Senpukyaku 有对空无敌不是完全无敌）。这意味着你有 stock 时可以大胆起身压制。充电时机在击倒 Kimberly 后——她的 Shuriken Bomb 需要时间设置，在 bomb 爆炸前你有进攻窗口。"
      - "DI 在 Kimberly 出 5HP 或 Sprint~Overhead 时使用。DR 在她的攻击间隙突进。CA 保留到关键时刻。SA2 Install 后持续压制不让她有时间设置 Shuriken Bomb。HP Tensenrin 用于逆转 Kimberly 的 Sprint 压制。注意 Kimberly 的 SA1 有 1-10 帧打击/投无敌。"
    keyMoves: ["5MP", "Shikusen LK", "HP Tensenrin"]
  - opponent: "ken"
    difficulty: "even"
    summary: "Ken 的波动和 DP 都是强工具，但 Juri 的 Fuhajin 确认体系可以在中距离压制他"
    strategies:
      - "Ken 的核心威胁是 Hadoken 控场和 Shoryuken 逆转。他的 HP Shoryuken 有完全无敌是强力的 anti-air 和逆转。Ken 的 Jinrai Kick (236HK) 是快速接近工具，-5 on block 可以用 2LP 惩罚。他的 5HP 有很长的距离但 -7 on block。用 6MK 跳波动，DR 穿波。Ken 的 Dragonlash Kick (623K) 可以被 Shikusen LK anti-air 或 Perfect Parry。"
      - "优势距离在中近距离：有 stock 时 5MP → Go Ohsatsu 是核心确认。Ken 的 OD Shoryuken 是完全无敌的逆转——用 5MP 在最大距离 poke 让他的 DP 打空然后 punish。Ken 没有 meter 时防御薄弱，可以大胆压制并充电。Ken 的 5HP 是 -7 on block 可以用 2LP 确认惩罚。"
      - "DI 在 Ken 出 5HP 或重攻击时使用。DR 在波动后突进。CA 在 Ken 跳入时用 Shikusen LK anti-air。Ken 的 SA3 也是完全无敌的但启动较慢（9f）。SA2 Install 后持续用 Go Ohsatsu 压制，Ken 的波动节奏被打乱。HP Tensenrin 用于逆转 Ken 的 Jinrai 压制。"
    keyMoves: ["5MP", "Go Ohsatsu", "6MK"]
  - opponent: "blanka"
    difficulty: "even"
    summary: "Blanka 的混乱节奏和电球让充电时机难以把握，但 Juri 的确认体系比 Blanka 更稳定"
    strategies:
      - "Blanka 的核心威胁是 Blanka Ball 的混乱节奏和 Electric Thunder 的 anti-air。LP Blanka Ball 快但 -8 on block 可以用 2LP 或 Go Ohsatsu LK 惩罚。HP Blanka Ball 是 -14 on block 用重攻击惩罚。Blanka 的 5LK 有极长距离（1.09 range），让你的 spacing trap 需要调整。他的 Vertical Roll 是对空工具但不是无敌的——用 Shikusen LK anti-air。"
      - "充电时机：在 Blanka 用 Blanka Ball 被挡后或远距离拉扯时充电。不要在 Blanka 面前硬充电——他会用 Blanka Ball 打断。进入中距离后用 5MP 确认体系压制。注意 Blanka 的 crouch 状态很低，一些高段攻击可能打不到——用 2MP 作为下段确认。在角落压制时 Blanka 的 escape 工具有限。"
      - "DI 在 Blanka 出 HP Blanka Ball 或重攻击时使用。DR 用于快速接近。Blanka 的 SA1 是打击/投无敌的逆转，注意在他有 meter 时不要 predictable。CA 保留到最后击杀。注意 Blanka 的后dash 距离很长，追踪时可能需要用 DR。SA2 Install 后持续压制不让他有时间恢复节奏。"
    keyMoves: ["5MP", "Go Ohsatsu LK", "2MP"]
  - opponent: "dhalsim"
    difficulty: "disadvantageous"
    summary: "Dhalsim 的远距离控场让充电和接近都很难，需要耐心寻找突破口"
    strategies:
      - "Dhalsim 是 Juri 难打的对局之一。Yoga Fire/Yoga Flame 控场和长距离 limb 攻击让你很难接近和充电。他的 5LP 有很长距离，5MK 和 5HP 可以从远距离 poke。6MK 跳过 Yoga Fire 但 Dhalsim 会调整距离。DR 穿波动是最快接近方式但消耗 Drive。Dhalsim 的 Yoga Arch (空中火焰) 让你的跳跃时机更难把握。"
      - "一旦进入中近距离，Dhalsim 的防御非常弱。他的 2HP 是 -5 on block 可以用 Go Ohsatsu LK 惩罚。他没有可靠的逆转（OD Yoga Flame 不是无敌的）。在角落用 Fuhajin 确认体系持续施压，Dhalsim 几乎没有逃脱手段。充电时机在击倒 Dhalsim 后——利用 oki 时间快速充电 1-2 个 stock。"
      - "DI 在 Dhalsim 出 5HP 或重 limb 攻击时使用。DR 用于快速拉近距离。CA 在 Dhalsim 尝试 Yoga Flame 或重攻击时使用。SA2 Install 后不再需要充电可以持续压制——这是逆转对局的关键。HP Tensenrin 用于穿波但启动要够早。Shikusen LK 可以 anti-air Dhalsim 的空中进攻。"
    keyMoves: ["DR", "6MK", "SA2 Install"]
  - opponent: "e-honda"
    difficulty: "even"
    summary: "Honda 的冲撞和指令投让防守压力大，但他的大 hitbox 是 Juri 连段的靶子"
    strategies:
      - "Honda 的核心威胁是 Hundred Hand Slap 压制和 Sumo Headbutt 接近。他的 command grab (Orochi Break) 范围大，被近身后要小心投技 mix。Honda 的 2LP 和 5LK 都有很长距离。HP Sumo Headbutt 是 -14 on block 可以用 2LP > Go Ohsatsu 惩罚。不要在 Honda 的 command grab 范围内充电——他会直接 grab 你。"
      - "优势距离在中距离：用 5MP poke，Honda 的 limb 虽然长但恢复帧也长。2MP 作为快速 counterpoke 很有效。有 stock 时 5MP → Go Ohsatsu 是核心确认。进入近距离后注意 Honda 的 abare（延迟轻攻击）很强——不要在帧陷阱中贪心。用 2LP/投技混合压制起身，Honda 的逆转只有 SA。"
      - "DI 在 Honda 出 HP Headbutt 或重攻击时使用。DR 用于穿过他的攻击接近。Honda 的 SA2 (Nishikigi) 是打击无敌的逆转。CA 在 Honda 冲撞的恢复帧时使用。角落压制时注意 Honda 的 2LP 范围很长。SA2 Install 后持续压制 Honda 不给他 Sumo 接近的机会。"
    keyMoves: ["5MP", "2MP", "Go Ohsatsu"]
  - opponent: "dee-jay"
    difficulty: "even"
    summary: "Dee Jay 的波动和 Jus Cool 姿态让进攻有挑战，但他的防御选项有限"
    strategies:
      - "Dee Jay 的核心威胁是 Air Slasher 波动和 Jus Cool 姿态系统。他的 5MP 有很快的启动和不错的距离。Dee Jay 的 5LP 也是 4f 启动有较长距离。他的 Double Rolling Sobat (2HK) 是 -12 on block 可以用 2LP 惩罚。Air Slasher 恢复较快，6MK 跳波需要更精确的时机。Dee Jay 的 Jus Cool 姿态可以避开一些高段攻击，等姿态结束再进攻。"
      - "接近方式：DR 穿波动，6MK 跳 Air Slasher。进入中距离后用 5MP 和 2MP 确认体系。有 stock 时 5MP → Go Ohsatsu 持续压制。Dee Jay 没有完全无敌的逆转（只有 OD Jackknife Maximum 有对空无敌），你有 stock 时可以大胆起身压制。充电时机在击倒 Dee Jay 后或远距离拉扯时。"
      - "DI 在 Dee Jay 出 2HK 或重攻击时使用。DR 在波动后突进。CA 在 Dee Jay 尝试重攻击时使用。Dee Jay 的 SA1 有打击无敌但启动慢。角落压制时 Fuhajin 确认体系很有效因为 Dee Jay 防御选项有限。SA2 Install 后持续压制不让他有时间进入 Jus Cool 节奏。"
    keyMoves: ["5MP", "DR", "Go Ohsatsu"]
  - opponent: "manon"
    difficulty: "advantageous"
    summary: "Juri 的速度和确认体系完全克制 Manon 的慢节奏和勋章系统"
    strategies:
      - "Manon 的核心威胁是 Médaille 勋章系统——每成功投技增加勋章等级提升伤害和范围。不要让她免费积累勋章。她的 hit grab (Rond-point) 是主要的中距离威胁但恢复帧很长，用 5MP 在她的 hit grab 范围外 poke。Manon 的移动速度非常慢——Juri 的速度优势巨大。Manon 的 5LP 和 2LP 距离较长但她的确认不如 Juri 快。"
      - "优势巨大：Manon 的移动速度是游戏中最慢的之一，Juri 可以轻松控制距离。有 stock 时 5MP → Go Ohsatsu 持续压制，Manon 几乎无法逃脱。她的逆转只有 OD Renversé（不是无敌的）和 SA。在角落持续用 Fuhajin 确认体系压制。充电时机在击倒 Manon 后——她太慢无法打断你的充电。"
      - "DI 在 Manon 出重攻击或 hit grab 时使用。DR 在她的攻击间隙突进。CA 在 Manon 尝试 command grab 或重攻击时使用。注意 Manon 的 SA1 有打击/投无敌但启动较慢。如果 Manon 积累到 5 勋章，她的投技伤害极高，尽量避免被她 hit grab 或 command grab。SA2 Install 后速度差距更大，Manon 几乎无法应对。"
    keyMoves: ["5MP", "Go Ohsatsu", "DR"]
  - opponent: "marisa"
    difficulty: "even"
    summary: "Marisa 的装甲和重攻击很危险，但她的慢速度让 Juri 可以用确认体系控制节奏"
    strategies:
      - "Marisa 的核心威胁是 Gladius 装甲攻击和 Quadriga 冲刺。她的重攻击都有超级装甲可以吸一击然后反击——不要用单发重攻击对抗她。Marisa 的 2LP 距离较长影响 spacing trap。她的 Scutum 是 counter stance 会读取你的攻击时机。用 2MP 的快速恢复和 5MP 的距离在 Marisa 的攻击范围外 poke。注意 Marisa 的 Gladius 系列恢复帧长（-8 到 -15 on block）。"
      - "优势距离在中距离：Marisa 移动慢，用 5MP 和 2MP 保持距离优势。有 stock 时确认到 Go Ohsatsu。Marisa 的 Gladius 确认后用 Go Ohsatsu LK 或 2LP 惩罚。进入近距离后注意 Marisa 的装甲可以吸你的轻攻击——用多段攻击或延迟出招应对。用 DR 接近诱骗她出 Gladius 然后 punish。"
      - "DI 在 Marisa 出 Gladius 或 Quadriga 时非常有效因为她的装甲被 DI break。DR 用于快速接近。CA 在 Marisa 出重攻击的恢复帧时使用。角落压制时注意 Marisa 的 SA1 有打击无敌。Marisa 的伤害输出极高，一个失误可能吃 4000+ 伤害连段——保持冷静，不要贪心充电。SA2 Install 后持续压制。"
    keyMoves: ["DI", "5MP", "Go Ohsatsu"]
  - opponent: "jp"
    difficulty: "disadvantageous"
    summary: "JP 的远距离控场和地刺让充电和接近都非常困难"
    strategies:
      - "JP 是 Juri 最难打的对局之一。Torre Annihilation (地刺) 从远距离 poke 并且让你无法随意移动和充电。他的 Interdiction (虚空柱) 控制空间，配合波动让接近变得非常困难。JP 的 2LP 距离较长（1.07 range），影响你的 spacing trap。JP 的 5HP 是 -5 on block 可以用 Go Ohsatsu LK 惩罚但距离要够。充电在 JP 面前几乎不可能——他的地刺会打断。"
      - "接近方式：DR 穿波动是最快方式。6MK 在中距离跳地刺但 JP 可以反应。进入中距离后用 5MP 和 2MP 快速确认——不要站太久因为 JP 的 void 和地刺会让你很难受。JP 没有完全无敌的逆转（SA3 除外），进入近距离后可以持续压制。关键是在有 stock 时抓住每一个接近机会最大化伤害。"
      - "DI 在 JP 出地刺或重攻击时使用。DR 在波动后突进。CA 在 JP 尝试远距离攻击时用。SA2 Install 后不再需要充电可以持续进攻——这是逆转对局的关键。注意 JP 的 SA2 是完全无敌的 9f 启动逆转，在他有 meter 时要谨慎。HP Tensenrin 可以穿地刺但需要读准时机。"
    keyMoves: ["DR", "5MP", "SA2 Install"]
  - opponent: "zangief"
    difficulty: "advantageous"
    summary: "Zangief 的慢速度让 Juri 可以轻松控制距离和节奏，用确认体系碾压他"
    strategies:
      - "Zangief 的核心威胁是 SPD command grab 和 Siberian Express 装甲冲撞。他的 2LK 距离极长（1.09+ range），影响你的 spacing trap。不要在他的 command grab 范围内站太久——SPD 有 5f 启动和巨大范围。用 5MP 在他的 SPD 范围外 poke。Siberian Express 有装甲不要用单发攻击对抗——用 DI 或 Perfect Parry。不要在 Zangief 面前硬充电，他会用 SPD grab 你。"
      - "优势巨大：Zangief 是游戏中最慢的角色，Juri 可以轻松控制距离。用 5MP 和 5MK 在他的 SPD 范围外持续 poke。有 stock 时确认到 Go Ohsatsu。击倒 Zangief 后趁机充电 1-2 stock 然后继续压制。进入中距离后用 2MP/2LK + 投技混合——但不要在 SPD 范围内贪心。在角落 Fuhajin 确认体系几乎无解因为 Zangief 移动太慢无法逃脱。"
      - "DI 在 Zangief 出 Siberian Express 或重攻击时使用。DR 在他的攻击间隙突进但不要冲进 SPD 范围。CA 在 Zangief 尝试 SPD 或 lariat 时使用。注意 Zangief 的 SA1 和 SA2 都是 command grab 性质无法站防——看到超级必杀动画时立刻跳开。SA2 Install 后速度差距更大，持续用 Go Ohsatsu 压制不给他任何 command grab 机会。"
    keyMoves: ["5MP", "Go Ohsatsu", "5MK"]
  - opponent: "lily"
    difficulty: "even"
    summary: "Lily 的 Wind Stock 系统让她爆发力强，但 Juri 的确认体系更稳定"
    strategies:
      - "Lily 的核心威胁是 Wind Stock 系统——有 stock 时她的特殊技增强，Condor Wind 充满 stock 后她的进攻非常强。她的 Condor Spire 有装甲并且接近速度快。用 Shikusen LK anti-air 她的空中进攻。Lily 的 Tomahawk Buster 是对空工具但不是无敌的。注意 Lily 的 5LK 有较长距离。"
      - "优势距离在中距离：用 5MP poke。Lily 的 stock 为空时她的威胁大幅降低——趁这个窗口进攻并充电。有 stock 时 5MP → Go Ohsatsu 是核心确认。进入近距离后用 2LP/投技混合。Lily 的 OD Tomahawk Buster 有完全无敌但启动慢，可以用延迟攻击 punishes。"
      - "DI 在 Lily 出 Condor Spire 或重攻击时使用。DR 在她的充能动画时突进。CA 在 Lily 跳入时使用。注意 Lily 的 SA1 是打击/投无敌的逆转，在她有 meter 时不要 predictable。SA2 Install 后持续压制不让她有时间充 Wind Stock。HP Tensenrin 用于逆转 Lily 的 Spire 压制。"
    keyMoves: ["5MP", "Go Ohsatsu", "Shikusen LK"]
  - opponent: "cammy"
    difficulty: "even"
    summary: "双方都是高速突进角色，谁先拿到 Fuhajin stock 和 knockdown 谁就占据主动"
    strategies:
      - "Cammy 的核心威胁是 Hooligan Combination 的空中混合和 Spiral Arrow 的地面接近。她的 5LP 和 2LP 都是 4f 启动且距离较长。Cammy 的 Cannon Strike (空中 dive kick) 让她的跳跃进攻很难 anti-air。她的 Cannon Spike 是完全无敌的 DP (5f)，是强力的逆转和 anti-air。用 Shikusen LK anti-air 她的空中进攻，HP Tensenrin 逆转她的 Spiral Arrow 压制。"
      - "中距离是关键战场：用 5MP 和 2MP 试探。Cammy 的 Spiral Arrow 是 -14 on block 可以用 2LP > Go Ohsatsu 惩罚。有 stock 时 5MP → Go Ohsatsu 是核心确认。Cammy 的 OD Cannon Spike 是完全无敌的逆转——用 5MP 在最大距离 poke 让她的 DP 打空。Cammy 没有 meter 时防御薄弱可以大胆压制并充电。"
      - "DI 在 Cammy 出 Spiral Arrow 或重攻击时使用。DR 用于对攻。CA 在 Cammy 跳入或 Cannon Strike 时用 Shikusen LK anti-air。注意 Cammy 的 SA1 有打击无敌但启动较慢。SA2 Install 后你的速度和 Cammy 匹配，Go Ohsatsu 可以无限使用持续压制。"
    keyMoves: ["5MP", "Shikusen LK", "HP Tensenrin"]
  - opponent: "rashid"
    difficulty: "even"
    summary: "Rashid 的风系控场让节奏变化多端，Juri 需要适应他的速度然后用确认体系反击"
    strategies:
      - "Rashid 的核心威胁是 Arabian Cyclone (风圈) 控场和 Eagle Spike 接近。他的 5LP 距离较长（1.09+ range），影响你的 spacing trap。Rashid 的 Wing Stroke (空中冲刺) 让他的空中角度很难预测。Arabian Gust (跑动) 让他快速接近但可以被拦截。用 6MK 跳风圈，Shikusen LK anti-air 他的空中进攻。"
      - "中距离用 5MP 和 2MP 控制。Rashid 的 Eagle Spike 是 -5 on block 比较安全但可以用 2LP 或延迟攻击 counter。有 stock 时确认到 Go Ohsatsu。Rashid 的移动速度也很快，你的速度优势不如对其他角色明显。关键是保持 Fuhajin stock——不要被 Rashid 的节奏带乱，坚持自己的确认体系。"
      - "DI 在 Rashid 出重 Eagle Spike 或风圈时使用。DR 在他的攻击间隙突进。CA 在 Rashid 空中进攻时用 Shikusen LK anti-air。注意 Rashid 的 SA2 是完全无敌的逆转。角落压制时 Fuhajin 确认体系对 Rashid 有效但要注意他的 OD Eagle Spike 逃脱。SA2 Install 后可以和 Rashid 的速度对等甚至压制。"
    keyMoves: ["5MP", "Shikusen LK", "Go Ohsatsu"]
  - opponent: "a-k-i"
    difficulty: "even"
    summary: "A.K.I. 的毒系 setplay 很麻烦，但她的防御薄弱让 Juri 可以用确认体系持续压制"
    strategies:
      - "A.K.I. 的核心威胁是毒液系统和 Orbs 设置。被上毒后你的血量持续下降，需要更积极地进攻。她的 5LK 有较长距离（1.08+ range）。A.K.I. 的 Toxic Glamour (蛇行) 是快速接近工具但 -6 on block 可以用 2LP 或 Go Ohsatsu LK 惩罚。她的 Cruel Blossom (毒爆) 在毒状态下伤害极高——被上毒后不要贪心进攻。用 Shikusen LK anti-air 她的空中进攻。"
      - "优势距离在中近距离：A.K.I. 的防御工具非常有限，她没有完全无敌的逆转（只有 SA3 是完全无敌）。这意味着你有 stock 时可以大胆起身压制。用 5MP → Go Ohsatsu 持续施压，在角落 Fuhajin 确认体系对她几乎无解。A.K.I. 的 2HP 是 -4 on block 可以用 Go Ohsatsu LK 惩罚。充电时机在击倒 A.K.I. 后。"
      - "DI 在 A.K.I. 出重攻击或设置 Orbs 时使用。DR 在她的攻击间隙突进。CA 在 A.K.I. 尝试上毒的恢复帧时使用。SA2 Install 后速度优势让你可以一直压制她不让她有时间设置毒系 setplay。注意 A.K.I. 的 SA1 是打击无敌的逆转。被上毒后要积极进攻但不要乱按——她的 Punish Counter 在毒状态下伤害极高。"
    keyMoves: ["5MP", "Go Ohsatsu", "HP Tensenrin"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed 的 Psycho Flicker 让中距离对峙困难，但 Juri 的确认体系可以找到破绽"
    strategies:
      - "Ed 的核心威胁是 Psycho Flicker (中距离快速拳) 和 Psycho Rush 接近。他的 5LP 距离较长（0.94+ range）。Ed 的 Kill Dash (闪避攻击) 可以穿过你的攻击但可以被 Perfect Parry。他的 Psycho Snapper 是 counter stance 会读取你的攻击时机。用 2MP 的快速恢复 poke，5MP 在他的 Flicker 范围外确认。"
      - "接近方式：DR 穿过他的 Flicker。6MK 在中距离跳过他的低段攻击。进入 5MP 距离后用确认体系——5MP → Go Ohsatsu 是核心。注意 Ed 的 OD Psycho Upper 有完全无敌是强力的逆转——用 5MP 在最大距离 poke 让他的 DP 打空。Ed 的防御工具有限（除了 OD Psycho Upper），没有 meter 时可以大胆压制。"
      - "DI 在 Ed 出重攻击或 Psycho Rush 时使用。DR 在他的 Flicker 间隙突进。CA 在 Ed 尝试 Kill Dash 或重攻击时使用。注意 Ed 的 SA1 有打击无敌但启动较慢。角落压制时 Fuhajin 确认体系对 Ed 很有效。SA2 Install 后持续用 Go Ohsatsu 压制，Ed 的 Flicker 节奏被打乱。"
    keyMoves: ["5MP", "DR", "Go Ohsatsu"]
  - opponent: "akuma"
    difficulty: "disadvantageous"
    summary: "Akuma 的全面工具箱和极高伤害让每个失误都很致命，Juri 需要精确操作"
    strategies:
      - "Akuma 的核心威胁是 Gohadoken 控场、Shoryuken 逆转和极高伤害输出。他的 5LP 和 2LP 都是 4f 启动且距离较长。Akuma 的 HP Shoryuken 有完全无敌（5f），是极强的逆转和 anti-air。他的 5HP 有很长的距离和 forward movement 但 -7 on block 可以用 2LP 惩罚。Demon Flip (空中冲刺) 让他的跳跃角度很难预测。Akuma 的血量只有 9500（最低之一），所以你不需要太多命中就能击杀。"
      - "接近方式：6MK 跳波动，DR 穿波。Akuma 的伤害输出极高（一个连段可能 4000+），你也不能承受太多失误。用 5MP 和 2MP 在他的波动范围外确认。有 stock 时 5MP → Go Ohsatsu 是核心确认。注意 Akuma 的 OD Shoryuken 是完全无敌的——用最大距离 poke 让他打空。击倒 Akuma 后充电 1-2 stock 然后起身压制，但注意他的 SA1 (Raging Demon) 是完全无敌的 command grab。"
      - "DI 在 Akuma 出 5HP 或重攻击时使用。DR 在波动后突进。CA 在 Akuma 跳入或出重攻击的恢复帧时使用。注意 Akuma 的空中 Gohadoken 让你的 anti-air 时机更难把握。SA2 Install 后持续用 Go Ohsatsu/Shikusen 压制——Akuma 血量低所以 Install 的伤害提升特别有效。HP Tensenrin 用于逆转 Akuma 的 Demon Flip 压制。"
    keyMoves: ["5MP", "HP Tensenrin", "SA2 Install"]
  - opponent: "m-bison"
    difficulty: "even"
    summary: "M. Bison 的 Psycho Power 让他攻防兼备，Juri 需要打乱他的节奏并用确认体系反击"
    strategies:
      - "M. Bison 的核心威胁是 Psycho Cannon 波动和 Bison Warp 传送。他的 5LK 距离较长（1.09+ range），影响你的 spacing trap。Bison 的 Psycho Axe (5HP) 有装甲并且距离极长但 -5 on block 可以用 Go Ohsatsu LK 惩罚。他的 Head Press (踩踏) 可以被 Shikusen LK anti-air。Bison Warp 传送让他可以快速切换位置——不要在传送后乱出攻击，先看清位置。"
      - "优势距离在中距离：用 5MP poke，2MP counterpoke。Bison 的 Psycho Impact 是 -7 on block 可以用 2LP 确认惩罚。有 stock 时 5MP → Go Ohsatsu 是核心确认。进入近距离后注意 Bison 的 OD Blast 是打击无敌的逆转。Bison 没有完全无敌的 DP，所以你的起身压制比较安全（除了 SA3）。充电时机在击倒 Bison 后。"
      - "DI 在 Bison 出 Psycho Axe 或重攻击时使用。DR 在他的波动后突进。CA 在 Bison 尝试 Head Press 或重攻击时使用。注意 Bison 的 SA2 有打击无敌。角落压制时 Fuhajin 确认体系对 Bison 很有效因为他没有可靠的 escape 工具。SA2 Install 后持续压制不让他有时间设置 Psycho Cannon 控场。"
    keyMoves: ["5MP", "Go Ohsatsu", "Shikusen LK"]
  - opponent: "terry"
    difficulty: "even"
    summary: "Terry 的 Power Wave 和 Burn Knuckle 是稳定的工具，Juri 可以用速度和确认体系压制他"
    strategies:
      - "Terry 的核心威胁是 Power Wave 地面波动和 Burn Knuckle 接近。他的 5LP 和 2LP 都是 4f 启动且距离较长。Terry's Rising Tackle 是完全无敌的 DP (5f) 是强力的逆转。他的 Crack Shoot 是 overhead 攻击但 -5 on block 可以用 2LP 惩罚。Power Dunk 是他的 anti-air 但不是无敌的。用 6MK 跳 Power Wave，DR 穿波。"
      - "中距离用 5MP 和 2MP 控制。Terry 的 Burn Knuckle 是 -10 on block 可以用 2LP > Go Ohsatsu 惩罚。有 stock 时 5MP → Go Ohsatsu 是核心确认。Terry 的 OD Rising Tackle 有完全无敌——用 5MP 在最大距离 poke 让他的 DP 打空。Terry 没有 meter 时防御工具有限。注意 Terry 的 Power Charge 有装甲可以吸你的轻攻击。"
      - "DI 在 Terry 出 Burn Knuckle 或重攻击时使用。DR 在 Power Wave 后突进。CA 在 Terry 跳入或 Rising Tackle 的恢复帧时使用。注意 Terry 的 SA1 有打击无敌但启动慢。SA2 Install 后持续用 Go Ohsatsu 压制不让他设置 Power Wave 控场。HP Tensenrin 用于逆转 Terry 的压制。"
    keyMoves: ["5MP", "Go Ohsatsu", "6MK"]
  - opponent: "mai"
    difficulty: "even"
    summary: "Mai 的扇子和忍者工具让中距离很棘手，但 Juri 的近距离确认体系更强"
    strategies:
      - "Mai 的核心威胁是扇子飞行道具和 Musasabi no Mai (空中冲刺)。她的 5LP 和 5LK 都有较长距离（1.09+ range），让你的 spacing trap 对她效果不好。Mai 的 Kachousen (扇子投掷) 是中距离 poke 工具。她的空中进攻角度多变，需要精确的 anti-air 时机。用 Shikusen LK anti-air 她的空中进攻。Mai 的 Ryuei Jin (counter) 可以读取你的攻击时机但可以被打断。"
      - "接近方式：DR 穿扇子，6MK 跳飞行道具。进入中距离后用 5MP 和 2MP 确认。有 stock 时 5MP → Go Ohsatsu 是核心确认。Mai 的防御工具有限——进入近距离后持续用 2LP/投技混合。充电时机在击倒 Mai 后或远距离拉扯时。注意 Mai 的扇子恢复帧可以 DI。"
      - "DI 在 Mai 出重攻击或扇子时使用。DR 在她的攻击间隙突进。CA 在 Mai 空中进攻时用 Shikusen LK anti-air。注意 Mai 的 SA1 和 SA2 都有各自的用途。角落压制时 Fuhajin 确认体系对 Mai 很有效。SA2 Install 后速度优势让你更容易接近她并持续压制。"
    keyMoves: ["5MP", "DR", "Shikusen LK"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena 的治疗能力和长距离攻击让持久战不利，需要积极进攻不让她治疗"
    strategies:
      - "Elena 的核心威胁是治疗能力和 Capoeira 的长距离攻击。她的 2LP 距离较长（1.08+ range），影响 spacing trap。Elena 的 Mamelasshoru (长距离 kick) 让中距离 poke 很有效。她的 Lynx Tail (旋转踢) 是 multi-hit 攻击但恢复帧较长。最关键的是她的 Healing 能力——如果让她有时间治疗，你的伤害优势会被抵消。"
      - "对策是持续进攻不给 Elena 治疗的机会。用 5MP 和 DR 快速接近。有 stock 时 5MP → Go Ohsatsu 持续施压。Elena 的 Scrub (handstand kick) 可以避开一些低攻击——用 5MP 作为中段确认。Elena 的防御工具有限，没有完全无敌的逆转（除了 SA3），你有 stock 时可以大胆起身压制。充电时机在击倒 Elena 后——但不要充电太久让她趁机治疗。"
      - "DI 在 Elena 出重攻击或 Lynx Tail 时使用。DR 用于持续保持近距离。CA 在 Elena 尝试治疗或出重攻击时使用。SA2 Install 后不再需要充电可以持续压制——这是应对 Elena 治疗的最佳策略。角落压制时 Fuhajin 确认体系让她完全没有治疗空间。注意 Elena 的 SA1 有打击无敌。"
    keyMoves: ["5MP", "Go Ohsatsu", "SA2 Install"]
  - opponent: "volcano-handshake"
    difficulty: "even"
    summary: "对手信息有限，保持 Juri 核心打法——用 Fuhajin 确认体系控制节奏"
    strategies:
      - "Volcano Handshake 的核心招式和特性需要在对局中摸索。保持 Juri 的核心打法：用 5MP 和 2MP 在中距离控制，有 stock 时确认到 Go Ohsatsu。用 6MK 前跳接近和试探对手习惯。Shikusen LK anti-air 对手的跳跃进攻。2HK sweep 用于远距离惩罚。"
      - "接近后用 Fuhajin 确认体系建立压制。如果对手没有完全无敌的逆转，可以大胆起身压制。有 stock 时 5MP → Go Ohsatsu 是万能确认。充电时机在击倒对手后和远距离拉扯时。注意观察对手的攻击模式，找到 punishes 的窗口。"
      - "DI 在对手出重攻击或恢复帧长的招式时使用。DR 用于快速接近和确认。CA 保留到关键时刻。SA2 的 Install 状态提升后整体性能增强。HP Tensenrin 用于逆转。保持进攻节奏，不要让对手有时间适应。"
    keyMoves: ["5MP", "Go Ohsatsu", "DR"]
---
