---
name: "Jamie"
subtitle: "The Siu Bak Fu"
overview: "Jamie 是一个近身战专家，依靠独特的喝酒升级系统逐渐解锁更强大的招式和连段。Drink Level 0 时他的工具非常有限，但随着喝酒等级提升，他会获得 Luminous Dive Kick（DL1）、Bakkai（DL2）、Tenshin 指令投（DL3）和 Swagger Hermit Punch（DL4），最终成为最具压制力的角色之一。他的核心玩法是在 poke 和立回中找机会喝出等级，然后利用完整的工具箱在近距离进行高伤害混合攻击。"
keyMoves:
  - name: "Freeflow Strikes (Rekka)"
    input: "236P > 6P > 6P / 6K > 6K"
    description: "Jamie 的标志性连携攻击。三段 Punch 路线用于伤害和角落搬运，Kick 路线以喝酒结束提升 Drink Level。DL4 时第一段变成 2-hit，大幅提升确认窗口和安全性。OD 版本始终安全，可取消进 SA2。这是 Jamie 确认伤害和建立压制的主要工具。"
    startup: 13
    active: 2
    recovery: 24
    damage: 350
  - name: "Arrow Kick (LK)"
    input: "623K"
    description: "Jamie 最可靠的反空和逆转工具。LK 版本 5f 启动，Anti-Air Invuln 1-11f，是打 cross-up 和跳入的最佳选择。HK 版本伤害更高 (1400) 但启动慢 (10f)。OD 版本完全无敌 1-9f，是 Jamie 唯一的真正逆转选项。被防 -43f 极度危险，只能在确认或读招时使用。"
    startup: 5
    active: 10
    recovery: 52
    damage: 1000
  - name: "Swagger Step (Palm)"
    input: "214P"
    description: "前进掌击，LP/MP 版本有 9 帧活跃帧可以 space 成安全。HP 版本 +5 on block 非常适合压制。OD 版本造成 Tumble 状态可以在角落接 2HK~HK TC。DL4 时可以接 6P follow-up (Swagger Hermit Punch) 大幅提升伤害。角落 HP Palm 后是 perfect safe jump 时机。"
    startup: 17
    active: 9
    recovery: 17
    damage: 900
  - name: "Bakkai"
    input: "236K"
    description: "DL2 解锁的滑地旋转攻击，全程穿波 (Projectile Invuln 到活跃帧结束)。LK 版本 18f 启动造成 1400 伤害并给 safe jump oki。HK 版本 25f 启动但伤害高达 1800 且移动距离更远。OD 版本可取消进 SA2 变成 plus on block。这是 Jamie 对抗波动的核心工具，也是 combo 中高伤害的 SA3 取消跳板。"
    startup: 18
    active: 11
    recovery: 24
    damage: 1400
  - name: "Tenshin"
    input: "63214K"
    description: "DL3 解锁的指令投，命中后 +8 允许连段追击。OD 版本造成 Crumple 状态 (+28 优势) 可以接 2HP 或 5MP 的完整连段。范围 0.96 比标准投稍远。这让 Jamie 在 DL3+ 时拥有近身致命的 strike/throw 混合，特别是角落 Tenshin 循环是游戏中最强的压制循环之一。"
    startup: 8
    active: 2
    recovery: 52
    damage: 682
  - name: "Luminous Dive Kick"
    input: "j.214K"
    description: "DL1 解锁的空中 dive kick，可以用 TK 输入 (2149K) 做极低空版本。按键强度决定角度。命中低位置时 +2 on block 可以持续压制。OD 版本命中后可以 juggle 追加伤害。是 Jamie 绕过波动和进入压制范围的重要工具，也可用于惩罚角落投循环。"
    startup: 11
    active: 3
    recovery: 13
    damage: 1000
  - name: "The Devil Inside (Drink)"
    input: "22P (hold)"
    description: "Jamie 的喝酒动作，按住可以连续喝最多 4 级。48f 喝第一级，之后每级约 45-50f。每级回复 0.25 Drive bars (DL4 时翻倍)。整个动作期间处于 Counter-hit 状态极度危险。通常在 knockdown 后或远距离对手无法惩罚时使用。SA2 (The Devil's Song) 可以瞬间到达 DL4。"
    startup: 48
    active: 0
    recovery: 2
    damage: 0
  - name: "Breakin' (SA1)"
    input: "236236K"
    description: "Level 1 Super，8f 启动带 Strike/Throw Invuln 1-12f。主要用于 combo 结尾或 Burnout 时的逆转。可接在任何普通技取消后，也可在 Tenshin 后 raw link。按住下键可以在结尾喝酒提升 Drink Level（牺牲伤害和 oki）。极度 unsafe on block (-60)，不能乱用。"
    startup: 8
    active: 35
    recovery: 74
    damage: 2200
  - name: "The Devil's Song (SA2)"
    input: "214214P"
    description: "Level 2 Super，瞬间将 Jamie 提升到 DL4 持续 15 秒。激活时回复 1 Drive bar（已 DL4 时回复 3 Drive bars）。可以从 OD 特殊技取消获得帧数优势或延伸连段。DL4 时作为纯 Drive 回复工具也非常有价值。这是 Jamie 的核心资源管理工具，紧急时弥补 Drink Level 差距。"
    startup: 1
    active: 900
    recovery: 5
    damage: 0
  - name: "Getsuga Saiho (SA3/CA)"
    input: "236236P"
    description: "Level 3 Super，10f 启动全程无敌 1-12f。Cinematic 命中后 launch 可以接 juggle 追加伤害 (214HP, Dash 5HP, DR~2KK 等)。CA 版本 4500 伤害不接 juggle 但伤害更高。是 OD Tenshin 后最伤害的选项，也是最后的逆转手段。因为两段 block 可以 Burnout 对手然后用第二段 chip 杀。"
    startup: 10
    active: 19
    recovery: 42
    damage: 2600
tips:
  - "开局策略：Jamie 在 DL0 时非常弱——没有 dive kick、没有穿波、没有指令投。开局不要急于进攻，用 5MP (+6 on hit, +2 on block) 和 2MK poke 试探，确认命中后 DR 取消接 Rekka~K 路线喝酒。如果对手给你空间，用 22P 喝出 DL1 解锁 dive kick 后进攻选择会大幅增加。SA2 可以紧急跳到 DL4 但消耗 2 bars Super，需要权衡。"
  - "连段核心：DL2 以前的基础路线是 2MP → 5MK → 236LP~6P~6P 或 623LK 结尾。DL2 后用 Bakkai (236LK) 替代 623LK 结尾获得更高伤害和 safe jump。角落 DR~2KK → j.HK(2hit) → 2HK~HK~P 是核心 juggle 路线获得角落搬运+喝酒+4 优势。DL4 后 Rekka 变成 2-hit 确认窗口大幅变宽，可以更轻松地确认进 SA3。"
  - "立回要点：5MP (+2 on block) 是 Jamie 最好的中立按钮，disjointed hitbox 让它可以 whiff punish 很多 mid poke。5MK 是中距离主力 poke，leg hurtbox 抬高可以避过很多 2MK。2MK (7f) 是快速的 cancelable low。2HK 是长距离 2-hit sweep，well-spaced 时很多角色无法惩罚。5HK 距离远但 -5 on block 需要 space。"
  - "Drive Rush 运用：Jamie 的 DR 非常重要因为他的连段需要 DR 来获得足够伤害。5MK~DR 是核心中距离确认，DR~5MP (+6 oB) 建立压制，DR~2KK 启动 juggle 路线。DL3+ 时 DR~5MP 后可以 tick Tenshin 打击投混合。被防时 2MP~DR → 2MP 或 5LK 是帧陷阱。保留 Drive Gauge 给 DR 取消比用于 Raw DR 更重要。"
  - "Tenshin 压制循环 (DL3+)：Tenshin 命中后 +8 可以接 5MP → 2MP → Rekka 连段，角落可以接 2HP → Bakkai 或 214HP。OD Tenshin 命中后 Crumple +28 可以接 2HP → 完整连段。在角落，投 → 前dash → 5MP/2MP → Tenshin 是 Jamie 最致命的混合循环，对手只有 OD 逆转或无敌 Super 才能逃脱。DR~5MP (+6 oB) 后 tick Tenshin 打败所有非无敌选项。"
  - "对不同距离的应对：远距离用 Perfect Parry 吸波攒 Drive，DL2+ 用 Bakkai 穿波惩罚。中距离是 Jamie 的理想范围，用 5MP、5MK、2MK poke 和 whiff punish。近距离 DL3+ 用 Tenshin/投/strike 三选一混合。6MK overhead 在 DL2+ 有 TC 可以确认。Anti-air 用 623LK (5f) 或 2HP (Anti-Air Invuln 8-32f)。"
matchups:
  - opponent: "luke"
    difficulty: "even"
    summary: "Luke 的中距离工具和快速波动让 Jamie 难以接近，但一旦进入近距离 Jamie 的混合更强"
    strategies:
      - "Luke 的核心威胁是 HP Sand Blast (+3 on hit) 控制中距离和 Flash Knuckle 接近工具。DL0-1 时不要急着冲，用 5MP counter-poke 和 Perfect Parry 吸波攒 Drive。Luke 的 2MP (+5 on hit) 是他最好的确认按钮，注意不要在他的 2MP 范围内乱按。Luke 的 Perfect Flash Knuckle HP +4 on block 是他压制的核心。"
      - "接近方式：DL2 后用 Bakkai 穿 Sand Blast。DR 穿波动突进。进入 5MK 距离后 Jamie 的工具不比 Luke 差。Luke 的 Flash Knuckle LP 版本 -18 on block 可以用 2MP 惩罚。Luke 的 Rising Uppercut LP 是 5f 反空，角落压制注意不要被他 OD DP 打断。DL3+ 后 Tenshin 混合比 Luke 的防御选项强。"
      - "DI 在 Luke 出 HP Sand Blast 或 5HK 时使用。DR 用于确认 2MP 命中后延伸连段。SA1 在 Luke Flash Knuckle 被你读准时作为 punish。CA 保留到关键时刻——Luke 的 CA 也是 10f 启动所以不要在他有 CA 时 whiff 大招。当 Luke Burnout 时用 Rekka 循环压制他。"
    keyMoves: ["5MP", "Bakkai (DL2+)", "623LK"]
  - opponent: "ryu"
    difficulty: "disadvantageous"
    summary: "Ryu 的扎实基础工具和波动让 Jamie 在建立 Drink Level 前就很被动"
    strategies:
      - "Ryu 的核心威胁是 Hadoken 控场和 Denjin Charge 后的强化波动。他的 5HK 和 sweep 都是长距离 poke。Jamie DL0 时 Ryu 可以自由发波建立优势，你很难接近。用 Perfect Parry 吸波节省 Drive，DL2 后用 Bakkai 穿波。Ryu 的 2MK (8f) 是 cancelable low poke 距离比你的 2MK 远。"
      - "中距离 Ryu 的 5MP (7f) 比你的 5MP (8f) 快，frame trap 优势在他。注意 Ryu 的 hashogeki——没充能时 HP 版本 -4 on block 可以用 2LP 惩罚。Ryu 的 Shoryuken LP 6f startup 有完全无敌，角落压制不要 predictable。你的优势在 DL3+ 后的 Tenshin 混合比 Ryu 的防御好。"
      - "DI 在 Ryu 出 5HP 或 sweep 时使用。DR 用于穿过波动确认 poke 命中。SA2 可以紧急跳到 DL4 弥补等级差距。CA 在 Ryu Shoryuken whiff 或 jump-in 时使用。重点是不让 Ryu free 地控制节奏——每个 knockdown 都要考虑是 oki 还是喝酒。"
    keyMoves: ["Perfect Parry", "Bakkai (DL2+)", "5MP"]
  - opponent: "chun-li"
    difficulty: "disadvantageous"
    summary: "Chun-Li 的极长普通技和 Serenity Stream 让 Jamie 接近困难"
    strategies:
      - "Chun-Li 的 5MP、2MP、5HP 都有极长的判定距离，在远中距离非常强。她的 Serenity Stream 会蹲低避开你的 5LP、5MP 等高位攻击。不要盲目出 mid 攻击——她会用姿态避开然后反击。Chun-Li 的 2HP 是长距离 anti-air，你的 jump-in 很容易被反。"
      - "接近方式：用 DR 穿过她的长距离 poke。一旦进入 5MP/2MP 距离，Chun-Li 的按钮优势消失。她的 5HK recovery 较长可以用 5MP whiff punish。DL1+ 后 Luminous Dive Kick 可以改变空中角度接近。角落里 Jamie 的 Tenshin 混合是 Chun-Li 难以应对的。她的 OD Tensho Kicks 是非完全无敌的逆转。"
      - "DI 在 Chun-Li 出 2HP 或 sweep 时使用。DR 用于突破中距离 poke 墙。SA1 作为 combo ender 或紧急逆转。CA 在她空中进攻时用。当 Chun-Li Burnout 时积极接近压制，她的防御在近距离很弱。"
    keyMoves: ["DR", "5MP", "Tenshin (DL3+)"]
  - opponent: "guile"
    difficulty: "disadvantageous"
    summary: "Guile 的波动和反空让 Jamie 难以接近，需要耐心等待机会"
    strategies:
      - "Guile 是 Jamie 最难打的对局之一。Sonic Boom 恢复快让他可以持续控场。Flash Kick 是最可靠的 anti-air 之一。不要跳入——用 Bakkai 穿波 (DL2+) 或 Perfect Parry 吸波。Guile 的 Sonic Blade + Sonic Boom 组合让你很难 DR 突进。Jamie DL0 时几乎是完全被动。"
      - "一旦进入中近距离，Guile 的普通技不如你的。2MP (+5 on hit) 作为确认工具。Guile 的 5HP -6 on block 可以确认惩罚。他的 2HK sweep -10 on block 用 2LP 惩罚。Flash Kick LP -25 on block 用重攻击或 Rekka 重罚。DL3+ 后 Tenshin 混合在角落非常有效因为 Guile 没有好的非 Super 逆转。"
      - "DI 在 Guile 出 Sonic Blade 或 heavy Sonic Boom 时使用。DR 在读准波动时机后突进。SA2 紧急到 DL4 建立 full toolkit。CA 保留到关键时刻 Guile 防御很强可能需要 CA 破防。需要比平时更耐心，不要急于冲进去。"
    keyMoves: ["Perfect Parry", "Bakkai", "5MP"]
  - opponent: "kimberly"
    difficulty: "advantageous"
    summary: "Kimberly 防御脆弱，Jamie 一旦建立压制就可以持续循环"
    strategies:
      - "Kimberly 的核心威胁是传送混合 (run stop overhead/low/throw) 和幻影 dive kick。用 623LK anti-air 她的空中进攻。她的 teleport 有明显的启动动画，用 2MP 或 5LP 打断她 teleport 后的恢复帧。不要乱出重攻击——她会 teleport 绕过。"
      - "Kimberly 的防御很弱：她没有完全无敌的 DP，只有 OD Bushin Senpukyaku 作为逆转。这意味着你可以大胆地在她的起身进行压制。DL3+ 后 Tenshin/投/strike 三选一混合让她很难应对。5MP (+2 on block) 持续 poke，Rekka 确认伤害。她的 5HK -6 on block 可以惩罚。"
      - "DI 在 Kimberly 出 heavy run stop 或幻影 dive kick 时使用。DR 用于追击 teleport 后的距离。SA1 在 combo 中结束。CA 在她空中进攻时使用——她在空中无法变招。当 Kimberly Burnout 时疯狂压制，她几乎没有逃生选项。"
    keyMoves: ["623LK", "5MP", "Tenshin (DL3+)"]
  - opponent: "juri"
    difficulty: "even"
    summary: "双方都想进攻，谁先建立 Drink Level / Fuha Stock 谁就赢"
    strategies:
      - "Juri 的核心是 Fuha stock 系统。她充能时 (214K) 最脆弱，这是你进攻的最佳窗口。用 Rekka 或 DR 赶在她完成充电前打断。Juri 有 stock 时 623HP (DP) 和 214HP 都会消耗 stock 变强。她的 5MP 和 2MP 速度和你的差不多但 2MK 距离更长。"
      - "中距离交换：你的 5MP (+6 on hit, +2 on block) 是关键，counter-poke Juri 的按按钮。Juri 的 Ryodansatsu (sweep) -9 on block 可以用 Rekka 惩罚。她的 5HP -7 on block 用 2LP 确认惩罚。DL2 后 Bakkai 可以穿她的波动。DL3+ Tenshin 混合比 Juri 的防御好因为她的 OD DP 不是完全无敌。"
      - "DI 在 Juri 充 Fuha stock 时使用可以打断。DR 在她波动后突进。Juri 的 OD DP 是她最好的逆转有 meter 时不要 predictable。CA 保留到中后期回合，Juri 伤害很高你可能需要 CA 追赶。注意 Juri 的 SA2 (Feng Shui Engine) 激活后 her pressure 非常强。"
    keyMoves: ["5MP", "2MP", "DR"]
  - opponent: "ken"
    difficulty: "even"
    summary: "Ken 的 Jinrai 混合需要冷静应对，Jamie 的近距离混合更强"
    strategies:
      - "Ken 的核心威胁是 Jinrai Kick (236K) 的 high/low/throw 三选一。delay 版本可以 frame trap 打 mash。应对：不要乱按按钮看清 Jinrai 的延迟版本后再反应。Ken 的 HP Shoryuken 完全无敌是强力逆转，角落压制注意。他的 Hadoken 和你的波动对抗差不多但 Ken 有 Air Tatsu 改变角度。"
      - "中距离用 5MP 和 2MP poke。Ken 的 5MK (+1 on hit) 是好 poke 用 5MP 对策。Ken 的 sweep -9 on block 可以惩罚。他的 6HP (target combo 入口) -7 on block。DL2 后 Bakkai 穿 Hadoken。DL3+ Tenshin 混合在近距离比 Ken 的防御好，注意他的 OD Shoryuken 仍然是威胁。"
      - "DI 在 Ken 出 heavy Hadoken 或 sweep 时使用。DR 用于突破波动压制或确认 2MP 命中后延伸。Ken 的 CA 9f startup 全程无敌比你的稍快，不要在他有 CA 时 whiff 大招。当 Ken Burnout 时 Rekka 循环压制。"
    keyMoves: ["5MP", "Bakkai (DL2+)", "Tenshin (DL3+)"]
  - opponent: "blanka"
    difficulty: "even"
    summary: "Blanka 的电球和混乱移动需要冷静应对，punish 他的 unsafe 招式"
    strategies:
      - "Blanka 的核心威胁是 Blanka Ball (horizontal/vertical) 和 Electricity。Blanka Ball LP/MP 版本 -4 到 -6 on block，用 2MP 惩罚。HP Blanka Ball -10 on block 用重攻击惩罚。不要在 Electricity 范围内按按钮——+4 on block。Blanka 的 vertical ball -26 on block 是巨大 punish 窗口。"
      - "用中距离 poke (5MP, 5MK) 控制距离。Blanka 的 5HK rolling attack 有长距离但 -6 on block。他的 2LP 4f startup 可以 mash 你的 gap。远距离可以趁机用 22P 喝酒。DL2 后 Bakkai 穿 Blanka Ball 的 certain timing。Anti-air Blanka 的 jumping attack 用 623LK。"
      - "DI 在 Blanka 出 Blanka Ball 或 vertical ball 时使用。DR 用于在 Blanka Ball 被防后追击。SA1 在 combo 中结束。CA 在 Blanka jump-in 或出 risky move 时使用。注意 Blanka 的 CA 有 invincible startup 不要 predictable 进攻。"
    keyMoves: ["2MP", "623LK", "5MP"]
  - opponent: "dhalsim"
    difficulty: "even"
    summary: "耐心战——逐步缩短距离，DL2 后 Bakkai 是关键穿波工具"
    strategies:
      - "Dhalsim 想在远距离用 Yoga Fire 和长距离 limb (5HP, 5MK, 2MK) 控制。你的 5MP 可以 counter-poke 但距离不如他的 limb 远。不要跳——他的 anti-air (Yoga Blast, 5LP) 非常可靠。方法：Perfect Parry 吸波节省 Drive，DL2 后用 Bakkai 穿波惩罚。DL1+ Dive Kick 也可以改变空中角度。"
      - "一旦进入中近距离，Dhalsim 没有好的逆转选项 (除了 OD Yoga Blast 和 CA)。用 5MP 和 Rekka 持续压制。他的 Yoga Teleport 26f startup 可以反应但不容易。Dhalsim 的 5HP limb -4 到 -6 on block，确认后用 2MP 惩罚。DL3+ Tenshin 混合在角落非常有效。"
      - "DI 在 Dhalsim 出 Yoga Fire 或长 limb 时使用。DR 是你主要的接近手段——远距离 2MK~DR 或 Raw DR 穿波动。CA 在 Dhalsim teleport 后或出 risky limb 时使用。SA2 紧急到 DL4 获得 full toolkit 对抗 Dhalsim 的区域控制。"
    keyMoves: ["Bakkai", "Perfect Parry", "DR"]
  - opponent: "e-honda"
    difficulty: "advantageous"
    summary: "Honda 的 charge 依赖让 Jamie 的持续 poke 和 Rekka 成为噩梦"
    strategies:
      - "Honda 的核心威胁是 Headbutt (buttslam) 和 Hundred Hand Slap (HHS)。HP Headbutt -5 on block 用 2MP 惩罚。HHS -10 on block 用重连段惩罚。Honda 的 Sumo Headbutt 有 armor 可以用 DI 打断。他的 5HP 16f startup 很慢用 5MP 在恢复帧打他。"
      - "持续进攻不给他 charge 时间是关键。5MP 和 2MP poke 不让他 free charge。接近后 Rekka 确认伤害，Honda 没有完全无敌的 DP (除了 OD Sumo Smash) 可以大胆起身压制。DL3+ Tenshin 混合对 Honda 特别有效因为他的防御工具有限。远距离可以用 22P 喝酒 Honda 很难 punish。"
      - "DI 在 Honda 出 HHS 或 charge heavy attack 时使用。DR 用于快速接近不给他 charge 空间。Anti-air Honda 的 jump 用 623LK。CA 在 Honda buttslam landing recovery 时使用。SA1 在 combo 中结束。当 Honda Burnout 时疯狂压制。"
    keyMoves: ["5MP", "Rekka", "623LK"]
  - opponent: "dee-jay"
    difficulty: "even"
    summary: "Dee Jay 的压力循环可以用 Jamie 的 poke 和 punish 反制"
    strategies:
      - "Dee Jay 的核心威胁是 MG Strike (air slash) 混合和 Jackknife Maximum (flash kick)。MG Strike 的 low/high 混合需要读取——不要乱按按钮看清后再反应。Jackknife HP -29 on block 重罚。Dee Jay 的 5MK 是好 poke 但 -3 on block。Double Rolling Sobat -4 on block 用 2MP 惩罚。"
      - "用 5MP (+6 on hit) 在中距离和他交换按钮。Dee Jay 想保持压力循环，用 623LK 打断他的 gap。当 Dee Jay 没有 meter 时他没有好的逆转可以大胆进攻。DL2 后 Bakkai 穿他的波动。DL3+ Tenshin 混合在角落压制。他的 2LP 4f 可以 mash 要注意 gap timing。"
      - "DI 在 Dee Jay 出 Jackknife 或 MG Strike heavy 版时使用。DR 用于打断压力循环或确认 2MP 后延伸。CA 在他 MG Strike 跳跃时使用可以打他落地。SA2 紧急到 DL4 对抗他的压力。"
    keyMoves: ["5MP", "623LK", "2MP"]
  - opponent: "manon"
    difficulty: "advantageous"
    summary: "在 Manon 积累 Medal Level 之前压制，她的防御很弱"
    strategies:
      - "Manon 的威胁随 Medal Level 增长 (command grab damage 和 range 增加)。Level 0-1 时 command grab 范围很短大胆进攻。如果让她叠到 Level 3-4+ command grab 变成巨大威胁需要更谨慎。开局立刻用 Rekka 和 DR 接近不给她 hit confirm 叠 medal 的空间。Manon 没有 3f button (2LP 4f)。"
      - "5MP (+6 on hit) 作为确认工具，Manon 的 5MP 8f startup 比你的 5MP 慢。DL3+ Tenshin 是特别好的对策因为 Manon 想用 normal 投叠 medal，而你的 Tenshin 让她的 strike/throw 防御更加困难。角落 Tenshin 循环可以快速结束回合。Manon 的 OD Chassé 不是完全无敌的逆转。"
      - "DI 在 Manon 出 heavy attack 或 attempting medal combo 时使用。DR 用于快速接近和延伸连段。CA 在她 whiff command grab 时使用。注意 Manon 的 SA2 是空中攻击可以避过你的 Tenshin timing。"
    keyMoves: ["Rekka", "5MP", "Tenshin (DL3+)"]
  - opponent: "marisa"
    difficulty: "even"
    summary: "Marisa 慢但痛——用速度优势 poke，不要硬碰硬打装甲"
    strategies:
      - "Marisa 的核心威胁是 armored attacks (Gladius, Quadriga) 和巨大单发伤害。她的 5HP 14f startup 很慢但 armored。不要用重攻击挑战她的装甲——用快按钮 (2LP 4f, 2MP 6f, 5MP 8f) 打她 armor 的间隙。Marisa 的 2HP -15 on block 可以重罚。Gladius charge 版本有 armor 但 DI 可以打断。"
      - "你的速度优势是关键。5MP 和 2MP 比 Marisa 的任何按钮都快。用快速 poke 在中距离骚扰打中后 DR 取消延伸连段。Marisa 想让你在她 armor 范围内交换你不想这样——保持在 5MK 距离 poke。DL3+ Tenshin 在近距离是对策因为 Marisa 的 command grab 范围也不短。"
      - "DI 在 Marisa 出 Gladius charge 或 Quadriga 时使用，armor 不能挡 DI。DR 用于确认 poke 命中后延伸。Marisa 的 SA2 是 armored reversal 有 meter 时不要 predictable。CA 在她 whiff Gladius 或 Quadriga 时使用。注意 Marisa 伤害极高一个 read 可能让你掉半血。"
    keyMoves: ["5MP", "2MP", "623LK"]
  - opponent: "jp"
    difficulty: "disadvantageous"
    summary: "JP 的区域控制让 Jamie 建立 Drink Level 困难，需要耐心突破"
    strategies:
      - "JP 的核心威胁是 Torbalan (portal) 区域控制和 Eminence (far anti-air)。不要站在 full screen——逐步接近。JP 的 2HP 是好 poke 但 -13 on block 可以用 Rekka 惩罚。他的 5HP -8 on block。JP 会用 portal 限制你的移动让你无法 free 喝酒。DL2 后 Bakkai 穿 portal damage 是关键。"
      - "接近方式：DR 或 Bakkai 穿他的波动和 portal。一旦进入中距离 JP 的普通技不如你的好。用 5MP 和 2MK 控制地面。JP 的 Torbalan 有 startup 时间可以用 DR 打断。DL3+ Tenshin 在角落非常有效因为 JP 的非 Super 逆转有限。注意 JP 的 2LP 4f 可以 mash 你的 gap。"
      - "DI 在 JP 出 Torbalan 或 heavy attack 时使用。DR 在读准 portal timing 后突进。JP 的 CA 全程无敌不要在他有 CA 时 whiff 大招。SA2 紧急到 DL4 获得 Bakkai 和 Tenshin 的 full toolkit。需要比平时更耐心等待 JP 犯错。"
    keyMoves: ["Bakkai", "DR", "5MP"]
  - opponent: "zangief"
    difficulty: "advantageous"
    summary: "保持中距离不进 SPD 范围，poke 让他无法接近"
    strategies:
      - "Zangief 的核心威胁是 SPD (command grab) 和 armored attacks。永远不要站在 SPD 范围内不动——如果在近距离必须按按钮或跳。HP SPD range 很大需要保持中距离。Zangief 的 5LP 4f 很快不要小看他的近距离 button。他的 lariat 是 anti-air 但可以被 low (2MK, 2LK) 打。"
      - "用 5MP、5MK、2MK 在中距离持续骚扰。Zangief 的 forward dash 18f 可以反应听到 dash 声音就跳或按 LP。他的 5HP -6 on block 用 2MP 惩罚。远距离可以安全地用 22P 喝酒 Zangief 很难从远距离 punish。DL3+ Tenshin 在 Zangief 身边非常有效——他要猜你出 Tenshin 还是 poke。"
      - "DI 在 Zangief 出 lariat 或 heavy normal 时使用——lariat 不能挡 DI。DR 用于确认 poke 命中后延伸连段。Zangief 的 SA1 和 SA3 都是 armored reversal 有 meter 时不要 predictable。CA 在 Zangief jump-in 或 whiff SPD 时使用。注意 Zangief 的 SA3 在低血量变成 5f startup 的 command grab。"
    keyMoves: ["5MP", "5MK", "2MK"]
  - opponent: "lily"
    difficulty: "even"
    summary: "在她充 Wind Stock 时进攻，让她的 condor wind 无用武之地"
    strategies:
      - "Lily 的核心是 Wind Stock 系统。她需要 charge (214P) 来获得 stock 充能时最脆弱。趁这个窗口用 Rekka 或 DR 进攻。有 stock 时她的 Tomahawk Buster (DP) 和 Condor Dive 变强。Lily 的 2LP 4f 可以在近距离和你交换。她的 Condor Spire (approaching move) -6 on block 用 2MP 惩罚。"
      - "中距离你的工具更优：5MP 和 2MP 的 frame data 比 Lily 的普通技好。她的 5MP 9f startup 比你的 5MP 慢。Anti-air 她的 Condor Dive 用 623LK。DL2 后 Bakkai 穿她的波动。DL3+ Tenshin 在角落是致命的因为 Lily 的防御工具有限。远距离她 charge 时你可以 22P 喝酒。"
      - "DI 在 Lily charge Wind Stock 或出 Condor Spire 时使用。DR 用于快速接近和打断充能。Lily 的 SA2 是 armored reversal 有 meter 时注意。CA 在她空中 Condor Dive 时使用。注意 Lily 的 SA3 是 command grab low HP 时非常危险。"
    keyMoves: ["Rekka", "5MP", "623LK"]
  - opponent: "cammy"
    difficulty: "even"
    summary: "高速对决——anti-air 和 punish 是关键"
    strategies:
      - "Cammy 的核心威胁是 Cannon Strike (dive kick) 和 Spiral Arrow (slide)。Cannon Strike 角度变化大需要仔细观察 anti-air 时机——用 623LK 或 5MP 打她。Spiral Arrow -6 到 -9 on block 取决于版本用 2MP 惩罚。Cammy 的 5MP 5f startup 比你的 5MP 快注意她的快速 button。她的 5HK -5 on block 用 2MP 惩罚。"
      - "Cammy 的速度和你的差不多。中距离用 5MP 和 2MP 交换。Hooligan Combination 是空中混合但可以用 anti-air 打掉。DL2 后 Bakkai 穿她的波动。DL3+ Tenshin 混合在近距离有效因为 Cammy 的 OD Cannon Spike 不是完全无敌。角落压制可以大胆。"
      - "DI 在 Cammy 出 Spiral Arrow 或 heavy Cannon Strike 时使用。DR 用于确认 2MP 命中后延伸连段。CA 在她 Cannon Strike 跳入时使用。注意 Cammy 的 SA2 (spin drive smasher) 是 armored reversal。当 Cammy Burnout 时积极进攻她的防御很脆弱。"
    keyMoves: ["623LK", "5MP", "2MP"]
  - opponent: "rashid"
    difficulty: "even"
    summary: "Rashid 的空中机动性可以用冷静的 anti-air 和 Bakkai 对策"
    strategies:
      - "Rashid 的核心威胁是空中机动性 (Eagle Spike, Ysaar glide) 和 mix-up。Eagle Spike HP 版本 -7 on block 用 2MP 惩罚。他的 Ysaar (whirlwind) 给他额外 jump 和 glide option——不要追他空中等他落地。Rashid 的 5MP 6f startup 很快中距离要小心。Arabian Sky High (overhead) 22f startup 比较慢可以反应。"
      - "保持中距离用 5MP 和 5MK 控制节奏。Rashid 想用速度控制比赛节奏你需要用自己的 poke 让他慢下来。DL1+ Dive Kick 可以和他在空中竞争。DL2 后 Bakkai 穿他的波动。Anti-air 他的 Eagle Spike 用 623LK。DL3+ Tenshin 在角落有效因为 Rashid 的非 Super 逆转有限。"
      - "DI 在 Rashid 出 Eagle Spike 或 heavy whirlwind move 时使用。DR 用于追击他 glide 后的着陆。Rashid 的 SA2 是快速逆转。CA 在他 Eagle Spike whiff 或 glide landing 时使用。注意 Rashid 的 SA1 是 armored advancing move。"
    keyMoves: ["5MP", "623LK", "Bakkai"]
  - opponent: "a-k-i"
    difficulty: "even"
    summary: "在她设置毒之前 rush down，Jamie 的近距离工具更全面"
    strategies:
      - "A.K.I. 的核心威胁是毒系统 (toxic brew, 毒蛇 trap)。她需要时间设置毒 cloud 和 ground trap，趁她 setup 时用 Rekka 快速接近。被毒后不要慌——毒伤害可以承受继续进攻。她的 5MP 6f startup 很快但 range 短。Nightshade Pulse (projectile) 20f+ startup 很慢可以 DI 打断。"
      - "中近距离你的 button 质量更好。5MP (+6 on hit) 作为确认工具。A.K.I. 的 toxic command grab 需要近距离保持 5MK 距离。她的 2HP -10 on block 可以惩罚。DL2 后 Bakkai 穿她的波动。DL3+ Tenshin 混合在角落非常有效因为 A.K.I. 的防御工具有限。她的 OD Heel Strike 是最好的逆转但 range 有限。"
      - "DI 在 A.K.I. 出 Nightshade Pulse 或 setup toxic trap 时使用。DR 用于快速接近不给她 setup 时间。CA 在她 whiff toxic trap 或 jump-in 时使用。SA2 紧急到 DL4 获得 full toolkit。注意她的 SA3 在毒状态下伤害极高不要被毒后还掉以轻心。"
    keyMoves: ["Rekka", "5MP", "DR"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed 的 Psycho Flicker 让中距离困难，需要找到突破口"
    strategies:
      - "Ed 的核心威胁是 Psycho Flicker (长距离快速 poke) 和 Kill Rush (approaching armor move)。Psycho Flicker range 很长让中距离很危险——用 5MP counter-poke 不要走进 Flicker range。Kill Rush 有 armor 但可以用 DI 打断。Ed 的 5MP 8f 和你的差不多。他的 5HP -6 on block 用 2MP 惩罚。"
      - "接近方式：用 Perfect Parry 吸他的 psycho ball 然后 DR 突进。Ed 的 Snatcher (command grab) range 短保持中距离安全。角落里用 Rekka 和 Tenshin 压制。DL2 后 Bakkai 穿他的波动。DL3+ Tenshin 在近距离是致命的因为 Ed 的防御工具不如你的进攻全面。"
      - "DI 在 Ed 出 Kill Rush 或 Psycho Ball heavy 版时使用。DR 用于突破他的 flicker wall。Ed 的 SA2 是快速 armored reversal。CA 在他 Psycho Rush whiff 或 risky approach 时使用。注意 Ed 的 SA3 (Psycho Cannon) 是长距离 multi-hit 可以打断你的 Rekka。"
    keyMoves: ["5MP", "Perfect Parry", "Tenshin (DL3+)"]
  - opponent: "akuma"
    difficulty: "even"
    summary: "Akuma 伤害恐怖但血量只有 9000——一个正确的 read 可以翻盘"
    strategies:
      - "Akuma 的核心威胁是巨大伤害输出和 demon flip 混合。他的 health 只有 9000 (比你少 1000)，所以一个 good conversion 能重创他。Demon Flip 的 punch/kick/throw 混合需要读取——用 623LK 打他的 flip punch，jump out 打他的 flip throw。Akuma 的 5MP 5f startup 很快要小心。"
      - "中距离你的 5MP 可以和 Akuma 交换。他的 Gohadoken startup 比你的波动快。他的 5HK -6 on block 可以惩罚。关键是 anti-air 他的 jump 用 623LK——不让他 free 设置 air fireball。DL2 后 Bakkai 穿波动。DL3+ Tenshin 在近距离是有效的因为 Akuma 防御不如他的进攻强。注意他有 Raging Demon (command grab)。"
      - "DI 在 Akuma 出 heavy Gohadoken 或 sweep 时使用。DR 用于确认 5MP 后延伸连段——对 Akuma 每个 hit 都珍贵因为低血量。Akuma 的 SA1 (Raging Demon) 是 command grab 有 armor break 不要在他有 meter 时 predictable。CA 在他 demon flip 或 whiff heavy attack 时使用。"
    keyMoves: ["623LK", "5MP", "Bakkai"]
  - opponent: "m-bison"
    difficulty: "even"
    summary: "Bison 的 Psycho Power 压力可以用 Jamie 的速度和 punish 反制"
    strategies:
      - "M. Bison 的核心威胁是 Psycho Crusher 接近和 Scissors Loop 压力。HP Psycho Crusher -8 on block 用 2MP 惩罚。Scissors (LK version) +1 on block 让他保持压力——不要乱按按钮等他 scissors heavy 版本 (-6 on block) 再 punish。他的 5HP -5 on block。Bison 的 2LP 4f 可以 mash。"
      - "用 5MP 控制中距离，Bison 需要 charge 时间出 Psycho Crusher 和 Scissors。持续的 poke 不让他 free charge。接近后 Rekka 确认伤害 DL3+ Tenshin 在角落有效。远距离趁他 charge 时用 22P 喝酒。DL2 后 Bakkai 穿他的波动。Bison 的 forward dash 很快注意反 dash。"
      - "DI 在 Bison 出 Psycho Crusher 或 heavy Scissors 时使用。DR 在 5MP 命中后快速接近延伸连段。Bison 的 SA2 是 armored reversal 有 meter 时不要 predictable。CA 在他 whiff Psycho Crusher 或 Scissors 时使用。注意 Bison 的 SA3 在低血量时极度危险。"
    keyMoves: ["5MP", "2MP", "Rekka"]
  - opponent: "terry"
    difficulty: "even"
    summary: "Terry 有扎实的 neutral 但 Jamie 的速度和混合在近距离更优"
    strategies:
      - "Terry 的核心威胁是 Power Wave (波动) 和 Burn Knuckle (approaching move)。Power Wave recovery 比 Bakkai 快但伤害低。Burn Knuckle HP 版本 -9 on block 用 2MP 惩罚。他的 Rising Tackle 是 anti-air/DP 但不是完全无敌 (OD 版本是)。Terry 的 Crack Shoot (overhead) 20f startup 可以反应。"
      - "中距离你的 5MP 和 2MP 比 Terry 的普通技稍快。他的 5MP 8f 和你的 5MP 一样但 range 更短。用 5MP 和 2MK poke 然后 DR 确认。DL2 后 Bakkai 穿 Power Wave。DL3+ Tenshin 在角落压制有效因为 Terry 的非 Super 逆转有限。注意 Terry 的 Power Dunk 有 armor。"
      - "DI 在 Terry 出 Burn Knuckle 或 heavy Power Wave 时使用。DR 用于确认 2MP 后延伸连段。Terry 的 SA1 (Buster Wolf) 是 armored reversal。CA 在他 whiff Burn Knuckle 或 jump-in 时使用。注意 Terry 的 SA3 在低血量伤害极高。"
    keyMoves: ["5MP", "Bakkai", "2MP"]
  - opponent: "mai"
    difficulty: "disadvantageous"
    summary: "Mai 的扇子波动和空中机动让 Jamie 难以接近"
    strategies:
      - "Mai 的核心威胁是 fan projectile 和 air mobility。她的 fan 波动可以多角度发射让接近变得复杂。她的 air fan 让她可以在空中持续骚扰 anti-air 很困难。不要追她空中等她落地再进攻。她的 5MP 和 2MP range 都很长让中距离也不好打。Mai 的 command grab range 短保持中距离安全。"
      - "接近方式：Perfect Parry 吸 fan 然后 DR 突进。DL1+ Dive Kick 可以改变空中角度。DL2 后 Bakkai 穿她的波动。一旦接近 Mai 的普通技 frame data 不如你的好。用 5MP (+6 on hit) 确认和 Rekka 压制。DL3+ Tenshin 在角落有效因为 Mai 的防御有限。"
      - "DI 在 Mai 出 fan projectile 或 air approach 时使用。DR 是你主要的接近手段。Mai 的 SA2 是快速 reversal。CA 在她空中 fan whiff 或 landing 时使用。需要比平时更耐心不要急于冲进去。SA2 紧急到 DL4 获得 full toolkit。"
    keyMoves: ["Perfect Parry", "DR", "Bakkai"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena 的 capoeira range 需要适应，在合适距离 Jamie 可以压制"
    strategies:
      - "Elena 的核心威胁是 deceptive range 的 capoeira kicks 和 healing ability。她的 5MK 和 2MK range 比看起来长需要保持适当距离。她的 healing 需要时间——不要给她 free heal 的机会保持压力。Elena 的 Lynx Tail 是 multi-hit 可以 DI 吸掉。她的 Mallet Smash (overhead) 22f startup 可以反应。"
      - "用 5MP 和 5MK 在中距离和她交换。Elena 的 5HP -5 on block 用 2MP 惩罚。保持在 5MP 距离最有利——太近会被 capoeira mix-up 打太远她可以 heal 或 poke。DL2 后 Bakkai 穿波动。DL3+ Tenshin 在近距离有效因为 Elena 的防御工具有限。Anti-air 用 623LK。"
      - "DI 在 Elena 出 Lynx Tail 或 heavy capoeira move 时使用。DR 用于确认 5MP 后延伸连段。Elena 的 SA2 是 invincible reversal。CA 在她 whiff capoeira kick 或 heal attempt 时使用。注意 Elena 的 SA3 在低血量时恢复大量 HP 不要拖到后期。"
    keyMoves: ["5MP", "5MK", "623LK"]
  - opponent: "volcano-handshake"
    difficulty: "even"
    summary: "Limited matchup data — rely on fundamental Jamie gameplan"
    strategies:
      - "Volcano Handshake 作为新角色数据有限。根据已有信息他的核心工具是 Burning Fist 系列攻击具有高伤害但启动偏慢。用快速 button (2LP 4f, 2MP 6f, 5MP 8f) 在他的 heavy attack gap 中插入。Anti-air 用 623LK 不要给他 free 的 jump-in。"
      - "保持标准 Jamie gameplan：中距离用 5MP、2MP 和 5MK 控制。在他 whiff heavy attack 时用 Rekka 或 DR 取消惩罚。如果他有 armored move 用 DI 打断。DL2 后 Bakkai 如果他有波动。DL3+ Tenshin 在角落压制。接近后用 Rekka 循环确认。"
      - "DI 在他出 heavy attack 或 charge move 时使用。DR 用于确认和延伸连段。CA 在关键时刻使用。根据实际对局经验调整策略。注意他的 SA3 在低血量可能非常危险。"
    keyMoves: ["5MP", "Rekka", "623LK"]
---

## Additional Notes

Jamie is a self-styled Chinatown peacekeeper who aspires to the example set by Yun and Yang, the Twin Dragons. An expert dancer, Jamie places justice and friendship above all else.

### Drink Level System

Jamie's core mechanic revolves around increasing his Drink Level (DL) from 0 to 4. Each level unlocks new moves and increases his damage output:

| Drink Level | Damage Scaling | Unlocks |
|---|---|---|
| DL 0 | 90% | Basic Rekka, Arrow Kick, Swagger Step, Drink |
| DL 1 | 95% | Luminous Dive Kick (j.214K), Bitter Strikes TC (5LP~LK~MP) |
| DL 2 | 100% | Bakkai (236K), Full Moon Kick TC (6MK~MK~P) |
| DL 3 | 105% | Tenshin (63214K), Intoxicated Assault TC (4HP~HP~HK) |
| DL 4 | 110% | Swagger Hermit Punch (214P~6P), Ransui Haze TC (6HK~4HK~P), Enhanced 2-hit Rekka |

**Important:** Drink Level resets at the start of each round.

### Core Combo Routes

| Situation | Combo | Damage |
|---|---|---|
| DL0 BnB | 2MP → 2MP → 236LP~6P~6P | ~1600 |
| DL2 BnB | 5MK → 236LK (Bakkai) | ~1800+ |
| DL3 Corner | OD Tenshin → 2HP → 214HP | ~2500+ |
| DR Route | 5MK~DR → 2KK → j.HK(2hit) → 2HK~HK~P | ~2200+drink |
| Light Confirm | 2LP → 2LP → 5LK → 236LP | ~1000 |
| DL4 Max Damage | 5HK~DR → 2KK → j.HK(2hit) → 2HK~HK → 236LP~6P~6P → SA3 | ~4500+ |

### Key Frame Data Reference

| Move | Startup | On Hit | On Block | Notes |
|---|---|---|---|---|
| 2LP | 4f | +5 | -1 | Fastest normal |
| 2MP | 6f | +5 | -1 | Core confirm button |
| 5MP | 8f | +6 | +2 | Only plus on block normal |
| 5LK | 5f | +3 | -1 | Chainable light |
| 5MK | 9f | +2 | -3 | Mid-range poke, leg raised |
| 2MK | 7f | -1 | -6 | Cancelable low |
| 5HK | 15f | +3 | -5 | Long range poke |
| 2HK | 9f | KD+33 | -11 | 2-hit sweep |
| 2HP | 8f | 0 | -8 | Anti-air invuln 8-32f |
| 623LK (Arrow Kick) | 5f | KD+42 | -44 | Anti-air DP |
| Rekka LP (1st hit) | 13f | -1 | -6 | Approaching confirm |
| 214HP (Palm) | 25f | KD+42 | -3(+5) | Safe on block at range |
| Bakkai LK | 18f | KD+42 | -12 | Projectile invuln |
| Tenshin | 8f | +8 | - | Command grab (DL3+) |

### Health and Movement

- **Health:** 10,000 (standard)
- **Forward Walk Speed:** 0.048
- **Back Walk Speed:** 0.035
- **Forward Dash:** 19 frames
- **Backward Dash:** 23 frames
- **Jump Speed:** 4+38+3
- **Throw Range:** 0.8
