---
name: "Zangief"
subtitle: "The Red Cyclone"
overview: "Zangief 是一名以近身指令投为核心的 grappler 型角色，拥有游戏中最高的单发伤害和惊人的血量（11000 HP）。他的标志性招式 SPD (Spinning Pile Driver) 在近身拥有不可防御的恐怖威胁，一旦被 Gief 贴身，对手将面临 strike/command grab 的致命二择。核心弱点是接近手段匮乏、移动速度极慢、远距离几乎没有存在感，需要通过耐心 walk-in、DR 接近和 headbutt 穿越飞行道具来拉近距离。"
keyMoves:
  - name: "Spinning Pile Driver (SPD)"
    input: "360+P (近距离摇杆一圈+拳)"
    description: "Zangief 的灵魂招式。LP 版本伤害约 2000，HP 版本约 2300。所有版本均为不可防御的 command grab，在投技范围内瞬间发动。LP SPD 范围最大但伤害最低，HP SPD 范围略小但伤害最高。OD SPD (360PP) 伤害约 2500 并附带绝佳的 positional advantage。SPD 是 Zangief 近身威胁的基石——对手一旦进入 SPD 范围就必须猜测 strike 或 grab，形成无法防御的二择压力。配合 Siberian Express (214K) 的威胁让对手在站立和跳跃之间进退两难。"
    startup: 5
    active: 2
    recovery: 58
    damage: 2000
  - name: "Siberian Express (214K)"
    input: "214+K"
    description: "Zangief 的远距离 command grab。LK 版本抓站姿对手，HK 版本抓蹲姿或起身中的对手。OD 版本 (214KK) 同时抓站姿和蹲姿。Siberian Express 的 range 比 SPD 远得多（约 2/3 SPD range 的 1.5 倍），是远距离 command grab 威胁的核心。它的存在让对手即使在 SPD range 外也不能放松警惕。214K 还可以用来 punish 某些 on recovery 的招式。HK 版本可以 catch 对手延迟起身。注意 214K 有 20f+ 的 startup，不是瞬间发动，可以被 jump 或 backdash 躲避。"
    startup: 20
    active: 3
    recovery: 48
    damage: 1800
  - name: "Borscht Dynamite (空中 360+P)"
    input: "空中 360+P"
    description: "Zangief 的空中 command grab。在 jump 或 forward jump 的上升/下降过程中输入 360+P 即可发动。LP 版本伤害约 1600，HP 版本约 1900。OD 版本 (空中 360PP) 伤害约 2200。Borscht Dynamite 是 Zangief 空中进攻的核心——在 jump-in 时如果对手选择 block 正常攻击，你可以改用 Borscht Dynamite 抓取不可防御的伤害。这使得 Zangief 的 jump-in 变成 strike/air grab 的二择。配合 SPD 的地面威胁形成空中/地面双层 command grab 压力。"
    startup: 6
    active: 2
    recovery: 40
    damage: 1600
  - name: "Aerial Russian Slam (623+K 空中)"
    input: "空中 623+K"
    description: "Zangief 的空中突进 grab。LK 版本角度较平，HK 版本角度较陡直下。命中后造成 knockdown 并造成约 1400-1700 伤害。Aerial Russian Slam 的特性是快速空对地接近——从空中突然转向地面抓取对手。它比普通的 jump-in 更难被 anti-air 因为轨迹突然改变。可以作为 mix-up 工具：对手预期你 jump-in attack 时出 Russian Slam，预期你 Borscht Dynamite 时出普通 attack。这三者的混合让 Zangief 的空中进攻非常难读。"
    startup: 10
    active: 3
    recovery: 36
    damage: 1500
  - name: "Double Lariat (PPP)"
    input: "PPP (同时按三个拳键)"
    description: "Zangief 的旋转双拳 lariat。全程带有 upper body invincibility（上半身无敌），可以穿过 projectile（飞行道具）。约 8f startup，持续约 30f 的 active frames。伤害约 800-1200 取决于命中段数。Double Lariat 是 Zangief neutral 的核心工具——它可以穿过波动拳类飞行道具，是 Zangief 接近的重要手段。同时作为 anti-air 也非常出色：上半身无敌让 jump-in attack 打不到你而旋转拳可以打到空中的对手。注意下段攻击（2LK, 2MK 等）可以打断 lariat。"
    startup: 8
    active: 30
    recovery: 18
    damage: 1000
  - name: "5HP (站立重拳)"
    input: "5HP"
    description: "Zangief 的远距离站立重拳 Headbutt。14f startup，on hit 约 +2，on block 约 -6。伤害约 1000。5HP 的 range 是 Zangief normal 中最远的之一，在中远距离是主要的 poke 工具。命中后造成 stagger 让对手短暂硬直，可以确认后续 SPD 或 combo。5HP 也是 Zangief 在 neutral 中建立威胁的重要工具——它的存在让对手不敢轻易 walk-in。配合 2HP (下段远距离) 形成上段/下段远距离 poke 二择。在 max range 5HP on block 相对安全，不容易被 punish。"
    startup: 14
    active: 5
    recovery: 24
    damage: 1000
  - name: "2HP (蹲重拳)"
    input: "2HP"
    description: "Zangief 的远距离下段蹲位重拳。12f startup，on hit 造成 knockdown，on block 约 -10。伤害约 900。2HP 的 range 和 5HP 差不多远但是下段，形成中远距离的 poke 二择。命中后的 knockdown 给 Zangief 争取 walk-in 接近的时间。2HP max range 时 on block 相对安全因为距离远对手难以 punish。是 Zangief footsies 的重要组成——配合 5HP 和 Double Lariat 构成远距离三位一体的 poke 体系。"
    startup: 12
    active: 5
    recovery: 26
    damage: 900
  - name: "5MK (站立中踢)"
    input: "5MK"
    description: "Zangief 的中距离踢击。10f startup，+4 on hit，-4 on block。伤害约 600。5MK 是 Zangief 中距离 footsies 的核心按钮——判定距离比 5MP 远，速度比 5HP 快。on hit +4 让 Zangief 有 frame advantage 继续前进或设置 strike/throw 混合。5MK 命中后可以确认 walk forward SPD 或者 2LP → 2LP 确认 combo。在 Zangief walk-in 接近的过程中 5MK 是建立 frame advantage 和阻断对手反击的关键中间工具。"
    startup: 10
    active: 4
    recovery: 20
    damage: 600
  - name: "SA1 (Cyclone Lariat)"
    input: "236236+P"
    description: "Zangief 的 Level 1 Super Art。10f startup，约 2000 伤害，有 1-8f 完全无敌。SA1 是旋转 lariat 持续攻击，命中的对手会被卷入多次打击。作为 anti-air 非常出色——invincible startup 可以穿过任何 jump-in attack。也可以从 5HP stagger 或 2HP knockdown 后确认接 SA1 增加伤害。SA1 命中后造成 knockdown 给 Zangief 充足的时间 walk-in 接近到 SPD range。Level 1 消耗相对较低可以更频繁使用。在对手 DR 接近时 SA1 是有效的 reversal 反制。"
    startup: 10
    active: 12
    recovery: 38
    damage: 2000
  - name: "Critical Art (Bolshoi Storm Buster)"
    input: "214214+K"
    description: "Zangief 的 Critical Art（Level 3 Super）。9f startup，约 4000 伤害（CA 版本 4500），完全无敌 1-13f。动画展示 Zangief 将对手高高举起后猛烈摔砸到地面。CA 是 Zangief 的终极逆转和高伤害 combo ender。从 SPD 后的 positional advantage 可以接 CA 作为确认收尾（如果有 meter）。CA 的 command grab 属性意味着它不可被 block——只有 jump 和 backdash 可以躲。在对手 predictably block 时突然 CA 是毁灭性的。保留 CA 到关键时刻——4000+ 伤害配合 SPD 的威胁可以瞬间逆转局面。"
    startup: 9
    active: 6
    recovery: 50
    damage: 4000
tips:
  - "开局策略：Zangief 开局需要立刻开始 walk-in 接近对手。如果对手有飞行道具，用 Double Lariat (PPP) 穿波或 Perfect Parry 吸波建立 Drive 优势。开局不要急于 jump-in——大部分角色的 anti-air 都很可靠，盲目跳入只会白白挨打。标准开局节奏：walk-in → 5HP/2HP 中距离 poke → 5MK 建立 frame advantage → 持续前进直到进入 SPD range。如果对手开局远距离放波，耐心用 lariat 穿波一步步接近。"
  - "核心连段路线：Zangief 的 combo 相对简单但伤害极高。标准确认：5HP stagger → walk forward SPD，约 3000+ 伤害。Drive Rush 确认：2MK → DR → 5HP → SPD，约 3200+。角落确认：5HP → DR → 5MP → 2LP → SA1，约 3500+。Anti-air 确认：Double Lariat 命中 jump-in → SA1，约 2800+。Strike/Throw 确认：2LP → 2LP → LP SPD/HP SPD 混合。始终根据距离和 meter 选择——有 meter 时用 DR 延伸连段增加伤害，无 meter 时用 SPD 收尾最大化 positional advantage。"
  - "立回核心：Zangief 的 footsies 是围绕 walk-in 和远距离 poke 展开的。核心体系：远距离用 5HP/2HP poke 和 lariat 穿波，中距离用 5MK 建立 frame advantage，近距离用 2LP/5LP 快速确认转入 strike/throw 混合。当对手在远距离放波时用 lariat 穿过或 Perfect Parry 吸波。当对手试图 poke 你时用 5HP max range 打他的恢复帧。当对手 jump-in 时用 Double Lariat (上半身无敌) anti-air。不要在远距离恋战——Zangief 的 goal 永远是拉近距离进入 SPD threat range。每次 poke 命中后的 knockdown 或 stagger 都要 walk forward 缩短距离。"
  - "Drive Rush 使用策略：Zangief 的 DR 主要用于两个关键场景。1) 接近：远距离 DR cancel 某个普通技瞬间拉近距离，从远距离直接突入 SPD range。2) 延伸连段：2MK → DR → 5HP → SPD 或 5HP → DR → 5MP → 2LP → SA1。Drive Impact 在 Zangief 的 gameplan 中极其重要——DI 的 armor 可以穿过单发 poke，命中后的 wall splat 给 Zangief walk-in 到 SPD range 的时间。Drive Reversal 是 Zangief 被压在角落时脱困的关键——创造距离重新开始 walk-in。Drive Gauge 管理对 Zangief 非常重要：保留足够 meter 给 DR 接近和 Drive Reversal 脱困。"
  - "应对不同距离：远距离（全屏到 2/3 屏）是 Zangief 最弱的距离——需要耐心穿波和 walk-in。中距离（1/3 到 1/2 屏）是 Zangief 开始建立威胁的距离——5HP, 2HP, 5MK 的 range 覆盖这个距离。近距离（1/3 屏以内）是 Zangief 的天下——SPD/214K 的 command grab 威胁加上 2LP/5LP 的 strike 确认让对手陷入无法防御的二择。核心原则：永远在向对手靠近。每次 knockdown 都要 walk forward 缩短距离，每次 poke 命中都是接近的机会。Zangief 一旦贴身就是游戏中最恐怖的存在——保持耐心，拉近距离。"
  - "Strike/Throw 混合技巧：Zangief 近身的 strike/throw 混合是游戏中最致命的。核心循环：2LP (+5 on hit) 命中后 → SPD (对手如果 block 2LP 就会被 SPD 抓到)。对手开始跳避 SPD → 2LP → 2LP → 5MK → combo (打对手的跳跃恢复帧)。对手开始延迟拆投 → 2LP → 2LP → 5HP stagger → SPD (延迟拆投的时机错过了 tech 窗口)。这个循环让对手在任何选择下都会受伤害。关键是不让对手读出你的 pattern——随机混合 strike 和 throw 的比例。"
  - "防守端的补偿：Zangief 有 11000 HP 是游戏中最高的血量，可以承受更多错误。虽然没有 standard invincible DP（没有 623 输入的 shoryuken 类招式），但 Double Lariat 的 upper body invincibility 可以作为 pseudo anti-air 使用。SA1 (Cyclone Lariat) 有 invincible startup 可以作为 wake-up reversal。Drive Reversal 是最重要的防守工具——消耗 2 bars 创造距离。Perfect Parry 也是建立 Drive 优势的关键——Zangief 的大体型让 parry 判定相对宽容。在低血量时 CA 是终极逆转——不可 block 的 command grab 属性让对手不能安全 block。"
matchups:
  - opponent: "luke"
    difficulty: "disadvantageous"
    summary: "Luke 的全能工具箱让 Zangief 的接近极其困难——Flash Knuckle 压力和波动控制是主要威胁"
    strategies:
      - "Luke 的核心威胁是 Flash Knuckle 压力循环和 Sand Blast 波动。HP Perfect Flash Knuckle 是 +4 on block 的强压制——被 Luke 贴身时很难脱困。Luke 的 5MP (5f) 和 2MP 都是快速确认工具，在近距离交换中 Zangief 的 2LP (5f) 不占速度优势。波动控制方面，Luke 的 Sand Blast recovery 短，Zangief 穿波难度大。需要耐心用 Double Lariat 穿波或 Perfect Parry 吸波建立 Drive。Luke 的 5HK range 远但 -6 on block，可以用 2HP max range 打他的恢复帧。"
      - "接近 Luke 的关键路径：用 5HP/2HP 在中远距离 poke 建立 threat，每次 Luke 放 Sand Blast 用 lariat 穿波前进一步。当距离缩短到中距离时用 5MK (+4 on hit) 建立 frame advantage，然后 walk forward 进入 SPD range。Luke 没有 invincible DP（只有 OD Flash Knuckle 作为有限 reversal），一旦 Zangief 进入 strike/throw range 就面临致命压力。注意 Luke 的 2HK sweep 是 -9 on block 可以用 DR → 5MP → SPD 惩罚。如果 Luke 习惯 DR 接近压制，用 Drive Reversal 创造距离重新开始 walk-in。"
      - "DI 在 Luke 出 HP Sand Blast 或 Perfect Flash Knuckle 时使用——这两个都是单发可被 DI 吸掉。DR 主要用于从远距离突入 SPD range 和延伸连段。Luke 的 CA (Pale Rider, 10f) 比你的 SA1 稍慢。SA1 在 Luke jump-in 时作为 anti-air 使用。CA 在 Luke predictably block 时使用——不可防御的 command grab 是对抗 block 好的对手的终极武器。Drive Reversal 在被 Luke 的 Flash Knuckle loop 压在角落时极其关键。对局节奏：耐心穿波 walk-in → 中距离 poke 建立威胁 → 贴身后 strike/throw 混合 → SPD 完成接近目标。"
    keyMoves: ["Double Lariat (PPP)", "5HP", "SPD"]
  - opponent: "ryu"
    difficulty: "even"
    summary: "波动战中的耐心 walk-in——Ryu 的 Denjin 系统增加了穿波难度但 Zangief 的近身回报极高"
    strategies:
      - "Ryu 的核心威胁是 Denjin Charge 系统和全面的 footsies。Denjin Hadoken 有 armor 属性——不要用普通 lariat 穿 Denjin Hadoken，用 Perfect Parry 或 DI 打掉。Ryu 没有 Denjin 时 HP Hashogeki 是 -4 on block，可以用 5MP 或 walk forward SPD 惩罚。波动战时 Ryu 的 Hadoken 是 Zangief 接近的最大障碍——需要交替使用 lariat 穿波、Perfect Parry 吸波和偶尔 jump-in 来拉近距离。Ryu 的 5HK 和 sweep range 都很远但负帧，用 2HP max range 打他的恢复帧。Ryu 的 Shoryuken LP 是 6f invincible DP——有 meter 时他不怕你的 jump-in，需要更多 ground approach。"
      - "接近 Ryu 的核心是在波动节奏中找到 walk-in 的窗口。每次 lariat 穿过 Hadoken 都前进一步。用 5HP 在中距离 poke Ryu 的 walk-in 和 sweep。当距离缩短到中距离后用 5MK 建立 frame advantage 然后进入 SPD range。Ryu 的 Denjin Charge 给他的 Hadoken 额外属性，在有 Denjin 时 Ryu 可能更频繁放波——这正是 lariat 穿波的好时机因为对手放波更频繁。一旦进入 SPD range Ryu 面临 strike/throw 混合——Shoryuken 虽然是 invincible 但如果 whiff 就是 SPD 的机会。如果 Ryu 习惯 Shoryuken bait and punish，用 2LP strike 确认打他的 DP 恢复帧。"
      - "DI 在 Ryu 出 Denjin Hadoken 或 sweep 时使用。DR 主要用于从远距离突入 SPD range。Ryu 的 CA (Shin Shoryuken, 9f) 完全无敌不要在有 CA 时 jump-in。SA1 作为 anti-air 在 Ryu jump-in 时使用。CA 在 Ryu predictably block 时使用。Drive Reversal 在被 Ryu 的 Denjin 压力困在角落时使用。对局节奏：波动战耐心穿波 → 一步步 walk-in → 中距离 poke 建立威胁 → 贴身后致命的 strike/throw 混合。"
    keyMoves: ["Double Lariat (PPP)", "5HP", "SPD"]
  - opponent: "chun-li"
    difficulty: "disadvantageous"
    summary: "Chun-Li 的超长距离 poke 和速度让 Zangief 难以接近——需要精准的穿波和 DR 接近时机"
    strategies:
      - "Chun-Li 的核心威胁是超长距离 poke (5MP, 2MP, 5HP) 和 Serenity Stream 姿态。她的 5MP startup 快且 range 极长，在中距离 poke 战中 Zangief 处于劣势。Chun-Li 的速度让她可以快速进退——当你 walk-in 时她可以 backdash 拉开距离重新开始 poke。Kikoken 波动虽然不是最强但配合她的 poke 足以阻止 Zangief free 接近。Serenity Stream 姿态的 low profile 可以躲过 5HP——当她进姿态时切 2HP (下段) 打她。需要更多依赖 DR 和 DI 来创造接近机会。"
      - "接近 Chun-Li 需要更多工具配合。标准 walk-in 穿波在面对 Chun-Li 的高频 poke 时不够——需要穿插 DR cancel 突进。2MK → DR → 5HP → SPD 是从远距离突入的标准路线。DI 在 Chun-Li 出 2HP 或 sweep 时使用——这些单发 poke 可以被 DI 吸掉然后 wall splat 给你 walk-in 时间。一旦进入 SPD range，Chun-Li 的 2LP (4f) 比 Zangief 的快，但她没有 invincible DP（只有 OD Tensho Kicks），所以 strike/throw 混合仍然有效。用 2LP → SPD 和 2LP → 2LP → combo 的混合打她的 delay tech。"
      - "DI 在 Chun-Li 出 2HP、sweep 或 Serenity Stream heavy attack 时使用。DR 主要用于突进接近——Zangief 在这个对局需要更多 DR 来弥补 walk-in 的困难。SA1 作为 anti-air 使用。CA 在 Chun-Li predictably block 时使用。Drive Reversal 在被她的 Hundred Lightning Kicks 压制时使用。Perfect Parry 是建立 Drive 的关键——吸她的 poke 建立 meter 用于 DR 接近。对局节奏：更多依赖 DR/DI 创造接近机会 → 一旦贴身 strike/throw 混合 → 不让她重新拉开距离。"
    keyMoves: ["DR 接近", "5HP", "SPD"]
  - opponent: "jamie"
    difficulty: "advantageous"
    summary: "趁 Jamie 喝酒等级低时用 lariat 穿波接近——Level 0-1 的 Jamie 对 Zangief 几乎没有威胁"
    strategies:
      - "Jamie 的威胁随喝酒等级增长但初始很弱。Level 0-1 时趁窗口快速 walk-in 接近——Jamie 的 normal range 短、伤害低，在远距离无法阻止 Zangief 接近。Jamie 的 Bakushin（酒步）是 -4 on block 可以用 5MP 或 walk forward SPD 惩罚。Jamie 试图 drink 升级时是最脆弱的时刻——用 lariat 穿他的波动或直接 walk-in 趁他 drink animation 抓 SPD。Jamie 没有 invincible DP（只有 OD The Devil Inside），一旦 Zangief 贴身就是 SPD 的 free meal。"
      - "开局策略：直接 walk-in 向 Jamie 施压。如果 Jamie 开局试图 drink，lariat 穿波或 walk-in 趁他 drink animation 贴身。Level 0-1 时大胆用 5HP 和 2HP poke——Jamie 的 normal 无法有效阻止你。5MK 建立 frame advantage 后进入 SPD range 开始 strike/throw 混合。如果 Jamie 习惯用 OD The Devil Inside 逆转，bait 它出来后用 block → SPD 惩罚。Jamie Level 3+ 时威胁大增（额外 follow-up mix-up、更高伤害），但如果他在 Level 0-1 时已经被 SPD 抓掉大量血量，他的 growth 不足以逆转。"
      - "DI 在 Jamie 出 heavy attack 或 drink attempt 时使用。DR 用于快速接近和延伸连段。Jamie 的 CA 有完全无敌不要在有 CA 时 predictable。SA1 在 Jamie jump-in 时作为 anti-air。CA 在 Jamie predictably block 时使用。对局节奏：开局快速 walk-in 施压 → 打断每次 drink 尝试 → 贴身后 strike/throw 混合碾压 → 不给他升级空间。"
    keyMoves: ["SPD", "5HP", "Double Lariat (PPP)"]
  - opponent: "guile"
    difficulty: "disadvantageous"
    summary: "Guile 的 Sonic Boom 控制和 Flash Kick anti-air是 Zangief 最困难的测试——需要极端耐心和精准时机"
    strategies:
      - "Guile 是 Zangief 最不利的对局之一。Sonic Boom 的 recovery 极短让 Guile 可以在波动间隙 follow-up，Zangief 的 lariat 穿波后可能面临下一波动或 Flash Kick。Sonic Blade（柱子）+ Sonic Boom 组合让穿波更加困难。Flash Kick anti-air 极其可靠，几乎完全封死了 Zangief 的 jump-in 选项。Guile 的 charge 速度快意味着他始终可以出 Sonic Boom 和 Flash Kick。核心方法：极端耐心地 Perfect Parry 吸波建立 Drive，找波动间隙 lariat 前进，用 DR 从中距离突入 SPD range。绝对不要 jump-in——Flash Kick 几乎一定能打到你。"
      - "接近 Guile 的路径非常狭窄。标准方法是：Perfect Parry 吸 Sonic Boom 建立 Drive meter → 在波动间隙用 lariat 前进一步 → 重复。当距离缩短到中距离后用 5HP poke Guile 的 walk-in 和 2MK。DR 是最重要的接近工具——2MK → DR → 5HP → SPD 是从远距离突入的标准路线。如果 Guile 用 Sonic Blade 柱子，DI 可以打掉柱子并给他压力。一旦进入 SPD range Guile 面临致命威胁——他虽然有 Flash Kick 但 predictable 的 Flash Kick 会被 block 后 SPD 惩罚。用 strike/throw 混合让 Guile 猜测。"
      - "DI 在 Guile 出 Sonic Blade 或 heavy Sonic Boom 时使用。Perfect Parry 是建立 Drive 优势的核心工具。DR 是最重要的接近手段——在这个对局中 Zangief 需要 DR 来弥补 walk-in 的困难。Guile 的 CA (Sonic Hurricane) 有 invincibility。SA1 在 Guile jump-in（罕见）或 DR 接近时使用。CA 在 Guile predictably block 时使用。核心心态：极端耐心，每次接近都要付出大量 effort，但一旦贴身 SPD 的回报是毁灭性的。"
    keyMoves: ["Perfect Parry", "DR 接近", "SPD"]
  - opponent: "kimberly"
    difficulty: "even"
    summary: "Kimberly 的速度和传送让接近变难但她的低血量意味着每次 SPD 都很致命"
    strategies:
      - "Kimberly 的核心威胁是传送混合和 speed。她的 teleport 让 Zangief 的 walk-in 接近变得更加困难——你向她 walk-in 时她可以 teleport 绕过你。但 teleport 的 start-up 有约 20f+ 的窗口，如果你预测到她的 teleport 方向可以转身 5HP 打她的 landing。Kimberly 的 run-stop 混合在近距离是主要威胁——用 2LP 快速确认或 SPD 打她的 run-stop timing。Kimberly 的幻影 dive kick 可以用 Double Lariat anti-air 或 5HP 打她的 dive angle。Kimberly 的 5HK 是 -6 on block 用 5MP 确认惩罚。"
      - "核心策略是保持前进压力但随时准备应对 teleport。如果 Kimberly 习惯 teleport 到你身后，在她 landing 时转身 SPD 或 5HP 打她的 landing 帧。如果她习惯 run-stop 混合，用 2LP 或 SPD 打她的 run animation。Kimberly 没有 invincible DP（只有 OD Bushin Senpukyaku），一旦 Zangief 贴身 strike/throw 混合是致命的。Kimberly 的 low health (约 9500) 意味着每次 SPD 约 2000+ 伤害就能扣掉她 1/5 以上血量。用 5HP 和 2HP 在中远距离 poke 建立威胁，配合 walk-in 缩短距离。"
      - "DI 在 Kimberly 出 heavy run-stop attack 或幻影 dive kick 时使用。DR 用于追击她 teleport 后拉开距离和延伸连段。SA1 在她 teleport landing 或 DR 接近时使用。CA 在她 predictably block 时使用。Drive Reversal 在被她的 teleport 混合压制时使用。Double Lariat 在她 jump-in 或 air approach 时使用。对局节奏：保持前进压力 → 预判 teleport 方向 → 贴身后致命 strike/throw 混合 → 利用她的低血量快速终结。"
    keyMoves: ["SPD", "Double Lariat (PPP)", "5HP"]
  - opponent: "juri"
    difficulty: "even"
    summary: "Juri 的 Fuha stock 系统让她在有 stock 时威胁大增——趁她充能时 walk-in 接近"
    strategies:
      - "Juri 的核心是 Fuha stock 系统。她在 stock 充能时（214K 动作）是相对脆弱的——这是 Zangief walk-in 接近的最佳窗口。有 stock 时 Juri 的 623HP (DP) 和 214HP (hashogeki) 消耗 stock 变强。3 stock 的 Juri 是最危险的——注意她的 stock 数量调整策略。Juri 的 5HP 是 -7 on block 用 5HP max range 打她的恢复帧。中距离用 5HP 和 2HP poke，Juri 的 5MP 是 5f 速度很快需要保持距离。Juri 的 Ryodansatsu (sweep) 是 -9 on block 可以用 DR → SPD 惩罚。"
      - "接近 Juri 的关键是趁她充能 stock 时 walk-in。每次 Juri 出 214K 充能就向她 walk-in 一步——充能的 recovery 帧是安全接近的窗口。5HP 和 2HP 在中远距离持续 poke，每次确认后 walk forward。如果 Juri 习惯用 stock-enhanced move 接近，在 poke 后准备 block 然后用 SPD 惩罚她的 follow-up。一旦进入 SPD range Juri 的 OD DP 是完全 invincible 的逆转——需要 mix strike 和 throw 不能 predictable。用 2LP strike 和 SPD 的随机混合打她的 delay tech 和 jump。"
      - "DI 在 Juri 充 Fuha stock 或出 sweep 时使用。DR 用于从远距离突入 SPD range。SA1 在 Juri DR 接近或 jump-in 时反制。Juri 的 CA 有完全无敌。Drive Reversal 在被她的 Fuha rush 压制时使用。CA 在 Juri predictably block 时使用。对局节奏：趁充能时 walk-in 接近 → 中距离 poke 建立威胁 → 贴身后混合 strike/throw → 注意 stock 数量调整压力。"
    keyMoves: ["SPD", "5HP", "2HP"]
  - opponent: "ken"
    difficulty: "even"
    summary: "Ken 的 Jinrai Kick 压力和 Run 接近是主要威胁——穿波接近后在近身用 strike/throw 混合反击"
    strategies:
      - "Ken 的核心威胁是 Jinrai Kick 压力循环和 Run 系统接近。Jinrai LK (-3 on block) 是安全的持续压力——被 Ken 压在 block 状态时用 Drive Reversal 创造距离。Ken 的 HP Hadoken 是 +3 on hit 波动战需要 lariat 穿波。Ken 的 Run → Dragonlash 接近可以用 Double Lariat anti-air 或 block 后 SPD 惩罚。Ken 的 5HK 有超远距离但 -6 on block，在 max range 用 2HP 打他的恢复帧。用 5HP 和 2HP 在中距离建立威胁阻止他 walk-in。"
      - "接近 Ken 的路径：波动战时用 lariat 穿 Hadoken 前进。Ken 的 Hadoken recovery 不算特别短，穿波窗口比 Guile 大。中距离用 5HP/2HP poke 后 walk forward。如果 Ken 习惯 Run → Dragonlash，预判他的跳跃用 Double Lariat anti-air 然后利用 knockdown 时间 walk-in。一旦进入 SPD range Ken 的 OD DP 是完全 invincible——需要 strike/throw 混合打他的 DP timing。用 2LP → SPD 和 2LP → 2LP → combo 的随机混合让 Ken 猜测。如果 Ken predictably DP，block 后 SPD 惩罚他的 DP recovery (约 -28 on block)。"
      - "DI 在 Ken 出 HP Hadoken 或 Dragonlash Kick 时使用。DR 用于从远距离突入 SPD range 和延伸连段。Ken 的 CA (Shippu Jinraikyaku, 9f) 完全无敌。SA1 在 Ken jump-in 或 DR 接近时反制。CA 在 Ken predictably block 时使用。Drive Reversal 在被 Jinrai 压在角落时极其关键。对局节奏：波动战穿波 walk-in → 中距离 poke 建立威胁 → 贴身后致命 strike/throw 混合 → block DP 后 SPD 重罚。"
    keyMoves: ["SPD", "Double Lariat (PPP)", "5HP"]
  - opponent: "blanka"
    difficulty: "advantageous"
    summary: "Blanka Ball 被 block 后的惩罚极其严重——Zangief 的 SPD 专治 Blanka 的乱冲"
    strategies:
      - "Blanka 的核心威胁是 Blanka Ball 和 Electricity。Blanka Ball LP/MP 版本 on block 是 -4 到 -6 可以确认后惩罚。HP Blanka Ball 是 -10 on block 可以用 DR → 5MP → SPD 或直接 SPD 惩罚。Electricity 是 +4 on block 持续性——不要在 Electricity range 内按按钮，用 5HP max range poke 或 backdash 拉开。Blanka 的 ground vertical ball 是 -26 on block，确认后用 SPD 重罚。Blanka 的 rolling 移动可以用 5HP 或 Double Lariat 在他滚动中打他。"
      - "核心策略是让 Blanka 主动冲向 Zangief 而不是你去追他。用 5HP 和 2HP 在中距离 poke 建立威胁。每次 Blanka Ball 被 block 后用 SPD 惩罚——HP Blanka Ball -10 on block 在 SPD range 内。如果 Blanka 习惯用混乱移动打乱节奏，保持冷静用 Double Lariat 打他的 horizontal ball 和 jump-in。一旦 Blanka 进入你的 SPD range 他的 strike/throw mix-up 不如你的致命——SPD 的不可防御属性让 Blanka 的 block 变得危险。OD Blanka Ball 有 armor 但可以用 DI 打断。"
      - "DI 在 Blanka 出 Blanka Ball 或 vertical ball 时使用——DI 吸掉滚动攻击给 wall splat。DR 用于延伸连段和快速接近。Blanka 的 CA 有无敌 startup 不要 predictable。SA1 在 Blanka 乱攻时作为 anti-air 使用。CA 在 Blanka predictably block 时使用。OD Siberian Express 可以 catch Blanka 的 rolling landing。对局节奏：让 Blanka 冲向自己 → Blanka Ball 被 block 后 SPD 重罚 → 中距离 poke 稳定输出 → 保持冷静不被混乱节奏扰乱。"
    keyMoves: ["SPD", "5HP", "Double Lariat (PPP)"]
  - opponent: "dhalsim"
    difficulty: "disadvantageous"
    summary: "Dhalsim 的远距离 limb 和 Yoga Fire 控制是 Zangief 的噩梦——需要极端耐心一点点接近"
    strategies:
      - "Dhalsim 是 Zangief 最不利的对局之一。他的 Yoga Fire 配合长距离 limb (5HP, 5MK, 2MK) 可以在 Zangief 的所有 poke range 外攻击你。Yoga Fire recovery 短让 Zangief lariat 穿波后可能面临 limb poke。Dhalsim 的 anti-air (Yoga Blast, 5LP) 非常可靠，jump-in 几乎不可能。更麻烦的是 Dhalsim 的 Yoga Teleport 让他可以瞬间拉开距离——你好不容易 walk-in 接近了他一个 teleport 就回到远距离。核心方法：极端耐心 Perfect Parry 吸波建立 Drive，lariat 穿波一步步前进，用 DR 从中距离突入。"
      - "接近 Dhalsim 的路径是最狭窄的。标准方法：Perfect Parry 吸 Yoga Fire 建立 Drive → 在波动间隙用 lariat 前进 → 如果 Dhalsim 放 limb 就 Perfect Parry 吸 limb 建立 Drive。积累足够 Drive 后用 2MK → DR → 5HP → SPD 突入。如果 Dhalsim teleport 绕过你，转身 walk-in 重新开始。注意 Dhalsim 的 health 只有 9500——每次 SPD 约 2000+ 对他来说都是毁灭性的。如果成功贴身一次 SPD + combo 确认可能扣掉他 1/3 血量。一旦进入 SPD range Dhalsim 几乎没有 invincible reversal（只有 OD Yoga Flame），大胆 strike/throw 混合。"
      - "DI 在 Dhalsim 出 Yoga Fire 或长 limb (5HP, 2MK) 时使用。Perfect Parry 是建立 Drive 优势的核心。DR 是最重要的接近手段——在这个对局中必须用 DR 弥补 walk-in 的困难。Dhalsim 的 CA 是全程无敌的。SA1 在 Dhalsim teleport 后 landing 时使用。CA 在 Dhalsim predictably block 时使用——不可防御的 command grab 是对抗 keepaway 的终极武器。核心心态：极端耐心不急躁，每次接近都值得，一次贴身就可能改变战局。"
    keyMoves: ["Perfect Parry", "DR 接近", "SPD"]
  - opponent: "e-honda"
    difficulty: "even"
    summary: "Honda 的 Headbutt 被 block 后可以 SPD 惩罚——但他的 HHS 压力和 100 HP 优势让对局很胶着"
    strategies:
      - "Honda 的核心威胁是 Headbutt (buttslam) 和 Hundred Hand Slap (HHS)。HP Headbutt 是 -5 on block 可以用 SPD 惩罚（如果在 SPD range 内）。HHS 是 -10 on block 可以用 DR → 5MP → SPD 重罚。Honda 的 Sumo Headbutt 有 armor 但可以用 DI 打断。Honda 的 forward dash 是 18f startup 可以在中距离反应。Honda 的 5HP 是 16f startup 很慢用 2HP 在恢复帧打他。Honda 有 10500 HP 比 Zangief 的 11000 少 500 但仍然很高——需要更多确认才能终结。"
      - "核心策略是让 Honda 主动 Headbutt 然后惩罚。用 5HP 和 2HP 在中距离 poke 保持距离。每次 Honda Headbutt 被 block 后如果在 SPD range 就 SPD 惩罚。如果 Honda 用 HHS 压制 block 后 DR → combo 惩罚。Honda 想用 Headbutt 接近然后 SPD 和 HHS 压制——但 Zangief 的 SPD range 和 strike/throw 混合比 Honda 更致命。Double Lariat 可以穿过 Honda 的某些突进。如果 Honda 用 OD Headbutt (有 armor) 可以用 DI 打断。在角落对攻中 Zangief 的 SPD 威胁比 Honda 的 buttslam 更可怕。"
      - "DI 在 Honda 出 HHS 或 charge heavy attack 时使用。DR 用于延伸连段和从 Headbutt block 后突入。Honda 的 SA1 和 SA3 都是 armored reversal。CA 在 Honda 出 buttslam landing recovery 时使用。SA1 作为 anti-air 在 Honda jump-in 时使用。Double Lariat 可以穿过 Honda 的某些 charge move。对局节奏：中距离 poke → Headbutt 被 block 后 SPD 惩罚 → strike/throw 混合施压 → HHS 被 block 后重罚。"
    keyMoves: ["SPD", "5HP", "Double Lariat (PPP)"]
  - opponent: "dee-jay"
    difficulty: "even"
    summary: "Dee Jay 的 feint 系统和 Rolling Sobat 接近是主要威胁——穿波后用 strike/throw 混合反击"
    strategies:
      - "Dee Jay 的核心威胁是 Air Slasher 波动、Rolling Sobat 突进和 Jus Cool 姿态混合。HP Air Slasher 两段 +3 on hit 波动战需要 lariat 穿波。Rolling Sobat MK (-6 on block) 在 max range 用 5MP 或 walk forward SPD 惩罚。Jus Cool 姿态有 LK 下段、MK overhead、HK 高段三个派生——在远距离不需要应对他的姿态混合。Dee Jay 的 feint 系统（假波动、假突进）不要被假动作诱导——确认是真的攻击再反应。Dee Jay 的 OD Jackknife Maximum 是 invincible reversal 但只有 OD 版本。"
      - "接近 Dee Jay 的路径：波动战时用 lariat 穿 Air Slasher 前进。Dee Jay 的波动 recovery 不算特别长但穿波窗口存在。中距离用 5HP/2HP poke 后 walk forward。如果 Dee Jay 用 Rolling Sobat 接近 block 后 SPD 惩罚。Dee Jay 的 feint 系统是心理战——不要被 fake 动作吓出 button，保持冷静 walk-in。一旦进入 SPD range Dee Jay 的 OD Jackknife Maximum 是 invincible reversal 但只有 OD 版本消耗大。用 strike/throw 混合打他的 timing。5MK 建立 frame advantage 后 walk forward SPD 是标准接近路线。"
      - "DI 在 Dee Jay 出 HP Air Slasher 或 Rolling Sobat 时使用。DR 用于从远距离突入和延伸连段。SA1 在 Dee Jay DR 接近时反制。注意他的 feint 系统——不要被假动作诱导浪费 button。CA 在 Dee Jay predictably block 时使用。Drive Reversal 在被他的 Jus Cool 混合压制时使用。对局节奏：穿波 walk-in → 中距离 poke → Rolling Sobat block 后惩罚 → 贴身后 strike/throw 混合。"
    keyMoves: ["SPD", "Double Lariat (PPP)", "5HP"]
  - opponent: "manon"
    difficulty: "advantageous"
    summary: "Zangief 的 SPD 威胁比 Manon 的 command grab 更致命——在近身 strike/throw 混合中 Zangief 占绝对优势"
    strategies:
      - "Manon 的核心威胁是 Renverse command grab 和 Medal 升级系统。但 Manon 的 command grab (Révérence) 伤害只有约 1200-1600（取决于 Medal Level），远不如 Zangief 的 SPD (2000+)。Manon 的 2MP 是 6f startup 和 Zangief 的 2LP 差不多。Manon 需要 hit 或 command grab 来提升 Medal Level——如果你不让她的攻击命中她就无法升级。用 5HP 和 2HP 在中远距离持续 poke 阻止她 walk-in。在 command grab duel 中 Zangief 的 SPD range 更大、伤害更高、strike/throw 混合更致命。"
      - "核心策略是主动 walk-in 施压然后进入 command grab duel。在 strike/throw 混合的近身战中 Zangief 的 SPD (2000+ damage, 更大 range) 比 Manon 的 Révérence (1200-1600 damage, 更小 range) 更有优势。如果两人同时出 command grab Zangief 的 SPD 会胜出因为 range 更大。5MK 建立 frame advantage 后进入 SPD range 开始混合。Manon 没有 invincible DP（只有 OD Danse Étoile），大胆 strike/throw 混合。用 2LP → SPD 和 2LP → 2LP → combo 的随机混合让 Manon 无法安全 block 或 jump。"
      - "DI 在 Manon 出 Dégagé HK launcher 或 heavy attack 时使用。DR 用于延伸连段。Manon 的 SA2 Danse Étoile 是 invincible reversal。SA1 在 Manon DR 接近时反制。CA 在 Manon predictably block 时使用。Drive Reversal 在被她的 strike/throw 混合压制时使用。对局节奏：主动 walk-in → 进入 command grab duel → SPD 威胁碾压她的 Révérence → strike/throw 混合持续施压。"
    keyMoves: ["SPD", "5MK", "5HP"]
  - opponent: "marisa"
    difficulty: "advantageous"
    summary: "Marisa 的慢 startup 和缺乏快速 reversal 让 Zangief 的 SPD 威胁更加致命"
    strategies:
      - "Marisa 是 Zangief 有利的对局。她的移动速度极慢、普通技 startup 大，walk-in 接近比大多数对手更容易。用 5HP 和 2HP 在 max range 持续 poke——Marisa 的 5HP 是 14f startup 和你的差不多但 range 不如。每次 Marisa 试图蓄力 Gladius 用 2HP 或 5HP 打她的蓄力 animation。Marisa 的 OD Quadriga 有 super armor 但可以用 DI 打断。Marisa 想接近进入 Scutum 混合 range——只要保持耐心 walk-in 你可以先于她达到 SPD range。Marisa 的 10000 HP 虽然高但每次 SPD 2000+ 伤害的回报也很好。"
      - "核心策略是比 Marisa 更快地 walk-in 接近。用 5HP/2HP poke 阻止她的前进，同时自己也在 walk-in。Marisa 的 Scutum 三层混合在近距离致命但她需要先接近你——如果 Zangief 先进入 SPD range 就反过来是她面临威胁。5MK 建立 frame advantage 后 walk forward SPD 是标准路线。Marisa 的 OD Quadriga 有 armor 但 SPD 是 command grab 不能被 armor block——如果 Marisa 依赖 armor 穿你的 button 就出 SPD 抓她。Marisa 没有 invincible DP 大胆 strike/throw 混合。如果 Marisa 试图蓄力攻击 Perfect Parry 吸掉建立 Drive。"
      - "DI 在 Marisa 出蓄力 Gladius 或 Quadriga 时使用——蓄力攻击不能挡 DI。DR 用于延伸连段和快速突入。SA1 在 Marisa DR 接近时反制。Marisa 的 SA2 Meteora 有 armor 可以穿单发但 SPD 是 grab 不受 armor 影响。CA 在 Marisa predictably block 时使用。Drive Reversal 在被她接近时创造距离。对局节奏：耐心 walk-in → 5HP/2HP poke 阻止她的接近 → 先于她进入 SPD range → strike/throw 混合碾压。"
    keyMoves: ["SPD", "5HP", "2HP"]
  - opponent: "jp"
    difficulty: "advantageous"
    summary: "JP 的远距离控场被 Zangief 的 lariat 穿波破解——一旦贴身 JP 几乎没有逃脱手段"
    strategies:
      - "JP 的远距离控场是 Zangief 的主要障碍但不是不可克服。Double Lariat 可以穿过 Triglav 波动前进。JP 的 Torbalan 传送门触发可以用 block 后 walk forward 应对——传送门触发是 blockable 的。Eminence (5HP) 是 JP 的远距离核心 poke 但 on block 约 -8——如果在 SPD range 内 5HP 被 block 后可以直接 SPD 惩罚。JP 的 2HP 下段 poke range 远但 startup 11f 可以用 5HP 在 poke 交换中打他。JP 没有标准 invincible DP（只有 OD Departure），一旦 Zangief 贴身就是噩梦。"
      - "接近 JP 的路径：lariat 穿 Triglav 波动前进，block Torbalan 传送门触发继续 walk-in。JP 的传送门触发虽然可以打断前进但每次 block 后你可以继续 walk-in 因为触发有恢复帧。当距离缩短到中距离后用 5HP/2HP poke JP 的 Eminence 和 2HP。如果 JP 出 Eminence 被 block 且你在 SPD range 内直接 SPD 惩罚 -8 的劣势。一旦进入 SPD range JP 只有 OD Departure 作为 invincible reversal（消耗 2 bars）——如果 JP 没有 meter 就大胆 strike/throw 混合。JP 的 health 是标准 10000 每次 SPD 2000+ 的回报极高。"
      - "DI 在 JP 出 Eminence 或 heavy Triglav 时使用。DR 用于从中距离突入 SPD range。JP 的 Interdiction (CA) 有 invincible startup 不要在有 CA 时 predictable。SA1 在 JP DR 接近时反制。CA 在 JP predictably block 时使用。Drive Reversal 在被 JP 传送门触发 + poke 压制时使用。对局节奏：lariat 穿波一步步接近 → block 传送门触发继续前进 → 一旦贴身 SPD 威胁碾压 JP 的弱防守。"
    keyMoves: ["SPD", "Double Lariat (PPP)", "5HP"]
  - opponent: "lily"
    difficulty: "advantageous"
    summary: "趁 Lily 充能 Wind Stock 时 walk-in 接近——无 stock 的 Lily 对 Zangief 几乎没有威胁"
    strategies:
      - "Lily 的核心是 Wind Stock 系统。她需要 charge (214P) 来获得 stock——这是 Zangief walk-in 接近的最佳窗口。每次 Lily 试图 charge 就向她 walk-in 一步。有 stock 时她的 Tomahawk Buster (DP) 和 Condor Dive 变强但仍然可以用 Double Lariat anti-air。Lily 的 2LP 是 4f startup 但 range 短远距离不是威胁。Lily 的 Condor Spire 是 -6 on block 可以用 5MP 或 walk forward SPD 惩罚。Lily 没有 stock 时伤害输出极低 (约 500-700 damage per confirm) 远不如 Zangief 的 SPD。"
      - "核心策略是趁 Lily charge 时 walk-in 接近。每次她出 214P charge 就前进——charge 的 recovery 帧是安全接近的窗口。用 5HP 和 2HP 在中远距离 poke 建立威胁。如果 Lily 习惯用 Condor Spire 突进接近 block 后 SPD 惩罚。如果 Lily jump-in Condor Dive 用 Double Lariat anti-air。一旦进入 SPD range Lily 的 OD Tomahawk Buster 是 invincible reversal 但只有 OD 版本——如果没有 meter 大胆 SPD。Lily 的 low health (约 9500) 意味着每次 SPD 都是毁灭性的。用 strike/throw 混合持续施压。"
      - "DI 在 Lily charge Wind Stock 或出 Condor Spire 时使用。DR 用于从远距离突入 SPD range。Lily 的 SA2 是 armored reversal。CA 在她空中 Condor Dive 时使用。SA1 作为 anti-air 在她 jump-in 时使用。CA 在她 predictably block 时使用。对局节奏：趁 charge 时 walk-in → 中距离 poke 建立威胁 → 贴身后 strike/throw 混合 → 利用低血量快速终结。"
    keyMoves: ["SPD", "5HP", "Double Lariat (PPP)"]
  - opponent: "cammy"
    difficulty: "even"
    summary: "Cammy 的速度和 dive kick 让接近变难——但 Double Lariat anti-air 和 SPD 惩罚是关键"
    strategies:
      - "Cammy 的核心威胁是 Cannon Strike (dive kick) 和 Spiral Arrow (slide)。Cannon Strike 角度变化大需要仔细 anti-air 时机——用 Double Lariat (上半身无敌) 打她的 dive kick。Spiral Arrow 是 -6 到 -9 on block 取决于版本用 2MP 确认后 DR → 5MP → SPD 惩罚。Cammy 的 5MP 是 5f startup 很快中距离要小心。Cammy 的速度让她可以快速进出 Zangief 的 SPD range——需要更快地反应她的 approach。Hooligan Combination 可以用 Double Lariat 在她空中状态打掉。"
      - "接近 Cammy 的路径：Cammy 通常是主动接近的一方所以 Zangief 需要更多是「counter approach」。用 5HP 在中距离 poke 打她的 walk-in。当 Cammy 用 Spiral Arrow 突进 block 后 SPD 惩罚。当 Cammy 用 Cannon Strike dive kick 用 Double Lariat anti-air 然后利用 knockdown 时间 walk-in。一旦进入 SPD range Cammy 的 OD Cannon Spike 是逆转但不是完全 invincible。用 strike/throw 混合打她的 timing。Cammy 的 9500 HP 意味着每次 SPD 都是毁灭性的。"
      - "DI 在 Cammy 出 Spiral Arrow 或 heavy Cannon Strike 时使用。DR 用于延伸连段和从 Spiral Arrow block 后突入。Cammy 的 OD Cannon Spike 是她的逆转。CA 在 Cammy predictably block 时使用。SA1 在她 DR 接近时反制。Drive Reversal 在被她的 speed rush 压制时使用。Double Lariat 是这个对局的核心——anti-air 和穿 projectile 都靠它。对局节奏：counter approach 打她的突进 → Double Lariat anti-air → Spiral Arrow block 后 SPD 惩罚 → 贴身后致命混合。"
    keyMoves: ["Double Lariat (PPP)", "SPD", "5HP"]
  - opponent: "rashid"
    difficulty: "even"
    summary: "Rashid 的空中机动让 anti-air 更困难——但穿波后一旦贴身 SPD 就能逆转局面"
    strategies:
      - "Rashid 的核心威胁是空中机动性（Eagle Spike, Ysaar glide）和 mix-up。Eagle Spike HP 版本是 -7 on block 用 2MP 确认后 DR → SPD 惩罚。他的 Ysaar (whirlwind) 给他额外的 jump 和 glide option——用 Double Lariat anti-air 等他落地。Rashid 的 5MP 是 6f startup 很快中距离要小心。Arabian Sky High (overhead) 是 22f startup 可以反应 block。用 5HP 和 2HP 在远距离控制阻止他 ground approach。Rashid 的速度和空中移动让 approach timing 更困难但不是不可克服。"
      - "接近 Rashid 的路径：波动战时用 lariat 穿他的 whirlwind 前进。Rashid 的 whirlwind 不是传统波动但 lariat 可以穿过。中距离用 5HP/2HP poke 后 walk forward。如果 Rashid 习惯用 Ysaar glide 接近用 Double Lariat 在他的 landing 点 anti-air。如果 Rashid 习惯 Eagle Spike 突进 block 后 SPD 惩罚。一旦进入 SPD range Rashid 的 SA2 是快速 reversal 需要混合 strike 和 throw。Rashid 的 health 标准约 10000 每次 SPD 都是巨大伤害。"
      - "DI 在 Rashid 出 Eagle Spike 或 heavy whirlwind move 时使用。DR 用于延伸连段和追击 landing。CA 在他 Eagle Spike whiff 或 glide landing 时使用。SA1 在他 DR 接近时反制。Double Lariat 是这个对局 anti-air 的核心。Drive Reversal 在被他的 speed rush 压制时使用。对局节奏：穿波 walk-in → anti-air 他的空中 approach → Eagle Spike block 后 SPD 惩罚 → 贴身后致命混合。"
    keyMoves: ["Double Lariat (PPP)", "SPD", "5HP"]
  - opponent: "a-k-i"
    difficulty: "even"
    summary: "A.K.I. 的毒系统需要 setup 时间——趁她 setup 时 walk-in 不给她 free trap 的空间"
    strategies:
      - "A.K.I. 的核心威胁是毒系统和 toxic trap。她需要时间设置毒 cloud 和 ground trap——趁她 setup 时 walk-in 接近。被毒后不要慌——毒伤害是渐进的可以承受，继续 walk-in 接近比后退更有效。A.K.I. 的 Nightshade Pulse (projectile) startup 很慢 (20f+) 可以在恢复帧用 5HP 打她。她的 2HP 是 -10 on block 可以用 DR → SPD 惩罚。A.K.I. 的 normal range 远不如 Zangief 的 5HP/2HP。保持在 walk-in 节奏用远距离 poke 建立威胁。"
      - "核心策略是不给 A.K.I. free setup 的空间。每次她试图放置 toxic trap 就 walk-in 接近——trap setup 的 recovery 帧是接近的窗口。用 5HP 和 2HP 在中远距离 poke 建立威胁。如果 A.K.I. 习惯用 toxic command grab 接近保持在 SPD range 外然后 walk-in。A.K.I. 需要 toxic cloud 或 trap 来激活毒效果——如果你的 walk-in 压力持续她很难完成 setup。一旦进入 SPD range A.K.I. 的 OD Heel Strike 是她最好的逆转但 range 有限。用 strike/throw 混合持续施压。即使被毒 SPD 的 2000+ 伤害远超毒伤害的累积。"
      - "DI 在 A.K.I. 出 Nightshade Pulse 或 setup toxic trap 时使用。DR 用于延伸连段和快速突入。A.K.I. 的 OD Heel Strike 是逆转但 range 有限。CA 在她 whiff toxic trap 时使用。SA1 在她 DR 接近时反制。对局节奏：walk-in 不给 setup 空间 → poke 打断 trap → 贴身后 strike/throw 混合 → 即使被毒也保持进攻节奏。"
    keyMoves: ["SPD", "5HP", "Double Lariat (PPP)"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed 的 Psycho Flicker 让中距离困难——保持在远距离 poke 然后用 DR 突入 SPD range"
    strategies:
      - "Ed 的核心威胁是 Psycho Flicker (长距离快速 poke) 和 Kill Rush (approaching armor move)。Psycho Flicker 的 range 很长让中距离很危险——不要走进 Flicker range。Kill Rush 是 armored 但 SPD 是 command grab 不受 armor 影响——直接 SPD 抓他的 Kill Rush。Ed 的 5HP 是 -6 on block 用 2HP max range 打他的恢复帧。Perfect Parry 吸他的 Psycho Ball 是建立 Drive 的方式。波动战用 lariat 穿 Psycho Ball 前进。"
      - "接近 Ed 的路径需要避开 Flicker range。保持在 Flicker range 外用 5HP max range poke。当距离缩短到可以用 DR 突入时 2MK → DR → 5HP → SPD 突入。如果 Ed 习惯用 Kill Rush approach 直接 SPD 抓他（command grab bypass armor）。如果 Ed 用 Psycho Flicker 控制中距离用 DI 吸掉他的 Flicker（如果 timing 对）或者保持远距离 poke。Ed 的 Snatcher (command grab) range 短保持在远距离不受影响。一旦进入 SPD range Ed 的 SA2 是快速 armored reversal 需要混合。"
      - "DI 在 Ed 出 Kill Rush 或 Psycho Ball heavy 版时使用。DR 用于突破他的 Flicker wall 后延伸连段。Ed 的 SA2 是快速 armored reversal。CA 在 Ed predictably block 时使用。SA1 在他 DR 接近时反制。Perfect Parry 建立 Drive 优势让你有更多 DR 资源。对局节奏：保持远距离 poke → DR 突入 SPD range → SPD 抓 Kill Rush → 贴身后 strike/throw 混合。"
    keyMoves: ["SPD", "5HP", "DR 接近"]
  - opponent: "akuma"
    difficulty: "even"
    summary: "Akuma 的 9000 HP 意味着每次 SPD 都是毁灭性的——但他的 air Hadoken 和 demon flip 让接近更困难"
    strategies:
      - "Akuma 的核心威胁是 air Hadoken 和 demon flip 混合。Air Hadoken 让他的空中进攻更有层次——常规 lariat timing 不够，需要同时应对 air fireball 和 demon flip。Demon Flip 的 punch/kick/throw 混合让 anti-air 更复杂——优先用 Double Lariat 打他的 flip startup 而不是等落地。波动战用 lariat 穿 Gohadoken 前进。Akuma 的 5MP 是 5f startup 很快近距离不恋战。5HK 是 -6 on block 用 2HP max range 打他。Akuma 的低血量 9000 是你的最大优势——SPD 2000+ 能扣掉他 1/4 以上血量。"
      - "接近 Akuma 的路径：波动战时 lariat 穿 Gohadoken 前进。Air Hadoken 需要更多 Perfect Parry 或提前 Double Lariat 打他的 air fireball recovery。Demon Flip 接近时用 Double Lariat 在 flip startup 打他——不要等落地因为 demon flip 有 punch/kick/throw 三种落地选项。如果 Akuma 习惯 ground approach 用 5HP/2HP poke 建立威胁。一旦进入 SPD range Akuma 的 SA1 (Raging Demon) 是 command grab 有 armor break——但他需要 meter。如果 Akuma 没有 meter 大胆 SPD。Akuma 的 9000 HP 意味着 SPD + combo 确认 (约 3000+) 就是 1/3 血量。"
      - "DI 在 Akuma 出 heavy Gohadoken 或 sweep 时使用。DR 用于延伸连段——对 Akuma 每个 hit 都很珍贵因为他的低血量。SA1 作为 anti-air 在 Akuma jump-in 时使用。CA 在 Akuma predictably block 时使用——4000 damage 对 9000 HP 是毁灭性的。Double Lariat 是 anti demon flip 的核心工具。对局节奏：穿波 walk-in → 精准 anti-air demon flip → 每次确认最大化伤害 → 利用他的低血量优势。"
    keyMoves: ["SPD", "Double Lariat (PPP)", "5HP"]
  - opponent: "m-bison"
    difficulty: "even"
    summary: "Bison 的 Psycho Crusher 突进被 block 后可以 SPD 惩罚——但他的 Scissors Loop 压力需要 Drive Reversal 应对"
    strategies:
      - "M. Bison 的核心威胁是 Psycho Crusher 接近和 Scissors Loop 压力。HP Psycho Crusher 是 -8 on block 可以用 SPD 惩罚（如果在 SPD range 内）。Scissors LK 版本是 +1 on block 让他保持压力——被压在 Scissors Loop 中时用 Drive Reversal 创造距离。Bison 的 5HP 是 -5 on block 用 2HP max range 打他的恢复帧。Bison 没有 standard projectile 波动战不是障碍。Bison 的 forward dash 有 armor 不要用单发 normal 挑战——用 multi-hit 或 SPD 抓他的 dash animation。"
      - "接近 Bison 的路径相对直接——他没有 projectile 所以 walk-in 阻力更小。用 5HP/2HP 在中远距离 poke 建立威胁。如果 Bison 用 Psycho Crusher 突进 block 后 SPD 惩罚（-8 on block 在 SPD range 内）。如果 Bison 用 Scissors Loop 压力 Drive Reversal 创造距离然后重新 walk-in。Bison 的 2LP 是 4f startup 可以在近距离 mash——保持在中距离以上避免和他近距离交换。一旦进入 SPD range Bison 的 SA2 是 armored reversal 但 SPD 是 command grab bypass armor。用 strike/throw 混合打他的 timing。"
      - "DI 在 Bison 出 Psycho Crusher 或 heavy Scissors 时使用。DR 用于延伸连段和从 Psycho Crusher block 后突入。Bison 的 SA2 是 armored reversal。CA 在 Bison predictably block 时使用。SA1 在 Bison DR 接近时反制。Drive Reversal 在被他的 Scissors Loop 压制时创造距离。对局节奏：walk-in 没有波动障碍 → Psycho Crusher block 后 SPD 惩罚 → Scissors Loop 用 Drive Reversal 应对 → 贴身后 strike/throw 混合。"
    keyMoves: ["SPD", "5HP", "Drive Reversal"]
  - opponent: "terry"
    difficulty: "advantageous"
    summary: "Terry 的 Burn Knuckle 被 block 后可以 SPD 惩罚——没有 invincible DP 让 strike/throw 混合更加致命"
    strategies:
      - "Terry 的核心威胁是 Power Wave (波动) 和 Burn Knuckle (approaching move)。Power Wave recovery 比标准波动快但伤害低用 lariat 穿波前进。Burn Knuckle HP 版本是 -9 on block 可以用 DR → SPD 或直接 SPD 惩罚。Terry 的 Rising Tackle 是 anti-air/DP 但只有 OD 版本完全 invincible——没有 meter 时大胆 jump-in 和 strike/throw 混合。Crack Shoot (overhead) 是 20f startup 可以反应 block。波动战用 lariat 穿 Power Wave 前进。Terry 的 5MP 是 8f startup 比 Zangief 的 5HP (14f) 快但 range 不如。"
      - "接近 Terry 的路径：lariat 穿 Power Wave 前进。Terry 的波动压力不大 walk-in 比较容易。中距离用 5HP/2HP poke 后 walk forward。如果 Terry 用 Burn Knuckle 突进 block 后 SPD 惩罚（-9 on block 在 SPD range 内）。Terry 没有 invincible DP（OD 版本除外）大胆 strike/throw 混合。Terry 的 Crack Shoot 虽然是 overhead 但 startup 慢可以反应 block——不要被吓到。5MK 建立 frame advantage 后 walk forward SPD 是标准接近路线。"
      - "DI 在 Terry 出 Burn Knuckle 或 heavy Power Wave 时使用。DR 用于从远距离突入 SPD range 和延伸连段。Terry 的 SA1 (Buster Wolf) 是 armored reversal。CA 在 Terry predictably block 时使用。SA1 在 Terry DR 接近时反制。对局节奏：lariat 穿波 walk-in → Burn Knuckle block 后 SPD 惩罚 → 没有 invincible DP 大胆贴身 → strike/throw 混合碾压。"
    keyMoves: ["SPD", "Double Lariat (PPP)", "5HP"]
  - opponent: "mai"
    difficulty: "even"
    summary: "Mai 的多角度扇子投射增加穿波难度——但 lariat 仍然有效且 SPD 的高伤害是翻盘利器"
    strategies:
      - "Mai 的核心威胁是多角度 fan projectile 和灵活性。她的 fan 可以多角度发射让穿波更复杂——需要同时应对地面和空中的 fan。但 Double Lariat 仍然可以穿过大部分 fan projectile。她的 air fan 让她可以在空中持续骚扰 Double Lariat 的 upper body invincibility 可以应对空中 fan。Mai 的 5MP 和 2MP range 都很长让中距离 poke 战困难——保持用 5HP max range poke。如果 Mai 习惯 air approach 用 Double Lariat anti-air 她的 landing。"
      - "接近 Mai 的路径需要更多耐心因为多角度 fan 压力。波动战时交替使用 lariat 穿波和 Perfect Parry 吸波前进。Mai 的 fan 比 standard 波动更灵活但 lariat 仍然可以穿过大部分 trajectory。中距离用 5HP/2HP poke 建立威胁。DR 是最重要的接近工具——从远距离 DR 突入 SPD range。一旦进入 SPD range Mai 的 SA2 是快速 reversal 需要混合 strike 和 throw。如果 Mai 习惯 air fan 后 landing 用 2HP 或 Double Lariat 打她的 landing 帧。"
      - "DI 在 Mai 出 fan projectile 或 air approach 时使用。DR timing 必须精准——在 fan gap 中突进。Mai 的 SA2 是快速 reversal。CA 在她空中 fan whiff 或 landing 时使用。SA1 在她 DR 接近时反制。Perfect Parry 建立 Drive 优势给 DR 接近更多资源。对局节奏：耐心穿多角度 fan → DR 在 gap 中突入 → 一旦贴身 SPD 威胁碾压 → 不被多角度压力扰乱节奏。"
    keyMoves: ["SPD", "Double Lariat (PPP)", "DR 接近"]
  - opponent: "elena"
    difficulty: "advantageous"
    summary: "Elena 的 healing 威胁需要 Zangief 保持持续压力——主动 walk-in 不给她 free heal 的空间"
    strategies:
      - "Elena 的核心威胁是 deceptive range 的 capoeira kicks 和 healing ability。她的 5MK 和 2MK 的 range 比看起来长需要保持适当距离。她的 healing 需要时间——绝对不能给她 free heal 的机会，持续 walk-in 施压。Elena 的 Lynx Tail 是 multi-hit 可以用 DI 吸掉。用 5HP 和 2HP 在远距离控制她的移动。Elena 的 Mallet Smash (overhead) 是 22f startup 可以反应 block。Elena 没有 invincible DP 大胆 strike/throw 混合。Elena 的 healing 让时间战对她有利——你需要更快结束战斗。"
      - "核心策略是持续 walk-in 压力不给她 heal 的空间。每次 Elena 试图 heal 就 walk-in 接近——heal animation 的 recovery 帧是接近的窗口。用 5HP 和 2HP 在中远距离 poke 建立威胁。如果 Elena 用 capoeira kick poke Perfect Parry 吸掉建立 Drive。一旦进入 SPD range Elena 没有 invincible DP 大胆 strike/throw 混合。Elena 的 healing 让你不能浪费时间——每次确认都要最大化伤害。SPD 2000+ 配合 combo 确认可以在她 heal 回来之前终结。"
      - "DI 在 Elena 出 Lynx Tail 或 heavy capoeira move 时使用。DR 用于延伸连段和打断她的 heal attempt。Elena 的 SA2 是 invincible reversal。CA 在 Elena predictably block 时使用——4000 damage 可以逆转 healing 的效果。SA1 在她 DR 接近时反制。对局节奏：持续 walk-in 压力 → 不给 heal 空间 → 贴身后致命 strike/throw 混合 → 比 healing 更快的伤害输出碾压她。"
    keyMoves: ["SPD", "5HP", "Double Lariat (PPP)"]
  - opponent: "volcano-handshake"
    difficulty: "even"
    summary: "Limited matchup data — 标准 Zangief gameplan：walk-in 穿波 → 贴身 strike/throw 混合施压"
    strategies:
      - "Volcano Handshake 作为新角色数据有限。根据已有信息他的核心工具是 Burning Fist 系列攻击具有高伤害但 startup 偏慢。用 5HP 和 2HP 在远距离控制——他的 heavy attack startup 慢在你的 poke 面前不占优。anti-air 用 Double Lariat。标准波动战用 lariat 穿波。保持 walk-in 不让他进入 Burning Fist range。如果有 armored move 用 DI 打断或 SPD 抓 (command grab bypass armor)。"
      - "保持标准 Zangief gameplan：walk-in 接近用 5HP 和 2HP 在中远距离 poke 建立威胁。5MK 建立 frame advantage 后 walk forward 进入 SPD range。如果他有 armored approaching move 不要用 normal 打他直接 SPD 抓。确认他的 on block 劣势招式然后用 SPD 惩罚。Double Lariat 穿波和 anti-air 保持 standard neutral。如果他有 invincible reversal 注意 meter 管理。"
      - "DI 在他出 heavy attack 或 charge move 时使用。DR 用于延伸连段和快速突入。SA1 在他 DR 接近时反制。CA 在关键时刻使用。根据实际对局经验调整策略——核心不变：walk-in → 5HP/2HP poke → Double Lariat 穿波/anti-air → SPD 贴身 strike/throw 混合。"
    keyMoves: ["SPD", "5HP", "Double Lariat (PPP)"]
---

## Additional Notes

Zangief（红旋风）是 Street Fighter 系列的标志性 grappler 角色，自 Street Fighter II 以来一直是力量型摔跤手的代表。在 Street Fighter 6 中 Zangief 保持了其 core identity——恐怖的近身指令投、最高的血量、但最弱的远距离能力。他的 design philosophy 是「忍耐接近后的恐怖」——一旦 Zangief 贴身，对手面临不可防御的 command grab 和高伤害 strike 的致命二择。

### Core Combo Routes

**Standard Strike/Throw (近距离)**
2LP → 2LP → LP SPD / HP SPD mix-up
~2000-2300 damage (SPD) or ~1500 (strike combo)

**5HP Stagger Confirm**
5HP (stagger) → walk forward SPD
~3000+ damage

**Drive Rush Combo**
2MK → DR → 5HP → SPD
~3200+ damage

**Anti-air Confirm**
Double Lariat (PPP) 命中 jump-in → SA1
~2800+ damage

**Corner Max Damage**
5HP → DR → 5MP → 2LP → SA1
~3500+ damage

**Air Grab Confirm**
Jump-in Borscht Dynamite (空中 360P)
~1600-2200 damage (不可防御空中 grab)

### Key Frame Data

| Move | Startup | On Hit | On Block | Notes |
|------|---------|--------|----------|-------|
| 2LP | 5f | +5 | -1 | 最速可确认 normal |
| 5MP | 7f | +5 | -3 | 中距离确认 |
| 2MP | 6f | +6 | -2 | 近距离确认入口 |
| 5MK | 10f | +4 | -4 | 中距离 poke |
| 2HP | 12f | KD | -10 | 远距离下段 |
| 5HP | 14f | Stagger | -6 | 远距离核心 poke |
| SPD (LP) | 5f | KD | — | 不可防御 command grab |
| Siberian Express (214K) | 20f | KD | — | 远距离 command grab |
| Double Lariat (PPP) | 8f | — | — | 上半身无敌/穿波 |
| SA1 (Cyclone Lariat) | 10f | KD | — | Level 1 invincible |
| CA (Bolshoi Storm Buster) | 9f | KD | — | Level 3 invincible command grab |

### Playstyle Summary

Zangief 是一名极致的 patience grappler。他的核心 gameplan 是：

1. **耐心接近** — 用 lariat 穿波、Perfect Parry 吸波、walk-in 一步步缩短距离
2. **中距离建立威胁** — 用 5HP/2HP poke 和 5MK frame advantage 建立接近压力
3. **贴身致命混合** — 进入 SPD range 后用 strike/throw 混合让对手无法安全防御
4. **最大化每次确认** — Zangief 的接近成本高所以每次 SPD 命中都要最大化伤害
5. **11000 HP 容错** — 游戏最高血量让 Zangief 可以承受更多接近过程中的伤害

Zangief 的弱点是远距离几乎没有存在感——没有 projectile、移动速度慢、接近手段有限。但一旦贴身他的 strike/throw 混合是游戏中最致命的压力。核心策略永远是保持耐心拉近距离然后让 SPD 完成使命。
