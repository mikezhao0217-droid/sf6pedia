---
name: "Rashid"
subtitle: "The Turbulent Wind"
overview: "Rashid 是一名以超高机动性和风属性技能为核心的 rushdown/trapper 混合型角色，拥有游戏中最好的突进工具和空中机动性。他的核心 gameplan 是利用 Rolling Assault 前滚、Eagle Spike 突进踢和 wall jump 多角度进攻快速拉近距离，在近中距离建立 overhead/low/throw 三段混合压力。Arabian Cyclone (236P) 是多用途旋转攻击，HP 版本 launch 可接 combo，SA2 Ysaar 产生持续风球大幅提升移动速度和 combo 延伸能力是爆发伤害的关键窗口。弱点是单体 normal 伤害偏低且缺乏远距离波动道具，需要主动接近才能发挥最大威力。"
keyMoves:
  - name: "Arabian Cyclone (236P)"
    input: "236+P"
    description: "Rashid 的核心旋转突进攻击。LP 版本 7f startup 单次旋转 -4 on block 相对安全用于 poke 和确认收尾。MP 版本 9f 多段旋转 hit confirm 好用于 combo 中段。HP 版本 11f launch 命中后浮空可接 follow-up combo 是 Rashid 最重要的 combo starter 之一。OD 版本 (236PP) 有 armor 且多段 hit 命中后 bounce 方便 juggle follow-up。Arabian Cyclone 是 Rashid 近中距离进攻的瑞士军刀——LP 版本安全 poke，HP 版本 launch combo，配合 DR cancel 可以从中距离启动完整 combo。空中版本 (空中 236P) 改变空中轨迹用于接近和 mix-up。"
    startup: 7
    active: 6
    recovery: 22
    damage: 800
  - name: "Eagle Spike (214K)"
    input: "214+K"
    description: "Rashid 的招牌前方翻滚踢突进。LK 版本 10f startup 距离短但恢复快（-8 on block），用于中距离快速 poke 和 combo ender。MK 版本 12f 中距离突进。HK 版本 14f 距离远命中后 knockdown 是远距离突袭和 corner carry combo 的标准 ender。OD 版本 (214KK) 有 armor 且命中后 bounce 可接 follow-up。Eagle Spike 的低姿态可以穿过高位攻击和波动道具——在对手出 5HP 或 high attack 时用 Eagle Spike 穿过是核心 counter。配合 SA2 Ysaar wind ball 时速度更快距离更远。注意 HK Eagle Spike 在 block 后 -14 被挡后极其危险。"
    startup: 10
    active: 6
    recovery: 24
    damage: 900
  - name: "Rolling Assault (214P)"
    input: "214+P"
    description: "Rashid 的核心前滚机动工具。输入后 Rashid 向前翻滚有 low profile 可以穿过高位攻击和波动道具。Rolling Assault 本身没有攻击判定但可以 cancel 到多种 follow-up：1) P 按钮——从翻滚中出上勾拳（overhead 属性），2) K 按钮——从翻滚中出下段扫腿，3) 不输入——翻滚结束后可出任何 normal/special。Rolling Assault 是 Rashid 接近和 mix-up 的核心——low profile 穿波动后 follow-up 的 overhead/low 二择让对手必须瞬间判断上段还是下段。配合 SA2 wind ball 时 Rolling Assault 的速度和距离增加。是 Rashid 在波动型角色面前突进的最佳工具之一。"
    startup: 6
    active: 0
    recovery: 18
    damage: 0
  - name: "5MP (站立中拳)"
    input: "5MP"
    description: "Rashid 的核心中距离 poke 和确认工具。6f startup 快速出拳，+4 on hit，+1 on block。5MP 的 range 适中配合 Rashid 的 fast walk speed 在 poke 战中持续建立 threat。5MP 命中后的 +4 frame advantage 让 Rashid 可以 walk forward 进入 strike/throw range 或接 2MP 确认 combo。5MP → 2MP 是 Rashid 中距离的基本 hit confirm，命中后可以 cancel 到 Arabian Cyclone 或 Eagle Spike 收尾。在 DR cancel 后 5MP 是最常用的中间确认按钮。5MP 是 Rashid footsies 的基石——配合 walk speed 持续 poke 对手建立 position。"
    startup: 6
    active: 3
    recovery: 12
    damage: 450
  - name: "2MP (蹲中拳)"
    input: "2MP"
    description: "Rashid 的核心近距离确认工具。5f startup，+5 on hit，+1 on block。2MP 是 Rashid 近身 strike/throw 混合的基础——快速确认后可以 cancel 到 Arabian Cyclone 或 Eagle Spike。2MP 的 +5 on hit 让后续 5MP 或 2LP 都能连携形成压制循环。配合 DR cancel 是 Rashid 延伸 combo 的标准中间按钮。2MP 在 block 后 +1 让 Rashid 保持微弱的 frame advantage 可以继续 tick throw 或 delay chain。近身确认链：2LP → 2MP → HP Arabian Cyclone 是快速轻确认收尾 launch combo。"
    startup: 5
    active: 3
    recovery: 13
    damage: 400
  - name: "2MK (蹲中踢)"
    input: "2MK"
    description: "Rashid 的远距离下段 poke。8f startup，-3 on block，range 比 5MP 远。2MK 是 Rashid footsies 的重要工具——在 max range 可以安全 poke 对手而不会被 punish。2MK 可以 cancel 到 Arabian Cyclone 或 Eagle Spike——命中后直接 2MK xx HP Arabian Cyclone launch 是简单的确认启动。2MK → DR cancel 是 Rashid 从远距离启动进攻的标准手段之一。2MK 的 low profile 可以躲过一些高位攻击然后 counter hit。配合 5MP 形成中距离上下段二择 poke 体系。"
    startup: 8
    active: 4
    recovery: 16
    damage: 400
  - name: "f+MK (前中踢 / Overhead)"
    input: "f+MK"
    description: "Rashid 的 command normal overhead。约 18f startup，overhead 属性可以打击蹲防的对手。-6 on block。f+MK 是 Rashid 近身混合压力的核心——在对手习惯蹲防 2MK/2LP 的下段后突然出 f+MK overhead 打乱防守节奏。f+MK 命中后造成 knockdown 给 Rashid okizeme 的机会。配合 Rolling Assault 的 low follow-up 形成完整的 overhead/low 二择体系。注意 18f startup 比较慢——需要在对手 block stun 结束后的 timing 使用，在 neutral 中出容易被 interrupt。DR cancel 后 f+MK 的速度变快是更好的 overhead 选择。"
    startup: 18
    active: 3
    recovery: 22
    damage: 600
  - name: "2HP (蹲重拳)"
    input: "2HP"
    description: "Rashid 的核心 anti-air 工具。8f startup，向上出拳有良好的对空判定。2HP 是 Rashid 地面防守空中进攻的第一选择——判定框向上覆盖 jump-in 的角度。命中后造成 knockdown 可以接 okizeme 或在角落接 Arabian Cyclone follow-up。配合 Rashid 的 fast walk speed 可以在对手 jump 时快速调整位置确保 2HP 的 anti-air 角度。注意 2HP 对地面攻击判定弱——不要在地面 poke 战中使用。HP Arabian Cyclone 也是备选 anti-air 但 2HP 更稳定。在对手有 SA2 wind ball 增速时 jump 角度更刁钻，需要更精准的 anti-air timing。"
    startup: 8
    active: 5
    recovery: 20
    damage: 700
  - name: "SA2 Ysaar (236236P)"
    input: "236236+P"
    description: "Rashid 的 Level 2 Super Art——召唤一个持续风球。激活后在场上放置一个缓慢移动的风球约 10 秒，期间 Rashid 在风球范围内获得移动速度大幅提升和特殊技强化。SA2 是 Rashid 爆发伤害和压制的核心窗口——风球存在时 Rashid 的 walk speed 和 dash speed 增加，Arabian Cyclone 和 Eagle Spike 的距离和速度增加，combo 延伸能力大幅提升。标准策略：在 knockdown 后激活 SA2 然后用强化机动性进行高压 okizeme——风球存在时 Rashid 的 overhead/low/throw 混合更加致命因为移动速度让防守判断更困难。SA2 + full combo 是 Rashid 最高的 damage output。SA2 消耗 2 bars 但回报极高。"
    startup: 6
    active: 2
    recovery: 30
    damage: 500
  - name: "SA1 Altair (236236K)"
    input: "236236+K"
    description: "Rashid 的 Level 1 Super Art。高速旋转突进 super 约 9f startup 有 1-7f invincibility。SA1 是 Rashid 的穿波工具和 reversal——invincible startup 可以穿过波动道具和 meaty 攻击。SA1 作为 combo ender 从 Arabian Cyclone 或 Eagle Spike 命中后 cancel 接 SA1 增加总伤害约 2000。SA1 命中后造成 knockdown 给 Rashid okizeme 机会。Level 1 消耗相对较低可以更频繁使用。SA1 也可以用于穿波动——在远距离读准对手出波时机用 SA1 穿过反打。SA1 在 corner 中作为 combo ender 性价比最高。"
    startup: 9
    active: 8
    recovery: 36
    damage: 2000
tips:
  - "开局策略：Rashid 开局应利用 fast walk speed 和 5MP 快速建立中距离威胁。标准开局选项：1) 对手远距离放波时用 Rolling Assault 前滚穿波或 forward jump → 空中 Arabian Cyclone 突进。2) 对手中距离等 poke 时用 5MP → 2MP 确认 poke 建立 threat 然后 walk forward。3) 对手被动时用 Rolling Assault → overhead/low follow-up 从地面发起混合进攻。有 SA2 时开局 knockdown 后立刻激活 Ysaar 进入风球强化状态是高回报选择。开局节奏：5MP poke 建立位置 → walk forward 缩短距离 → Rolling Assault/Eagle Spike 突进 → 近身 overhead/low/throw 三段混合。"
  - "核心连段路线：Rashid 的 combo 以快速确认和 DR 延伸为核心。轻确认：2LP → 2MP → LP Arabian Cyclone（轻确认收尾，约 1600 伤害）。中距离确认：5MP → 2MP → HP Arabian Cyclone → MP Eagle Spike（中段确认 launch combo，约 2400 伤害）。DR 确认：2MK → DR → 5MP → 5HP → HP Arabian Cyclone → Eagle Spike（远距离启动，约 3000 伤害）。角落确认：5HP → DR → 5MP → 2MP → HP Arabian Cyclone → HP Arabian Cyclone（角落高伤害收尾，约 3500+ 伤害）。Anti-air 确认：2HP → HP Arabian Cyclone → Eagle Spike。SA2 风球中 combo：SA2 → 2LP → 2MP → HP Arabian Cyclone → Eagle Spike → SA1（约 4000+ 伤害）。"
  - "立回核心：Rashid 的 footsies 围绕 5MP 的速度和 walk speed 优势展开。核心体系：中距离用 5MP/2MP 快速确认，远距离用 2MK 下段 poke，近距离用 2LP/5LP 确认配合 Rolling Assault 混合。5MP 是立回的基石——6f startup 在 normal 交换中速度优秀，命中后 +4 有 follow-up。2MK 是更远距离的安全 poke——max range 难以被 punish 且可以 cancel 到 Arabian Cyclone launch。Eagle Spike 的低姿态在对手出高位 poke 时穿过反击。Arabian Cyclone LP 版本是安全的接近 poke——-4 on block 且拉开距离。核心目标：利用 walk speed 持续缩短距离，保持在 5MP range 内建立 threat。"
  - "Drive Rush 使用策略：Rashid 的 DR 是进攻和 combo 延伸的核心引擎。主要用途：1) 远距离突进——2MK → DR cancel 瞬间拉近距离进入 strike/throw range。2) 延伸连段——5HP → DR → 5MP → 2MP → HP Arabian Cyclone 增加伤害。3) 压制维持——2LP → DR cancel 保持 +frame 继续压制。4) Overhead 加速——f+MK → DR cancel 让 overhead 变快更难 react。Drive Impact 在 Rashid 的 gameplan 中作为打破对手 poke 节奏的工具——DI 的 armor 穿过单发 poke 后 wall splat 给 Rashid 贴身的机会。Drive Reversal 是 Rashid 被压在角落时脱困的工具。Drive Gauge 管理关键：保留足够 meter 给 DR 突进和 Drive Reversal。"
  - "应对不同距离：远距离（全屏到 2/3 屏）Rashid 缺乏波动道具——SA1 穿波是偶尔的 option 但消耗大。主要用 Rolling Assault 前滚穿波动和 Eagle Spike 远距离突袭。中距离（1/3 到 1/2 屏）是 Rashid 的甜蜜区——5MP/2MP 快速确认 poke 建立 threat，Arabian Cyclone LP 版本安全 poke，Eagle Spike 穿过高位 poke。近距离（1/3 屏以内）是 Rashid 最强的距离——2LP/5LP 确认配合 Rolling Assault → overhead/low follow-up 让对手必须同时防守上中下三段。核心原则：始终保持进攻姿态利用 walk speed 和 Rolling Assault 缩短距离，Rashid 在远距离几乎无法造成威胁。"
  - "SA2 Ysaar 使用时机：SA2 是 Rashid 最重要的爆发资源，正确使用时机决定对局胜负。最佳时机：1) 角落 knockdown 后激活——风球强化机动性配合角落 okizeme 可以打出恐怖的持续压力。2) 对手低血量时激活——用强化特殊技确认终结对手。3) 对手 Drive Gauge 低时激活——强化压力让对手无法用 Drive Reversal 脱困。SA2 风球存在的约 10 秒是 Rashid 最强的时间窗口——不要浪费在立回中，应该在 knockdown 后立刻激活然后全力进攻。SA2 + SA1 combo 是 Rashid 最高的 damage output。风球存在时 Rashid 的 walk speed 大幅增加让 strike/throw 混合更加致命——对手几乎无法 react 你的 throw timing。"
  - "防守端的注意事项：Rashid 的 HP 在游戏中属于中等偏低（约 9500）——不能承受太多错误。Rashid 没有传统的 invincible DP——OD Arabian Cyclone 有有限的 invincibility 但不是完全无敌。SA1 的 invincible startup 可以作为应急 anti-air 和 reversal 使用。Drive Reversal 是 Rashid 脱困的核心——消耗 2 bars 创造距离重新开始 neutral。Perfect Parry 也是建立 Drive 优势的重要工具。OD Eagle Spike 有 armor 可以 absorb 一击然后反击是另一种 wake-up option。低血量时保留 CA (Yawmu Yowm) 作为终极逆转——3600+ 伤害可以瞬间改变局面。Rashid 的核心防守思路是利用 mobility 重置位置而不是硬拼——用 Rolling Assault 逃离角落比冒险出 reversal 更安全。"
matchups:
  - opponent: "luke"
    difficulty: "even"
    summary: "Luke 的全能工具箱和 Flash Knuckle 压制与 Rashid 的机动性形成均势——关键在于谁能先建立进攻节奏"
    strategies:
      - "Luke 的核心威胁是 HP Perfect Flash Knuckle (+4 on block) 的强压制循环和 Sand Blast 波动控制。Sand Blast recovery 短让 Rashid 的 walk-in 变得困难——需要用 Rolling Assault 前滚穿波或 forward jump → 空中 Arabian Cyclone 突进。Luke 的 5MP (5f) 速度和 Rashid 的 5MP (6f) 相比略快，在 5MP range 内交换 Luke 有微弱的速度优势。Luke 的 2HK sweep 是 -9 on block 可以用 DR → 5MP → HP Arabian Cyclone 惩罚。Luke 没有 invincible DP（只有 OD Flash Knuckle 有限 invincibility），贴身后 Rashid 的 Rolling Assault → overhead/low 混合非常有效。注意 Luke 的 OD Flash Knuckle 作为 reversal 会打断你的 Eagle Spike 突进。"
      - "接近 Luke 的核心是用 Rolling Assault 穿波动和 Eagle Spike 突进。标准路径：在 Luke 放 Sand Blast 的间隙用 Rolling Assault 前滚穿波。Rolling Assault 的 low profile 天然克制波动——穿波后接 overhead 或 low follow-up 让 Luke 必须瞬间判断。中距离用 5MP → 2MP 确认 poke 建立 threat。如果 Luke 习惯用 Flash Knuckle 压制，用 Drive Reversal 创造距离或 block 后用 5MP 确认 counter。一旦贴身用 Rolling Assault → overhead/low follow-up 和 2LP → throw 的三段混合打他的 delay tech——Luke 没有 invincible DP 所以混合的回报很高。如果 Luke 习惯 OD Flash Knuckle reversal，刻意 delay 你的攻击 bait 出 OD 然后用 block → 5MP → HP Arabian Cyclone 惩罚。"
      - "DI 在 Luke 出 HP Sand Blast 或 Perfect Flash Knuckle 时使用——这些单发动作可以被 DI 吸掉。DR 主要用于从远距离突入和延伸连段。Luke 的 CA (Pale Rider) 有 invincibility 不要在有 CA 时 predictable 进攻。SA1 作为穿波工具在 Luke 放 Sand Blast 时使用。SA2 在 knockdown 后激活——风球强化机动性让 Luke 的 Flash Knuckle 压制难以 lock down Rashid。Drive Reversal 在被 Luke 的 Flash Knuckle loop 压在角落时极其关键。对局节奏：Rolling Assault 穿波接近 → 5MP poke 建立 threat → 贴身 overhead/low/throw 三段混合 → 注意 OD Flash Knuckle reversal。"
    keyMoves: ["Rolling Assault", "5MP", "Eagle Spike"]
  - opponent: "ryu"
    difficulty: "advantageous"
    summary: "Rashid 的超高机动性是波动系角色的克星——Ryu 的 Hadoken 节奏可以被 Rolling Assault 和 Eagle Spike 轻松穿破"
    strategies:
      - "Ryu 的核心威胁是 Denjin Charge 系统和全面的 footsies。Denjin Hadoken 有 armor 属性——不要用 Eagle Spike 直接穿 Denjin Hadoken，会被 armor 吸掉后 counter。普通 Hadoken 时 Rashid 可以轻松用 Rolling Assault 前滚穿波——Ryu 的 Hadoken recovery 足够慢让 Rashid 有充分时间反应。Ryu 的 5HK 和 sweep range 远但负帧较大，可以用 2MK max range 打他的恢复帧或 DR → 5MP whiff punish。Ryu 的 LP Shoryuken 是 6f invincible DP——有 meter 时他不怕你的 jump-in，需要更多 ground approach 用 Rolling Assault 和 Eagle Spike。Ryu 没有 Denjin 时 Hashogeki 是 -4 on block，可以用 5MP 或 walk forward throw 惩罚。"
      - "接近 Ryu 对 Rashid 来说相对轻松。核心是利用 Ryu 的波动节奏——每次 Ryu 出 Hadoken 就用 Rolling Assault 前滚穿波接近。Rolling Assault 穿波后接 overhead/low follow-up 让 Ryu 必须瞬间判断上中下三段。如果 Ryu 习惯 Shoryuken anti-air，bait 出来用 block → 5MP → HP Arabian Cyclone → Eagle Spike 严重惩罚。5MP 在中距离 poke 建立 threat——Rashid 的 walk speed 比 Ryu 快可以持续拉近距离。Eagle Spike 的低姿态在 Ryu 出 5HP 或 5HK 时穿过反击。空中 Arabian Cyclone 改变空中轨迹可以避开 Shoryuken 的 anti-air timing。"
      - "DI 在 Ryu 出 Denjin Hadoken 或 sweep 时使用。DR 主要用于延伸连段——从 5HP → DR → 5MP → 2MP → HP Arabian Cyclone 是标准 combo 路线。Ryu 的 CA (Shin Shoryuken) 有完全无敌不要在有 CA 时 predictable jump-in。SA1 作为穿波工具偶尔使用但 Rolling Assault 通常更经济。SA2 在 knockdown 后激活——风球强化机动性让 Ryu 的波动和 poke 完全失效。CA 在 Ryu predictably block 时使用。Drive Reversal 在被 Ryu 的 Denjin 压力困在角落时使用。对局节奏：读波动节奏 → Rolling Assault 穿波接近 → 贴身 overhead/low/throw 混合 → bait Shoryuken 用 combo 惩罚。"
    keyMoves: ["Rolling Assault", "5MP", "Eagle Spike"]
  - opponent: "chun-li"
    difficulty: "even"
    summary: "Chun-Li 的超长距离 poke 和速度让 Rashid 的接近需要更多技巧——Rolling Assault 和 DR 突进是关键"
    strategies:
      - "Chun-Li 的核心威胁是超长距离 poke (5MP, 2MP, 5HP) 和 Serenity Stream 姿态。她的 5MP startup 快且 range 极长，在中距离 poke 战中 Rashid 的 5MP range 处于劣势——Chun-Li 的 range 更远。Chun-Li 的 Hazanshu overhead 可以在中距离突然打乱节奏。Kikoken 波动配合她的 poke 足以阻止 Rashid free walk-in。Serenity Stream 姿态的 low profile 可以躲过 5MP——当她进姿态时切 2MK (下段) 打她。Chun-Li 的 2LP 是 4f 比 Rashid 的快，在近距离交换中占优。Rashid 的 Rolling Assault 前滚是接近的最重要工具但 Chun-Li 的速度让她能 react 用 2MP 打你的 roll。"
      - "接近 Chun-Li 需要多工具配合。标准 walk-in 在面对 Chun-Li 的高频 poke 时不够——需要穿插 DR cancel 突进和 Rolling Assault 前滚。2MK → DR → 5MP → HP Arabian Cyclone 是从远距离突入的标准路线。Rolling Assault 需要读准 Chun-Li 的 Kikoken timing 前滚穿波——穿波后 overhead/low follow-up 让她必须 guess。DI 在 Chun-Li 出 2HP 或 sweep 时使用——这些单发 poke 可以被 DI 吸掉然后 wall splat 给你 walk-in 时间。一旦进入近身 range，Chun-Li 没有 invincible DP（只有 OD Tensho Kicks），所以 Rolling Assault → overhead/low/throw 三段混合非常有效。注意 Chun-Li 的速度让她可以快速 backdash 拉开距离——每次 knockdown 后要立刻 walk forward 缩短距离。"
      - "DI 在 Chun-Li 出 2HP、sweep 或 Serenity Stream heavy attack 时使用。DR 是最重要的接近手段——在这个对局中 Rashid 需要 DR 来弥补 walk-in 的困难。SA1 在需要穿 Kikoken 时偶尔使用。SA2 在 knockdown 后激活——风球强化机动性是追击 Chun-Li backdash 的最佳工具。CA 在 Chun-Li predictably block 时使用。Drive Reversal 在被她的 Hundred Lightning Kicks 压制时使用。Perfect Parry 是建立 Drive 的关键——吸她的长 range poke 建立 meter 用于 DR 接近。对局节奏：更多依赖 DR/DI/Rolling Assault 创造接近机会 → 一旦贴身三段混合 → 不让她重新拉开距离 → SA2 风球时全力追击。"
    keyMoves: ["Rolling Assault", "DR 接近", "5MP"]
  - opponent: "jamie"
    difficulty: "advantageous"
    summary: "趁 Jamie 喝酒等级低时积极 Rolling Assault 突进——Level 0-1 的 Jamie 对 Rashid 的 rushdown 几乎没有抵抗力"
    strategies:
      - "Jamie 的威胁随喝酒等级增长但初始很弱。Level 0-1 时趁窗口快速用 Eagle Spike 或 Rolling Assault 突进接近——Jamie 的 normal range 短、伤害低，在远距离无法阻止 Rashid 接近。Jamie 试图 drink 升级时是最脆弱的时刻——用 Eagle Spike 突进或直接 Rolling Assault 趁他 drink animation 贴身。Jamie 没有 invincible DP（只有 OD The Devil Inside 有限 invincibility），一旦 Rashid 贴身就是 Rolling Assault → overhead/low/throw 三段混合的自由发挥。Jamie 的 5MK 是 -6 on block 可以用 5MP 确认惩罚。开局先 5MP poke 建立 threat 然后立刻突进——不要给 Jamie drink 的空间。"
      - "开局策略：先 5MP 快速确认建立 position 然后立刻进攻。如果 Jamie 开局试图 drink，用 Eagle Spike 突进打断他的 drink animation。Level 0-1 时大胆用 5MP 和 2MP poke——Jamie 的 normal 无法有效阻止你。5MP 命中后 walk forward 进入 Rolling Assault range 开始 overhead/low/throw 混合。如果 Jamie 习惯用 OD The Devil Inside 逆转，bait 它出来后用 block → 5MP → 2MP → HP Arabian Cyclone 惩罚。Jamie Level 3+ 时威胁大增（额外 follow-up mix-up、更高伤害），需要更小心他的 mix-up 但仍保持进攻压力——Jamie 的 HP 也不高每波 combo 都很伤。Rolling Assault → low follow-up 在 Jamie 没有 OD meter 时可以自由使用打乱他的蹲防。"
      - "DI 在 Jamie 出 heavy attack 或 drink attempt 时使用。DR 用于快速接近和延伸连段。Jamie 的 CA 有完全无敌不要在有 CA 时 predictable。SA1 在 Jamie 远距离出 The Devil Inside 突进时反制。SA2 在 knockdown 后激活——风球强化机动性让 Jamie 更难获得 drink 的喘息空间。CA 在 Jamie predictably block 时使用。Drive Reversal 在被他的 drink-powered 压制困住时使用。对局节奏：开局快速建立 position → 立刻 Rolling Assault 突进施压 → 打断每次 drink 尝试 → 贴身后三段混合碾压。"
    keyMoves: ["Rolling Assault", "5MP", "Eagle Spike"]
  - opponent: "guile"
    difficulty: "even"
    summary: "Guile 的 Sonic Boom 控制和 Flash Kick anti-air 是 Rashid 的经典测试——Rolling Assault 穿波和空中 Arabian Cyclone 的时机是关键"
    strategies:
      - "Guile 是 Rashid 的经典难题但并非无解。Sonic Boom 的 recovery 极短让 Guile 可以在波动间隙 follow-up，Rashid 的 Eagle Spike 突进可能在穿波后面临 Flash Kick。Sonic Blade（柱子）+ Sonic Boom 组合让突进更加困难。Flash Kick anti-air 极其可靠，普通 jump-in 几乎一定会被打。但 Rashid 有 Rolling Assault 前滚——low profile 可以穿过 Sonic Boom 然后接 follow-up 进攻。空中 Arabian Cyclone 改变空中轨迹让 Flash Kick timing 变难。Guile 的 charge 速度快意味着他始终可以出 Sonic Boom 和 Flash Kick。核心方法：读 Sonic Boom 的节奏用 Rolling Assault 穿波接近，用 DR 从中距离突入。"
      - "接近 Guile 的核心是 Rolling Assault 的 timing 选择。标准方法是：在 Guile 出 Sonic Boom 后的 recovery 窗口 Rolling Assault 前滚穿波——Rolling Assault 的 low profile 天然克制波动。穿波后接 overhead/low follow-up 让 Guile 必须瞬间判断。当距离缩短到中距离后用 5MP poke Guile 的 follow-up。DR 是重要的接近工具——2MK → DR → 5MP → HP Arabian Cyclone 是从远距离突入的标准路线。如果 Guile 用 Sonic Blade 柱子，DI 可以打掉柱子并给他压力。一旦进入近身 Guile 面临致命威胁——他虽然有 Flash Kick 但 predictable 的 Flash Kick 会被 block 后 5MP → HP Arabian Cyclone → Eagle Spike 严重惩罚。用 Rolling Assault → overhead/low/throw 三段混合让 Guile 猜测。Eagle Spike 的低姿态在 Guile 出 5HP 时穿过反击。"
      - "DI 在 Guile 出 Sonic Blade 或 heavy Sonic Boom 时使用。DR 是重要的接近手段——没有 DR 的突进 Rashid 需要更多 effort 接近 Guile。Guile 的 CA (Sonic Hurricane) 有 invincibility。SA1 在需要穿 Sonic Boom 但没有 Rolling Assault 位置时使用。SA2 在 knockdown 后激活——风球强化机动性是接近 Guile 的最佳工具，风球存在时 Rashid 的速度让 Guile 的 charge game plan 完全崩溃。CA 在 Guile predictably block 时使用。Drive Reversal 在被 Guile 的 Sonic Boom follow-up 压制时使用。核心心态：耐心读波动节奏 → Rolling Assault 穿波接近 → 一旦贴身三段混合的回报是毁灭性的——Guile 近身非常脆弱。"
    keyMoves: ["Rolling Assault", "DR 接近", "Eagle Spike"]
  - opponent: "kimberly"
    difficulty: "even"
    summary: "双方高机动性角色的对决——谁先确认 combo 谁赢，Rolling Assault 是 Kimberly teleport 的 counter"
    strategies:
      - "Kimberly 的核心威胁是传送混合和 speed。她的 teleport 让接近节奏变得更难读——你突进时她可以 teleport 绕过。但 teleport 的 start-up 有约 20f+ 的窗口，如果预测到她的 teleport 方向可以用 Rolling Assault → follow-up 打她的 landing。Kimberly 的 run-stop 混合在近距离是主要威胁——用 2LP 快速确认或 OD Arabian Cyclone interrupt 她的 run-stop timing。Kimberly 的幻影 dive kick 可以用 2HP anti-air 或 5MP 打她的 dive angle。Kimberly 的 5HK 是 -6 on block 可以用 5MP 确认惩罚。双方偏低血量 (Kimberly 约 9500, Rashid 约 9500) 意味着每次 combo 确认都很致命。"
      - "核心策略是保持进攻压力但随时准备应对 teleport。如果 Kimberly 习惯 teleport 到你身后，在她 landing 时转身 Rolling Assault → low follow-up 打她的 landing 帧。如果她习惯 run-stop 混合用 2LP 或 OD Arabian Cyclone 打她的 run animation。Kimberly 没有 invincible DP（只有 OD Bushin Senpukyaku），一旦 Rashid 贴身 Rolling Assault → overhead/low/throw 三段混合同样致命。用 Eagle Spike 从远距离突袭可以 catch 她 teleport 的 startup。空中 Arabian Cyclone 在她 teleport landing 时突入效果很好。5MP 在中距离 poke 建立 threat——双方速度相当所以 timing 和 range 是关键。"
      - "DI 在 Kimberly 出 heavy run-stop attack 或幻影 dive kick 时使用。DR 用于追击她 teleport 后拉开距离和延伸连段。SA1 在她 teleport landing 或 DR 接近时使用。SA2 在 knockdown 后激活——风球强化机动性是追踪 Kimberly teleport 的最佳手段。CA 在她 predictably block 时使用。Drive Reversal 在被她的 teleport 混合压制时使用。OD Arabian Cyclone 在她 jump-in 或 air approach 时使用。对局节奏：保持进攻压力 → 读她的 teleport 方向用 Rolling Assault 打 landing → 贴身后致命三段混合 → 利用双方偏低血量快速终结。"
    keyMoves: ["Rolling Assault", "5MP", "Eagle Spike"]
  - opponent: "juri"
    difficulty: "even"
    summary: "Juri 的 Fuha stock 系统让她在有 stock 时威胁大增——Rashid 需要在她充能时主动 Rolling Assault 进攻"
    strategies:
      - "Juri 的核心是 Fuha stock 系统。她在 stock 充能时（214K 动作）是相对脆弱的——这是 Rashid 主动 Rolling Assault 突进的最佳窗口。有 Fuha stock 时 Juri 的 623HP (DP) 和 214HP (hashogeki) 消耗 stock 变强。3 stock 的 Juri 是最危险的——注意她的 stock 数量调整策略。Juri 的 5HP 是 -7 on block 可以用 2MK max range 打她的恢复帧。中距离用 5MP 和 2MK poke，Juri 的 5MP 是 5f 速度很快需要保持距离。Juri 的 Ryodansatsu (sweep) 是 -9 on block 可以用 DR → 5MP → HP Arabian Cyclone 惩罚。Juri 有 invincible OD DP (623PP)——贴身时需要注意她的 DP reversal。"
      - "接近 Juri 的关键是趁她充能 Fuha stock 时同步 Rolling Assault 突进。每次 Juri 出 214K 充能就用 Rolling Assault 前滚穿她的充能 animation——Rolling Assault 的 low profile 让你安全地穿过她的充能然后贴身。5MP 和 2MK 在中远距离持续 poke，每次确认后 walk forward。如果 Juri 习惯用 Fuha-enhanced move 接近，在 poke 后准备 block 然后用 Rolling Assault → overhead/low counter。Eagle Spike 在 Juri 充能时使用——她的充能 animation 无法 react。一旦进入近身 Juri 的 OD DP 是完全 invincible 的逆转——需要 mix overhead、low 和 throw 不能 predictable。用 Rolling Assault → overhead follow-up 和 → low follow-up 的随机混合打她的 DP timing。Eagle Spike 的低姿态在 Juri 出 5HP 时穿过反击。"
      - "DI 在 Juri 充 Fuha stock 或出 sweep 时使用。DR 用于从远距离突入近身 range 和延伸连段。SA1 在 Juri DR 接近或 jump-in 时反制。SA2 在 knockdown 后激活——风球强化机动性让 Juri 的充能空间更小。Juri 的 CA 有完全无敌。Drive Reversal 在被她的 Fuha rush 压制时使用。CA 在 Juri predictably block 时使用。对局节奏：趁她充能时 Rolling Assault 突进接近 → 5MP poke 建立 threat → Eagle Spike/dive 突进 → 贴身后混合 overhead/low/throw → 注意 Fuha stock 数量调整压力。"
    keyMoves: ["Rolling Assault", "5MP", "Eagle Spike"]
  - opponent: "ken"
    difficulty: "even"
    summary: "Ken 的 Jinrai Kick 压力和 Dragonlash 突进需要精准应对——Rolling Assault 和 Drive Reversal 是脱困关键"
    strategies:
      - "Ken 的核心威胁是 Jinrai Kick (236K) 压力循环和 Dragonlash (63214K) 突进。HP Jinrai Kick 是 +2 on block 的持续压力工具——被 Ken 贴身后很难脱困。Dragonlash 是有 armor 的突进攻击可以用 DI 反制但 timing 要求高。Ken 的 5MP 和 2MP 都是快速的确认工具。波动方面 Ken 的 Hadoken 是标准波动可以用 Rolling Assault 前滚穿波接近。Ken 有 invincible DP (LP Shoryuken, 6f)——有 meter 时 jump-in 和空中 Arabian Cyclone 都很危险需要混合使用。Ken 的 2HK sweep 是 -9 on block 可以用 DR → combo 惩罚。"
      - "应对 Ken 的关键是处理好他的 Jinrai Kick 压力循环。HP Jinrai Kick +2 on block 后 Ken 通常会接 2LP 或 throw——用 OD Arabian Cyclone interrupt 他的 follow-up timing（高风险高回报）或 Drive Reversal 创造距离（更安全的选择）。在 Ken 试图用 Dragonlash 突进时用 DI 打掉他的 armor 然后 wall splat 惩罚。进攻端用 Rolling Assault 穿波动接近——但 Ken 有 Shoryuken 所以不要 predictable jump-in。中距离用 5MP → 2MP 确认 poke 建立 threat。一旦贴身用 Rolling Assault → overhead/low/throw 三段混合让 Ken 猜测。如果 Ken 习惯 Shoryuken，bait 出来用 block → 5MP → HP Arabian Cyclone → Eagle Spike 惩罚。Eagle Spike 在 Ken 出 5HP 时穿过反击。"
      - "DI 在 Ken 出 Dragonlash 或 sweep 时使用——Dragonlash 的 armor 会被 DI 吸掉。DR 用于突进接近和延伸连段。Ken 的 CA (Shin Kurenai) 有完全无敌。SA1 作为穿波工具在 Ken 放 Hadoken 时使用。SA2 在 knockdown 后激活——风球强化机动性让 Ken 的 Jinrai Kick loop 更难 lock down Rashid。CA 在 Ken predictably block 时使用。Drive Reversal 在被 Ken 的 Jinrai Kick loop 压在角落时关键。OD Arabian Cyclone 在 Ken predictable 空中进攻时使用。对局节奏：Rolling Assault 穿波接近 → 5MP poke 建立 threat → 贴身 overhead/low/throw 三段混合 → 小心他的 Shoryuken reversal。"
    keyMoves: ["Rolling Assault", "5MP", "Eagle Spike"]
  - opponent: "blanka"
    difficulty: "advantageous"
    summary: "Rashid 的 Rolling Assault 前滚可以轻松穿过 Blanka 的 Electric Thunder 和 Blanka-chan 玩具——机动性碾压"
    strategies:
      - "Blanka 的核心威胁是 Electric Thunder (快速电球) 和 Blanka-chan Bomb (遥控玩具)。Electric Thunder 的 recovery 短且可以作为 poke 使用——但 Rashid 的 Rolling Assault low profile 可以穿过 Electric Thunder 然后 follow-up 进攻。Blanka-chan Bomb 在地面缓慢移动可以阻止 Rashid 的 walk-in——但 Rolling Assault 前滚可以直接越过 Blanka-chan。Blanka 的 Vertical Roll (空中 41236K) 是空中突进有 armor 属性——2HP 或 OD Arabian Cyclone 可以打他的 roll 但 timing 要精准。Blanka 的 5HP range 远且可以 low profile 一些高位攻击。Blanka 没有 invincible DP（只有 OD Rising Impact 有限 invincibility），贴身后 Rolling Assault → overhead/low/throw 三段混合非常有效。"
      - "接近 Blanka 的核心是利用 Rolling Assault 穿过他的防守工具。Rolling Assault 前滚是主要接近手段——low profile 穿过 Electric Thunder 和 Blanka-chan 玩具直接贴身。穿过后接 overhead/low follow-up 让 Blanka 必须瞬间判断。如果 Blanka 习惯 Vertical Roll，用 2HP 迎击。Blanka 没有 invincible DP，贴身后 Rolling Assault → overhead/low/throw 三段混合非常有效。5MP → 2MP 确认在中距离建立 threat。Blanka 的 2HK sweep 是 -10 on block 可以用 combo 惩罚。Eagle Spike 的低姿态在 Blanka 出高位攻击时穿过反击。如果 Blanka 在地面放 Blanka-chan 玩具，用 DI 打掉然后 wall splat 惩罚。"
      - "DI 在 Blanka 出 Blanka-chan Bomb startup 或 heavy Electric Thunder 时使用。DR 用于突进接近和延伸连段。SA1 在 Blanka Vertical Roll 或 DR 接近时使用。SA2 在 knockdown 后激活——风球强化机动性让 Blanka 的 Electric Thunder 控场完全失效。CA 在 Blanka predictably block 时使用。Drive Reversal 在被 Blanka 的 Electricity 压制时使用。2HP 是应对 Blanka Vertical Roll 的核心。对局节奏：Rolling Assault 穿过 Blanka-chan → 穿 Electric Thunder 贴身 → overhead/low/throw 三段混合碾压 → 注意 Vertical Roll 空中突袭。"
    keyMoves: ["Rolling Assault", "5MP", "2HP"]
  - opponent: "dhalsim"
    difficulty: "advantageous"
    summary: "Rashid 的超高机动性让 Dhalsim 的远距离控制难以维持——Rolling Assault 和 SA2 风球是近身毁灭性武器"
    strategies:
      - "Dhalsim 是 Rashid 需要付出一些耐心但整体优势明显的对局。Yoga Fire 配合他的超远 poke (5HP, 2HP, 5MK) 让 walk-in 很困难但 Rolling Assault 的 low profile 天然克制波动——每次 Dhalsim 出 Yoga Fire 就用 Rolling Assault 前滚穿波接近。Dhalsim 的 5HP range 极远可以打掉 Rashid 的 walk-in 尝试——但 Rashid 不需要 walk-in，Rolling Assault 直接穿。Yoga Arch (抛物线波动) 可以打 jump-in 但 Rolling Assault 是地面穿波不受影响。Dhalsim 的 Drill Kick (空中 214P) 从空中突然下降攻击——用 2HP anti-air 打他的 drill。核心方法：Rolling Assault 穿波动 → 贴身后 Dhalsim 无 invincible reversal → 三段混合 free meal。"
      - "接近 Dhalsim 的路径比大部分角色更轻松。方法：在 Dhalsim 出 Yoga Fire 后的 recovery 窗口 Rolling Assault 前滚穿波。Rolling Assault 穿波后接 overhead/low follow-up 让 Dhalsim 必须猜测上中下三段。从不同距离发起 Rolling Assault 让 Dhalsim 无法 predictable 反应。DR 是补充工具——2MK → DR → 5MP → HP Arabian Cyclone 从远距离突入。DI 在 Dhalsim 出 5HP 或 2HP poke 时使用——这些长 range 单发可以被 DI 吸掉。一旦贴身 Dhalsim 没有任何 invincible reversal——strike/throw/overhead 混合是 free meal。SA2 在 knockdown 后激活可以强化机动性进行高压 okizeme——Dhalsim 近身几乎没有还手之力。Eagle Spike 的低姿态在 Dhalsim 出 5HP 时穿过反击。"
      - "DI 在 Dhalsim 出 5HP、2HP 或 Yoga Fire 时使用。DR 作为补充接近手段。SA1 在需要额外穿波手段时使用。SA2 在 knockdown 后激活——风球强化机动性对 Dhalsim 的远距离控制是毁灭性的，风球存在时 Rashid 的速度让 Dhalsim 无法维持任何 distance。CA 在 Dhalsim predictably block 时使用。Drive Reversal 在被 Dhalsim 的 Yoga Flame 压制时使用。核心心态：Rolling Assault 穿波接近 → 一旦贴身 SA2 强化机动性的三段混合是毁灭性的——Dhalsim 无法应对近身的 Rashid。"
    keyMoves: ["Rolling Assault", "SA2 Ysaar", "Eagle Spike"]
  - opponent: "e-honda"
    difficulty: "advantageous"
    summary: "Honda 的慢速 poke 和大体型让 Rashid 的机动性和 combo 容易命中——Rolling Assault 穿 Sumo Headbutt 和 DI 是关键"
    strategies:
      - "Honda 的核心威胁是 Sumo Headbutt (但马头突) 和 Hundred Hand Slap (百裂张手)。Sumo Headbutt 是有 armor 的突进可以用 DI 反制——当 Honda predictable 地出 Headbutt 时用 DI 打掉然后 wall splat。Hundred Hand Slap 在近身是持续压力——用 OD Arabian Cyclone interrupt 或 Drive Reversal 创造距离。Honda 的 poke 速度慢（5MP 约 8f, 5HP 约 12f），Rashid 的 5MP (6f) 在中距离 poke 战中占优。Honda 的 2HK sweep 是 -14 on block 可以用 full combo 惩罚。Honda 的大体型让 Rashid 的 combo 更容易命中。核心策略：用速度优势在中距离建立 poke 优势然后用 Rolling Assault 或 Eagle Spike 突进贴身。"
      - "进攻端非常直接：5MP poke 建立 threat → Rolling Assault 突进贴身或 Eagle Spike 接近。Honda 没有 invincible DP（只有 OD Sumo Smash 有限 invincibility），贴身后 Rolling Assault → overhead/low/throw 三段混合非常有效。5MP → 2MP 确认在中距离 poke Honda 每次都赚——Honda 的 normal 速度跟不上。如果 Honda 习惯 Sumo Headbutt 突进，准备好 DI 打掉然后 wall splat → combo 惩罚。Rolling Assault 的 low profile 可以在 Honda 出 Hundred Hand Slap 时穿过然后 follow-up 进攻。注意 Honda 的 command grab (Orochi Breaker)——如果 Honda 试图在近身突然出 command grab 用 jump 或 backdash 避开然后 combo 惩罚。Rolling Assault → overhead follow-up 在 Honda 习惯蹲防时特别有效。"
      - "DI 在 Honda 出 Sumo Headbutt 或 heavy poke 时使用——Sumo Headbutt 的 armor 会被 DI 吸掉。DR 用于延伸连段和突进接近。SA1 在 Honda 远距离出 Sumo Smash 突进时反制。SA2 在 knockdown 后激活——风球强化机动性碾压 Honda 的 slow defense。CA 在 Honda predictably block 或在角落时使用。Drive Reversal 在被 Hundred Hand Slap 压制时使用。OD Arabian Cyclone 在 Honda 空中进攻时使用。对局节奏：速度优势中距离 poke → Rolling Assault/Eagle Spike 突进贴身 → overhead/low/throw 三段混合碾压 → DI 打掉 Sumo Headbutt 突进。"
    keyMoves: ["Rolling Assault", "5MP", "DI"]
  - opponent: "dee-jay"
    difficulty: "even"
    summary: "Dee Jay 的 Jackknife Maximum anti-air 和 Jus Cool 混合让空中突进有风险——需要更多 ground Rolling Assault 接近"
    strategies:
      - "Dee Jay 的核心威胁是 Jackknife Maximum (623K) anti-air 和 Air Slasher 波动。Jackknife Maximum 是优秀的 invincible DP 让 Rashid 的空中进攻非常危险——空中 Arabian Cyclone 和普通 jump-in 都可能被打。Air Slasher 的 recovery 短让 Rolling Assault 穿波的窗口较窄但仍然可用。Dee Jay 的 5MP 是 5f 快速且 range 适中在中距离 poke 战中速度不输 Rashid。Dee Jay 的 Jus Cool (214P) 姿态有多种 follow-up——overhead、low、delayed attack 让防守端非常头疼。Dee Jay 的 2MK 下段 poke range 远且可以 cancel 到特殊技。需要精准选择突进时机——不要在 Dee Jay 有 meter 时 predictable 空中进攻。"
      - "接近 Dee Jay 需要更多地面 Rolling Assault work。5MP → 2MP 确认在中距离 poke 建立 threat 但 Dee Jay 的 5MP 速度相当所以不要过度 poke。核心方法是等 Dee Jay 出 Jus Cool 姿态时 Rolling Assault 突进——姿态的 startup 有约 15f+ 窗口是安全的突进时机。DR 是从远距离突入的关键——2MK → DR → 5MP → HP Arabian Cyclone。Eagle Spike 在 Dee Jay 没有 meter 时使用——没有 OD Jackknife Maximum 时他的 anti-air 不可靠。一旦贴身 Dee Jay 有 Jackknife Maximum (invincible DP) 是主要威胁——需要 mix overhead、low 和 throw 不能让 Dee Jay predictable DP。如果 Dee Jay 习惯 DP，bait 出来用 block → 5MP → HP Arabian Cyclone 惩罚。Rolling Assault → low follow-up 在 Dee Jay 习惯站防 overhead 时使用。"
      - "DI 在 Dee Jay 出 Air Slasher 或 Jus Cool heavy follow-up 时使用。DR 用于从远距离突入和延伸连段。Dee Jay 的 CA 有完全无敌。SA1 作为穿 Air Slasher 的工具使用。SA2 在 knockdown 后激活——风球强化机动性让 Dee Jay 的 Jus Cool 压力循环更难 lock down Rashid。CA 在 Dee Jay predictably block 时使用。Drive Reversal 在被 Dee Jay 的 Jus Cool 压力循环压制时使用。对局节奏：5MP ground poke → 等 Jus Cool 姿态时 Rolling Assault 突进 → 贴身 overhead/low/throw 三段混合 → 小心 Jackknife Maximum DP。"
    keyMoves: ["Rolling Assault", "5MP", "DR 接近"]
  - opponent: "manon"
    difficulty: "even"
    summary: "Manon 的 Médaille 堆叠 command grab 让近身变成高风险——Rashid 需要保持更多 overhead 和 strike 确认优先"
    strategies:
      - "Manon 的核心威胁是 hit grab (Rond-point) 和随着 Médaille 堆叠增加的 command grab 伤害。Manon 的 hit grab 在中距离突进抓取——Rashid 的 5MP 可以 interrupt 她的 startup 但 timing 要求高。Médaille 堆叠越高 Manon 的 command grab (Dégagé) 伤害越高——5 堆叠的 command grab 约 2400+ 伤害非常恐怖。Manon 的 5MP range 远且有 follow-up 让中距离 poke 战中 Rashid 不占便宜。Manon 没有 invincible DP（只有 OD Renversé 有限 invincibility），但她的 counter hit 确认在 strike/throw 混合中很致命。核心策略：保持进攻压力但近身时优先 Rolling Assault → overhead follow-up 减少 command grab 的命中机会——overhead 打击蹲防的 Manon 而 command grab 对站姿和蹲姿都有效所以 overhead 是更安全的选择。"
      - "进攻端需要调整 strike/throw/overhead 的比例。标准策略是用更多 Rolling Assault → overhead follow-up 代替 throw——Manon 的 command grab 威胁让 Rashid 不想在近身频繁 throw（因为 Manon 可以用 command grab 硬拼 throw timing）。用 2LP → 2MP → HP Arabian Cyclone 的 strike 确认代替 2LP → throw。当 Manon 开始用 command grab counter 你的 strike timing 时才切 throw。Rolling Assault → overhead follow-up 是这个对局的核心——overhead 属性打 Manon 的蹲姿防守而且不吃 command grab。5MP → 2MP 确认在中距离建立 threat。如果 Manon 习惯 Rond-point hit grab，在她出招时用 2MK 下段 poke 打她的 startup。Manon 的 sweep 是 -12 on block 可以用 combo 惩罚。OD Arabian Cyclone 是 Manon 近身混合的重要反制。"
      - "DI 在 Manon 出 Rond-point 或 heavy poke 时使用。DR 用于突进接近和延伸连段。SA1 在 Manon jump-in 或出 hit grab 时反制。SA2 在 knockdown 后激活——风球强化机动性让 Manon 更难获得 Médaille 堆叠的空间。CA 在 Manon predictably block 时使用——注意 CA 的 3600+ 伤害可以抵消她堆叠的 command grab 优势。Drive Reversal 在被 Manon 的近身压力困住时使用。OD Arabian Cyclone 是应对 Manon 近身混合的有限 invincible 逆转。对局节奏：Rolling Assault 接近 → 优先 overhead follow-up 减少被 command grab 风险 → 用 strike 确认代替 throw → 根据她的反应调整混合比例。"
    keyMoves: ["Rolling Assault", "5MP", "f+MK Overhead"]
  - opponent: "marisa"
    difficulty: "advantageous"
    summary: "Marisa 的慢速和巨大体型让 Rashid 的机动性优势充分发挥——Rolling Assault 和 DI 可以轻松处理她的 armor"
    strategies:
      - "Marisa 的核心威胁是 armor attack (Quadriga) 和高伤害确认。Quadriga (6HP) 有 super armor 可以吸收一击然后反击——不要用单发 normal 硬碰，用 DI 打掉她的 armor。Marisa 的 5HP 和 2HP range 远但 startup 慢（约 12-14f），Rashid 的 5MP (6f) 可以轻松 interrupt。Marisa 的 combo 伤害极高（单发 confirm 可达 3000+）但所有 normal 都偏慢。Marisa 的 Gladius (236P) 有 armor 但恢复帧长可以被 DI 或 combo punish。核心优势：Rashid 的速度在 poke 战中完全碾压 Marisa——用 5MP 快速确认打她的 slow startup，每次都能抢到先手。Rolling Assault 的 low profile 可以穿过 Marisa 的 armor attack startup 然后 follow-up 进攻。"
      - "进攻策略非常直接。5MP poke 建立 threat → Rolling Assault 突进贴身或 Eagle Spike 接近。Marisa 没有 invincible DP（只有 OD Quadriga 有限 invincibility），贴身后 Rolling Assault → overhead/low/throw 三段混合非常有效。5MP 在中距离轻松 poke Marisa 的 slow normal——每次她出 5HP 你都可以先用 5MP 打断。2MK 下段 poke 在 Marisa 的 5HP whiff 后 max range 打她的恢复帧。如果 Marisa 习惯 Quadriga armor，用 DI 打掉然后 wall splat → combo 惩罚。Marisa 的大体型让 combo 更容易命中——标准 confirm 伤害更高。注意 Marisa 的 Gladius 有 armor 可以吸收你的 poke 然后 counter——不要 predictable 地 poke 要穿插 DI 和 Rolling Assault。Rolling Assault → overhead follow-up 在 Marisa 习惯蹲防 2MK 时特别有效。"
      - "DI 在 Marisa 出 Quadriga 或 Gladius 时极其有效——她的 armor attack 是 DI 的 free target。DR 用于延伸连段和突进接近。SA1 在 Marisa jump-in 或 armor attack startup 时反制。SA2 在 knockdown 后激活——风球强化机动性碾压 Marisa 的 slow defense。CA 在 Marisa predictably block 时使用。Drive Reversal 在被 Marisa 的 corner pressure 困住时使用。对局节奏：速度优势 poke → Rolling Assault/Eagle Spike 突进贴身 → overhead/low/throw 三段混合碾压 → DI 打掉她的 armor attack。"
    keyMoves: ["Rolling Assault", "5MP", "DI"]
  - opponent: "jp"
    difficulty: "even"
    summary: "JP 的远距离控制和 Triglav 突进让 Rashid 需要极致的 patience——但 Rolling Assault 穿波和 SA2 风球是破局关键"
    strategies:
      - "JP 的核心威胁是远距离控制 (Torok/Triglav/Destroy) 和 zone game。JP 的波动道具 (Torok) 有不同速度和角度——需要精确判断哪个版本才能 Rolling Assault 穿波。Triglav (236P) 是快速突进有 gap 可以 DI 或 OD Arabian Cyclone interrupt。JP 的 5HP 和 2MP range 极远在中距离 poke 战中 Rashid 处于劣势。JP 的 Destroy (214P) 是远距离 vanish 突进——如果 JP predictable 用 Destroy 可以用 5MP 打他的 landing。JP 的 anti-air 是 2HP 和 Bansuri 有 invincible startup。核心挑战：JP 的 zone game 让 Rashid 的 walk-in 非常困难——需要 Rolling Assault 精准穿波和 DR 突进才能接近。一旦贴身 JP 没有 invincible DP（只有 OD Triglav 有限 invincibility），Rolling Assault → overhead/low/throw 三段混合非常有效。"
      - "接近 JP 需要 extreme patience 和精准 timing。方法：1) 读 JP 的 Torok 波动节奏用 Rolling Assault 前滚穿波——Rolling Assault 的 low profile 是穿波动最可靠的手段。2) 当 JP 出 Triglav 突进时用 DI 打掉或 block 后 DR → 5MP → HP Arabian Cyclone 惩罚。3) 当 JP 在远距离出 Destroy vanish 时提前 5MP 打他的 landing。2MK → DR → 5MP → HP Arabian Cyclone 是从远距离突入的标准路线。DI 在 JP 出 5HP 或 2MP poke 时使用。一旦贴身 JP 没有 invincible DP——Rolling Assault → overhead/low/throw 三段混合是 free meal。SA2 在 knockdown 后激活——风球强化机动性让 JP 的 zone game 完全崩溃，风球存在时 Rashid 的速度让 JP 无法维持任何 distance。JP 的 HP 偏高（约 10000）所以需要更多 combo 确认才能终结。"
      - "DI 在 JP 出 Triglav 或 heavy poke 时使用。DR 是从远距离突入的关键。SA1 在需要穿 Torok 但没有 Rolling Assault timing 时使用。SA2 在 knockdown 后激活——这是最重要的 timing，风球存在时 JP 的 zone game 完全失效。JP 的 CA (Interdiction) 有完全无敌。CA 在 JP predictably block 时使用。Drive Reversal 在被 JP 的 Destroy 压制时使用。核心心态：极致 patience 读波动节奏 → Rolling Assault 精准穿波 → 一旦贴身 SA2 风球强化后的三段混合是毁灭性的——JP 近身非常脆弱。"
    keyMoves: ["Rolling Assault", "SA2 Ysaar", "DR 接近"]
  - opponent: "zangief"
    difficulty: "advantageous"
    summary: "Rashid 的超高机动性和 keep away 能力让 Zangief 几乎无法抓到——Rolling Assault 和 Eagle Spike 是打 Gief 的教科书"
    strategies:
      - "Zangief 的核心威胁是 SPD command grab 和超高中近距离 damage。Gief 的 SPD range 约 1/5 屏——在 SPD range 内一切 attack 都面临被 grab 的风险。Gief 的 5LP 是 4f 快速且 range 适中在中距离 poke 战中不慢。Gief 的 5HP 和 5HK range 远但 startup 慢可以用 5MP interrupt。Gief 没有 invincible DP 但有 OD Siberian Express 有 armor。核心优势：Rashid 的 Rolling Assault low profile 可以穿过 Gief 的 normal 和 lariat 然后 follow-up 进攻。Eagle Spike 的低姿态和快速突进在 Gief 出 5HP 时穿过反击。Rashid 的 walk speed 让他可以轻松保持在 Gief 的 SPD range 外 poke 然后 walk away。SA2 风球强化后的速度让 Gief 完全追不上。"
      - "核心策略是保持在中距离用 poke 压制 Gief 然后在他试图接近时 Rolling Assault 穿过或 Eagle Spike 反击。5MP → 2MP 确认在中距离持续 poke Gief——每次确认后 walk back 保持距离。如果 Gief 试图 walk forward 接近，在他 walk 时用 2MK 下段 poke 打他的 forward walk。Rolling Assault 前滚可以在 Gief 出 5HP 或 lariat 时穿过然后 overhead/low follow-up 进攻——穿 lariat 是打 Gief 的核心技巧。Eagle Spike 在 Gief 出 5HP 或 5HK 时穿过反击。一旦获得 knockdown 用 2MK 远距离 okizeme poke 而不是贴身——不要进入 Gief 的 SPD range。如果 Gief 试图 OD Siberian Express armor 突进，用 DI 打掉然后 wall splat 惩罚。SA2 风球时 Rashid 的速度倍增——可以用 hit-and-run 打法让 Gief 完全摸不到。"
      - "DI 在 Gief 出 Siberian Express 或 lariat 时使用。DR 用于延伸连段。SA1 在 Gief 试图远距离 jump-in 时反制。SA2 在获得 knockdown 后激活——风球强化机动性是终极 keep away 工具，风球存在时 Rashid 的速度让 Gief 完全无法接近。CA 在 Gief predictably block 或在角落时使用。Drive Reversal 在被 Gief 的 lariat 压制时使用。注意 Gief 的 CA (Bolshoi Storm Buster) 有 command grab 属性不要在 CA range 内 predictable。对局节奏：中距离 5MP/2MK poke → Rolling Assault 穿 lariat → Eagle Spike 穿 5HP → 保持距离打 hit-and-run → SA2 风球时速度碾压。"
    keyMoves: ["Rolling Assault", "5MP", "Eagle Spike"]
  - opponent: "lily"
    difficulty: "advantageous"
    summary: "Lily 的短 range 和依赖 Condor Wind 充能让她在 Rashid 的高机动性面前难以建立节奏"
    strategies:
      - "Lily 的核心威胁是 Condor Wind 充能后的强化特殊技和 command grab。Lily 需要通过 Condor Wind (41236P) 充能才能获得最强状态——充能时是 Rashid 主动 Rolling Assault 突进的最佳窗口。Lily 的 range 偏短——5MP 和 2MP 的 reach 不如 Rashid 的同类 normal。Lily 没有 invincible DP（只有 OD Condor Dive 有限 invincibility），贴身后 Rolling Assault → overhead/low/throw 三段混合非常有效。Lily 的 command grab (Rending Talon) 在近身是威胁但需要 stock——没有 stock 时她无法使用 command grab 是 Rashid 最强的进攻窗口。Lily 的 condor dive 从空中突进可以用 2HP anti-air。核心策略：趁 Lily 充能时突进，贴身后三段混合碾压她有限的防守。"
      - "接近 Lily 非常直接。5MP → 2MP 确认在中距离 poke 建立 threat——Lily 的 normal range 短所以 Rashid 在 poke 战中占优。每次 Lily 试图 Condor Wind 充能用 Rolling Assault 前滚突进打断她的充能 animation——充能窗口约 30f+ 足够安全突进。Rolling Assault 穿波后 overhead/low follow-up 让 Lily 猜测。如果 Lily 习惯用 condor dive 空中突进，用 2HP anti-air 打她的 dive。Lily 没有 invincible DP 一旦贴身 Rolling Assault → overhead/low/throw 三段混合是 free meal。注意 Lily 的 command grab——有 stock 时近身不要 predictable strike 要 mix 更多 jump 和 backdash。Eagle Spike 从远距离突袭可以 catch Lily 的充能 animation。"
      - "DI 在 Lily 出 Condor Dive 或 heavy poke 时使用。DR 用于延伸连段和突进接近。SA1 在 Lily jump-in 或 condor dive 时反制。SA2 在 knockdown 后激活——风球强化机动性让 Lily 更难获得充能的空间。CA 在 Lily predictably block 时使用。Drive Reversal 在被她的 stock-powered 压制困住时使用。2HP 是应对 Lily condor dive 的核心。对局节奏：趁充能时 Rolling Assault 突进 → 5MP poke 建立 threat → 贴身 overhead/low/throw 三段混合碾压 → 不给 Lily stock 空间。"
    keyMoves: ["Rolling Assault", "5MP", "2HP"]
  - opponent: "cammy"
    difficulty: "even"
    summary: "双方高机动性 rushdown 的对决——Rashid 的 Rolling Assault 混合 vs Cammy 的 strike/throw 速度战"
    strategies:
      - "Cammy 的核心威胁是 Cannon Strike dive kick 和 Hooligan Combination 多角度进攻。Cannon Strike 改变空中弧度让 Rashid 的 2HP anti-air timing 变难——需要更精准的 react。Cammy 的 Spiral Arrow 低姿态突进可以穿过 Rashid 的 5HP 和高位攻击。Cammy 的 5MP 是 5f 比 Rashid 的 6f 快——在 5MP range 内交换 Cammy 有速度优势。Cammy 的 Hooligan Combination 多方向 follow-up 让防守端头疼——overhead、low、dive kick 三方向混合。Cammy 有 Cannon Spike invincible DP (5f) 让 Rashid 的贴身混合面临 reversal 风险。双方偏低血量 (Cammy 约 9500, Rashid 约 9500) 每次确认都很致命。核心策略：在 poke 战中保持距离用 2MK 远距离 poke，突进时用 Rolling Assault 穿 Cammy 的 poke 然后 follow-up 混合。"
      - "对 Cammy 需要更多地面 work。5MP 在中距离 poke 建立 threat 但 Cammy 的 5MP (5f) 更快所以 poke 交换中 Rashid 不占优。核心方法是读 Cammy 的 Cannon Strike dive kick timing 用 2HP anti-air——Cannon Strike 的角度较固定比 Hooligan 更好 react。如果 Cammy 习惯 Hooligan → overhead，用 2MK 下段打她的 overhead startup。Rolling Assault 窿 Cammy 的 Spiral Arrow recovery 然后 follow-up 进攻。DR 是从远距离突入的关键——2MK → DR → 5MP → HP Arabian Cyclone。一旦贴身注意 Cammy 的 Cannon Spike invincible DP——需要 mix overhead、low 和 throw 让她无法 predictable DP。如果 Cammy 习惯 DP，bait 出来用 block → 5MP → HP Arabian Cyclone → Eagle Spike 惩罚。Rolling Assault → low follow-up 在 Cammy 习惯站防 overhead 时使用。"
      - "DI 在 Cammy 出 Spiral Arrow 或 Hooligan heavy attack 时使用。DR 用于突进接近和延伸连段。SA1 在 Cammy jump-in 或 DR 接近时反制。SA2 在 knockdown 后激活——风球强化机动性让双方的 speed war 升级但 Rashid 获得额外优势。Cammy 的 CA 有完全无敌。CA 在 Cammy predictably block 时使用。Drive Reversal 在被她的 Cannon Spike loop 压在角落时关键。OD Arabian Cyclone 在 Cammy predictable 空中进攻时使用。对局节奏：2HP anti-air 打 Cannon Strike → Rolling Assault 穿 Spiral Arrow → 贴身 overhead/low/throw 三段混合 → 小心 Cannon Spike DP。"
    keyMoves: ["Rolling Assault", "2HP", "5MP"]
  - opponent: "a-k-i"
    difficulty: "even"
    summary: "A.K.I. 的毒系控制和 creepy 混合让 Rashid 需要快速 close distance——Rolling Assault 穿波动是接近关键"
    strategies:
      - "A.K.I. 的核心威胁是 poison 系统和远距离 poke。A.K.I. 的 toxic slime 波动可以造成 poison DOT——被 poison 后每秒掉血约 60 持续约 10 秒非常伤。A.K.I. 的 5MP 和 2MP range 远在中距离 poke 战中不输 Rashid。A.K.I. 的 command grab (Toxic Love) 在近身是威胁配合 poison 让伤害叠加。A.K.I. 没有 invincible DP（只有 OD Serpent's Lash 有限 invincibility），贴身后 Rashid 的三段混合有效。A.K.I. 的 creeping attack 从地面突进可以 catch Rashid 的 walk——用 2MK 下段 poke 打她的 startup。核心策略：快速 Rolling Assault 窿波动接近避免被 poison DOT 消耗——被 poison 后 Rashid 的低 HP 会让 DOT 非常致命。"
      - "接近 A.K.I. 的关键是快速 close distance 避免被 poison 控场。Rolling Assault 前滚穿 A.K.I. 的 toxic slime 波动——穿波后 overhead/low follow-up 让 A.K.I. 猜测。5MP → 2MP 确认在中距离 poke 建立 threat 但要注意不要被 A.K.I. 的 5MP range out-poke。DR 是从远距离突入的重要工具——2MK → DR → 5MP → HP Arabian Cyclone。一旦贴身 A.K.I. 没有 invincible DP——Rolling Assault → overhead/low/throw 三段混合是有效手段。注意 A.K.I. 的 command grab——近身不要 predictable strike 要 mix throw 和 jump。Eagle Spike 在 A.K.I. 出 5HP 时穿过反击。如果 A.K.I. 成功 poison 你，加速进攻节奏——毒 DOT 每秒消耗让你不能打持久战。SA2 风球强化后的速度让 A.K.I. 的控场更难 lock down Rashid。"
      - "DI 在 A.K.I. 出 toxic slime 或 heavy poke 时使用。DR 用于从远距离突入和延伸连段。SA1 在 A.K.I. jump-in 或出 creeping attack 时反制。SA2 在 knockdown 后激活——风球强化机动性让 A.K.I. 难以维持 poison 控场。CA 在 A.K.I. predictably block 时使用。Drive Reversal 在被她的 poison follow-up 压制时使用。OD Arabian Cyclone 是应对 A.K.I. 近身混合的有限逆转。对局节奏：快速 Rolling Assault 穿波接近 → 避免被 poison 控场 → 贴身 overhead/low/throw 三段混合 → 被 poison 时加速进攻节奏。"
    keyMoves: ["Rolling Assault", "5MP", "Eagle Spike"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed 的 psycho flicker 控制和 kill rush 突进与 Rashid 的机动性形成均势——Rolling Assault 穿波动是关键"
    strategies:
      - "Ed 的核心威胁是 Psycho Flicker (快速拳击) 和 Kill Rush 突进。Psycho Flicker 是快速多段拳击可以作为中距离 poke——Rashid 的 5MP 可以 interrupt 但 timing 要求高。Ed 的 Kill Rush 是有 armor 的突进可以用 DI 反制。Ed 的 5MP 速度快在中距离交换中速度不输 Rashid。Ed 有 invincible OD Psycho Rising 作为 reversal——贴身时需要注意。Ed 的 Psycho Spark 是波动型 poke 可以用 Rolling Assault 前滚穿波。Ed 的 mid-range game 很强配合 flicker 控制让 Rashid 的 walk-in 变难。核心方法：Rolling Assault 穿波动和 poke → 贴身后 overhead/low/throw 混合 → 注意 OD Psycho Rising reversal。"
      - "接近 Ed 需要精准 timing。Rolling Assault 前滚穿 Psycho Spark 波动——穿波后 overhead/low follow-up 让 Ed 猜测。5MP → 2MP 确认在中距离 poke 建立 threat 但 Ed 的 flicker speed 很快所以 poke 交换要谨慎。DR 是从远距离突入的关键——2MK → DR → 5MP → HP Arabian Cyclone。DI 在 Ed 出 Kill Rush 时使用打掉他的 armor。一旦贴身 Ed 有 OD Psycho Rising 作为有限 invincible reversal——需要 mix overhead、low 和 throw 让他无法 predictable reversal。如果 Ed 习惯 OD Psycho Rising，bait 出来用 block → 5MP → combo 惩罚。Eagle Spike 在 Ed 出 5HP 时穿过反击。Rolling Assault → overhead follow-up 在 Ed 习惯蹲防 flicker 时特别有效。"
      - "DI 在 Ed 出 Kill Rush 或 Psycho Flicker heavy 时使用。DR 用于从远距离突入和延伸连段。SA1 在 Ed 远距离出 Kill Rush 时反制。SA2 在 knockdown 后激活——风球强化机动性让 Ed 的 flicker 控场更难维持。Ed 的 CA 有完全无敌。CA 在 Ed predictably block 时使用。Drive Reversal 在被他的 flicker 压力循环压制时使用。对局节奏：Rolling Assault 穿波动接近 → 5MP poke 建立 threat → 贴身 overhead/low/throw 三段混合 → 小心 OD Psycho Rising reversal。"
    keyMoves: ["Rolling Assault", "5MP", "Eagle Spike"]
  - opponent: "akuma"
    difficulty: "even"
    summary: "Akuma 的全面进攻工具和低 HP 让对局变成高风险高回报——Rolling Assault 穿波动和 combo 确认决定胜负"
    strategies:
      - "Akuma 的核心威胁是全面的进攻工具和 Demon flip 混合。Akuma 有标准的 Hadoken/Goshoryuken 工具箱加上 Demon Flip (6239P) 的多方向混合。Goshoryuken 是 invincible DP 让 Rashid 的空中进攻很危险。Akuma 的 5MP 和 2MP 都是快速确认工具。Akuma 的 air fireball 从空中出波动可以打乱 Rashid 的 anti-air timing。Akuma 的 HP 极低（约 9000）是游戏中最低之一——每次 Rashid 确认 combo 都很致命。Akuma 的 Demon Slip 是 low profile 突进可以用 2MK 打他的 startup。核心策略：Akuma 低 HP 意味着 Rashid 的 combo 确认回报更高——需要快速接近然后高效确认。Rolling Assault 穿 Hadoken → 贴身混合是主要路径。注意 Demon Flip 的多方向 follow-up 不要被他的混合打乱节奏。"
      - "接近 Akuma 的核心是用 Rolling Assault 穿波动然后利用 Akuma 低 HP 的弱点高效确认。Rolling Assault 前滚穿 Hadoken——穿波后 overhead/low follow-up 让 Akuma 猜测。如果 Akuma 习惯 Goshoryuken anti-air，bait 出来用 block → 5MP → HP Arabian Cyclone → Eagle Spike 严重惩罚（低 HP 让惩罚伤害更致命）。5MP → 2MP 确认在中距离 poke 建立 threat。Eagle Spike 在 Akuma 出 5HP 时穿过反击。注意 Akuma 的 air fireball——从空中出波动打乱你的 2HP anti-air timing，需要 delay anti-air 或 forward walk 到 air fireball 的盲区。Demon Flip 的 overhead/low/throw 三方向混合需要 block 正确方向——低 HP 意味着 Akuma 的每次混合失败也是致命的。Rolling Assault → overhead follow-up 在 Akuma 习惯蹲防时特别有效。"
      - "DI 在 Akuma 出 sweep 或 Demon Flip heavy 时使用。DR 用于延伸连段——对 Akuma 的低 HP 每次延伸 combo 都更致命。SA1 在 Akuma jump-in 或出 Hadoken 时穿波反制。SA2 在 knockdown 后激活——风球强化机动性让 Akuma 低 HP 的弱点更加致命。Akuma 的 CA (Shun Goku Satsu) 有 command grab 属性不要在 CA range 内 predictable。CA 在 Akuma predictably block 时使用。Drive Reversal 在被 Akuma 的 Demon Flip 压制时使用。对局节奏：Rolling Assault 穿波动接近 → 高效 combo 确认利用低 HP → bait Goshoryuken 严重惩罚 → 注意 Demon Flip 混合方向。"
    keyMoves: ["Rolling Assault", "5MP", "Eagle Spike"]
  - opponent: "m-bison"
    difficulty: "even"
    summary: "M.Bison 的 Psycho Power 压制和 Devastate command grab 让 Rashid 需要在他的压力间隙反击——DR 和 Drive Reversal 是关键"
    strategies:
      - "M.Bison 的核心威胁是 Psycho Power 压制循环和 Devastate command grab。Bison 的 5MP 和 2MP 都是快速确认工具配合他的 walk speed 建立持续压力。Bison 的 Psycho Shot 是波动型 poke 可以用 Rolling Assault 前滚穿波。Bison 有 invincible OD Psycho Blast 作为 reversal——贴身时需要注意。Bison 的 Devastate 是近身 command grab 配合他的 strike 压力形成 strike/throw 混合。Bison 的 Bison Warp (传送) 可以从远距离瞬间拉近距离——需要 react 用 5MP 打他的 landing。Bison 的 5HK range 远可以在中距离 poke Rashid。核心策略：在 Bison 的压力循环间隙用 Rolling Assault 突进或 Drive Reversal 脱困——不要让他 free 建立压力循环。"
      - "对 Bison 的核心是在他的压力循环中找间隙反击。如果 Bison 习惯用 Psycho Shot 波动控场用 Rolling Assault 前滚穿波——穿波后 overhead/low follow-up 让 Bison 猜测。5MP → 2MP 确认在中距离 poke 建立 threat。当 Bison 试图 Bison Warp 传送接近时用 5MP 打他的 landing。一旦贴身注意 Bison 的 Devastate command grab——需要 mix 更多 jump 和 delay attack 让他无法 grab timing。如果 Bison 习惯 OD Psycho Blast reversal，bait 出来用 block → 5MP → combo 惩罚。DR 是从远距离突入的关键。Eagle Spike 在 Bison 出 5HP 或 5HK 时穿过反击。Rolling Assault → low follow-up 在 Bison 习惯站防 Devastate 时使用。SA2 风球强化后的速度让 Bison 的 Warp 更难 catch Rashid。"
      - "DI 在 Bison 出 Psycho Shot 或 Bison Warp startup 时使用。DR 用于从远距离突入和延伸连段。SA1 在 Bison jump-in 或 Warp 时反制。SA2 在 knockdown 后激活——风球强化机动性让 Bison 的压力循环更难 lock down Rashid。Bison 的 CA (Nightmare Booster) 有完全无敌。CA 在 Bison predictably block 时使用。Drive Reversal 在被 Bison 的 Psycho Power 压力循环压制时关键。对局节奏：Rolling Assault 穿波动接近 → 在压力间隙反击 → 贴身 overhead/low/throw 三段混合 → 注意 Devastate command grab。"
    keyMoves: ["Rolling Assault", "5MP", "Drive Reversal"]
  - opponent: "terry"
    difficulty: "even"
    summary: "Terry 的 Power Wave 控制和 Burn Knuckle 突进与 Rashid 的机动性形成均势——Rolling Assault 是破局工具"
    strategies:
      - "Terry 的核心威胁是 Power Wave 波动和 Burn Knuckle (236P) 突进。Power Wave 是地面波动可以用 Rolling Assault 前滚穿波或 Eagle Spike 跳过。Burn Knuckle 是快速突进有 gap 可以 DI 或 5MP interrupt。Terry 的 Rising Tackle 是 invincible anti-air 让 Rashid 的空中进攻有风险。Terry 的 5MP 速度快在中距离交换中不输 Rashid。Terry 的 Crack Shot (214K) 是有 armor 的突进可以用 DI 反制。Terry 没有 invincible DP（Rising Tackle 需要 charge 所以不是随时可用），在 Terry 没有 down-charge 时 Rashid 的空中进攻更安全。核心策略：读 Power Wave 节奏用 Rolling Assault 穿波 → 贴身后利用 Terry 没有 free anti-air 的窗口混合进攻。"
      - "接近 Terry 的核心是用 Rolling Assault 穿 Power Wave 波动。Rolling Assault 前滚穿波——穿波后 overhead/low follow-up 让 Terry 猜测。注意 Terry 的 Rising Tackle 需要 down-charge——在他没有 charge 时（比如刚出 Power Wave 或 walk forward 后）空中 Arabian Cyclone 更安全。5MP → 2MP 确认在中距离 poke 建立 threat。DR 是从远距离突入的关键——2MK → DR → 5MP → HP Arabian Cyclone。DI 在 Terry 出 Burn Knuckle 或 Crack Shot 时使用打掉他的突进。一旦贴身 Terry 的 Rising Tackle 是主要威胁但需要 charge——用 Rolling Assault → overhead/low/throw 三段混合打他 charge timing。如果 Terry 习惯 Rising Tackle anti-air，bait 出来用 block → 5MP → combo 惩罚。Eagle Spike 在 Terry 出 5HP 时穿过反击。"
      - "DI 在 Terry 出 Burn Knuckle 或 Crack Shot 时使用。DR 用于从远距离突入和延伸连段。SA1 在 Terry jump-in 或出 Power Wave 时穿波反制。SA2 在 knockdown 后激活——风球强化机动性让 Terry 的 Power Wave 控场完全失效。Terry 的 CA (Power Geyser) 有完全无敌。CA 在 Terry predictably block 时使用。Drive Reversal 在被 Terry 的 Burn Knuckle 压力循环压制时使用。对局节奏：Rolling Assault 穿 Power Wave → 贴身 overhead/low/throw 三段混合 → 注意 Rising Tackle charge timing → DI 打 Burn Knuckle。"
    keyMoves: ["Rolling Assault", "5MP", "Eagle Spike"]
  - opponent: "mai"
    difficulty: "even"
    summary: "Mai 的扇子控制和空中机动性与 Rashid 的高机动性形成均势——Rolling Assault 穿扇子和 anti-air 是关键"
    strategies:
      - "Mai 的核心威胁是扇子波动和多方向空中进攻。Mai 的扇子 (Kachousen) 可以在不同角度出波动——需要精确判断角度才能 Rolling Assault 穿波。Mai 的空中机动性很强配合 air special 可以从多角度进攻——Rashid 的 2HP anti-air 需要更精准的 timing。Mai 的 5MP 和 2MP 是快速确认工具。Mai 有 invincible OD Musasabi no Mai 作为 reversal——贴身时需要注意。Mai 的 command grab (Hishou no Mai) 在近身是威胁配合她的 strike 形成 strike/throw 混合。Mai 的 HP 偏低（约 9500）每次 Rashid 确认 combo 都很致命。核心策略：读扇子节奏用 Rolling Assault 穿波 → 贴身后高效 combo 确认利用她低 HP 的弱点。"
      - "接近 Mai 需要读她的扇子 timing。Rolling Assault 前滚穿扇子波动——注意不同角度的扇子需要不同的 timing 和 follow-up。5MP → 2MP 确认在中距离 poke 建立 threat。如果 Mai 习惯空中机动突进用 2HP anti-air 打她的空中 approach。DR 是从远距离突入的关键——2MK → DR → 5MP → HP Arabian Cyclone。一旦贴身 Mai 有 OD Musasabi no Mai 作为有限 invincible reversal——需要 mix overhead、low 和 throw 让她无法 predictable reversal。注意 Mai 的 command grab——近身不要 predictable strike 要 mix jump 和 delay attack。Eagle Spike 在 Mai 出 5HP 时穿过反击。Rolling Assault → overhead follow-up 在 Mai 习惯蹲防时特别有效。SA2 风球强化后的速度让 Mai 的扇子控场更难维持。"
      - "DI 在 Mai 出扇子波动或 heavy poke 时使用。DR 用于从远距离突入和延伸连段。SA1 在 Mai jump-in 或出扇子时反制。SA2 在 knockdown 后激活——风球强化机动性让 Mai 的控场更难 lock down。Mai 的 CA 有完全无敌。CA 在 Mai predictably block 时使用。Drive Reversal 在被她的扇子 follow-up 压制时使用。2HP 是应对 Mai 空中突进的核心。对局节奏：Rolling Assault 穿扇子接近 → 2HP anti-air 打空中突进 → 贴身 overhead/low/throw 三段混合 → 利用她低 HP 高效确认。"
    keyMoves: ["Rolling Assault", "2HP", "5MP"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena 的远距离 poke 和 healing 能力让 Rashid 需要持续施压——Rolling Assault 突进和 SA2 风球是压制关键"
    strategies:
      - "Elena 的核心威胁是远距离 poke 和 healing 能力。Elena 的 5MP 和 2MP range 极远在中距离 poke 战中 Rashid 处于劣势——Elena 的 range 更长。Elena 的 Mallet Smash (overhead) 可以在 poke 后突然打上段。Elena 的 healing (通过 stance 或 super) 可以回复 HP——如果 Rashid 不持续施压 Elena 可以慢慢回血逆转局面。Elena 没有 invincible DP（只有 OD Spin Scythe 有限 invincibility），贴身后 Rashid 的三段混合有效。Elena 的 capoeira kicks 在近中距离 range 广。核心策略：不能让 Elena free heal——必须持续 Rolling Assault 突进施压不给 healing 空间。一旦贴身 Elena 无 invincible reversal 三段混合是 free meal。"
      - "接近 Elena 需要持续施压不能给她 healing 空间。Rolling Assault 前滚穿她的远距离 poke——穿 poke 后 overhead/low follow-up 让 Elena 猜测。5MP → 2MP 确认在中距离 poke 建立 threat 但 Elena 的 range 更远所以需要更多 DR 突进。2MK → DR → 5MP → HP Arabian Cyclone 是从远距离突入的标准路线。DI 在 Elena 出 5MP 或 2MP poke 时使用——这些长 range poke 可以被 DI 吸掉。一旦贴身 Elena 没有 invincible DP——Rolling Assault → overhead/low/throw 三段混合是 free meal。关键心态：绝对不能后退——Elena 的 healing 意味着每次 Rashid 后退都是在给她 free HP。即使需要 block 也要保持前进方向。SA2 风球强化后的速度让 Elena 无法获得 healing 空间。"
      - "DI 在 Elena 出远距离 poke 或 Mallet Smash 时使用。DR 是最重要的接近手段——持续消耗 meter 突进接近。SA1 在 Elena jump-in 或远距离 poke 时反制。SA2 在 knockdown 后激活——风球强化机动性是终极 healing 否决工具，风球存在时 Rashid 的速度让 Elena 完全无法 healing。Elena 的 CA 有 healing 属性——如果她出 CA 回血用 SA1 或 CA 跟进打掉她的回血窗口。CA 在 Elena predictably block 时使用。Drive Reversal 在被她的 capoeira kicks 压制时使用。核心心态：持续前进 → Rolling Assault 突进 → 不给 healing 空间 → SA2 风球时全力进攻。"
    keyMoves: ["Rolling Assault", "DR 接近", "SA2 Ysaar"]
  - opponent: "volcano-handshake"
    difficulty: "even"
    summary: "Volcano Handshake 的高伤害输出和 burn 状态让 Rashid 需要避免不必要的 risk——Rolling Assault 精准突进是关键"
    strategies:
      - "Volcano Handshake 的核心威胁是高伤害输出和 burn 状态机制。burn 状态会让 Rashid 持续掉血类似 poison——被 burn 后需要加速进攻节奏。Volcano Handshake 的 5HP 和 2HP range 远且伤害高。Volcano Handshake 的 burn attack 有 armor 可以用 DI 反制。Volcano Handshake 的特殊技可以造成 burn DOT——每次被 burn DOT 命中约 60/sec 持续数秒对 Rashid 偏低 HP 非常致命。Volcano Handshake 没有 invincible DP（只有 OD 火焰突进有限 invincibility），贴身后 Rashid 的三段混合有效。核心策略：避免不必要的 risk——被 burn DOT 后不急于进攻反而更危险。精准 Rolling Assault 窿波动突进然后高效确认。"
      - "接近 Volcano Handshake 需要精准 timing 避免被 burn attack 命中。Rolling Assault 前滚穿波动——穿波后 overhead/low follow-up 让 Volcano Handshake 猜测。5MP → 2MP 确认在中距离 poke 建立 threat 但要注意不要被 burn attack catch。DR 是从远距离突入的关键——2MK → DR → 5MP → HP Arabian Cyclone。DI 在 Volcano Handshake 出 burn armor attack 时使用打掉他的 armor。一旦贴身 Volcano Handshake 没有完全 invincible DP——Rolling Assault → overhead/low/throw 三段混合有效。Eagle Spike 在 Volcano Handshake 出 5HP 时穿过反击。注意 Volcano Handshake 的 burn follow-up——被 burn 后加速进攻利用 combo 确认弥补 DOT 损失。SA2 风球强化后的速度让 Volcano Handshake 的 burn attack 更难 catch Rashid。"
      - "DI 在 Volcano Handshake 出 burn armor attack 或 heavy poke 时使用。DR 用于从远距离突入和延伸连段。SA1 在 Volcano Handshake jump-in 或出 burn attack 时反制。SA2 在 knockdown 后激活——风球强化机动性让 Volcano Handshake 的 burn 攻击更难命中。Volcano Handshake 的 CA 有完全无敌。CA 在 Volcano Handshake predictably block 时使用。Drive Reversal 在被他的 burn 压力压制时使用。OD Arabian Cyclone 是应对 Volcano Handshake 近身 burn 混合的有限逆转。对局节奏：Rolling Assault 精准穿波突进 → 避免被 burn DOT → 高效 combo 确认 → SA2 风球时全力进攻。"
    keyMoves: ["Rolling Assault", "5MP", "Eagle Spike"]
---
