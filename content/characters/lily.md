---
name: "Lily"
subtitle: "The Wind Caller"
overview: "Lily 是一名以 Windclad 系统为核心的速度型角色，来自 Thunderfoot 部落。她使用双战棍作为武器，通过积攒 Windclad 强化她的特殊技来获得更强的压制力和伤害。核心 gameplan 是利用高机动性和多段突进在中近距离建立连续压力，在 Windclad 状态下的 Condor Spire 和 Condor Dive 拥有更远的突进距离和更高的伤害，使她成为极具侵略性的 rushdown 角色。弱点是血量偏低（约 9500 HP）且远距离手段有限，需要主动拉近距离才能发挥最大威力。"
keyMoves:
  - name: "Condor Wind (214P)"
    input: "214+P"
    description: "Lily 的飞行道具和 Windclad 积攒工具。释放一道小型风弹，命中或被挡都可以获得 1 层 Windclad stock。LP 版本速度快但距离短，HP 版本速度慢但距离远。Windclad stock 最多可积攒 2 层，是强化其他特殊技的关键资源。214P 是 Lily 中远距离骚扰和积攒强化资源的主要手段——在立回中穿插使用可以让后续的特殊技变得更强。OD 版本 (214PP) 速度更快且命中后获得 2 层 stock。"
    startup: 18
    active: 8
    recovery: 28
    damage: 600
  - name: "Condor Spire (41236K)"
    input: "41236+K"
    description: "Lily 的核心突进技。向前高速突进用战棍横扫。LK 版本距离短但恢复快，HK 版本距离远但恢复慢。有 Windclad stock 时版本获得额外突进距离和伤害（消耗 1 stock）。Windclad Condor Spire 的突进距离约增加 50%，使得远距离突袭成为可能。这是 Lily 压制的基石——在 Windclad 状态下从远距离突然突入近身，配合 strike/throw 混合让对手难以反应。OD 版本 (41236KK) 自带 Windclad 效果且全程有 armor。"
    startup: 10
    active: 6
    recovery: 22
    damage: 800
  - name: "Condor Dive (空中 214K)"
    input: "空中 214+K"
    description: "Lily 的空中俯冲攻击。从空中急速下降用战棍劈砸对手。LK 版本角度较平适合远距离空对地，HK 版本角度较陡适合近距离交叉。有 Windclad stock 时获得更快的下降速度和额外伤害（消耗 1 stock）。Windclad Condor Dive 的速度提升让对手更难 anti-air 反应，是空中进攻的核心变化手段。注意 Condor Dive 有较大的恢复帧（-14 on block），被挡后容易被 punish。用于 jump-in 混合——对手预期普通空中攻击时出 Condor Dive 改变落地时机。"
    startup: 8
    active: 4
    recovery: 28
    damage: 900
  - name: "Rising Thunder (623P)"
    input: "623+P"
    description: "Lily 的对空技和 invincible reversal。向上跃起用战棍上挑。LP 版本 6f startup 有 1-4f invincibility，是快速 anti-air 的首选。HP 版本伤害更高但对空判定时间窗口更窄。有 Windclad stock 时 623P 获得额外的攻击段数和伤害（消耗 1 stock）。OD 版本 (623PP) 拥有 1-8f 完全无敌是最可靠的 wake-up reversal。Rising Thunder 是 Lily 防守端最重要的工具——没有 OD 版本时 623P 的 invincibility 有限，需要更精准的 timing。"
    startup: 6
    active: 4
    recovery: 32
    damage: 1000
  - name: "War Path (214K)"
    input: "214+K（地面）"
    description: "Lily 的前冲步法。向前滑步一小段距离，LK 版本短距离快速滑步，HK 版本长距离滑步。有 Windclad stock 时获得上半身无敌效果（消耗 1 stock）。War Path 本身没有攻击判定但可以取消到其他特殊技——War Path → Condor Spire 是常见的突进组合。Windclad War Path 的无敌效果让它可以穿过对手的单发 poke 然后接 Condor Spire 突袭。OD 版本 (214KK) 自带无敌且可以 cancel 到任何特殊技。"
    startup: 8
    active: 2
    recovery: 18
    damage: 0
  - name: "5MP (站立中拳)"
    input: "5MP"
    description: "Lily 的核心中距离 poke 工具。6f startup 快速出拳，+4 on hit，-2 on block。range 适中，是 Lily footsies 的主要武器。5MP 命中后的 +4 frame advantage 让 Lily 有足够的窗口进行 follow-up——walk forward 进入 strike/throw range 或接 2MP 确认 combo。5MP → 2MP 是 Lily 中距离的 basic hit confirm，命中后可以接 Condor Spire 收尾。在 DR cancel 后 5MP 是最常用的中间确认按钮。"
    startup: 6
    active: 3
    recovery: 14
    damage: 450
  - name: "2MK (蹲中踢)"
    input: "2MK"
    description: "Lily 的远距离下段 poke。8f startup，-3 on block。range 比 5MP 远是 Lily 最远的地面 normal 之一。2MK 是 footsies 的重要工具——在 max range 可以安全 poke 对手而不会被 punish。2MK → DR cancel 是 Lily 从远距离启动进攻的标准手段之一。2MK 也是 low profile 工具——可以躲过一些高位的攻击然后 counter hit。配合 5MP 形成中距离上下段二择 poke 体系。"
    startup: 8
    active: 4
    recovery: 16
    damage: 400
  - name: "5HP (站立重拳)"
    input: "5HP"
    description: "Lily 的中远距离重攻击。10f startup，有不错的 range 但 -6 on block。5HP 是确认 combo 的起点——命中后可以 cancel 到 Condor Spire 或 DR cancel 延伸 combo。伤害约 700 在 normal 中属于中等偏高。5HP 的用途主要是作为 combo starter 和 DR cancel 的发起者——不推荐在 neutral 中随意使用因为恢复帧较长容易被 punish。在确认对手的恢复帧时使用 5HP punish 是高效的选择。"
    startup: 10
    active: 4
    recovery: 22
    damage: 700
  - name: "SA1 (Raging Typhoon)"
    input: "236236+P"
    description: "Lily 的 Level 1 Super Art。9f startup，约 2200 伤害，有 1-7f 完全无敌。SA1 是旋转风暴攻击——Lily 以自身为中心产生旋风卷起对手。作为 anti-air 非常有效，invincible startup 可以穿过任何 jump-in attack。也可以作为 combo ender——从 Condor Spire 命中后 cancel 接 SA1 增加总伤害。SA1 命中后造成 knockdown 给 Lily okizeme 的机会。Level 1 消耗相对较低可以更频繁使用。"
    startup: 9
    active: 10
    recovery: 36
    damage: 2200
  - name: "Critical Art (Tatankase)"
    input: "214214+K"
    description: "Lily 的 Critical Art（Level 3 Super）。8f startup，约 3800 伤害（CA 版本 4200+），完全无敌 1-12f。动画展示 Lily 召唤 Thunderfoot 部落的灵魂之力，以狂风和战棍连击最终将对手击飞。CA 是 Lily 的终极逆转和 combo ender。作为 combo 收尾可以从任何特殊技 cancel 接 CA 最大化伤害。CA 的 invincibility 使其成为可靠的 wake-up reversal——在低血量时逆转局面。保留 CA 到关键时刻可以给对手巨大的心理压力。"
    startup: 8
    active: 8
    recovery: 48
    damage: 3800
tips:
  - "开局策略：Lily 开局应立即用 214P (Condor Wind) 积攒第一层 Windclad stock。有了 stock 后 Lily 的所有特殊技都获得强化——这是开局最重要的优先事项。如果对手开局远距离放波，用 214P 对波的同时积攒 stock。如果对手 rush-in 接近，用 5MP 或 2LP 快速确认阻挡然后找机会 counter。有了 1-2 层 stock 后开始主动进攻——Windclad Condor Spire 的突进距离让远距离突袭成为可能。开局节奏：214P 积攒 stock → Windclad 突进接近 → 贴身 strike/throw 混合。"
  - "核心连段路线：Lily 的 combo 以快速确认和 DR 延伸为核心。标准确认：2LP → 2LP → LP Condor Spire（轻确认收尾）。中距离确认：5MP → 2MP → Condor Spire（中段确认）。DR 确认：2MK → DR → 5MP → 5HP → Condor Spire（远距离启动，约 2800+ 伤害）。角落确认：5HP → DR → 5MP → 2MP → SA1（角落高伤害收尾）。Anti-air 确认：623P (Rising Thunder) 命中 → SA1。Strike/Throw 混合：2LP (+5 on hit) 命中后 → 214K (War Path) 突进 strike 或 throw 混合。有 Windclad 时 combo 伤害更高因为特殊技获得额外伤害。"
  - "立回核心：Lily 的 footsies 围绕快速 poke 和突进展开。核心体系：远距离用 2MK 下段 poke 和 214P 积攒 stock，中距离用 5MP/2MP 快速确认，近距离用 Windclad Condor Spire 突袭建立 strike/throw 混合。5MP 是立回的基石——6f startup 快速安全，命中后 +4 有 follow-up。2MK 是更远距离的安全 poke——max range 难以被 punish。214P 在对手无法接近你时积攒 stock 为下一波进攻做准备。核心目标：保持 stock 充足，寻找 Windclad 突进的机会。每次 poke 命中后 walk forward 缩短距离。"
  - "Drive Rush 使用策略：Lily 的 DR 是进攻的核心引擎。主要用途：1) 远距离突进——2MK → DR cancel 瞬间拉近距离进入 strike/throw range。2) 延伸连段——5HP → DR → 5MP → 2MP → Condor Spire 增加伤害和 positional advantage。3) 压制维持——2LP → DR cancel 保持 +frame 继续压制。Drive Impact 在 Lily 的 gameplan 中作为打破对手 poke 节奏的工具——DI 的 armor 穿过单发 poke 后 wall splat 给 Lily 贴身的机会。Drive Reversal 是 Lily 被压在角落时脱困的必备工具——Lily 低血量不能承受太多 corner pressure。Drive Gauge 管理关键：保留足够 meter 给 DR 突进和 Drive Reversal。"
  - "应对不同距离：远距离（全屏到 2/3 屏）Lily 的选项有限——214P 积攒 stock 是主要手段，偶尔用 max range 2MK poke。中距离（1/3 到 1/2 屏）是 Lily 开始发力的距离——5MP/2MP 快速 poke 建立 threat，214P 继续积攒 stock。有 Windclad 时这个距离的 Condor Spire 可以突然突入近身。近距离（1/3 屏以内）是 Lily 最强的距离——快速的 2LP/5LP 确认配合 throw 混合让对手难以防守。Windclad Condor Dive 从空中突然袭击增加 mix-up 维度。核心原则：始终积极寻找接近机会，Lily 在远距离几乎无法造成威胁。"
  - "Windclad 管理技巧：Windclad stock 是 Lily 的核心资源，最多积攒 2 层。管理原则：1) 在 neutral 中用 214P 积攒至少 1 层 stock 再进攻——无 stock 的 Condor Spire 突进距离短很多。2) 2 层 stock 时可以连续使用两次强化特殊技（如 Windclad Condor Spire → Windclad Condor Dive），是高压力进攻的窗口。3) stock 不会随时间消失但被 hit 时会损失——所以有 stock 时要积极进攻不要拖延。4) OD 特殊技自带 Windclad 效果不消耗 stock——在需要 stock 但来不及积攒时用 OD 版本替代。5) 214P 命中和被挡都能获得 stock，不需要冒险也能积攒资源。"
  - "防守端的注意事项：Lily 有约 9500 HP 是游戏中的低血量梯队——不能承受太多错误。623P (Rising Thunder) 是主要 anti-air 工具但 invincibility 有限（LP 版本只有 1-4f invincible），需要精准 timing。OD Rising Thunder (623PP) 有 1-8f 完全无敌是最可靠的 wake-up reversal。SA1 的 invincible startup 可以作为应急 anti-air 和 reversal。Drive Reversal 是 Lily 脱困的核心——消耗 2 bars 创造距离重新开始 neutral。Perfect Parry 也是建立 Drive 优势的重要工具。低血量时保留 CA 作为终极逆转——4200+ 伤害可以瞬间改变局面。"
matchups:
  - opponent: "luke"
    difficulty: "disadvantageous"
    summary: "Luke 的全能工具箱和快速确认让 Lily 的突进变得危险——Flash Knuckle 压制是核心威胁"
    strategies:
      - "Luke 的核心威胁是 HP Perfect Flash Knuckle (+4 on block) 的强压制循环和 Sand Blast 波动控制。在中距离 Luke 的 5MP (5f) 和 2MP 速度都很快，Lily 的 5MP (6f) 在对拼中不占优势。波动方面 Sand Blast recovery 短让 Lily 的 214P 对波变得困难。需要保持 stock 充足利用 Windclad Condor Spire 的额外突进距离从更远的位置突入——这样可以避开 Luke 的 5MP 范围直接贴身。Luke 的 2HK sweep 是 -9 on block 可以用 DR → 5MP → Condor Spire 惩罚。注意 Luke 的 OD Flash Knuckle 作为 reversal 会打断你的 Condor Spire 突进。"
      - "接近 Luke 的关键是利用 Windclad 的额外距离。标准路径：先用 214P 积攒 1-2 层 stock → 在 Luke 放 Sand Blast 的间隙用 Windclad Condor Spire 突入近身。一旦贴身用 2LP → 2LP → strike/throw 混合——Luke 没有 invincible DP（只有 OD Flash Knuckle 有限 invincibility），所以 strike/throw 混合非常有效。如果 Luke 习惯 block 等 OD Flash Knuckle reversal，刻意 delay 你的攻击 bait 出 OD 然后用 block → 5MP → combo 惩罚。中距离用 5MP → 2MP 确认 poke 建立 threat，但不要在 Luke 的 5MP range 内恋战。"
      - "DI 在 Luke 出 HP Sand Blast 或 Perfect Flash Knuckle 时使用——这些单发动作可以被 DI 吸掉。DR 主要用于从远距离突入和延伸连段。Luke 的 CA (Pale Rider) 有 invincibility 不要在有 CA 时 predictable 进攻。SA1 在 Luke jump-in 或 DR 接近时作为 reversal 使用。CA 在 Luke predictably block 时作为高伤害 combo ender 使用。Drive Reversal 在被 Luke 的 Flash Knuckle loop 压在角落时极其关键——Lily 的低血量不能承受太多 corner pressure。对局节奏：214P 积攒 stock → 找波动间隙 Windclad 突进 → 贴身 strike/throw 混合 → 注意 OD Flash Knuckle reversal。"
    keyMoves: ["Windclad Condor Spire", "5MP", "214P"]
  - opponent: "ryu"
    difficulty: "even"
    summary: "波动战中的 stock 积攒和突进时机——Denjin 系统增加了波动战难度但 Lily 的突进回报可观"
    strategies:
      - "Ryu 的核心威胁是 Denjin Charge 系统和全面的 footsies。Denjin Hadoken 有 armor 属性——不要用 Condor Spire 直接穿 Denjin Hadoken，会被 armor 吸掉后 counter。普通 Hadoken 时用 214P 对波积攒 stock，同时 walk forward 缩短距离。Ryu 的 5HK 和 sweep range 都很远但负帧较大，可以用 2MK max range 打他的恢复帧。Ryu 的 LP Shoryuken 是 6f invincible DP——有 meter 时他不怕你的 jump-in 和 Condor Dive，需要更多 ground approach。Ryu 没有 Denjin 时 Hashogeki 是 -4 on block，可以用 5MP 或 walk forward throw 惩罚。"
      - "接近 Ryu 的核心是在波动节奏中找到突进窗口。方法：214P 对波积攒 stock → 在 Hadoken 间隙 Windclad Condor Spire 突入 → 贴身 strike/throw 混合。Ryu 在放 Denjin Hadoken 时相对安全可以大胆突进——Denjin 的 startup 比 Hadoken 慢。一旦贴身 Ryu 面临 strike/throw 混合——虽然他有 Shoryuken 但 predictable 的 DP 会被 block 后 5MP → combo 严重惩罚。如果 Ryu 习惯 Shoryuken，bait 出来用 block → 5MP → 2MP → Condor Spire 确认 combo。Ryu 的 5MP (5f) 在近距离交换中比 Lily 的 5MP (6f) 快，需要在 strike/throw 混合中随机 throw 减少正面交换的频率。"
      - "DI 在 Ryu 出 Denjin Hadoken 或 sweep 时使用。DR 主要用于从远距离突入 strike/throw range 和延伸连段。Ryu 的 CA (Shin Shoryuken) 有完全无敌不要在有 CA 时 predictable jump-in。SA1 作为 anti-air 在 Ryu jump-in 时使用。CA 在 Ryu predictably block 时使用。Drive Reversal 在被 Ryu 的 Denjin 压力困在角落时使用。对局节奏：214P 对波积攒 stock → Hadoken 间隙 Windclad 突进 → 贴身后 strike/throw 混合 → bait Shoryuken 用 combo 惩罚。"
    keyMoves: ["214P", "Windclad Condor Spire", "5MP"]
  - opponent: "chun-li"
    difficulty: "disadvantageous"
    summary: "Chun-Li 的超长距离 poke 和速度让 Lily 的接近非常困难——需要精准的 DR 和 DI 时机"
    strategies:
      - "Chun-Li 的核心威胁是超长距离 poke (5MP, 2MP, 5HP) 和 Serenity Stream 姿态。她的 5MP startup 快且 range 极长，在中距离 poke 战中 Lily 的 5MP 完全处于劣势。Chun-Li 的 Hazanshu overhead 可以在中距离突然打乱节奏。Kikoken 波动配合她的 poke 足以阻止 Lily free 接近。Serenity Stream 姿态的 low profile 可以躲过 5MP——当她进姿态时切 2MK (下段) 打她。Chun-Li 的 2LP 是 4f 比 Lily 的快，在近距离交换中占优。需要更多依赖 DR 和 Windclad 突进来创造接近机会。"
      - "接近 Chun-Li 需要多工具配合。标准 walk-in 在面对 Chun-Li 的高频 poke 时不够——需要穿插 DR cancel 突进和 Windclad Condor Spire。2MK → DR → 5MP → Condor Spire 是从远距离突入的标准路线。DI 在 Chun-Li 出 2HP 或 sweep 时使用——这些单发 poke 可以被 DI 吸掉然后 wall splat 给你 walk-in 时间。一旦进入近身 range，Chun-Li 没有 invincible DP（只有 OD Tensho Kicks），所以 strike/throw 混合非常有效。用 2LP → throw 和 2LP → 2LP → Condor Spire 的混合打她的 delay tech 和 jump。注意 Chun-Li 的速度让她可以快速 backdash 拉开距离——每次 knockdown 后要立刻 walk forward 缩短距离。"
      - "DI 在 Chun-Li 出 2HP、sweep 或 Serenity Stream heavy attack 时使用。DR 是最重要的接近手段——在这个对局中 Lily 需要 DR 来弥补 walk-in 的困难。SA1 作为 anti-air 在 Chun-Li jump-in 时使用。CA 在 Chun-Li predictably block 时使用。Drive Reversal 在被她的 Hundred Lightning Kicks 压制时使用。Perfect Parry 是建立 Drive 的关键——吸她的 poke 建立 meter 用于 DR 接近。对局节奏：更多依赖 DR/DI 创造接近机会 → 一旦贴身 strike/throw 混合 → 不让她重新拉开距离 → 用 Windclad 突进追击她的 backdash。"
    keyMoves: ["DR 接近", "Windclad Condor Spire", "2MK"]
  - opponent: "jamie"
    difficulty: "advantageous"
    summary: "趁 Jamie 喝酒等级低时积极突进——Level 0-1 的 Jamie 对 Lily 的 rushdown 几乎没有抵抗力"
    strategies:
      - "Jamie 的威胁随喝酒等级增长但初始很弱。Level 0-1 时趁窗口快速用 Windclad Condor Spire 突进接近——Jamie 的 normal range 短、伤害低，在远距离无法阻止 Lily 接近。Jamie 试图 drink 升级时是最脆弱的时刻——用 Condor Spire 突进或直接 walk-in 趁他 drink animation 贴身。Jamie 没有 invincible DP（只有 OD The Devil Inside 有限 invincibility），一旦 Lily 贴身就是 strike/throw 混合的自由发挥。开局先 214P 积攒 stock 然后立刻 Windclad 突进——不要给 Jamie drink 的空间。"
      - "开局策略：先用 214P 快速积攒 stock 然后立刻进攻。如果 Jamie 开局试图 drink，用 Windclad Condor Spire 突进打断他的 drink animation。Level 0-1 时大胆用 5MP 和 2MP poke——Jamie 的 normal 无法有效阻止你。5MP 命中后 walk forward 进入 strike/throw range 开始混合。如果 Jamie 习惯用 OD The Devil Inside 逆转，bait 它出来后用 block → 5MP → 2MP → Condor Spire 惩罚。Jamie Level 3+ 时威胁大增（额外 follow-up mix-up、更高伤害），需要更小心他的 mix-up 但仍保持进攻压力——Jamie 的 HP 也不高每波 combo 都很伤。"
      - "DI 在 Jamie 出 heavy attack 或 drink attempt 时使用。DR 用于快速接近和延伸连段。Jamie 的 CA 有完全无敌不要在有 CA 时 predictable。SA1 在 Jamie jump-in 或 DR 接近时反制。CA 在 Jamie predictably block 时使用。Drive Reversal 在被他的 drink-powered 压制困住时使用。对局节奏：开局快速积攒 stock → 立刻 Windclad 突进施压 → 打断每次 drink 尝试 → 贴身后 strike/throw 混合碾压。"
    keyMoves: ["Windclad Condor Spire", "5MP", "214P"]
  - opponent: "guile"
    difficulty: "disadvantageous"
    summary: "Guile 的 Sonic Boom 控制和 Flash Kick anti-air 是 Lily 最困难的测试——需要极端耐心和精准时机"
    strategies:
      - "Guile 是 Lily 最不利的对局之一。Sonic Boom 的 recovery 极短让 Guile 可以在波动间隙 follow-up，Lily 的 Condor Spire 突进可能在穿波后面临 Flash Kick。Sonic Blade（柱子）+ Sonic Boom 组合让突进更加困难。Flash Kick anti-air 极其可靠，几乎完全封死了 Lily 的 Condor Dive 空中选项。Guile 的 charge 速度快意味着他始终可以出 Sonic Boom 和 Flash Kick。核心方法：用 214P 对波积攒 stock（不需要穿波，只需在安全距离积攒），找波动间隙 Windclad Condor Spire 突进，用 DR 从中距离突入。绝对不要 predictable jump-in——Flash Kick 几乎一定能打到你。"
      - "接近 Guile 的路径非常狭窄。标准方法是：214P 在安全距离对波积攒 stock → 在 Sonic Boom 间隙 Windclad Condor Spire 突进（Windclad 的额外距离让你从更远处突入避开 Guile 的 poke range）。当距离缩短到中距离后用 5MP poke Guile 的 walk-in。DR 是最重要的接近工具——2MK → DR → 5MP → Condor Spire 是从远距离突入的标准路线。如果 Guile 用 Sonic Blade 柱子，DI 可以打掉柱子并给他压力。一旦进入近身 Guile 面临致命威胁——他虽然有 Flash Kick 但 predictable 的 Flash Kick 会被 block 后 5MP → combo 严重惩罚。用 strike/throw 混合让 Guile 猜测。"
      - "DI 在 Guile 出 Sonic Blade 或 heavy Sonic Boom 时使用。214P 是积攒 stock 的核心工具——不需要直接穿波只需在安全距离积攒资源。DR 是最重要的接近手段。Guile 的 CA (Sonic Hurricane) 有 invincibility。SA1 在 Guile jump-in（罕见）或 DR 接近时反制。CA 在 Guile predictably block 时使用。Drive Reversal 在被 Guile 的 Sonic Boom follow-up 压制时使用。核心心态：极端耐心积攒 stock → 找波动间隙突进 → 一旦贴身 strike/throw 混合的回报是毁灭性的。"
    keyMoves: ["214P", "DR 接近", "Windclad Condor Spire"]
  - opponent: "kimberly"
    difficulty: "even"
    summary: "Kimberly 的速度和传送让接近节奏变复杂但双方低血量意味着谁先贴身谁占优"
    strategies:
      - "Kimberly 的核心威胁是传送混合和 speed。她的 teleport 让突进 timing 变得更难读——你 Windclad Condor Spire 突进时她可以 teleport 绕过。但 teleport 的 start-up 有约 20f+ 的窗口，如果预测到她的 teleport 方向可以用 5MP 打她的 landing。Kimberly 的 run-stop 混合在近距离是主要威胁——用 2LP 快速确认或 Rising Thunder 打她的 run-stop timing。Kimberly 的幻影 dive kick 可以用 Rising Thunder anti-air 或 5MP 打她的 dive angle。Kimberly 的 5HK 是 -6 on block 可以用 5MP 确认惩罚。双方低血量 (Kimberly 约 9500, Lily 约 9500) 意味着每次 combo 确认都很致命。"
      - "核心策略是保持进攻压力但随时准备应对 teleport。如果 Kimberly 习惯 teleport 到你身后，在她 landing 时转身 5MP → combo 打她的 landing 帧。如果她习惯 run-stop 混合用 2LP 或 Rising Thunder 打她的 run animation。Kimberly 没有 invincible DP（只有 OD Bushin Senpukyaku），一旦 Lily 贴身 strike/throw 混合同样致命。用 Windclad Condor Spire 从远距离突袭可以 catch 她 teleport 的 startup。积攒 stock 后的突进速度提升让 teleport 更难反应——抢在她 teleport 完成前到达近身。"
      - "DI 在 Kimberly 出 heavy run-stop attack 或幻影 dive kick 时使用。DR 用于追击她 teleport 后拉开距离和延伸连段。SA1 在她 teleport landing 或 DR 接近时使用。CA 在她 predictably block 时使用。Drive Reversal 在被她的 teleport 混合压制时使用。Rising Thunder 在她 jump-in 或 air approach 时使用。对局节奏：保持 stock 充足 → Windclad 突进跟进她的 teleport → 贴身后致命 strike/throw 混合 → 利用双方低血量快速终结。"
    keyMoves: ["Windclad Condor Spire", "5MP", "Rising Thunder"]
  - opponent: "juri"
    difficulty: "even"
    summary: "Juri 的 Fuha stock 系统让她在有 stock 时威胁大增——趁她充能时积攒自己的 Windclad stock"
    strategies:
      - "Juri 的核心是 Fuha stock 系统。她在 stock 充能时（214K 动作）是相对脆弱的——这是 Lily 积攒自己的 Windclad stock 并接近的最佳窗口。有 Fuha stock 时 Juri 的 623HP (DP) 和 214HP (hashogeki) 消耗 stock 变强。3 stock 的 Juri 是最危险的——注意她的 stock 数量调整策略。Juri 的 5HP 是 -7 on block 可以用 5MP max range 打她的恢复帧。中距离用 5MP 和 2MK poke，Juri 的 5MP 是 5f 速度很快需要保持距离。Juri 的 Ryodansatsu (sweep) 是 -9 on block 可以用 DR → 5MP → Condor Spire 惩罚。"
      - "接近 Juri 的关键是趁她充能 Fuha stock 时同步积攒 Windclad stock 并 walk-in。每次 Juri 出 214K 充能就向她 walk-in 一步并出 214P 积攒自己的 stock。5MP 和 2MK 在中远距离持续 poke，每次确认后 walk forward。如果 Juri 习惯用 Fuha-enhanced move 接近，在 poke 后准备 block 然后用 strike/throw 混合反击。一旦进入近身 Juri 的 OD DP 是完全 invincible 的逆转——需要 mix strike 和 throw 不能 predictable。用 2LP strike 和 throw 的随机混合打她的 delay tech 和 jump。Windclad Condor Spire 的额外突进距离可以帮助从更远处突入减少在 Juri 5MP range 内暴露的时间。"
      - "DI 在 Juri 充 Fuha stock 或出 sweep 时使用。DR 用于从远距离突入近身 range 和延伸连段。SA1 在 Juri DR 接近或 jump-in 时反制。Juri 的 CA 有完全无敌。Drive Reversal 在被她的 Fuha rush 压制时使用。CA 在 Juri predictably block 时使用。对局节奏：趁她充能时同步积攒 stock → walk-in 接近 → Windclad 突进 → 贴身后混合 strike/throw → 注意 Fuha stock 数量调整压力。"
    keyMoves: ["214P", "Windclad Condor Spire", "5MP"]
  - opponent: "ken"
    difficulty: "even"
    summary: "Ken 的 Jinrai Kick 压力和 Dragonlash 突进需要精准应对——Windclad 突进可以抢回进攻节奏"
    strategies:
      - "Ken 的核心威胁是 Jinrai Kick (236K) 压力循环和 Dragonlash (63214K) 突进。HP Jinrai Kick 是 +2 on block 的持续压力工具——被 Ken 贴身后很难脱困。Dragonlash 是有 armor 的突进攻击可以用 DI 反制但 timing 要求高。Ken 的 5MP 和 2MP 都是快速的确认工具。波动方面 Ken 的 Hadoken 是标准波动可以用 214P 对波积攒 stock。Ken 有 invincible DP (LP Shoryuken, 6f)——有 meter 时 jump-in 和 Condor Dive 很危险。Ken 的 2HK sweep 是 -9 on block 可以用 DR → combo 惩罚。"
      - "应对 Ken 的关键是处理好他的 Jinrai Kick 压力循环。HP Jinrai Kick +2 on block 后 Ken 通常会接 2LP 或 throw——用 Rising Thunder (623P) interrupt 他的 follow-up timing 或 Drive Reversal 创造距离。在 Ken 试图用 Dragonlash 突进时用 DI 打掉他的 armor 然后 wall splat 惩罚。进攻端用 214P 积攒 stock → Windclad Condor Spire 从远距离突入。一旦贴身 Ken 的 DP 是威胁但 predictable DP 会被 block 后 combo 惩罚。用 2LP → throw 和 2LP → 2LP → Condor Spire 的混合让 Ken 猜测。中距离用 5MP → 2MP 确认 poke 建立 threat。"
      - "DI 在 Ken 出 Dragonlash 或 sweep 时使用。DR 用于突进接近和延伸连段。Ken 的 CA (Shin Kurenai) 有完全无敌。SA1 作为 anti-air 和 reversal 在 Ken jump-in 或 DR 接近时使用。CA 在 Ken predictably block 时使用。Drive Reversal 在被 Ken 的 Jinrai Kick loop 压在角落时关键。对局节奏：214P 积攒 stock → Windclad 突进抢回进攻节奏 → 贴身 strike/throw 混合 → 小心他的 DP reversal。"
    keyMoves: ["Windclad Condor Spire", "5MP", "Rising Thunder"]
  - opponent: "blanka"
    difficulty: "even"
    summary: "Blanka 的 Electric Thunder 和 Blanka-chan 玩具让接近变得棘手——Windclad 突进是破解关键"
    strategies:
      - "Blanka 的核心威胁是 Electric Thunder (快速电球) 和 Blanka-chan Bomb (遥控玩具)。Electric Thunder 的 recovery 短且可以作为 poke 使用——Lily 的 Condor Spire 突进可能会被 Electric Thunder 打断。Blanka-chan Bomb 在地面缓慢移动可以阻止 Lily 的 walk-in。Blanka 的 Vertical Roll (空中 41236K) 是空中突进有 armor 属性——Rising Thunder 可以打他的 roll 但 timing 要精准。Blanka 的 5HP range 远且可以 low profile 一些高位攻击。Blanka 的 HP 是标准的 10000。需要用 Windclad Condor Spire 的额外距离从 Electric Thunder 的 range 外突入。"
      - "接近 Blanka 的关键是绕过他的 Electric Thunder 和 Blanka-chan 玩具。用 214P 在 Blanka-chan Bomb 接近时积攒 stock——它飞过来时你有充足时间出 214P。有 Windclad stock 后从远距离用 Condor Spire 突入——Windclad 的额外距离可以跳过 Electric Thunder 的 range 直接贴身。如果 Blanka 习惯 Vertical Roll，用 Rising Thunder 迎击。Blanka 没有 invincible DP（只有 OD Rising Impact 有限 invincibility），贴身后 strike/throw 混合非常有效。5MP → 2MP 确认在中距离建立 threat。Blanka 的 2HK sweep 是 -10 on block 可以用 combo 惩罚。"
      - "DI 在 Blanka 出 Blanka-chan Bomb startup 或 heavy Electric Thunder 时使用。DR 用于突进接近和延伸连段。SA1 在 Blanka Vertical Roll 或 DR 接近时使用。CA 在 Blanka predictably block 时使用。Drive Reversal 在被 Blanka 的 Electricity 压制时使用。Rising Thunder 是应对 Blanka Vertical Roll 的核心。对局节奏：214P 积攒 stock → 绕过 Blanka-chan → Windclad 突进 → 贴身 strike/throw 混合 → 注意 Vertical Roll 空中突袭。"
    keyMoves: ["Windclad Condor Spire", "214P", "Rising Thunder"]
  - opponent: "dhalsim"
    difficulty: "disadvantageous"
    summary: "Dhalsim 的超远距离 poke 和 Yoga Fire 让 Lily 的接近极其困难——需要极致的 patience 和 DR 突进"
    strategies:
      - "Dhalsim 是 Lily 最不利的对局之一。Yoga Fire 配合他的超远 poke (5HP, 2HP, 5MK) 让 Lily 几乎无法安全 walk-in。Dhalsim 的 5HP range 极远可以轻松打掉 Lily 的 walk-in 尝试。Yoga Arch (抛物线波动) 可以打 jump-in 让空中路线也不安全。Dhalsim 的 Drill Kick (空中 214P) 从空中突然下降攻击可以 punish predictable 的 214P 积攒。核心方法：极端耐心用 214P 积攒 stock，用 DR 和 DI 创造突进机会，找 Dhalsim poke 的间隙 Windclad Condor Spire 突入。这个对局 Lily 需要付出大量 effort 才能接近但一旦贴身 Dhalsim 极其脆弱。"
      - "接近 Dhalsim 的路径极其狭窄但不是不存在。方法：214P 在安全距离积攒 stock → 在 Dhalsim 出 Yoga Fire 后的 recovery 窗口 Windclad Condor Spire 突入（Windclad 的额外距离是关键）。DR 是最重要的工具——2MK → DR → 5MP → Condor Spire 从远距离突入。DI 在 Dhalsim 出 5HP 或 2HP poke 时使用——这些长 range 单发可以被 DI 吸掉。Dhalsim 的 5HP 是 -8 on block 如果能走到这个距离可以用 combo 惩罚。一旦贴身 Dhalsim 没有任何 invincible reversal——OD Yoga Inferno 只有有限 invincibility。strike/throw 混合是 free meal。问题是 Dhalsim 有大量工具阻止你到达这个距离。"
      - "DI 在 Dhalsim 出 5HP、2HP 或 Yoga Fire 时使用。DR 是最重要的接近手段——没有 DR 的突进 Lily 几乎无法安全接近 Dhalsim。SA1 作为 Dhalsim Drill Kick 的 anti-air 使用。CA 在 Dhalsim predictably block 时使用。Drive Reversal 在被 Dhalsim 的 Yoga Flame 压制时使用。Perfect Parry 吸 Yoga Fire 建立 Drive 用于 DR 接近。核心心态：极端耐心积攒 stock → 找波动间隙 Windclad 突进 → 一旦贴身 strike/throw 混合是毁灭性的——Dhalsim 近身几乎没有还手之力。"
    keyMoves: ["DR 接近", "Windclad Condor Spire", "214P"]
  - opponent: "e-honda"
    difficulty: "advantageous"
    summary: "Honda 的慢速 poke 和大目标让 Lily 的突进和 combo 容易命中——需要小心 Sumo Headbutt 和 Hundred Hand Slap"
    strategies:
      - "Honda 的核心威胁是 Sumo Headbutt (但t统) 和 Hundred Hand Slap (百裂张手)。Sumo Headbutt 是有 armor 的突进可以用 DI 反制——当 Honda predictable 地出 Headbutt 时用 DI 打掉然后 wall splat。Hundred Hand Slap 在近身是持续压力——用 Rising Thunder interrupt 或 Drive Reversal 创造距离。Honda 的 poke 速度慢（5MP 约 8f, 5HP 约 12f），Lily 的 5MP (6f) 在中距离 poke 战中占优。Honda 的 2HK sweep 是 -14 on block 可以用 full combo 惩罚。Honda 的大体型让 Lily 的 combo 更容易命中。核心策略：用速度优势在中距离建立 poke 优势然后 Windclad 突进贴身。"
      - "进攻端非常直接：214P 积攒 stock → Windclad Condor Spire 突进贴身。Honda 没有 invincible DP（只有 OD Sumo Smash 有限 invincibility），贴身后 strike/throw 混合非常有效。5MP → 2MP 确认在中距离 poke Honda 每次都赚——Honda 的 normal 速度跟不上。如果 Honda 习惯 Sumo Headbutt 突进，准备好 DI 打掉然后 wall splat → combo 惩罚。Honda 的 Hundred Hand Slap 是近身压力但 predictable 的 HHS 可以用 Rising Thunder interrupt。注意 Honda 的 command grab (Orochi Breaker)——如果 Honda 试图在近身突然出 command grab 用 jump 或 backdash 避开然后 combo 惩罚。"
      - "DI 在 Honda 出 Sumo Headbutt 或 heavy poke 时使用——Sumo Headbutt 的 armor 会被 DI 吸掉。DR 用于延伸连段和突进接近。SA1 在 Honda jump-in 或 DR 接近时反制。CA 在 Honda predictably block 或在角落时使用。Drive Reversal 在被 Hundred Hand Slap 压制时使用。Rising Thunder 在 Honda 空中进攻时使用。对局节奏：速度优势中距离 poke → Windclad 突进贴身 → strike/throw 混合碾压 → DI 打掉 Sumo Headbutt 突进。"
    keyMoves: ["5MP", "Windclad Condor Spire", "DI"]
  - opponent: "dee-jay"
    difficulty: "even"
    summary: "Dee Jay 的混合压力和 Jackknife Maximum 让接近有风险——Windclad 突进需要选对时机"
    strategies:
      - "Dee Jay 的核心威胁是 Jackknife Maximum (623K) anti-air 和 Air Slasher 波动。Jackknife Maximum 是优秀的 invincible DP 让 Lily 的空中进攻非常危险。Air Slasher 的 recovery 短让 214P 对波难度增大。Dee Jay 的 5MP 是 5f 快速且 range 适中在中距离 poke 战中速度不输 Lily。Dee Jay 的 Jus Cool (214P) 姿态有多种 follow-up——overhead、low、delayed attack 让防守端非常头疼。Dee Jay 的 2MK 下段 poke range 远且可以 cancel 到特殊技。需要精准选择突进时机——不要在 Dee Jay 有 meter 时 predictable 空中进攻。"
      - "接近 Dee Jay 需要更多地面 work。214P 积攒 stock 是基础但 Dee Jay 的 Air Slasher recovery 短让对波窗口很窄。核心方法是等 Dee Jay出 Jus Cool 姿态时 Windclad Condor Spire 突进——姿态的 startup 有约 15f+ 窗口是安全的突进时机。5MP 在中距离 poke 建立 threat，但 Dee Jay 的 5MP 速度相当所以不要过度 poke。DR 是从远距离突入的关键——2MK → DR → 5MP → Condor Spire。一旦贴身 Dee Jay 有 Jackknife Maximum (invincible DP) 是主要威胁——需要混合 strike 和 throw 不能让 Dee Jay predictable DP。如果 Dee Jay 习惯 DP，bait 出来用 block → 5MP → combo 惩罚。"
      - "DI 在 Dee Jay 出 Air Slasher 或 Jus Cool heavy follow-up 时使用。DR 用于从远距离突入和延伸连段。Dee Jay 的 CA 有完全无敌。SA1 作为 anti-air 在 Dee Jay jump-in 时使用。CA 在 Dee Jay predictably block 时使用。Drive Reversal 在被 Dee Jay 的 Jus Cool 压力循环压制时使用。对局节奏：214P 积攒 stock → 等 Jus Cool 姿态时 Windclad 突进 → 贴身 strike/throw 混合 → 小心 Jackknife Maximum DP。"
    keyMoves: ["Windclad Condor Spire", "214P", "5MP"]
  - opponent: "manon"
    difficulty: "even"
    summary: "Manon 的 Mediatation 堆叠和 command grab 让近身交换变成高风险——需要保持 strike 确认优先"
    strategies:
      - "Manon 的核心威胁是 hit grab (Rond-point) 和随着 Médaille 堆叠增加的 command grab 伤害。Manon 的 hit grab 在中距离突进抓取——Lily 的 5MP 可以 interrupt 她的 startup 但 timing 要求高。Médaille 堆叠越高 Manon 的 command grab (Dégagé) 伤害越高——5 堆叠的 command grab 约 2400+ 伤害非常恐怖。Manon 的 5MP range 远且有 follow-up 让中距离 poke 战中 Lily 不占便宜。Manon 没有 invincible DP（只有 OD Renversé 有限 invincibility），但她的 counter hit 确认在 strike/throw 混合中很致命。核心策略：保持 stock 充足用 Windclad 突进，但近身时优先 strike 确认减少被 command grab 的机会。"
      - "进攻端需要调整 strike/throw 的比例。标准策略是用更多 strike 确认代替 throw——Manon 的 command grab 威胁让 Lily 不想在近身频繁 throw（因为 Manon 可以用 command grab 硬拼 throw timing）。用 2LP → 2LP → Condor Spire 的 strike 确认代替 2LP → throw。当 Manon 开始用 command grab counter 你的 strike timing 时才切 throw。214P 积攒 stock 后 Windclad Condor Spire 突进贴身。5MP → 2MP 确认在中距离建立 threat。如果 Manon 习惯 Rond-point hit grab，在她出招时用 2MK 下段 poke 打她的 startup。Manon 的 sweep 是 -12 on block 可以用 combo 惩罚。"
      - "DI 在 Manon 出 Rond-point 或 heavy poke 时使用。DR 用于突进接近和延伸连段。SA1 在 Manon jump-in 或出 hit grab 时反制。CA 在 Manon predictably block 时使用——注意 CA 的 3800+ 伤害可以抵消她堆叠的 command grab 优势。Drive Reversal 在被 Manon 的近身压力困住时使用。对局节奏：214P 积攒 stock → Windclad 突进贴身 → 优先 strike 确认减少被 command grab 风险 → 根据她的反应调整 strike/throw 比例。"
    keyMoves: ["Windclad Condor Spire", "5MP", "214P"]
  - opponent: "marisa"
    difficulty: "advantageous"
    summary: "Marisa 的慢速和巨大体型让 Lily 的速度优势充分发挥——Windclad 突进可以轻松贴身碾压"
    strategies:
      - "Marisa 的核心威胁是 armor attack (Quadriga) 和高伤害确认。Quadriga (6HP) 有 super armor 可以吸收一击然后反击——不要用单发 normal 硬碰，用 DI 打掉她的 armor。Marisa 的 5HP 和 2HP range 远但 startup 慢（约 12-14f），Lily 的 5MP (6f) 可以轻松 interrupt。Marisa 的 combo 伤害极高（单发 confirm 可达 3000+）但所有 normal 都偏慢。Marisa 的 Gladius (236P) 有 armor 但恢复帧长可以被 DI 或 combo punish。核心优势：Lily 的速度在 poke 战中完全碾压 Marisa——用 5MP 快速确认打她的 slow startup，每次都能抢到先手。"
      - "进攻策略非常直接。214P 积攒 stock → Windclad Condor Spire 突进贴身。Marisa 没有 invincible DP（只有 OD Quadriga 有限 invincibility），贴身后 strike/throw 混合非常有效。5MP 在中距离轻松 poke Marisa 的 slow normal——每次她出 5HP 你都可以先用 5MP 打断。2MK 下段 poke 在 Marisa 的 5HP whiff 后 max range 打她的恢复帧。如果 Marisa 习惯 Quadriga armor，用 DI 打掉然后 wall splat → combo 惩罚。Marisa 的大体型让 combo 更容易命中——标准 confirm 伤害更高。注意 Marisa 的 Gladius 有 armor 可以吸收你的 poke 然后 counter——不要 predictable 地 poke 要穿插 DI 和 DR。"
      - "DI 在 Marisa 出 Quadriga 或 Gladius 时极其有效——她的 armor attack 是 DI 的 free target。DR 用于延伸连段和突进接近。SA1 在 Marisa jump-in 或 armor attack startup 时反制。CA 在 Marisa predictably block 时使用。Drive Reversal 在被 Marisa 的 corner pressure 困住时使用。对局节奏：速度优势 poke → Windclad 突进贴身 → strike/throw 混合碾压 → DI 打掉她的 armor attack。"
    keyMoves: ["5MP", "Windclad Condor Spire", "DI"]
  - opponent: "jp"
    difficulty: "disadvantageous"
    summary: "JP 的远距离控制和 Triglav 突进让 Lily 的接近极其困难——需要精准的 DR 时机和 Windclad 突进"
    strategies:
      - "JP 是 Lily 最不利的对局之一。JP 的核心是远距离控制——Torbalan (地下手) 可以在远距离突然攻击脚下，让 214P 积攒变得危险。Triglav (214P) 突进有 armor 且 range 极远可以轻松打掉 Lily 的 walk-in。JP 的 5HP 和 2HP range 极远在中距离 poke 战中 Lily 完全处于劣势。JP 的 Void (柱子) 可以限制移动路线。JP 的波动 (Emblem) 配合 Torbalan 让 Lily 的所有接近路线都有威胁。核心方法：更多依赖 DR 突进而不是 walk-in，Perfect Parry 吸 JP 的远距离 poke 建立 Drive，找 Triglav 的 recovery 帧用 Windclad Condor Spire 突入。"
      - "接近 JP 的路径非常有限。JP 会在远距离用 Torbalan + Emblem 组合封锁你的移动——每次移动都可能踩到 Torbalan 或被 Emblem 打到。核心方法：在 JP 出 Torbalan 后（地下手出现后有约 20f+ 的 recovery）用 Windclad Condor Spire 突入。DR 是最重要的工具——2MK → DR → 5MP → Condor Spire 从远距离突入。DI 在 JP 出 Triglav 或 5HP 时使用——这些单发动作可以被 DI 吸掉。一旦贴身 JP 是相对脆弱的——没有 invincible DP（只有 OD Triglav 有限 invincibility）。strike/throw 混合非常有效。问题是到达近身的 cost 很高。Perfect Parry 吸 Torbalan 建立 Drive 用于 DR。"
      - "DI 在 JP 出 Triglav 或 5HP 时使用。DR 是最重要的接近手段——这个对局中 DR 的价值极高。Perfect Parry 吸 Torbalan 和 Emblem 建立 Drive 优势。SA1 在 JP jump-in 或 DR 接近时反制。CA 在 JP predictably block 时使用。Drive Reversal 在被 JP 的 corner pressure 困住时使用。核心心态：极端耐心等待接近窗口 → DR 或 Windclad 突进 → 一旦贴身 JP 几乎没有 reversal → strike/throw 混合是毁灭性的。"
    keyMoves: ["DR 接近", "Windclad Condor Spire", "Perfect Parry"]
  - opponent: "zangief"
    difficulty: "even"
    summary: "Zangief 的 SPD 威胁让近身变成双刃剑——Lily 需要用速度优势和 strike 确认控制距离"
    strategies:
      - "Zangief 的核心威胁是 SPD (不可防御 command grab) 和 Double Lariat 穿波。近身时 SPD 的存在让 strike/throw 混合变成双向威胁——Zangief 可以用 SPD counter Lily 的 throw 尝试。Double Lariat 的上半身无敌可以穿过 214P (Condor Wind) 并作为 anti-air 打掉 Condor Dive。Zangief 的 5HP 和 2HP range 远但 startup 慢（约 12-14f），Lily 的 5MP (6f) 在中距离 poke 战中占速度优势。Zangief 的 5MK 是 +4 on hit 在中距离建立 frame advantage。Zangief 11000 HP 意味着需要更多 combo 才能击倒。核心策略：利用速度优势在中距离 poke 建立 threat，Windclad 突进贴身时优先 strike 确认而不是 throw（减少被 SPD 的机会）。"
      - "对 Gief 的进攻需要谨慎选择 strike/throw 比例。核心原则：多用 strike 确认少用 throw——因为 Gief 可以用 SPD counter 你的 throw timing。用 2LP → 2LP → Condor Spire 的 strike 确认代替 2LP → throw。当 Gief 开始 delay SPD counter 你的 strike 时才切 throw。5MP 在中距离 poke Gief 的 slow normal——每次他出 5HP 你都可以用 5MP 先手打断。2MK 下段 poke 在 Gief 的 5HP whiff 后打他的恢复帧。Windclad Condor Spire 突进贴身但注意 Gief 可能用 lariat 穿过——如果 Gief 习惯 lariat，在突进前先 214P 积攒 stock 然后 wait，用 DR cancel 从不同角度接近。"
      - "DI 在 Zangief 出 5HP 或 2HP 时使用——这些单发 poke 可以被 DI 吸掉。DR 用于延伸连段和改变接近角度。SA1 在 Zangief jump-in 或出 Double Lariat 时使用。CA 在 Zangief predictably block 时使用——但注意 Gief 的 CA 也是不可防御的 command grab，不要在低血量时给他 CA 机会。Drive Reversal 在被 Gief 的近身 strike/throw 混合困住时使用。对局节奏：速度优势中距离 poke → 谨慎 Windclad 突进 → 优先 strike 确认 → 避免被 SPD 反抓。"
    keyMoves: ["5MP", "Windclad Condor Spire", "2MK"]
  - opponent: "cammy"
    difficulty: "even"
    summary: "Cammy 的速度和 Cannon Spike 让双方都有致命的突进和 anti-air——谁先读对对方谁赢"
    strategies:
      - "Cammy 的核心威胁是 Cannon Spike (623K) invincible anti-air 和 Cannon Strike (空中 214K) dive kick。Cannon Spike 是 5f invincible DP——有 meter 时 Lily 的空中进攻和 Condor Dive 都非常危险。Cannon Strike 从空中突然下降可以 punishes predictable 的地面移动。Cammy 的 5MP 是 5f 速度极快在中距离 poke 战中不输 Lily。Cammy 的 Hooligan Combination (214P) 提供空中/地面多段突进。Cammy 的速度和 Lily 相当——这个对局是纯粹的 rushdown vs rushdown。Cammy 的 HP 约 9500 和 Lily 一样低——每波 combo 确认都很致命。"
      - "这个对局的关键是 read 对手的意图然后 counter。进攻端：214P 积攒 stock → Windclad Condor Spire 突进。但 Cammy 有 Cannon Spike 所以不要 predictable——混合突进时机和角度。如果 Cammy 习惯 Cannon Spike reversal，bait 出来用 block → 5MP → combo 惩罚。防守端：Rising Thunder 打 Cammy 的 Cannon Strike dive kick。5MP 在中距离 poke 建立 threat——双方 5MP 速度相当所以 timing 和 range 是关键。Cammy 没有 command grab 所以在近身可以更安心 block——她的 strike/throw 混合不如有 command grab 的角色可怕。用 2LP → throw 和 2LP → 2LP → Condor Spire 的混合打她的 delay tech。"
      - "DI 在 Cammy 出 Hooligan Combination heavy attack 或 Cannon Strike 时使用。DR 用于延伸连段和突进接近。SA1 在 Cammy predictable 空中进攻或 DR 接近时反制。CA 在 Cammy predictably block 时使用。Drive Reversal 在被 Cammy 的 Cannon Strike 压力困住时使用。Rising Thunder 是应对 Cannon Strike 的核心。对局节奏：速度对等的 rushdown 对决 → 积攒 stock 时机决定进攻节奏 → 谁先读对突进方向谁赢 → 每波 combo 都可能致命。"
    keyMoves: ["Windclad Condor Spire", "5MP", "Rising Thunder"]
  - opponent: "rashid"
    difficulty: "even"
    summary: "Rashid 的速度和 Eagle Spike 突进与 Lily 的风格相似——双方都有强力的空中和地面突进"
    strategies:
      - "Rashid 的核心威胁是 Eagle Spike (空中 214K) 突进和 Ysaar ( whirlwind) 控制。Eagle Spike 从空中高速突进打击——Rising Thunder 可以迎击但 timing 要求高因为 Rashid 的变向多。Ysaar (214P) 产生的旋风可以限制移动并给 Rashid follow-up 的机会。Rashid 的 5MP 是 5f 速度快在中距离 poke 战中速度不输。Rashid 的 Arabian Sky High (623K) 是快速上升攻击可以作为 anti-air。Rashid 的 speed 和 mobility 与 Lily 相当——这个对局是风 vs 风的对决。Ysaar 的存在让 214P 对波积攒 stock 变得复杂因为旋风可以阻挡 Windclad。"
      - "进攻端需要处理 Rashid 的 Ysaar 旋风。如果 Rashid 在场地上放 Ysaar，不要直接 Condor Spire 突进穿过——旋风会阻挡或 delay 你的突进。先用 DI 打掉旋风或等旋风消失再突进。214P 积攒 stock 在 Rashid 的 Ysaar cooldown 时进行。Windclad Condor Spire 的额外距离可以绕过旋风的范围直接突入。一旦贴身 Rashid 没有 invincible DP（只有 OD Eagle Spike 有限 invincibility），strike/throw 混合有效。5MP 在中距离 poke Rashid 的 normal。如果 Rashid 习惯 Eagle Spike 突进用 Rising Thunder 迎击或 block 后 combo 惩罚。Rashid 的 HP 约 9500 和 Lily 一样低——快速交换中谁先 confirm 谁赢。"
      - "DI 在 Rashid 出 Ysaar startup 或 heavy Eagle Spike 时使用。DR 用于延伸连段和绕过旋风突进。SA1 在 Rashid 空中突进或 DR 接近时反制。CA 在 Rashid predictably block 时使用。Drive Reversal 在被 Rashid 的 Ysaar follow-up 压制时使用。对局节奏：处理旋风控制 → 积攒 stock 突进 → 贴身 strike/throw 混合 → 速度对决中抢占先手。"
    keyMoves: ["Windclad Condor Spire", "214P", "Rising Thunder"]
  - opponent: "a-k-i"
    difficulty: "even"
    summary: "A.K.I. 的毒系统和诡异的进攻角度让防守端很头疼——Windclad 突进可以打断她的毒 set-up"
    strategies:
      - "A.K.I. 的核心威胁是毒系统和 Toxic Blossom (毒爆)。A.K.I. 的招式可以给对手施加 poison 状态——poison 持续扣血直到消散。Toxic Blossom (623P) 可以引爆 poison 造成大量额外伤害——一旦中毒就必须格外小心。A.K.I. 的 5MP 和 2MP 都有诡异的 angle 让它们难以被 normal poke counter。A.K.I. 的 Serpent Stream (214P) 是多段 follow-up 的 stance 提供不同方向的进攻。A.K.I. 的 slide (2HK) range 远且可以 low profile 很多攻击。核心策略：避免中毒是第一优先——如果已经中毒要极端谨慎避免被 Toxic Blossom。Windclad 突进可以打断她的毒 set-up timing。"
      - "进攻端策略：214P 积攒 stock 时注意 A.K.I. 的 slide——她的 2HK range 远可以打掉你的 214P startup。交替使用 214P 和 walk forward 来避免 predictable。有 stock 后 Windclad Condor Spire 突进——突进速度可以 catch A.K.I. 在 set-up poison 的 recovery 帧。一旦贴身 A.K.I. 没有 invincible DP（只有 OD 623P 有限 invincibility），strike/throw 混合非常有效。5MP 在中距离建立 threat 但 A.K.I. 的 normal angle 诡异可能交换打空。如果中毒了立刻转为更保守的打法——减少冒险的突进，多用 block 和 Perfect Parry 等毒消散。每波交换都要考虑 Toxic Blossom 的额外伤害。"
      - "DI 在 A.K.I. 出 Serpent Stream heavy follow-up 或 slide 时使用。DR 用于延伸连段和打断她的毒 set-up。SA1 在 A.K.I. predictable 空中进攻时使用。CA 在 A.K.I. predictably block 时使用。Drive Reversal 在被 A.K.I. 的毒压力循环困住时使用。Perfect Parry 是防守端的关键——吸她的 slide 和特殊技。对局节奏：避免中毒 → 积攒 stock → Windclad 突进打断她的 set-up → 贴身 strike/throw 混合 → 中毒时转为保守。"
    keyMoves: ["Windclad Condor Spire", "214P", "5MP"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed 的心理力量控制和 kill dash 让中距离变成危险地带——Windclad 突进需要在 psi gauge 空窗期使用"
    strategies:
      - "Ed 的核心威胁是 Kill Dash ( Psycho spark 突进) 和心理力量控制的远距离 poke。Ed 的 5MP 和 2MP range 远且速度快在中距离 poke 战中是强威胁。Kill Dash (236K) 是有 psi gauge 强化的突进——有 gauge 时速度更快伤害更高。Ed 的 Psycho Rising (623P) 是 invincible anti-air 让空中进攻很危险。Ed 的 5HP range 远可以在中远距离 poke。核心策略：在 Ed 的 psi gauge 消耗后的 cooldown 窗口用 Windclad Condor Spire 突进。Ed 没有 psi gauge 时 Kill Dash 和 Psycho Rising 都受限。214P 积攒 stock 在他的 gauge cooldown 时更安全。"
      - "进攻端关键：观察 Ed 的 psi gauge（屏幕下方的小条）。当 gauge 空了或正在恢复时是 Windclad 突进的最佳时机——Ed 没有 gauge 时 Psycho Rising 不是 invincible。214P 积攒 stock → gauge 空窗期 Windclad Condor Spire 突进。一旦贴身 Ed 有 Psycho Rising (invincible DP) 是主要威胁——需要混合 strike 和 throw。如果 Ed 习惯 DP，bait 出来用 block → 5MP → combo 惩罚。中距离 5MP poke 建立 threat 但 Ed 的 5MP range 相当不要过度恋战。Ed 的 sweep 是 -10 on block 可以用 combo 惩罚。DR 用于从远距离突入和延伸连段。"
      - "DI 在 Ed 出 Kill Dash 或 heavy poke 时使用。DR 用于突进接近和延伸连段。SA1 在 Ed jump-in 或有 gauge 时 predictable 突进时反制。CA 在 Ed predictably block 时使用。Drive Reversal 在被 Ed 的 Psycho Spark 压力困住时使用。对局节奏：观察 psi gauge → gauge 空窗期积攒 stock 并突进 → 贴身 strike/throw 混合 → 小心有 gauge 时的 Psycho Rising DP。"
    keyMoves: ["Windclad Condor Spire", "214P", "5MP"]
  - opponent: "akuma"
    difficulty: "disadvantageous"
    summary: "Akuma 的极低血量被他全面的工具箱完全补偿——invincible DP、波动和 demon flip 让 Lily 的接近处处受阻"
    strategies:
      - "Akuma 是一个全面的角色虽然有最低的 HP (约 9000)。他的核心威胁包括：Goshoryuken (623P) invincible DP——有 meter 时 Lily 的空中进攻几乎不可能。Gohadoken 波动配合 Akuma 的 walk speed 让 walk-in 变得困难。Demon Flip (空中 214P/K) 提供空中多角度进攻——dive、sweep、grab 让防守非常头疼。Akuma 的 5MP 和 2MP 都是快速确认工具在中距离不输 Lily。Air Fireball (空中 236P) 从空中压制限制地面移动。核心问题：Akuma 在每个距离都有工具——波动控制远距离、快速 normal 控制中距离、Goshoryuken 控制近距离空中。Lily 的突进需要在 Akuma 的工具之间找到微小的窗口。"
      - "接近 Akuma 需要极致的 patience 和精准的 timing。214P 对波积攒 stock 但注意 Akuma 的 walk speed 很快他可以 walk forward 到 5MP range 然后 poke 你。核心方法：在 Akuma 出 Gohadoken 后的 recovery 窗口 Windclad Condor Spire 突进。DR 是从远距离突入的关键——2MK → DR → 5MP → Condor Spire。一旦贴身 Akuma 有 Goshoryuken (invincible DP) 是最大威胁——需要完美混合 strike 和 throw。如果 Akuma 习惯 DP，bait 出来用 block → 5MP → combo 惩罚。Akuma 的低 HP 是他的弱点——每波 combo 确认都很致命，一次成功的 combo 可以打掉他 1/3 以上 HP。Demon Flip 进攻时用 Rising Thunder 迎击或 block 后确认 combo。"
      - "DI 在 Akuma 出 Gohadoken 或 Demon Flip heavy attack 时使用。DR 用于从远距离突入和延伸连段。Akuma 的 CA (Shun Goku Satsu / Raging Demon) 是 command grab 属性且完全无敌——不要在有 CA 时 predictable block。SA1 作为 anti-air 和 reversal 在 Akuma predictable 进攻时使用。CA 在 Akuma predictably block 时使用。Drive Reversal 在被 Akuma 的 Demon Flip 压力困住时使用。对局节奏：极端 patience 对波积攒 stock → 找波动间隙 Windclad 突进 → 贴身完美 strike/throw 混合 → 利用他的低 HP 每波 combo 最大化伤害。"
    keyMoves: ["DR 接近", "Windclad Condor Spire", "5MP"]
  - opponent: "m-bison"
    difficulty: "even"
    summary: "M. Bison 的 Psycho Power 突进和 psycho blast 让接近有风险——但他的大目标让 combo 容易命中"
    strategies:
      - "M. Bison 的核心威胁是 Psycho Power 突进和远距离 psycho blast。Bison 的 5MP 和 2MP range 远且速度适中在中距离是强力 poke。Psycho Blast (236P) 是远距离波动可以用 214P 对波积攒 stock。Bison 的 Double Knee Press (236K) 是有 armor 的突进可以用 DI 反制。Bison 的 Head Press (空中 214K) 从空中突进可以用 Rising Thunder 迎击。Bison 的 HP 约 10500 偏高——需要更多 combo 才能击倒。核心策略：用 DI 反制 Bison 的 Double Knee Press armor 突进，Rising Thunder 打 Head Press 空中突进，214P 积攒 stock 后 Windclad Condor Spire 突进贴身。"
      - "进攻端相对直接。214P 积攒 stock → Windclad Condor Spire 突进贴身。Bison 没有 invincible DP（只有 OD Double Knee Press 有限 invincibility），贴身后 strike/throw 混合非常有效。5MP 在中距离 poke 建立 threat——Bison 的 5MP 速度相当但 range 可能稍短。如果 Bison 习惯 Double Knee Press 突进用 DI 打掉然后 wall splat → combo 惩罚。Bison 的 Head Press 空中突进用 Rising Thunder 迎击。Bison 的大体型让 combo 容易命中。注意 Bison 的 2HK sweep range 远但 -10 on block 可以用 combo 惩罚。DR 用于延伸连段增加伤害——Bison 的高 HP 需要更多伤害输出。"
      - "DI 在 Bison 出 Double Knee Press 或 heavy Psycho Blast 时使用。DR 用于延伸连段和突进接近。SA1 在 Bison Head Press 或 DR 接近时反制。CA 在 Bison predictably block 时使用。Drive Reversal 在被 Bison 的 Psycho Power 压力困住时使用。Rising Thunder 是应对 Head Press 的核心。对局节奏：214P 积攒 stock → DI 打掉 Double Knee Press → Windclad 突进贴身 → strike/throw 混合碾压 → 充分利用 combo 伤害打他的高 HP。"
    keyMoves: ["Windclad Condor Spire", "DI", "Rising Thunder"]
  - opponent: "terry"
    difficulty: "even"
    summary: "Terry 的 Power Wave 和 Burn Knuckle 提供全面的控制——Windclad 突进需要在 Power Charge cooldown 时使用"
    strategies:
      - "Terry 的核心威胁是 Power Wave (236P) 波动和 Burn Knuckle (236P) 突进。Power Wave 是地面波动可以限制 walk-in。Burn Knuckle 是快速突进攻击可以在中距离突袭。Terry 的 Power Dunk (623K) 是 anti-air 有 invincibility 但不是完全 invincible。Terry 的 5MP 速度快在中距离 poke 战中速度不输。Terry 的 Crack Shoot (214K) 是 overhead 可以打 crouching opponent。Terry 的 Rising Tackle (charge 2 8P) 是 charge anti-air。核心策略：用 214P 对波积攒 stock，找 Burn Knuckle 的 recovery 帧用 Windclad 突进，Rising Thunder 打他的 jump-in 和 Crack Shoot。"
      - "进攻端策略：214P 对 Power Wave 积攒 stock。Terry 的 Power Wave recovery 比 Hadoken 长——有更多窗口 Windclad Condor Spire 突进。Burn Knuckle 在 block 后是 -6 可以用 5MP 确认惩罚。Terry 有 Power Dunk 作为 anti-air（有限 invincibility）——空中进攻需要谨慎。贴身后 Terry 没有 fully invincible DP，strike/throw 混合有效。5MP 在中距离 poke 建立 threat。如果 Terry 习惯 Crack Shoot overhead 用 Rising Thunder interrupt 或 block 后 combo 惩罚。DR 用于从远距离突入和延伸连段。"
      - "DI 在 Terry 出 Burn Knuckle 或 heavy Power Wave 时使用。DR 用于突进接近和延伸连段。SA1 在 Terry jump-in 或 predictable Burn Knuckle 时反制。CA 在 Terry predictably block 时使用。Drive Reversal 在被 Terry 的 Power Wave follow-up 压力困住时使用。对局节奏：214P 对波积攒 stock → 波动间隙 Windclad 突进 → 贴身 strike/throw 混合 → 小心 Power Dunk anti-air。"
    keyMoves: ["Windclad Condor Spire", "214P", "5MP"]
  - opponent: "mai"
    difficulty: "even"
    summary: "Mai 的扇子和空中机动让角度多变——Windclad 突进需要在她的扇子 cooldown 时使用"
    strategies:
      - "Mai 的核心威胁是扇子飞行道具和空中机动。Mai 的扇子 (236P) 是波动类飞行道具可以限制 walk-in——用 214P 对波积攒 stock。Mai 的空中机动让她可以从多个角度进攻—— Ryuu En Bu (空中 214P) 从空中投掷扇子覆盖地面。Mai 的 5MP 和 2MP range 适中在中距离 poke 战中速度不输。Mai 的 Hissatsu Shinobi Bachi (236K) 是突进攻击可以在中距离突袭。Mai 的 Musasabi no Mai (空中 214K) 是空中 dive attack。核心策略：214P 对波积攒 stock，Rising Thunder 打她的空中 dive，Windclad Condor Spire 在扇子 cooldown 时突进贴身。"
      - "进攻端策略：214P 对扇子积攒 stock。Mai 的扇子 recovery 比 Hadoken 长——有更多窗口 Windclad Condor Spire 突进。Mai 没有 invincible DP（只有 OD 236K 有限 invincibility），贴身后 strike/throw 混合非常有效。5MP 在中距离 poke 建立 threat。如果 Mai 习惯空中 dive (Musasabi no Mai)，Rising Thunder 迎击或 block 后 combo 惩罚。Hissatsu Shinobi Bachi 在 block 后负帧较大可以用 5MP 确认惩罚。DR 用于从远距离突入和延伸连段。注意 Mai 的扇子角度多变——高角度扇子可以打 jump-in，低角度扇子打 walk-in，需要根据扇子类型选择接近方式。"
      - "DI 在 Mai 出 Hissatsu Shinobi Bachi 或 heavy 扇子时使用。DR 用于突进接近和延伸连段。SA1 在 Mai 空中 dive 或 DR 接近时反制。CA 在 Mai predictably block 时使用。Drive Reversal 在被 Mai 的扇子 follow-up 压力困住时使用。Rising Thunder 是应对 Mai 空中进攻的核心。对局节奏：214P 对扇子积攒 stock → 扇子 cooldown 时 Windclad 突进 → 贴身 strike/throw 混合 → Rising Thunder 打她的空中 dive。"
    keyMoves: ["Windclad Condor Spire", "214P", "Rising Thunder"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena 的治疗和远距离 capoeira 让对手压力倍增——Windclad 突进需要打断她的治疗节奏"
    strategies:
      - "Elena 的核心威胁是治疗能力 (Mamura no Inori) 和远距离 capoeira 踢击。Elena 可以通过特定动作恢复 HP——这让 damage race 变得不利因为打掉的 HP 可以被回复。Elena 的 5MK 和 2MK range 极远在中距离 poke 战中是强威胁。Elena 的 capoeira 姿态提供多种 follow-up——overhead、low、spin 让防守很头疼。Elena 的 Lynx Tail (236K) 是多段突进攻击。Elena 的 HP 是标准的 10000。核心策略：不要让 Elena free 治疗——每次她试图治疗都要用 Windclad 突进打断。214P 积攒 stock 保持进攻资源充足。持续施压不让 Elena 有治疗的空间。"
      - "进攻端策略：214P 积攒 stock 是基础但不要因此给她治疗空间。有 stock 后立刻 Windclad Condor Spire 突进——不要让 Elena 有 free 治疗的窗口。Elena 没有 invincible DP（只有 OD Scratch Wheel 有限 invincibility），贴身后 strike/throw 混合非常有效。5MP 在中距离 poke 建立 threat 但注意 Elena 的 5MK range 远可能先手打到你。如果 Elena 进 capoeira 姿态用 2MK 下段打她的姿态 startup 或 Windclad 突进 grab 她的姿态恢复帧。DR 用于延伸连段增加伤害——需要高输出因为她可以恢复 HP。每波 combo 都要最大化伤害不给 Elena heal 的机会。"
      - "DI 在 Elena 出 Lynx Tail 或 heavy capoeira attack 时使用。DR 用于延伸连段和突进接近。SA1 在 Elena predictable 空中进攻或治疗 startup 时反制。CA 在 Elena predictably block 时使用——高伤害 CA 可以抵消她回复的 HP。Drive Reversal 在被 Elena 的 capoeira 压力困住时使用。对局节奏：持续施压不打断 → 214P 积攒 stock → Windclad 突进打断治疗 → 贴身 strike/throw 混合 → 每波 combo 最大化伤害不给治疗空间。"
    keyMoves: ["Windclad Condor Spire", "214P", "5MP"]
  - opponent: "volcano-handshake"
    difficulty: "even"
    summary: "Volcano Handshake 的力量型打击让每个错误都很致命——用速度优势和 Windclad 突进控制节奏"
    strategies:
      - "Volcano Handshake 的核心威胁是高伤害单发打击和力量型 poke。他的 5HP 和 2HP damage 高但 startup 偏慢——Lily 的 5MP (6f) 可以在中距离 poke 战中抢到先手。Volcano Handshake 的特殊技伤害高但恢复帧较长——miss 后的 punish window 大。他的突进技有 armor 属性可以用 DI 反制。Volcano Handshake 的 HP 约 10000 标准。核心策略：利用速度优势在中距离 poke 建立 threat，在他 slow normal 的 recovery 帧用 Windclad Condor Spire 突进贴身。DI 打掉他的 armor 突进。每波 combo 都要最大化伤害——他的高 damage output 意味着错误也会很致命。"
      - "进攻端策略：214P 积攒 stock → Windclad Condor Spire 突进贴身。Volcano Handshake 没有 invincible DP，贴身后 strike/throw 混合非常有效。5MP 在中距离 poke 建立 threat——每次他出 slow heavy attack 都可以先用 5MP interrupt。2MK 下段 poke 在他的 heavy attack whiff 后打他的恢复帧。如果 Volcano Handshake 习惯 armor 突进用 DI 打掉然后 wall splat → combo 惩罚。DR 用于延伸连段增加伤害。注意他的高 damage output——每波失误都可能是 2000-3000+ 的伤害所以要保持精准不要冒险。"
      - "DI 在 Volcano Handshake 出 armor 突进或 heavy poke 时使用。DR 用于延伸连段和突进接近。SA1 在 Volcano Handshake jump-in 或 predictable 突进时反制。CA 在 Volcano Handshake predictably block 时使用。Drive Reversal 在被他的高 damage 压力困住时使用。对局节奏：速度优势中距离 poke → Windclad 突进贴身 → strike/throw 混合碾压 → 保持精准不要冒险犯错。"
    keyMoves: ["5MP", "Windclad Condor Spire", "DI"]
---
