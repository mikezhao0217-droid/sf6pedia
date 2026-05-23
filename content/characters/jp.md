---
name: "JP"
subtitle: "The Puppet Master"
overview: "JP 是一名以远距离区域控制为核心的陷阱型角色，通过 Torbalan 传送门和 Triglav 远距离波动掌控战场节奏。他的核心机制是「传送门系统」——在场上设置不可见的 Torbalan 陷阱后，可以用 22P/K 的后续输入在不同距离触发攻击，让对手在移动时随时面临威胁。Eminence (5HP) 是游戏中最远的 standing heavy poke 之一，配合 2HP (蹲重拳) 的远距离下段让 JP 在中远距离拥有极高的控制力。弱点是近距离防守薄弱、没有完全无敌的 DP（只有 OD Departure 作为有限逆转）、移动速度慢，一旦被对手贴身就会非常被动。"
keyMoves:
  - name: "Torbalan (传送门)"
    input: "22+P/K (设置) → 再次输入触发"
    description: "JP 的标志性招式。22P 设置近距离传送门（约 1/3 屏），22K 设置远距离传送门（约 2/3 屏）。设置后可以用相同输入远程触发攻击——LP 触发中段打击（约 18f startup），HP 触发远距离穿刺（约 22f startup），LK 触发下段攻击，HK 触发高段穿刺。OD 版本 (22PP/KK) 设置的传送门可以多次触发。Torbalan 是 JP 控场的核心——在场上同时存在多个传送门时，对手每走一步都可能踩到陷阱。设置需要约 30f 的恢复时间，在对手近距离时不要盲目设置。"
    startup: 18
    active: 4
    recovery: 28
    damage: 800
  - name: "Eminence (5HP)"
    input: "5HP"
    description: "JP 的远距离站立重拳，是游戏中最远的 standing heavy normal 之一。13f startup，命中后造成 crumple 状态（类似 DI 命中的慢倒效果），可以接任何后续连段（如 5MP → 236HP 或 Drive Rush 延伸）。on block 约 -8，需要控制使用距离让对手够不到惩罚。Eminence 是 JP neutral 的核心——在中远距离用它 poke 对手的移动和攻击，每次命中都是 2000+ 的 combo 机会。配合 Torbalan 的威胁让对手在移动时进退两难。"
    startup: 13
    active: 5
    recovery: 28
    damage: 1000
  - name: "Triglav (远距离波动)"
    input: "236+P (可蓄力)"
    description: "JP 的远距离波动拳。LP 版本 (14f) 快速单发波动，HP 版本 (18f) 是三段 multi-hit 波动。蓄力后 Triglav 变为强化版本——波动变大、伤害增加、有 armor break 属性。OD Triglav (236PP) 是全屏追踪的多段波动，伤害约 1200。Triglav 的蓄力版是 JP 波动战的核心——蓄力波动比普通波动更强力，配合 Torbalan 陷阱形成双重远距离压制。HP Triglav 的 multi-hit 属性让它可以吃掉对手的单发 projectile。"
    startup: 14
    active: 6
    recovery: 24
    damage: 800
  - name: "Departure (623K)"
    input: "623+K"
    description: "JP 的 anti-air / 逆转招式。LK 版本 (8f) 是快速 anti-air，命中后对手浮空可接 5HP → combo。HK 版本 (10f) 伤害更高但 startup 更慢。OD Departure (623KK) 有 1-8f 完全无敌，是 JP 唯一的 invincible reversal——但只有 OD 版本有完全无敌。普通版本只有 upper body invincibility，不能作为可靠的 wake-up 逆转。JP 的防守因此比其他有 DP 的角色弱很多，需要更多依赖 block 和 Drive Reversal。OD Departure 命中后可接 SA1 或 Drive Rush combo。"
    startup: 8
    active: 4
    recovery: 30
    damage: 1000
  - name: "2HP (蹲重拳)"
    input: "2HP"
    description: "JP 的远距离蹲位重拳。11f startup，判定距离极远（和 Eminence 类似距离但是下段）。命中造成 knockdown，是 JP 远距离 poke 和 whiff punish 的重要工具。on block 约 -13 但距离远时安全——在 max range 使用让对手无法惩罚。2HP 配合 Eminence (5HP) 形成远距离的上段/下段二择——对手需要同时注意两个高度的远距离 poke。2HP 命中后的 knockdown 给 JP 时间设置 Torbalan 陷阱，这是控场循环的关键环节。"
    startup: 11
    active: 5
    recovery: 26
    damage: 900
  - name: "5MP"
    input: "5MP"
    description: "JP 的中距离确认工具。7f startup，+5 on hit，-3 on block。命中后可以 cancel 进 Triglav (236P) 或 Drive Rush 延伸连段。是 JP 在中距离确认的核心按钮——5MP 命中 → 236HP (HP Triglav) 是标准 BnB 确认路线。也可以从 Eminence (5HP) crumple 后接 5MP → combo。5MP 的 range 虽然不如 5HP 和 2HP 远，但在中距离交换中是 JP 最可靠的确认入口。在 Torbalan 触发命中后也可以 dash 进 5MP 确认。"
    startup: 7
    active: 3
    recovery: 16
    damage: 500
  - name: "5MK"
    input: "5MK"
    description: "JP 的中距离 poke 踢。10f startup，判定距离优秀，+4 on hit，-4 on block。5MK 的 range 介于 5MP 和 5HP 之间，是 JP 在中距离 footsies 中的辅助 poke 工具。可以被 Special Cancel 进 Triglav 或 Torbalan。在对手试图 walk-in 时用 5MK 打断他的前进。配合 Eminence 和 2HP 形成三段距离的 poke 体系：近距离用 2MP/5MP，中距离用 5MK，远距离用 5HP/2HP。"
    startup: 10
    active: 4
    recovery: 20
    damage: 600
  - name: "2MP"
    input: "2MP"
    description: "JP 的近距离 poke 和确认工具。6f startup，+6 on hit，-2 on block。是 JP 最快的可取消普通技，在近距离交换中的核心按钮。2MP 命中后可以 cancel 进 Triglav LP (236LP) 快速确认，或者 Drive Rush 延伸进更长的连段。在对手贴身时 2MP 是 JP 最好的反击选项——+6 on hit 让你有充分的帧优势继续进攻或退回到远距离。2MP → 2MP → 236LP 是 JP 的 light confirm 路线。"
    startup: 6
    active: 3
    recovery: 14
    damage: 400
  - name: "SA1 (Void-Sheath)"
    input: "236236+P"
    description: "JP 的 Level 1 Super Art。12f startup，约 2000 伤害，有 1-10f 完全无敌。是 JP 的快速逆转和 combo ender。作为 anti-air 使用效果很好——invincible startup 可以穿过对手的 jump-in。也可以从 Departure HK 或 OD 版本后接 SA1 作为 combo 延伸。SA1 命中后造成 knockdown 给 JP 设置 Torbalan 的时间。作为 Level 1 SA 它的 meter 消耗相对较低，可以更频繁地使用。在对手 Drive Rush 接近时突然 SA1 是有效的反制。"
    startup: 12
    active: 5
    recovery: 38
    damage: 2000
  - name: "Interdiction (CA)"
    input: "214214+K"
    description: "JP 的 Critical Art（Level 3 Super）。9f startup，4000 伤害（CA 版本 4500），完全无敌 1-13f。是 JP 的终极逆转和最高伤害 combo ender。CA 动画展示 JP 用 Psycho Power 操控对手如同提线木偶。从 Eminence (5HP) crumple 后接 CA 是 JP 的高伤害确认路线。CA 命中后 +26 的帧优势给 JP 充足时间重新设置 Torbalan 陷阱和调整位置。保留 CA 到关键时刻——4000+ 伤害可以逆转任何局面。在远距离 Torbalan 触发命中后也可以 CA 作为确认收尾。"
    startup: 9
    active: 6
    recovery: 48
    damage: 4000
tips:
  - "开局策略：开局立刻设置远距离 Torbalan (22K) 或中距离 Torbalan (22P)，在对手开始移动前建立场控。同时用 Triglav (236P) 波动阻止对手快速接近。JP 的理想开局节奏是：设置传送门 → 放波动 → 用 Eminence/2HP 控制对手前进 → 触发传送门打击移动的对手。如果对手开局就 DR 冲过来，用 2MP (6f) 确认或 OD Departure 应对。绝对不要在没有传送门的情况下让对手 free 接近——JP 没有传送门时控场能力大减。"
  - "核心连段路线：远距离确认：5HP (Eminence) crumple → 5MP → 236HP (Triglav HP)，约 2200+ 伤害。中距离 BnB：2MP → 2MP → 236LP (Triglav LP)，约 1500。Anti-air 确认：623LK (Departure) → dash → 5MP → 236HP，约 1800+。角落确认：5HP crumple → DR → 5MP → 236HP → SA1，约 3500+。Torbalan 触发确认：22P~HP 命中 → dash → 5MP → 236HP，约 2000+。Drive Rush 路线：2MP → DR → 5HP → 236HP，约 2500+。始终根据距离和 meter 选择最优路线。"
  - "立回核心：JP 的 footsies 是围绕远距离 poke 和传送门威胁展开的。核心 poke 三角：Eminence (5HP) 上段远距离、2HP 下段远距离、5MK 中距离。配合已设置的 Torbalan 让对手在任何距离都不安全。当对手试图 walk-in 时，用 5HP 或 2HP 打他的前进。当对手在传送门范围内移动时，触发传送门攻击。当对手跳入时，用 Departure (623K) 或 5HP anti-air。不要在近距离恋战——用 poke 和传送门把对手推回去，维持在 JP 的舒适距离（全屏到 2/3 屏）。"
  - "Drive Rush 使用策略：JP 的 DR 主要用于两个目的。1) 延伸连段：2MP → DR → 5HP → 236HP 是标准 DR combo 路线。2) 紧急防御：在被贴身时 DR cancel 某个普通技后退重新建立距离。JP 不需要像其他角色那样用 DR 来接近——他需要的是用 DR 来维持或重建距离。Drive Impact 也类似——在远距离用 DI 打断对手的接近，然后利用 DI 命中的 wall splat 时间设置传送门。Drive Reversal 在 JP 被压在角落时极其重要——它是 JP 少有的脱困手段之一。"
  - "应对不同距离：远距离（全屏）是 JP 最强的距离——自由设置传送门、放 Triglav 波动、用 2HP poke。中距离（1/2 到 2/3 屏）需要更谨慎——用 5MK、5MP 和已设置的传送门维持控制。近距离（1/3 屏以内）是 JP 最弱的距离——用 2MP/2LP 快速确认后 cancel 进 Triglav 制造距离，或用 OD Departure 逆转。核心原则：永远在试图把距离推回到 JP 的舒适区。每次 knockdown 后利用时间差重新设置 Torbalan，形成「打倒→设置陷阱→控场→再次打倒」的循环。"
  - "传送门管理技巧：场上最多同时存在两个传送门（一个 P 版一个 K 版）。管理传送门的关键是预判对手的移动方向——如果对手想前进接近你，在他前进路径上设置 K 版远距离传送门。如果对手在角落想 jump out，在他跳跃路径上设置 P 版传送门。OD 传送门 (22PP/KK) 可以多次触发，是持续控场的重要投资。注意传送门不是永久的——它们会在一定时间后消失，需要及时补充。在设置传送门时的 30f 恢复帧是 JP 最脆弱的时刻，不要在对手近距离时设置。"
  - "防守端的弱点补偿：JP 没有完全无敌的普通 DP——只有 OD Departure (623KK) 有完全无敌，消耗 2 bars。这意味着在防守端 JP 需要更多依赖：1) Late tech 投技（延迟拆投），2) Drive Reversal（消耗 2 bars 但创造距离），3) Block + 等待 gap 然后 2MP 确认反击。不要在没有 meter 时过于依赖 OD Departure——如果 OD Departure 被 bait，你会同时失去血量和 meter。在低 meter 时优先 block 和 Drive Reversal，在高 meter 时才有底气用 OD Departure 逆转。"
matchups:
  - opponent: "luke"
    difficulty: "even"
    summary: "远距离控场 vs 全能战士——JP 需要用传送门打断 Luke 的 Flash Knuckle 压力节奏"
    strategies:
      - "Luke 的核心威胁是 Flash Knuckle 压力循环和 Sand Blast 波动。HP Perfect Flash Knucker 是 +4 on block 的强压制——不要让他 free 接近进入 Flash Knucker 距离。用 2HP 和 Eminence (5HP) 在远距离阻止他 walk-in。Luke 的 Sand Blast 波动恢复帧短，但在你波动战时用 Triglav HP 的 multi-hit 吸掉他的波动。Luke 的 2MP 是 5f startup 比你的快，近距离交换不占优——保持远距离。Luke 的 5HK range 远但 -6 on block，在安全距离用 2HP 打他的 5HK 恢复帧。"
      - "用 Torbalan 在 Luke 的前进路径上设置陷阱——他每次想 DR 接近都可能踩到传送门。LP Torbalan (近距离) 在中距离 battle 时特别有效，Luke 的 Flash Knucker range 刚好在 LP Torbalan 触发范围内。如果 Luke 习惯 jump-in 用 OD Departure 或 5HP anti-air 打他。Luke 没有 meter 时逆转选项有限，大胆用 Eminence 和 2HP poke 他。如果 Luke 用 DR cancel 接近，在他 DR 动画中触发传送门或直接 SA1。始终在 Luke 的 knockdown 后设置传送门——他不给 free rise 的机会。"
      - "DI 在 Luke 出 HP Sand Blast 或 Perfect Flash Knucker 时使用。DR 主要用于延伸连段不是用来接近。Luke 的 CA (Pale Rider, 10f) 比你的 Interdiction (9f) 稍慢。SA1 (Void-Sheath) 是你反制他 DR 接近的最佳工具。Drive Reversal 在被 Luke 压在角落时极其关键。对局节奏：远距离控场 → 传送门打断他的接近 → poke 确认高伤害 → knockdown 后重新设置传送门。"
    keyMoves: ["Eminence (5HP)", "Torbalan", "2HP"]
  - opponent: "ryu"
    difficulty: "even"
    summary: "波动战对决——JP 的传送门 + Triglav 可以和 Ryu 的 Hadoken 系统抗衡"
    strategies:
      - "Ryu 的核心威胁是 Denjin Charge 系统和全面的 footsies。Denjin Hadoken 有装甲——不要用普通传送门触发挑战它，用 DI 打掉。Ryu 没有 Denjin 时 HP Hashogeki 是 -4 on block，可以用 5MP 确认惩罚。波动战时用 Triglav HP (三段) 吸掉他的 Hadoken，同时在 side 设置 Torbalan。Ryu 的 5HK 和 sweep 是主要 poke 但都负帧，用 2HP 在 max range 打他的恢复帧。Ryu 的 Shoryuken LP 是 6f invincible DP——有 meter 时他不怕你的 poke，需要更多 bait 和 punish。"
      - "核心策略是在 Ryu 的波动节奏中插入传送门和 Eminence。Ryu 放 Hadoken 后的恢复帧是你设置 Torbalan 的窗口——每次他放波动你设置一个传送门，逐渐建立场控。一旦传送门到位，Ryu 放波动时你触发传送门打击他。Eminence (5HP) 在中远距离打 Ryu 的 walk-in 和 sweep 非常有效。Ryu 的 2MP 是 5f 比你的快，近距离不恋战。Ryu jump-in 用 Departure LK (8f) anti-air → dash → 5MP → Triglav HP 确认连段。"
      - "DI 在 Ryu 出 Denjin Hadoken 或 sweep 时使用。DR 用于确认 Eminence crumple 后延伸连段。Ryu 的 CA (Shin Shoryuken, 9f) 速度和你的 Interdiction 一样。SA1 在 Ryu DR 接近时使用作为反制。注意 Ryu 有 Denjin Charge 时不要 predictable 出传送门——Denjin Hadoken 的装甲会打掉你的触发。对局节奏：波动战穿插传送门设置 → 传送门打断他的节奏 → Eminence poke 确认高伤害 → knockdown 后重新建立控场。"
    keyMoves: ["Triglav", "Eminence (5HP)", "Torbalan"]
  - opponent: "chun-li"
    difficulty: "even"
    summary: "远距离控场 vs 超长距离 poke——JP 的传送门可以限制 Chun-Li 的移动空间"
    strategies:
      - "Chun-Li 的核心威胁是超长距离 poke (5MP, 2MP, 5HP) 和 Serenity Stream 姿态。她的 poke range 和 JP 的 Eminence 差不多，但她的 5MP startup 更快。在中距离用 Eminence (5HP) 和 2HP 在 max range 和她交换——关键是保持在她的 5MP range 外面但你的 Eminence 能打到的距离。Chun-Li 的 Serenity Stream 会蹲低避开你的 5HP——当她进姿态时切 2HP (下段) 打她。Chun-Li 的 Kikoken 波动恢复帧比 Triglav 短，波动战时注意节奏。"
      - "用 Torbalan 限制 Chun-Li 的移动。LP Torbalan 在中距离 battle zone 设置，当她试图 walk-in poke 时触发。Kikoken 波动可以触发你的传送门但你可以 reclose——保持传送门压力。Chun-Li 的速度让她的移动范围大，但也意味着她在传送门区域的活动更多。OD Torbalan 在这个对局特别有价值——多次触发的传送门持续限制她的走位。一旦 Chun-Li 被逼到角落，她的长距离优势消失，你可以在角落外用 Eminence 和 2HP 持续 poke。"
      - "DI 在 Chun-Li 出 2HP、sweep 或 Serenity Stream heavy attack 时使用。DR 用于确认 Eminence crumple 后延伸连段。Chun-Li 的 OD Tensho Kicks 是她的逆转但只有 OD 版本有 invincibility。SA1 在她 DR 接近时使用。CA 保留到关键时刻。Drive Reversal 在被她的 Hundred Lightning Kicks 压制时使用。对局节奏：保持 max range poke → 传送门限制她的移动 → 确认高伤害 → 逼她到角落。"
    keyMoves: ["Eminence (5HP)", "2HP", "Torbalan"]
  - opponent: "jamie"
    difficulty: "advantageous"
    summary: "趁 Jamie 喝酒等级低时用传送门控场——不给他 free drink 的空间"
    strategies:
      - "Jamie 的威胁随喝酒等级增长但初始很弱。Level 0-1 时趁窗口用 Torbalan 和波动全面控场。开局立刻设置远距离 Torbalan (22K)——如果 Jamie 试图在远处 drink 你可以直接触发传送门打断他。Jamie 的 Bakushin（酒步）是 -4 on block 可以用 2MP 确认惩罚。Jamie 的 2LP 是 4f startup 但 range 很短，在远距离不是威胁。用 Eminence (5HP) 和 2HP 在中远距离持续 poke，每次确认用 5MP → Triglav HP 收尾。"
      - "Jamie 想喝酒升级——你的传送门是打断他 drink 的利器。每次 Jamie 试图 drink，触发远距离传送门打他。如果 Jamie 试图 DR 接近，在传送门范围内触发 LP 版本打击他的 DR 动画。Jamie Level 3+ 时威胁大增（额外 follow-up mix-up、更高伤害），但如果他在 Level 0-1 时已经被 poke 掉大量血量，他的 growth 不足以逆转。Jamie 没有 invincible DP（只有 OD The Devil Inside），大胆 poke。角落压制用 Eminence 和 2HP 持续 poke，不需要冒险 close range 混合。"
      - "DI 在 Jamie 出 heavy attack 或 attempting drink 时使用。DR 主要用于延伸连段。Jamie 的 CA 有完全无敌不要在他有 CA 时 predictable。SA1 在 Jamie DR 接近时作为反制。如果 Jamie 试图远距离 drink，用 OD Triglav (全屏追踪) 打断。对局节奏：开局传送门控场 → 打断每次 drink → 远距离持续 poke → 不给他升级空间。"
    keyMoves: ["Torbalan", "Eminence (5HP)", "Triglav"]
  - opponent: "guile"
    difficulty: "disadvantageous"
    summary: "Guile 的 Sonic Boom 控制和 charge 速度让 JP 的传送门难以发挥——需要精准的波动战timing"
    strategies:
      - "Guile 是 JP 最不利的对局之一。Sonic Boom 的 recovery 极短让 Guile 可以快速 follow-up，你的 Triglav 放完后他已经有下一个波动在路上了。Sonic Blade（柱子）+ Sonic Boom 组合让你的传送门设置变得危险——Guile 可以一边控场一边慢慢接近。Flash Kick anti-air 极其可靠，不要 jump-in。核心方法：用 Triglav HP (三段) 在波动战中尽量交换，Perfect Parry 吸 Sonic Boom 节省 Drive。在 Guile 放波动后的间隙中设置 Torbalan——timing 必须非常精准。"
      - "Guile 的 charge 速度快意味着他始终可以出 Sonic Boom 和 Flash Kick。你的传送门触发后他可以 block 然后 immediate Sonic Boom 反击。关键是找到 Guile 放波动的间隙——HP Sonic Boom 两段 +3 on hit 但恢复帧是窗口。用 OD Torbalan (多次触发) 在场上持续施压。一旦用 Triglav 或 Torbalan 命中确认 combo，knockdown 后立刻重新设置。Guile 的 5HP 和 2MK range 都很远，中距离 poke 不占优。尽量维持在远距离用 2HP max range poke。"
      - "DI 在 Guile 出 Sonic Blade 或 heavy Sonic Boom 时使用。Perfect Parry 是建立 Drive 优势的关键。DR 用于确认 Eminence crumple 后延伸连段。Guile 的 CA (Sonic Hurricane) 有 invincibility 不要在他有 CA 时 whiff。SA1 在他 DR 接近时使用。核心心态：极端耐心，波动战中找精准 timing 插入传送门，每次 hit confirm 都要最大化伤害。"
    keyMoves: ["Triglav", "Perfect Parry", "OD Torbalan"]
  - opponent: "kimberly"
    difficulty: "advantageous"
    summary: "JP 的传送门专治 Kimberly 的传送和 run-stop——每次 teleport 都可能踩到陷阱"
    strategies:
      - "Kimberly 的核心威胁是传送混合和 speed。但她的 teleport 有明显的 start-up 动画（约 20f+），在传送落地时你可以在她的 landing point 触发 Torbalan 打她。设置 LP Torbalan (近距离) 在你身后——Kimberly teleport 到身后时触发传送门。她的 run-stop 混合也可以被远距离 2HP 打断。Kimberly 的幻影 dive kick 用 5HP anti-air 或 Departure LK 打她。Kimberly 的 5HK 是 -6 on block 用 2MP 确认惩罚。"
      - "Kimberly 没有 invincible DP（只有 OD Bushin Senpukyaku），大胆远距离 poke。用 Eminence (5HP) 和 2HP 持续 poke 她的移动。每次 Kimberly 试图 teleport 或 run-stop，预判她的落点触发 Torbalan。如果她习惯 teleport 到你身后，设置 LP Torbalan 在你身后然后等她。如果她习惯 run-stop 混合，用 2HP max range 打她的 run 动画。Kimberly 的速度是她的优势但也是劣势——她移动越多踩到传送门的机会越大。"
      - "DI 在 Kimberly 出 heavy run-stop 或幻影 dive kick 时使用。DR 用于追击她 teleport 后拉开距离。CA 在她空中进攻时用。SA1 在她 DR 接近时反制。Drive Reversal 在被她 teleport 混合压制时使用。对局节奏：设置传送门覆盖她的 teleport 路径 → 预判触发打她的移动 → 远距离持续 poke → 不给她 free approach 的机会。"
    keyMoves: ["Torbalan", "Eminence (5HP)", "2HP"]
  - opponent: "juri"
    difficulty: "even"
    summary: "JP 需要在 Juri 充 Fuha stock 时保持控场压力——不让她的 stock 系统启动"
    strategies:
      - "Juri 的核心是 Fuha stock 系统。她在 stock 充能时（214K 动作）是相对脆弱的——但这不意味着你可以 free 接近。在远距离用 Triglav 和 Torbalan 打断她的充能。有 stock 时 Juri 的 623HP (DP) 和 214HP (hashogeki) 消耗 stock 变强。3 stock 的 Juri 是最危险的——注意她的 stock 数量调整策略。Juri 的 5HP 是 -7 on block 用 Eminence max range 打她的恢复帧。中距离用 5HP 和 2HP poke，Juri 的 5MP 是 5f 速度很快需要保持距离。"
      - "用 Torbalan 在 Juri 的充能路径上设置陷阱。当她试图 214K 充能时触发传送门打断。如果 Juri 习惯用 DR 接近，在传送门范围内触发打击她的 DR 动画。Juri 的 Ryodansatsu (sweep) 是 -9 on block 可以用 DR → 5MP → Triglav HP 惩罚。如果 Juri 有 stock 她会想用 stock-enhanced move 接近——用 Eminence 在她接近路径上 poke 她。Juri 的 OD DP 是完全 invincible 的逆转，有 meter 时不要 predictable poke。"
      - "DI 在 Juri 充 Fuha stock 或出 sweep 时使用。DR 用于确认 Eminence crumple 后延伸连段。SA1 在 Juri DR 接近时反制。Juri 的 CA 有完全无敌。Drive Reversal 在被她的 Fuha rush 压制时使用。OD Departure 是你在近距离的唯一 invincible 逆转但消耗大。对局节奏：远距离控场打断充能 → 传送门限制她的移动 → poke 确认高伤害 → 管理 stock 数量调整压力。"
    keyMoves: ["Eminence (5HP)", "Torbalan", "Triglav"]
  - opponent: "ken"
    difficulty: "even"
    summary: "Ken 的 Jinrai Kick 压力需要 JP 用传送门和远距离 poke 打断他的接近节奏"
    strategies:
      - "Ken 的核心威胁是 Jinrai Kick 压力循环和 Run 系统接近。Jinrai LK (-3 on block) 是安全的持续压力——不要让他进入 Jinrai 距离，在远距离用 Eminence (5HP) 和 2HP 阻止他 walk-in。Ken 的 HP Hadoken 是 +3 on hit，波动战用 Triglav HP 交换。Ken 的 Run → Dragonlash 接近可以用 5HP anti-air 或 Departure LK 打他。Ken 的 5HK 有超远距离但 -6 on block，在 max range 用 2HP 打他的恢复帧。用 Torbalan 在他前进路径上设置陷阱。"
      - "核心策略是在 Ken 的前进路径上建立传送门网络。设置 K Torbalan (远距离) 在他通常 DR 接近的路径上——每次他 DR 都可能踩到传送门。如果 Ken 习惯 Run → Dragonlash，预判他的跳跃用 Departure LK anti-air 确认连段。Ken 的 OD DP 是完全 invincible——有 meter 时不要 predictable poke，等他 whiff DP 后惩罚。Eminence (5HP) crumple → 5MP → Triglav HP 是标准确认路线，约 2200+ 伤害。在 Ken knockdown 后重新设置传送门。"
      - "DI 在 Ken 出 HP Hadoken 或 Dragonlash Kick 时使用。DR 用于确认 Eminence crumple 后延伸连段。Ken 的 CA (Shippu Jinraikyaku, 9f) 和你的 Interdiction 速度一样。SA1 在他 DR 接近时反制。Drive Reversal 在被 Jinrai 压在角落时极其关键——创造距离重新建立传送门。对局节奏：远距离 poke 阻止接近 → 传送门打断 Run/DR → 确认高伤害 → knockdown 后重设控场。"
    keyMoves: ["Eminence (5HP)", "Torbalan", "2HP"]
  - opponent: "blanka"
    difficulty: "advantageous"
    summary: "JP 的传送门和远距离 poke 专治 Blanka 的混乱移动——每次 Blanka Ball 都有惩罚方案"
    strategies:
      - "Blanka 的核心威胁是 Blanka Ball 和 Electricity。Blanka Ball LP/MP 版本 on block 是 -4 到 -6，可以用 2MP 确认或 Eminence max range 惩罚。HP Blanka Ball 是 -10 on block 可以用 DR → 5MP → Triglav HP 重罚。Electricity 是 +4 on block 持续性——不要在 Electricity range 内按按钮，保持在远距离。Blanka 的 ground vertical ball 是 -26 on block，确认后重罚。用 Eminence 和 2HP 在远距离控制，Blanka 几乎 poke 不到你。"
      - "传送门是反制 Blanka 移动的利器。设置 LP Torbalan 在中距离——Blanka 的 horizontal ball 刚好在触发范围内。如果 Blanka 习惯 rolling 移动，在他滚动路径上触发传送门。OD Torbalan (多次触发) 让 Blanka 的每次移动都有风险。Blanka 想用混乱移动打乱你的节奏——你需要保持冷静，用远距离 poke 和传送门稳定输出。Blanka 的 5HK rolling attack -6 on block 可以确认。每次 Blanka Ball 被防后的 knockdown 是设置传送门的好时机。"
      - "DI 在 Blanka 出 Blanka Ball 或 vertical ball 时使用——DI 吸掉他的滚动攻击。DR 用于确认 Eminence crumple 后延伸连段。Blanka 的 CA 有无敌 startup 不要 predictable 进攻。SA1 在 Blanka 乱攻时使用。OD Triglav 可以追踪 Blanka 的位置。对局节奏：保持远距离 → 传送门覆盖他的滚动路径 → poke 确认高伤害 → Blanka Ball 被防后重罚。"
    keyMoves: ["Eminence (5HP)", "Torbalan", "2HP"]
  - opponent: "dhalsim"
    difficulty: "disadvantageous"
    summary: "Dhalsim 的远距离 limb 比 JP 更灵活——JP 的传送门在 Yoga Fire 控制下难以发挥"
    strategies:
      - "Dhalsim 是 JP 不利的对局。他的 Yoga Fire recovery 短，长距离 limb (5HP, 5MK, 2MK) 可以在 JP 的 Eminence range 外 poke 你。更麻烦的是 Dhalsim 可以 Yoga Teleport 绕过你的传送门——他的 teleport 是 22f startup 但可以改变位置。Dhalsim 的 anti-air (Yoga Blast, 5LP) 非常可靠，不要 jump-in。波动战用 Triglav HP 交换但 Dhalsim 的 Yoga Fire 可以跟随移动让波动战不占优。核心方法：Perfect Parry 吸波节省 Drive，找波动间隙设置 Torbalan。"
      - "一旦用 Triglav 或 Torbalan 命中确认 combo，必须最大化伤害。Dhalsim 的 health 只有 9500（比标准低 500），每次确认的回报更高。Eminence (5HP) crumple → DR → 5MP → Triglav HP → SA1 是对 Dhalsim 的最大伤害路线。Dhalsim 的 Yoga Teleport 可以绕过传送门但 landing 帧是窗口——在他 teleport 落地时用 5MP 确认。Dhalsim 的 limb 虽然长但大部分 on block 都是负帧（5HP -7, 2MK -8），在距离够的情况下用 2HP 打他的恢复帧。"
      - "DI 在 Dhalsim 出 Yoga Fire 或长 limb (5HP, 2MK) 时使用。Perfect Parry 是建立 Drive 优势的关键。DR 用于确认 Eminence crumple 后延伸连段。Dhalsim 的 CA 是全程无敌的。SA1 在他 teleport 后落地时使用。OD Torbalan 在这个对局特别重要——多次触发可以持续施压。核心心态：波动战找间隙，每次确认必须最大化伤害，目标是 Dhalsim 的 9500 HP。"
    keyMoves: ["Triglav", "Eminence (5HP)", "Perfect Parry"]
  - opponent: "e-honda"
    difficulty: "advantageous"
    summary: "JP 的远距离控制专治 Honda 的接近——传送门让他每次 Headbutt 都付出代价"
    strategies:
      - "Honda 的核心威胁是 Headbutt (buttslam) 和 Hundred Hand Slap (HHS)。HP Headbutt 是 -5 on block，可以在 max range 用 Eminence (5HP) 惩罚。HHS 是 -10 on block 可以用 DR → 5MP → Triglav HP 重罚。Honda 的 Sumo Headbutt 有装甲但可以用 DI 打断。关键是保持远距离——Honda 的 forward dash 是 18f startup 可以在远距离轻松反应。用 Eminence 和 2HP 在远距离持续 poke，Honda 的 5HP 是 16f startup 很慢用 2HP 在恢复帧打他。"
      - "传送门是反制 Honda 接近的利器。设置 K Torbalan (远距离) 在 Honda 的 Headbutt 路径上——每次 buttslam 都可能踩到传送门。如果 Honda 用 DR 接近，在传送门范围内触发 LP 版本打击他的 DR 动画。Honda 想保持近距离用 SPD 和 HHS 压制，但 JP 的远距离控制让 Honda 难以接近。OD Torbalan 持续触发让 Honda 的每次前进都有风险。每次 Honda Headbutt 被防后的 knockdown 是设置传送门的黄金时间。"
      - "DI 在 Honda 出 HHS 或 charge heavy attack 时使用。DR 用于确认 Eminence crumple 后延伸连段。Honda 的 SA1 和 SA3 都是 armored reversal。CA 在 Honda 出 buttslam landing recovery 时使用。SA1 作为 anti-air 在 Honda jump-in 时使用。OD Departure 在 Honda 贴身时作为唯一 invincible 逆转。对局节奏：远距离持续 poke → 传送门覆盖 his approach → Headbutt 被防后重罚 → knockdown 重设控场。"
    keyMoves: ["Eminence (5HP)", "Torbalan", "2HP"]
  - opponent: "dee-jay"
    difficulty: "even"
    summary: "Dee Jay 的 feint 系统和波动让传送门设置需要更精准的 timing"
    strategies:
      - "Dee Jay 的核心威胁是 Air Slasher 波动、Rolling Sobat 突进和 Jus Cool 姿态混合。HP Air Slasher 两段 +3 on hit，波动战用 Triglav HP 交换。Rolling Sobat MK (-6 on block) 在 max range 用 2HP 惩罚。Jus Cool 姿态有 LK 下段、MK overhead、HK 高段三个派生——保持在远距离用 Eminence 和 2HP poke 就不需要应对他的姿态混合。Dee Jay 的 feint 系统（假波动、假突进）不要被假动作诱导出传送门——确认是真的攻击再反应。"
      - "用 Torbalan 在 Dee Jay 的前进路径上设置陷阱。Dee Jay 想用 Rolling Sobat 和 DR 接近——在传送门范围内触发打击他的 approach。如果 Dee Jay 习惯 Jus Cool 姿态后派生，在远距离等他的派生动画结束后用 Eminence 打他的恢复帧。Dee Jay 的 OD Jackknife Maximum 是他的 invincible reversal 但只有 OD 版本。Eminence crumple → 5MP → Triglav HP 是标准确认路线。在波动战中同时设置传送门建立双重压力。"
      - "DI 在 Dee Jay 出 HP Air Slasher 或 Rolling Sobat 时使用。DR 用于确认 Eminence crumple 后延伸连段。SA1 在他 DR 接近时反制。注意他的 feint 系统——不要被假动作诱导浪费传送门触发。CA 保留到关键时刻。对局节奏：波动战建立传送门 → 远距离 poke 控制他的移动 → 确认高伤害 → 逼他到角落。"
    keyMoves: ["Eminence (5HP)", "Triglav", "Torbalan"]
  - opponent: "manon"
    difficulty: "advantageous"
    summary: "JP 的远距离控制完全克制 Manon 的接近——传送门让她无法 free 地积累 Medal"
    strategies:
      - "Manon 的核心威胁是 Renverse command grab 和 Medal 升级系统。她的 2MP 是 6f startup 和你的差不多，但她的所有 approach 都需要进入近距离——而这是 JP 最擅长的控制距离。用 Eminence (5HP) 和 2HP 在远距离持续 poke，Manon 的 5MP 只有 +2 on block range 短不是威胁。Manon 需要 hit 或 command grab 来提升 Medal Level——如果你不让她的攻击命中她就无法升级。每次 Manon 试图接近用 2HP max range 打退她。"
      - "传送门是反制 Manon 接近的最佳工具。设置 LP Torbalan 在中距离——Manon 的 DR 接近路径刚好在触发范围内。如果 Manon 试图用 Révérence (hit grab) 接近，在远距离触发传送门打断她的 approach。OD Torbalan 持续触发让 Manon 的每次前进都有代价。Manon 没有 invincible DP（只有 OD Danse Étoile），大胆远距离 poke。在 Manon knockdown 后设置传送门——她起身时面临 poke + 传送门双重威胁无法 free approach。"
      - "DI 在 Manon 出 Dégagé HK launcher 或 heavy attack 时使用。DR 用于确认 Eminence crumple 后延伸连段。Manon 的 SA2 Danse Étoile 是 invincible reversal。SA1 在她 DR 接近时反制。Drive Reversal 在被她的 strike/throw 混合压制时使用。对局节奏：远距离持续 poke → 传送门阻止 approach → 不让她积累 Medal → poke 确认高伤害碾压她的低输出。"
    keyMoves: ["Eminence (5HP)", "Torbalan", "2HP"]
  - opponent: "marisa"
    difficulty: "advantageous"
    summary: "JP 的传送门和远距离 poke 让 Marisa 接近极其困难——完美的控场对局"
    strategies:
      - "Marisa 是 JP 最有利的对局之一。她的移动速度极慢、普通技 startup 大，在远距离完全没有威胁。用 Eminence (5HP) 和 2HP 在 max range 持续 poke——Marisa 的 5HP 是 14f startup 很慢，在你的 Eminence (13f) startup 面前不占优。每次 Marisa 试图蓄力 Gladius 用 2HP 打她的蓄力动画。Perfect Parry 吸她的蓄力攻击。Marisa 的 OD Quadriga 有 super armor 但可以用 DI 打断。Marisa 想接近进入 Scutum 混合 range——绝对不要让她达到这个距离。"
      - "传送门是折磨 Marisa 的最佳工具。设置 K Torbalan (远距离) 在她的前进路径上——每次她 walk-in 都踩到传送门。LP Torbalan 在中距离——如果 Marisa 试图 DR 接近，触发传送门打她的 DR 动画。OD Torbalan 持续触发让 Marisa 的缓慢前进变成噩梦。Marisa 的 Scutum 三层混合在近距离致命但在远距离完全没有用处——只要保持距离她就无法施展。每次确认连段用 Eminence crumple → 5MP → Triglav HP 收尾。"
      - "DI 在 Marisa 出蓄力 Gladius 或 Quadriga 时使用——蓄力攻击不能挡 DI。DR 用于确认 Eminence crumple 后延伸连段。SA1 在 Marisa DR 接近时反制。Marisa 的 SA2 Meteora 有 armor 可以穿单发传送门触发，用 OD Triglav 或 multi-hit 工具应对。CA 保留到关键时刻——对 Marisa 你有充足时间积累优势。Drive Reversal 在被她接近时创造距离。对局节奏：完美控场 → 传送门阻止所有 approach → 远距离持续 poke → 不让她进入 Scutum range。"
    keyMoves: ["Eminence (5HP)", "Torbalan", "2HP"]
  - opponent: "zangief"
    difficulty: "advantageous"
    summary: "JP 的远距离控场是 Zangief 的噩梦——每次 SPD 尝试都被传送门打断"
    strategies:
      - "Zangief 是 JP 最有利的对局之一。他的 forward dash 是 18f startup 在远距离轻松反应。用 Eminence (5HP) 和 2HP 在 max range 持续 poke——Zangief 的 5HP 是 -6 on block 但 range 不如你的 Eminence。关键是永远不进入 SPD range——如果 Zangief 在你的 2MP range 内，你已经在危险距离了。Perfect Parry 吸他的 lariat 和远距离重击。Zangief 没有 projectile——Triglav 波动可以 free 放让他被动 block 或 jump。每次 jump 用 Departure LK anti-air 确认连段。"
      - "传送门是折磨 Zangief 的终极工具。设置 LP Torbalan 在中距离——Zangief 的 SPD range 刚好在 LP Torbalan 触发范围外，但他前进一步就踩到。设置 K Torbalan 在远距离——他在远距离想 walk-in 时触发。OD Torbalan 持续触发让 Zangief 的每次前进都有代价。如果 Zangief 试图 lariat 打传送门触发，lariat 的恢复帧是 Eminence crumple 的机会。核心策略：三层防御圈——远距离 Triglav 波动、中距离传送门、近 Eminence/2HP poke。"
      - "DI 在 Zangief 出 lariat 或 heavy normal 时使用——lariat 不能挡 DI。DR 用于确认 Eminence crumple 后延伸连段。Zangief 的 SA1 和 SA3 都是 armored reversal 但 range 有限。CA 在他 jump-in 或 whiff SPD 时使用。SA1 作为 anti-air 也很好。全程保持在远距离，用传送门和波动持续施压——Zangief 的接近速度太慢无法有效穿越你的控场网络。"
    keyMoves: ["Eminence (5HP)", "Torbalan", "Triglav"]
  - opponent: "lily"
    difficulty: "advantageous"
    summary: "趁 Lily 充能 Wind Stock 时用传送门打断——不让她的 stock 系统启动"
    strategies:
      - "Lily 的核心是 Wind Stock 系统。她需要 charge (214P) 来获得 stock——这是你打断的最佳时机。每次 Lily 试图 charge 用 Triglav 或远距离 Torbalan 触发打断她。有 stock 时她的 Tomahawk Buster (DP) 和 Condor Dive 变强但仍然可以用 Departure LK anti-air。Lily 的 2LP 是 4f startup 但 range 短，远距离不是威胁。用 Eminence (5HP) 和 2HP 在中远距离持续 poke。Lily 没有 stock 时伤害输出极低，你的远距离持续伤害碾压她。"
      - "传送门是反制 Lily 接近的利器。设置 K Torbalan 在她的 Condor Spire approach 路径上——每次她突进都可能踩到传送门。Lily 的 Condor Spire 是 -6 on block 可以用 2MP 确认惩罚。如果 Lily 试图 jump-in Condor Dive 用 Departure LK anti-air → dash → 5MP → Triglav HP 确认连段。Lily 没有 invincible DP（只有 OD Tomahawk Buster 有 invincibility），大胆远距离 poke。每次 Lily knockdown 后设置传送门——她起身时面临双重威胁无法 free charge。"
      - "DI 在 Lily charge Wind Stock 或出 Condor Spire 时使用。DR 用于快速接近和延伸连段。Lily 的 SA2 是 armored reversal。CA 在她空中 Condor Dive 时使用。SA1 在她 DR 接近时反制。OD Triglav 可以追踪她的移动。对局节奏：打断每次 charge → 传送门阻止 approach → 远距离持续 poke → 不给她 free stock 的机会。"
    keyMoves: ["Torbalan", "Eminence (5HP)", "Triglav"]
  - opponent: "cammy"
    difficulty: "even"
    summary: "Cammy 的速度和 dive kick 让 JP 的传送门需要更精准的预判——anti-air 是关键"
    strategies:
      - "Cammy 的核心威胁是 Cannon Strike (dive kick) 和 Spiral Arrow (slide)。Cannon Strike 的角度变化大需要仔细 anti-air 时机——用 Departure LK 或 5HP 打她。Spiral Arrow 是 -6 到 -9 on block 取决于版本，用 2MP 确认后 DR → 5MP → Triglav HP 惩罚。Cammy 的 5MP 是 5f startup 很快，中距离要小心。Cammy 的速度让她可以快速穿越传送门区域——需要更精准的触发 timing。Eminence (5HP) 在她 walk-in 时仍然有效。"
      - "传送门设置需要考虑 Cammy 的空中进攻。设置 LP Torbalan 在中距离——当她试图 ground approach 时触发。如果 Cammy 习惯 Cannon Strike 角度进攻，用 5HP anti-air 或 Departure LK 确认连段。Cammy 想用 speed 控制节奏——你需要用远距离 poke 和传送门让她慢下来。每次确认连段最大化伤害——Eminence crumple → DR → 5MP → Triglav HP 约 2500+。如果 Cammy 用 Hooligan Combination 接近，用 Departure LK anti-air 打她的空中状态。"
      - "DI 在 Cammy 出 Spiral Arrow 或 heavy Cannon Strike 时使用。DR 用于确认 2MP 命中后延伸连段。Cammy 的 OD Cannon Spike 是她的逆转但不是完全 invincible。CA 在她 Cannon Strike 跳入时使用。SA1 在她 DR 接近时反制。Drive Reversal 在被她的 speed rush 压制时使用。对局节奏：精准 anti-air → 传送门打断 ground approach → poke 确认高伤害 → 保持距离控制。"
    keyMoves: ["Departure LK", "Eminence (5HP)", "Torbalan"]
  - opponent: "rashid"
    difficulty: "even"
    summary: "Rashid 的空中机动需要 JP 精准 anti-air——传送门覆盖他的 glide 路径"
    strategies:
      - "Rashid 的核心威胁是空中机动性（Eagle Spike, Ysaar glide）和 mix-up。Eagle Spike HP 版本是 -7 on block 用 2MP 确认惩罚。他的 Ysaar (whirlwind) 给他额外的 jump 和 glide option——不要追他空中，用 Departure LK anti-air 等他落地。Rashid 的 5MP 是 6f startup 很快，中距离要小心。Arabian Sky High (overhead) 是 22f startup 比较慢可以反应。用 Eminence (5HP) 和 2HP 在远距离控制。Rashid 的速度和空中移动让传送门触发 timing 更困难。"
      - "传送门需要覆盖 Rashid 的常见 approach 路径。设置 LP Torbalan 在中距离——当他试图 ground approach 时触发。如果 Rashid 习惯用 Ysaar glide 接近，在 glide landing point 附近设置传送门。Eminence (5HP) 在 Rashid 落地时 poke 很有效。Rashid 的 SA2 是快速 reversal，有 meter 时不要 predictable。2HP max range 在他 glide 后的 landing 帧中很有效。每次 anti-air 确认用 Departure LK → dash → 5MP → Triglav HP。"
      - "DI 在 Rashid 出 Eagle Spike 或 heavy whirlwind move 时使用。DR 用于追击他 glide 后的着陆确认。CA 在他 Eagle Spike whiff 或 glide landing 时使用。SA1 在他 DR 接近时反制。OD Triglav 可以追踪他的移动。对局节奏：冷静 anti-air → 传送门覆盖 glide 路径 → 远距离 poke 确认高伤害 → 不被他的速度扰乱控场节奏。"
    keyMoves: ["Departure LK", "Eminence (5HP)", "Torbalan"]
  - opponent: "a-k-i"
    difficulty: "even"
    summary: "A.K.I. 的毒系统需要时间设置——JP 的传送门不给她 free setup 的空间"
    strategies:
      - "A.K.I. 的核心威胁是毒系统和 toxic trap。她需要时间设置毒 cloud 和 ground trap——趁她 setup 时用 Triglav 和 Torbalan 施压。被毒后不要慌——毒伤害是可以承受的，继续远距离控场比逃跑更有效。A.K.I. 的 Nightshade Pulse (projectile) startup 很慢 (20f+) 可以在恢复帧用 Eminence 打她。她的 2HP 是 -10 on block 可以用 DR 惩罚。保持在远距离用 Eminence 和 2HP poke，A.K.I. 的普通技 range 远不如你的。"
      - "传送门是反制 A.K.I. setup 的利器。每次她试图放置 toxic trap，触发远距离 Torbalan 打断她的 setup 动画。OD Torbalan 持续触发让她的每次 setup 尝试都有代价。A.K.I. 需要 toxic cloud 或 trap 来激活毒效果——如果你的传送门持续施压她很难完成 setup。如果 A.K.I. 习惯用 toxic command grab 接近，保持在 Eminence range 外。每次确认连段用 Eminence crumple → 5MP → Triglav HP 收尾。"
      - "DI 在 A.K.I. 出 Nightshade Pulse 或 setup toxic trap 时使用。DR 用于确认 Eminence crumple 后延伸连段。A.K.I. 的 OD Heel Strike 是她最好的逆转但 range 有限。CA 在她 whiff toxic trap 时使用。SA1 在她 DR 接近时反制。OD Triglav 可以追踪她的移动。对局节奏：远距离控场不给她 setup 时间 → 传送门打断每次 trap 尝试 → poke 确认高伤害 → 即使被毒也保持控场。"
    keyMoves: ["Eminence (5HP)", "Torbalan", "Triglav"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed 的 Psycho Flicker 让中距离困难——JP 需要用远距离工具保持控场优势"
    strategies:
      - "Ed 的核心威胁是 Psycho Flicker (长距离快速 poke) 和 Kill Rush (approaching armor move)。Psycho Flicker 的 range 很长让中距离很危险——保持在 Eminence (5HP) max range 用远距离 poke。不要走进 Flicker range。Kill Rush 是 armored 但可以用 DI 打断。Ed 的 5HP 是 -6 on block 用 2HP max range 打他的恢复帧。Perfect Parry 吸他的 Psycho Ball 是建立 Drive 优势的方式。波动战用 Triglav HP 交换。"
      - "传送门设置在 Ed 的 Flicker range 外。用 K Torbalan (远距离) 在他的 approach 路径上——每次他 Kill Rush 前进可能踩到传送门。如果 Ed 习惯用 Psycho Flicker 控制中距离，用 Eminence 从更远的距离 poke 他。OD Torbalan 持续触发让 Ed 的每次 approach 都有风险。Ed 的 Snatcher (command grab) range 短，保持在远距离不受影响。Eminence crumple → DR → 5MP → Triglav HP 是标准确认路线。"
      - "DI 在 Ed 出 Kill Rush 或 Psycho Ball heavy 版时使用。DR 用于突破他的 Flicker wall 后延伸连段。Ed 的 SA2 是快速 armored reversal。CA 在他 Psycho Rush whiff 时使用。SA1 在他 DR 接近时反制。Perfect Parry 建立 Drive 优势让你有更多 DR 和 OD Departure 的资源。对局节奏：远距离 Eminence poke → 传送门覆盖 approach → Perfect Parry 建立 Drive → 确认高伤害。"
    keyMoves: ["Eminence (5HP)", "Perfect Parry", "Torbalan"]
  - opponent: "akuma"
    difficulty: "disadvantageous"
    summary: "Akuma 的 air Hadoken 和 demon flip 让 JP 的 anti-air 更困难——但 9000 HP 意味着你每次确认都很致命"
    strategies:
      - "Akuma 是 JP 困难的对局。他的 air Hadoken 让他的空中进攻更有层次——常规 anti-air timing 不够，需要同时应对 air fireball 和 demon flip。Demon Flip 的 punch/kick/throw 混合让 anti-air 更复杂——优先用 Departure LK 打他的 flip startup 而不是等落地。Akuma 的 health 只有 9000——你的 Eminence crumple → 5MP → Triglav HP (2200+) 就能扣掉他 1/4 血量。波动战用 Triglav HP 交换，Akuma 的 Gohadoken startup 和标准波动差不多。"
      - "传送门在 Akuma 的 demon flip 路径上设置。如果 Akuma 习惯 flip 接近，在 flip landing point 附近设置 LP Torbalan。Akuma 的 air Hadoken 让他可以安全接近——需要更精准的 Eminence timing 打他的 air fireball 恢复帧。Akuma 的 5MP 是 5f startup 很快，近距离不恋战。5HK 是 -6 on block 用 2HP max range 打他。Akuma 的低血量是你的最大优势——每次确认都必须最大化伤害。Eminence crumple → DR → 5MP → Triglav HP → SA1 约 3500+ 对 9000 HP 是毁灭性的。"
      - "DI 在 Akuma 出 heavy Gohadoken 或 sweep 时使用。DR 用于确认 Eminence crumple 后延伸连段——对 Akuma 每个 hit 都很珍贵。Akuma 的 SA1 (Raging Demon) 是 command grab 有 armor break——不要在他有 meter 时 predictable。CA 在他 demon flip 或 whiff heavy attack 时使用——对 9000 HP 4000 伤害的 CA 是终结性的。OD Departure 在近距离作为唯一 invincible 逆转。对局节奏：波动战穿插传送门 → 精准 anti-air → 每次确认最大化伤害 → 利用他的低血量翻盘。"
    keyMoves: ["Eminence (5HP)", "Departure LK", "Triglav"]
  - opponent: "m-bison"
    difficulty: "even"
    summary: "Bison 的 Psycho Power 突进可以用传送门反制——保持距离不让他建立 Scissors Loop"
    strategies:
      - "M. Bison 的核心威胁是 Psycho Crusher 接近和 Scissors Loop 压力。HP Psycho Crusher 是 -8 on block 可以用 DR → 5MP → Triglav HP 惩罚。Scissors LK 版本是 +1 on block 让他保持压力——不要让他进入 Scissors range，在远距离用 Eminence (5HP) 和 2HP 阻止他接近。Bison 的 5HP 是 -5 on block 用 2HP max range 打他的恢复帧。波动战用 Triglav 交换，Bison 没有 standard projectile。Bison 的 forward dash 有 armor 不要用单发 poke 挑战——用 multi-hit 工具。"
      - "传送门是反制 Psycho Crusher approach 的利器。设置 K Torbalan (远距离) 在他的 Psycho Crusher 路径上——每次突进可能踩到传送门。如果 Bison 用 Scissors Loop 压力，在远距离用 Eminence 打他的 Scissors recovery。OD Torbalan 持续触发让他的每次 approach 都有代价。Bison 的 2LP 是 4f startup 可以在近距离 mash——保持远距离避免和他交换。每次确认连段用 Eminence crumple → 5MP → Triglav HP。在 Bison knockdown 后设置传送门。"
      - "DI 在 Bison 出 Psycho Crusher 或 heavy Scissors 时使用。DR 用于确认 Eminence crumple 后延伸连段。Bison 的 SA2 是 armored reversal。CA 在他 whiff Psycho Crusher 或 Scissors 时使用。SA1 在他 DR 接近时反制。Drive Reversal 在被他的 Scissors Loop 压制时创造距离。OD Departure 在近距离作为 invincible 逆转。对局节奏：远距离 poke 阻止 approach → 传送门打断 Psycho Crusher → 确认高伤害 → knockdown 重设控场。"
    keyMoves: ["Eminence (5HP)", "Torbalan", "2HP"]
  - opponent: "terry"
    difficulty: "even"
    summary: "Terry 有扎实的 neutral 但 JP 的传送门系统可以在远距离建立优势"
    strategies:
      - "Terry 的核心威胁是 Power Wave (波动) 和 Burn Knuckle (approaching move)。Power Wave recovery 比标准波动快但伤害低。Burn Knuckle HP 版本是 -9 on block 用 2MP 或 DR → 5MP → Triglav HP 惩罚。Terry 的 Rising Tackle 是 anti-air/DP 但只有 OD 版本完全 invincible。Crack Shoot (overhead) 是 20f startup 可以反应 block。波动战用 Triglav HP 交换。Terry 的 5MP 是 8f startup 和你的 2MP (6f) 差不多但 range 更短。用 Eminence 和 2HP 在远距离控制。"
      - "传送门设置在 Terry 的 Burn Knuckle approach 路径上。K Torbalan (远距离) 在他突进路径上——每次 Burn Knuckle 可能踩到传送门。如果 Terry 习惯蹲防 Power Wave 后 block 等，用 Eminence 从远距离 poke 他。OD Torbalan 持续触发让他的每次 approach 有风险。Terry 没有 invincible DP（OD 版本除外）大胆远距离 poke。每次确认连段用 Eminence crumple → 5MP → Triglav HP。Terry 的 Crack Shoot 虽然是 overhead 但 startup 慢可以反应——不要被吓到。"
      - "DI 在 Terry 出 Burn Knuckle 或 heavy Power Wave 时使用。DR 用于确认 Eminence crumple 后延伸连段。Terry 的 SA1 (Buster Wolf) 是 armored reversal。CA 在他 whiff Burn Knuckle 时使用。SA1 在他 DR 接近时反制。OD Triglav 可以追踪他的移动。对局节奏：波动战建立传送门 → 远距离 poke 控制他的移动 → 确认高伤害 → 逼他到角落。"
    keyMoves: ["Eminence (5HP)", "Torbalan", "Triglav"]
  - opponent: "mai"
    difficulty: "disadvantageous"
    summary: "Mai 的多角度扇子投射让 JP 的传送门设置时机更加困难——需要更灵活的控场"
    strategies:
      - "Mai 是 JP 困难的对局。她的 fan projectile 可以多角度发射让波动战更复杂——你需要同时应对地面和空中的 fan。她的 air fan 让她可以在空中持续骚扰，anti-air 更困难但 Departure LK 仍然是最佳选择。Mai 的 fan 比 standard 波动更灵活，Perfect Parry timing 需要更精准。她的 5MP 和 2MP range 都很长让中距离也不好打。Eminence (5HP) 在 max range 仍然是你最好的 poke 工具。Triglav 波动战需要更快节奏。"
      - "传送门设置需要更快节奏因为 Mai 的 fan 压力不让 JP free setup。用 OD Torbalan (多次触发) 代替普通版本——一次设置持续施压不需要反复 setup。如果 Mai 习惯 air fan 后 landing，用 2HP max range 打她的 landing 帧。Eminence (5HP) 在 Mai 落地时 poke 很有效。在 fan gap 中找 timing 设置传送门——每次 fan 发射后的恢复帧是窗口。OD Triglav (全屏追踪) 在 Mai air approach 时特别有效。"
      - "DI 在 Mai 出 fan projectile 或 air approach 时使用。DR timing 必须精准——在 fan gap 中突进。Mai 的 SA2 是快速 reversal。CA 在她空中 fan whiff 或 landing 时使用。SA1 在她 DR 接近时反制。需要比平时更耐心更灵活——Mai 的多角度进攻让 JP 的标准控场循环被打断。Drive Gauge 管理在这个对局尤其重要。对局节奏：更快的传送门设置 → OD 工具持续施压 → 精准 timing 的 poke 确认。"
    keyMoves: ["OD Torbalan", "Eminence (5HP)", "Departure LK"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena 的 healing 威胁需要 JP 保持持续压力——绝不能给她 free heal 的空间"
    strategies:
      - "Elena 的核心威胁是 deceptive range 的 capoeira kicks 和 healing ability。她的 5MK 和 2MK 的 range 比看起来长，需要保持适当距离。她的 healing 需要时间——绝对不能给她 free heal 的机会，用 Triglav 和 Torbalan 持续施压。Elena 的 Lynx Tail 是 multi-hit 可以用 DI 吸掉。用 Eminence (5HP) 在远距离控制她的移动。Elena 的 Mallet Smash (overhead) 是 22f startup 可以反应。Elena 没有 invincible DP 大胆 poke。"
      - "传送门是阻止 Elena healing 的最佳工具。每次她试图 heal，触发远距离 Torbalan 打断。OD Torbalan 持续触发让她没有 heal 的窗口。保持在 Eminence range 用 5HP 和 2HP 持续 poke——太近会被 capoeira mix-up 打，太远她可以 heal。如果 Elena 习惯在角落 heal，在她 heal animation 中触发传送门或用 OD Triglav 追踪打她。每次确认连段最大化伤害——Elena 的 healing 让时间战对她有利，你需要更快结束战斗。"
      - "DI 在 Elena 出 Lynx Tail 或 heavy capoeira move 时使用。DR 用于确认 Eminence crumple 后延伸连段和打断她的 heal。Elena 的 SA2 是 invincible reversal。CA 在她 whiff capoeira kick 或 heal attempt 时使用。SA1 在她 DR 接近时反制。OD Triglav 可以追踪她的移动。对局节奏：持续传送门压力不给她 heal 空间 → 远距离 poke 确认高伤害 → 比 healing 更快的伤害输出碾压她。"
    keyMoves: ["Torbalan", "Eminence (5HP)", "Triglav"]
  - opponent: "volcano-handshake"
    difficulty: "even"
    summary: "Limited matchup data — 使用标准 JP gameplan：远距离控场 + 传送门网络"
    strategies:
      - "Volcano Handshake 作为新角色数据有限。根据已有信息，他的核心工具是 Burning Fist 系列攻击，具有高伤害但 startup 偏慢。用 Eminence (5HP) 和 2HP 在远距离控制——他的 heavy attack startup 慢在你的 poke 面前不占优。anti-air 用 Departure LK 确认连段。标准波动战用 Triglav。保持远距离不让他进入 Burning Fist range。如果有 armored move 用 DI 打断。"
      - "保持标准 JP gameplan：设置 Torbalan 传送门网络，用 Triglav 波动控场，用 Eminence 和 2HP 远距离 poke。在 his approach 路径上设置传送门——每次前进都可能踩到。OD Torbalan 持续触发增加压力。确认 Eminence crumple → DR → 5MP → Triglav HP 最大化伤害。如果他有 armored move 不要用单发 poke 挑战——用 multi-hit Triglav HP 或 DI。"
      - "DI 在他出 heavy attack 或 charge move 时使用。DR 用于确认和延伸连段。SA1 在他 DR 接近时反制。CA 在关键时刻使用。OD Departure 在近距离作为 invincible 逆转。根据实际对局经验调整策略——核心不变：Eminence/2HP 远距离 poke → Triglav 波动 → Torbalan 传送门控场 → 确认高伤害。"
    keyMoves: ["Eminence (5HP)", "Torbalan", "2HP"]
---

## Additional Notes

JP (Johan Petrovic) 是 Street Fighter 6 中一名神秘的角色，以「提线木偶师」为设计灵感。他是一名拥有 Psycho Power 的老年人，表面上是 philanthropist 和商业巨头，实际上暗中操控着全球事务。JP 的战斗风格完全围绕「操控」展开——通过 Torbalan 传送门系统在场上设置陷阱，如同操控木偶一般控制对手的移动路线。

### Core Combo Routes

**Standard BnB (中距离)**
2MP → 2MP → 236LP (Triglav LP)
~1500 damage

**Eminence Confirm (远距离)**
5HP (crumple) → 5MP → 236HP (Triglav HP)
~2200 damage

**Anti-air Confirm**
623LK (Departure) → dash → 5MP → 236HP
~1800+ damage

**Drive Rush Combo**
2MP → DR → 5HP → 236HP
~2500+ damage

**Corner Max Damage**
5HP (crumple) → DR → 5MP → 236HP → SA1
~3500+ damage

**Torbalan Trigger Confirm**
22P~HP (命中) → dash → 5MP → 236HP
~2000+ damage

### Key Frame Data

| Move | Startup | On Hit | On Block | Notes |
|------|---------|--------|----------|-------|
| 2LP | 4f | +5 | -1 | 最速普通技 |
| 2MP | 6f | +6 | -2 | 可取消确认入口 |
| 5MP | 7f | +5 | -3 | 中距离确认 |
| 5MK | 10f | +4 | -4 | 中距离 poke |
| 2HP | 11f | KD | -13 | 远距离下段 |
| 5HP (Eminence) | 13f | Crumple | -8 | 远距离核心 poke |
| 623LK (Departure) | 8f | Float | -30 | Anti-air |
| 623KK (OD Departure) | 8f | Float | -30 | Invincible reversal |

### Playstyle Summary

JP 是一名极致的远距离控场角色。他的核心 gameplan 是：

1. **开局设置** — 在远距离设置 Torbalan 传送门
2. **波动控场** — 用 Triglav 波动阻止对手 free 接近
3. **远距离 poke** — 用 Eminence (5HP) 和 2HP 控制对手移动
4. **传送门触发** — 在对手踩入陷阱时触发高伤害 combo
5. **循环** — knockdown 后重新设置传送门，形成控场循环

JP 的弱点是近距离防守——没有 standard invincible DP（只有 OD Departure），一旦被贴身就非常被动。核心策略永远是保持距离，用传送门和远距离 poke 维持控场。
