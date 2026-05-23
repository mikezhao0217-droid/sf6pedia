---
name: "Marisa"
subtitle: "The Gladiator"
overview: "Marisa 是一名以古罗马角斗士为主题的重装打击型角色，拥有 SF6 中最高的单发伤害输出。她的核心机制是「蓄力装甲」——Gladius (236P) 和 Quadriga (214P) 等特殊技可以通过按住按键蓄力，获得一次打击装甲并变为正帧（+2 到 +5 on block）。蓄力过程中的装甲让她能硬吃对手一击然后反击，造成毁灭性的伤害。她的弱点是移动速度极慢、普通技发生帧偏大，在远距离和中距离的 footsies 中容易处于劣势，面对波动系和长距离 poke 角色时接近非常困难。"
keyMoves:
  - name: "Gladius (HP)"
    input: "236+HP (按住蓄力)"
    description: "Marisa 的标志性蓄力重拳。HP 版本三段攻击，最后一段造成 Wall Splat（墙壁贴）。蓄力后获得 1-hit armor 并变为 +4 on block——这是 Marisa 最强的压力工具。蓄力 Gladius 打中后可以接 SA1 或 CA。LP 版本 (16f) 单段快速确认，MP 版本 (18f) 两段，HP 版本 (22f) 三段。所有版本蓄力后都变正帧。核心用法：在对手进攻节奏中突然插入蓄力 Gladius，armor 吃掉对手的攻击后反击，一次命中就能扣掉 1500-2000+ HP。"
    startup: 22
    active: 6
    recovery: 26
    damage: 1800
  - name: "Quadriga (HP)"
    input: "214+HP (按住蓄力)"
    description: "Marisa 的突进蓄力拳。HP 版本多段突进，全屏距离的接近工具。蓄力后获得 armor 并变为正帧（+3 on block）。是 Marisa 从中远距离切入的主要方式——用 armor 穿过对手的单发攻击后贴身压制。LP 版本 (16f) 单段突进，速度较快但距离短。OD 版本有 super armor（可扛多段攻击）。Quadriga 的蓄力版是 Marisa 「突进→贴身→Scutum 混合」进攻路线的起点。"
    startup: 22
    active: 8
    recovery: 24
    damage: 1600
  - name: "Scutum"
    input: "214+K"
    description: "Marisa 的架势（Stance）系统，进入防御架势后有三种派生：P 跟进（中段攻击，约 18f）、K 跟进（下段攻击，约 16f）、360+P（指令投 Dimachaerus）。这三层混合（中段/下段/投技）是 Marisa 角落压制的核心——对手必须在蹲防（吃中段）、站防（吃下段）和拆投（吃中段/下段）之间猜测。Scutum 可以从部分普通技取消进入，创造连续的压力循环。在 Drive Rush 后使用 Scutum 混合尤其致命。"
    startup: 8
    active: 2
    recovery: 18
    damage: 1200
  - name: "Dimachaerus (HP)"
    input: "360+HP"
    description: "Marisa 的指令投（Command Grab）。HP 版本伤害约 1400，LP 版本启动更快但伤害较低（约 1200）。是 Scutum 混合体系的核心组件，也常用于对手习惯蹲防时的惩罚投。在角落搭配 Scutum 的中段/下段派生使用最为致命——对手无法同时防御投技和打击。OD 版本范围更大伤害更高。注意 Dimachaerus 的启动帧（7-8f）在指令投中不算特别快，需要在对手的恢复帧或 gap 中使用。"
    startup: 8
    active: 1
    recovery: 30
    damage: 1400
  - name: "Impetus (HK)"
    input: "236+HK"
    description: "Marisa 的浮空踢（Launcher）。20f startup，命中后对手浮空可接 juggle 连段（如 j.HP → Gladius HP 或 SA1）。是 Marisa 中距离确认后的关键 combo 延伸工具。LK 版本 (14f) 是快速下段踢，用于 poke 和 combo ender。MK 版本 (16f) 是中段踢。Impetus HK 从 2MP 或 5MP cancel 进入是标准 BnB 路线的核心环节。OD 版本有 armor 属性。"
    startup: 20
    active: 4
    recovery: 22
    damage: 1000
  - name: "5HP (蓄力)"
    input: "5HP (按住蓄力)"
    description: "Marisa 最重要的普通技重击。14f startup（基础），蓄力后获得 1-hit armor 并变为正帧（+2 到 +4 on block），同时大幅增加伤害并造成 Wall Splat。这是 Marisa 的核心 neutral 工具——在中距离蓄力等待对手出招，armor 吸掉后反击。蓄力 5HP → Gladius HP 是高伤害确认路线。未蓄力版本是 -6 on block 不安全，但蓄力版本是 Marisa 的正帧压力基础。5HP 同时也是 Marisa 最好的 whiff punish 工具之一。"
    startup: 14
    active: 5
    recovery: 24
    damage: 1200
  - name: "2MP"
    input: "2MP"
    description: "Marisa 最快的可取消普通技。7f startup，+5 on hit，-2 on block。虽然不如其他角色的 6f 2MP 快，但它是 Marisa 最可靠的确认工具——2MP 命中后可以 cancel 进 Gladius、Impetus 或 Drive Rush 延伸连段。是 Marisa 在中距离 footsies 中的主要 poke 按钮，也是 BnB 连段的起始点。在近距离用它试探确认，命中就延伸连段，被防也只是 -2 安全。"
    startup: 7
    active: 3
    recovery: 16
    damage: 500
  - name: "Amphora (6HP)"
    input: "6+HP"
    description: "Marisa 的 overhead（中段）攻击，两段命中。约 20f startup，第一段是中段判定用于打蹲防。搭配 Dimachaerus 指令投和 2MK 下段形成三层混合。在对手习惯蹲防等你的蓄力攻击时，Amphora 是打破防御的关键。on block 约 -6 不安全，需要控制使用频率。可以取消进 Gladius 或 Quadriga。Drive Rush cancel 后的 Amphora 更难反应，是 Marisa 进攻混合中的重要选项。"
    startup: 20
    active: 4
    recovery: 22
    damage: 900
  - name: "Meteora (SA2)"
    input: "214214+P"
    description: "Marisa 的 Level 2 Super Art，装甲突进。12f startup，约 2800 伤害，自带 super armor（可扛多段攻击）。是 Marisa 最重要的逆转工具——即使没有完全无敌，armor 可以让她穿过对手的进攻然后反击。作为 combo ender 也很有价值，从 Impetus HK launcher 后可直接接 SA2。SA2 的 armor 属性让它在对手 predictable 进攻时特别有效——读准对手出招时机使用。保留 SA2 作为威慑是 Marisa 防守端的关键。"
    startup: 12
    active: 6
    recovery: 40
    damage: 2800
  - name: "Goddess of War (CA)"
    input: "214214+K"
    description: "Marisa 的 Critical Art（Level 3 Super）。9f startup，4000 伤害（CA 版本 4500），完全无敌 1-13f。是 Marisa 的终极逆转和 combo ender。从 Impetus HK launcher、OD Gladius 或蓄力 5HP 后可接。击倒 +26（CA +22）。Marisa 的 CA 动画是华丽的角斗士终结技，视觉冲击力十足。保留到击杀或关键时刻使用——4000+ 伤害可以逆转任何局面。配合她的高单发伤害，CA 是终结对手的最佳手段。"
    startup: 9
    active: 6
    recovery: 48
    damage: 4000
tips:
  - "开局目标：用 2MP (7f) 在中距离试探，确认命中后 cancel 进 Gladius LP 或 Drive Rush 延伸连段。同时观察对手习惯——如果他喜欢按按钮，开始蓄力 5HP 用 armor 吃掉他的攻击后反击。Marisa 的核心节奏是「armor read → 高伤害确认 → Scutum 混合压制」。每次蓄力 Gladius 或 5HP 成功 armor 都意味着 1500-2000+ 的伤害回报。在角落时优先用 Scutum 的中段/下段/投技三层混合压制对手。"
  - "核心连段路线：中屏 BnB 为 2MP → 236HK (Impetus HK) → j.HP → 236HP (Gladius HP)，约 2500+ 伤害。角落 BnB：5HP(charged) → Wall Splat → 236HP (Gladius HP) 或 SA2，约 3000+。Drive Rush 路线：2MP → DR → 5HP(charged) → 236HP，约 2800+。Light 确认：2LP → 2LP → 236LP (Gladius LP)，约 1400。Anti-air 确认：2HP → 236MP (Gladius MP) 或 SA1，约 1800+。Scutum 混合：214K → P/K/360P 三择。始终根据距离和位置选择最优路线。"
  - "立回中善用 2MP (7f, +5 on hit, -2 on block) 和 5MK (11f, +5 on hit) 试探。Marisa 的普通技不快但伤害高——一次 5HP 蓄力命中可以抵消对手三四次 poke 的伤害。记住你的 2LP 是 4f 但不可取消，2MP 是 7f 可取消是你的确认起点。在对手持续 poke 时，蓄力 Gladius 是你的最强 neutral 工具——armor 吃掉对手的轻攻击后三段命中造成 1800+ 伤害。DI 是你重要的接近和打断工具。"
  - "Scutum (214K) 混合是 Marisa 角落压制的核心。进入 Scutum 后的 P（中段）、K（下段）、360P（投技）三择让对手无法安全防御。核心循环：将对手逼到角落 → Scutum → 三择猜中 → knockdown → 继续 Scutum。如果对手延迟拆投，用 P 或 K 打他。如果对手蹲防，用 P（中段）打他。如果对手站防等中段，用 K（下段）或 360P 投他。Drive Rush cancel 后的 Scutum 更难反应。"
  - "对付远距离波动角色（Guile, Dhalsim, JP），Marisa 非常难受。不要急着跳入——她们的 anti-air 非常可靠。核心方法：Perfect Parry 吸波节省 Drive Gauge，找波动间隙用 OD Quadriga (armor) 或 Drive Rush 突进。Quadriga 的蓄力 armor 是你穿过波动的主要方式。一旦进入近距离，你的高伤害输出和 Scutum 混合开始发挥威力。将对手逼到角落是最终目标——Marisa 在角落的压制力是顶级的。"
  - "Drive Rush 是 Marisa 接近和延伸连段的关键。核心 DR 用法：1) 从 2MP hit confirm 后 DR 延伸进入 5HP→Gladius 连段。2) 从远距离直接 DR 接近进入 Scutum 混合范围。3) 在 Scutum 后 DR cancel 增加混合的不可预测性。管理好 Drive Gauge——Marisa 需要 DR 来接近和延伸，但也要保留一些给 Drive Impact 打断对手的蓄力攻击和 Drive Reversal 防御。不要一次性耗尽 Drive Gauge。"
  - "蓄力时机的选择是 Marisa 的灵魂。不要每次都蓄力——如果对手习惯了你的蓄力节奏，会用 DI（armor 不能挡 DI）或快速多段攻击打掉你的蓄力。混合蓄力和不蓄力版本：有时快速放 Gladius LP 不蓄力，有时蓄力 HP 版本。在对手 whiff 重攻击的恢复帧中蓄力是最安全的时机——他有足够的恢复帧让你完成蓄力。在对手的进攻 gap 中突然插入蓄力 5HP 是最高级的 Marisa 技术。"
matchups:
  - opponent: "luke"
    difficulty: "even"
    summary: "中距离博弈对决——Marisa 的蓄力 armor 可以打断 Luke 的 Flash Knuckle 压力节奏"
    strategies:
      - "Luke 的核心威胁是 Flash Knucker 压力和 Sand Blast 波动。HP Perfect Flash Knucker 是 +4 on block 的强压制工具——不要在他有 charge 时乱按按钮，用蓄力 5HP 的 armor 吃掉他的 follow-up。Luke 的 2MP (5f) 比你的 2MP (7f) 快 2f，近距离交换不占优。在中距离用 5HP 蓄力和 Gladius MP 试探。Luke 的 5HK 距离远但 -6 on block，确认后用 DR 惩罚。"
      - "Luke 想维持 Flash Knuckle 压力循环，你的蓄力 Gladius 是打断他节奏的利器。在 Luke 用 LK Flash Knicker (-3 on block) 后的 gap 中蓄力 Gladius——如果他持续进攻你的 armor 会吃掉他的下一击然后三段命中。如果他习惯 block 等你的蓄力，快速放 Gladius LP 不蓄力。用 2MP 确认后 DR → 5HP → Gladius HP 作为确认连段路线。Luke 的 OD Flash Knuckle 有 armor，不要用单发蓄力挑战——用 DI 打断。"
      - "DI 在 Luke 出 HP Sand Blast 或 Perfect Flash Knuckle 时使用。DR 用于确认 2MP 命中后延伸连段。Luke 的 CA (Pale Rider, 10f) 比你的 Goddess of War (9f) 稍慢。SA2 Meteora (armored) 是你最好的逆转——armor 可以穿过他的 Flash Knuckle 压力。注意 SA2 不是完全无敌，不要在 Luke 有 CA 时 predictable 出 SA2。对局节奏：蓄力 armor 读取 → 高伤害确认 → 角落 Scutum 混合。"
    keyMoves: ["5HP (charged)", "Gladius HP (charged)", "SA2 Meteora"]
  - opponent: "ryu"
    difficulty: "even"
    summary: "Ryu 的全面性和 Denjin 系统需要 Marisa 精准的蓄力时机来应对"
    strategies:
      - "Ryu 的核心威胁是 Denjin Charge 后的强化 Hadoken（有装甲）和 Hashogeki。Denjin Hadoken 有装甲——不要用普通蓄力挑战，用 DI 打掉。Ryu 没有 Denjin 时 HP Hashogeki 是 -4 on block，可以用 2MP 确认惩罚。用 5HP 蓄力和 2MP 在中距离和他交换——Ryu 的 5HK 和 sweep 是主要 poke 但都负帧，确认命中后 DR 延伸。Ryu 的 Hadoken 是单发波动，Perfect Parry 吸掉节省 Drive Gauge。"
      - "Ryu 的 Shoryuken LP 是 6f startup 的 invincible DP，你的蓄力 Gladius 在他有 meter 时需要谨慎——armor 只能扛一击，DP 的后续段数可能打掉你的 armor 后仍然命中。用快速 Gladius LP 不蓄力来试探，等 Ryu 习惯了防御蓄力后再突然切 Dimachaerus 指令投。Ryu 的 2MP 是 5f 比你快 2f，近距离注意不要被他 frame trap。anti-air 他的 jump 用 2HP → Gladius MP 确认连段。"
      - "DI 在 Ryu 出 heavy Hadoken、sweep 或 Denjin Hadoken 时使用。DR 用于确认 2MP 后延伸连段。Ryu 的 CA (Shin Shoryuken, 9f) 和你的 Goddess of War 速度一样，不要在他有 CA 时 whiff 大招。SA2 Meteora (armored) 可以穿过他的波动作为 punish。CA 在 Ryu whiff Shoryuken 或 heavy attack 时使用最佳。对局节奏：波动战用 Perfect Parry → 蓄力 armor 等待反击机会 → 确认连段高伤害。"
    keyMoves: ["5HP (charged)", "2MP", "Gladius HP (charged)"]
  - opponent: "chun-li"
    difficulty: "disadvantageous"
    summary: "Chun-Li 的超长距离 poke 和速度让 Marisa 接近非常困难——最考验耐心的对局"
    strategies:
      - "Chun-Li 是 Marisa 最难受的对局之一。她的 5MP、2MP、5HP 判定距离极长，远中距离完全是她的领地。更麻烦的是她的 Serenity Stream 姿态会蹲低避开你的 5HP 和中距离普通技。不要盲目出招——等她姿态结束或出招后的恢复帧再进攻。她的 2HP 是 -12 on block 可以用 DR → 2MP → Gladius 惩罚，但距离远时够不到。Perfect Parry 是你最好的中距离工具。"
      - "接近方式：1) Perfect Parry 吸她的波动和长 poke 后 DR 突进。2) OD Quadriga (super armor) 硬冲穿过她的长距离攻击。3) 找她 whiff 重攻击的恢复帧 DR 惩罚。一旦进入近距离（Scutum 范围），Chun-Li 的长距离优势消失。用 Scutum 的中段/下段/投技三层混合持续压制。将 Chun-Li 逼到角落是最理想的情况——角落的 Scutum 混合让她的速度优势无用武之地。"
      - "DI 在 Chun-Li 出 2HP、sweep 或 Serenity Stream heavy attack 时使用。DR 是你主要的接近手段——从 2MP hit confirm 后 DR 进入连段。SA2 Meteora (armored) 是你反制她持续 poke 的工具——armor 穿过她的长距离攻击。CA 保留到关键时刻。Chun-Li 的多段攻击（Hundred Lightning Kicks）会快速消耗 Drive Gauge，注意 Drive 管理。核心心态：极端耐心，每次接近机会都要最大化伤害回报。"
    keyMoves: ["Perfect Parry", "OD Quadriga", "Drive Rush"]
  - opponent: "jamie"
    difficulty: "even"
    summary: "趁 Jamie 喝酒等级低时用蓄力 armor 进攻——不给他 free drink 的空间"
    strategies:
      - "Jamie 的威胁随喝酒等级增长。Level 0-1 时他是最弱的角色之一，趁这个窗口用 DR 和蓄力 Gladius 疯狂进攻。开局立刻 DR 接近或蓄力 Quadriga 突进，不给他喝酒的空间。Jamie 的 Bakushin（酒步）是 -4 on block 可以用 2MP 惩罚。Jamie 的 2LP 是 4f startup 可以 mash，但你的蓄力 Gladius 的 armor 可以吃掉他的轻攻击然后反击——他 mash 越多你 armor 反击伤害越高。"
      - "Jamie Level 3+ 时威胁大增：他的 Baksuishin 有额外的 follow-up mix-up，damage output 也提高。但如果在他 Level 0-1 时你已经建立了伤害优势，他的 growth 不足以逆转。Jamie 没有 meter 时只有 OD The Devil Inside 一个逆转选项（不是完全无敌），可以大胆起身压制。用 Scutum 的中段/下段/投技混合压制他不让他 drink。如果 Jamie 试图在远处 drink，用 DR 或 Quadriga 打断。"
      - "DI 在 Jamie 出 heavy attack 或 attempting drink 时使用。DR 用于快速接近不给他喝酒空间。Jamie 的 CA 有完全无敌不要 predictable 进攻。SA2 Meteora (armored) 可以穿过他的 Bakushin 压力。CA 在 Jamie whiff 重攻击时使用。对局节奏：开局立刻进攻，趁 Jamie Level 0-1 时建立伤害优势，持续 Scutum 压制不给他升级空间。"
    keyMoves: ["Gladius HP (charged)", "Scutum", "Drive Rush"]
  - opponent: "guile"
    difficulty: "disadvantageous"
    summary: "Guile 的 Sonic Boom 控制和 Flash Kick 对空让 Marisa 的接近极其困难——最艰难的对局之一"
    strategies:
      - "Guile 是 Marisa 最不利的对局之一。Sonic Boom + Sonic Blade 的组合让你的接近变得极其困难。不要跳入——Guile 的 Flash Kick 是最可靠的 anti-air 之一。核心方法：Perfect Parry 吸波节省 Drive Gauge，找波动间隙用 OD Quadriga (super armor) 或 DR 突进。Guile 的 charge 速度很快，你需要比他更有耐心。5HP 蓄力在中距离有一定作用但 Guile 的 5HP range 更远——谨慎使用。"
      - "一旦进入近距离（Scutum 范围），Guile 的普通技不如你的混合压制有效。用 Dimachaerus 指令投抓他的 charge 姿势——Guile 蹲着蓄力时正是你投他的好时机。Amphora (6HP) overhead 打他的蹲防 charge。但问题在于进入这个距离本身就很困难。每接近一步都要用 Drive Gauge 作为代价。如果 Guile 用 Sonic Blade（放柱子），DI 可以打断他。Scutum 的三层混合在角落对 Guile 最致命。"
      - "DI 在 Guile 出 Sonic Blade、heavy Sonic Boom 或 Flash Kick 时使用。DR 在读准他的波动时机后突进，不要盲目 DR 因为 Flash Kick 会打你。CA 保留到关键时刻——Guile 防守很强可能需要 CA 来破防。SA2 Meteora (armored) 可以穿过单个 Sonic Boom 但meter 消耗大。OD Quadriga (super armor) 是穿过波动最可靠的方式。核心心态：极端耐心，逐步缩短距离，利用每一次接近机会最大化伤害。"
    keyMoves: ["Perfect Parry", "OD Quadriga", "Drive Rush"]
  - opponent: "kimberly"
    difficulty: "even"
    summary: "Kimberly 的传送混合需要冷静应对——蓄力 armor 是反制她速度的最佳工具"
    strategies:
      - "Kimberly 的核心威胁是传送混合（run stop overhead/low/throw）和幻影 dive kick。用 2HP anti-air 她的空中进攻。她的 teleport 有明显的启动动画，用 2LP (4f) 打断她 teleport 后的恢复帧。不要乱出重攻击——她会 teleport 绕过。Kimberly 的 5HK 是 -6 on block 可以用 2MP → DR → 5HP → Gladius 惩罚。蓄力 Gladius 是反制她 speed 的好工具——她的快速接近碰到你的 armor 会被反击。"
      - "Kimberly 的防御很弱：她没有完全无敌的 DP，只有 OD Bushin Senpukyaku 作为逆转。这意味着你可以大胆在她起身用 Scutum 三层混合压制。Scutum P/K/360P 的中段/下段/投技混合让 Kimberly 无法安心防御。Kimberly 想用 speed 和 teleport 打乱节奏——你需要保持冷静，不要追她的 teleport，等她落地再投她或蓄力 Gladius 等她。如果她习惯 run stop 后 mix，蓄力 5HP 在她 run 的轨迹上等她。"
      - "DI 在 Kimberly 出 heavy run stop 或幻影 dive kick 时使用。DR 用于追击她 teleport 后拉开距离。CA 在她空中进攻时用——她在空中无法变招。距离控制：不要被她压制在角落，如果被推到角落用 SA2 Meteora (armored) 逆转。OD Quadriga 可以穿她的 run stop。对局节奏：冷静应对 teleport → 蓄力 armor 等她接近 → 确认连段高伤害 → 角落 Scutum 混合。"
    keyMoves: ["5HP (charged)", "2HP", "Scutum"]
  - opponent: "juri"
    difficulty: "even"
    summary: "Juri 想充 Fuha stock——用蓄力 armor 打断她的充能节奏，不让她 free charge"
    strategies:
      - "Juri 的核心是 Fuha stock 系统。她在 stock 充能时（214K 动作）是最脆弱的，这是你进攻的最佳窗口。用 DR 或蓄力 Quadriga 赶在她完成充电前打断。Juri 有 stock 时她的 623HP (DP) 和 214HP (hashogeki) 都会消耗 stock 变强，注意她的 stock 数量——有 3 stock 的 Juri 是最危险的。Juri 的 5HP 是 -7 on block 用 2MP 确认惩罚。中距离用蓄力 5HP 和 2MP 交换。"
      - "中距离是关键战场：Juri 的 5MP (5f) 和 2MP (6f) 速度都比你快，但你的蓄力 armor 是她没有的工具。在 Juri poke 的间隙中蓄力 Gladius——她 poke 一发打在你 armor 上然后你的三段 Gladius 全中。Juri 的 Ryodansatsu (sweep) 是 -9 on block 可以用 DR → 2MP → Gladius HP 惩罚。如果 Juri 习惯在 block 后 mash，蓄力 5HP 的 armor 吃掉她的 follow-up 后反击。Scutum 混合在她没有 meter 时特别有效。"
      - "DI 在 Juri 充 Fuha stock 时使用可以打断。DR 在她波动后突进。Juri 的 OD DP 是完全无敌的逆转，注意在她有 meter 时不要过于 predictable 地出蓄力招——她的 DP 可以在蓄力启动时打断你。SA2 Meteora (armored) 是你反制她 Fuha rush 的最佳工具。CA 保留到中后期回合。对局节奏：始终主动，用蓄力 armor 压制不让她 free charge，每次 armor 成功都是 1500+ 的伤害回报。"
    keyMoves: ["5HP (charged)", "Gladius HP (charged)", "2MP"]
  - opponent: "ken"
    difficulty: "even"
    summary: "Ken 的 Jinrai Kick 压力循环可以用蓄力 armor 反击——读取他的进攻节奏是关键"
    strategies:
      - "Ken 的核心威胁是 Jinrai Kick 压力和 Run 系统接近。Jinrai LK (-3 on block) 是安全的持续压力——不要乱按按钮，等他出 follow-up 再反应。如果 Ken 用 Run → Dragonlash 接近，用 2HP anti-air 打他。Ken 的 HP Hadoken 是 +3 on hit，波动战时用 Perfect Parry 吸。中距离用蓄力 5HP 和 2MP 交换——Ken 的 5HK 有超远距离但 -6 on block，用 DR 惩罚。"
      - "Ken 想维持 Jinrai 压力循环，你的蓄力 Gladius 是打断他节奏的利器。在 Ken 用 Jinrai LK (-3 on block) 后的 gap 中蓄力 Gladius——如果他持续进攻你的 armor 吃掉他的下一击然后三段命中。如果他习惯 block 等你用快速 Gladius LP 不蓄力。Scutum 混合（中段/下段/投技）在 Ken 习惯防御 Jinrai follow-up 时切换节奏用。Ken 的 OD DP 是完全无敌的逆转——在他有 meter 时不要 predictable 出蓄力。"
      - "DI 在 Ken 出 HP Hadoken 或 Dragonlash Kick 时使用。DR 用于确认 2MP 命中后延伸连段。Ken 的 CA (Shippu Jinraikyaku, 9f) 和你的 Goddess of War 速度一样。SA2 Meteora (armored) 是你最好的逆转——armor 穿过他的 Jinrai 压力。Drive Reversal 在被 Jinrai 压在角落时很关键。对局节奏：读取 Jinrai 循环的 gap → 蓄力 armor 反击 → 高伤害确认 → 角落 Scutum 混合。"
    keyMoves: ["Gladius HP (charged)", "5HP (charged)", "SA2 Meteora"]
  - opponent: "blanka"
    difficulty: "advantageous"
    summary: "Marisa 的蓄力 armor 专治 Blanka 的混乱移动——每次 Blanka Ball 被防都是你高伤害惩罚的机会"
    strategies:
      - "Blanka 的核心威胁是 Blanka Ball (horizontal/vertical) 和 Electricity。Blanka Ball LP/MP 版本 on block 是 -4 到 -6，这是你 Dimachaerus 指令投或蓄力 Gladius 反击的绝佳时机。HP Blanka Ball 是 -10 on block 可以用 DR → 2MP → Impetus HK → j.HP → Gladius HP 重罚。不要在 Electricity 范围内按按钮——它是 +4 on block 持续性的。用中距离 5HP 蓄力和 2MP 控制距离。"
      - "Blanka 的 ground vertical ball 是 -26 on block，重罚确认连段。他的 5HK rolling attack 有长距离但 -6 on block。他的 2LP 是 4f startup 可以 mash 你的 gap。Blanka 的混乱移动看起来吓人但大部分都是负帧——你需要做的是保持冷静，识别他的招式后用正确的 punish 回应。蓄力 Gladius 在 Blanka 乱滚时特别有效——他的 rolling attack 碰到你的 armor 后被三段命中。每次 Blanka Ball 被防 → Dimachaerus 投或 Gladius 惩罚。"
      - "DI 在 Blanka 出 Blanka Ball 或 vertical ball 时使用。OD Quadriga (super armor) 可以穿 Blanka Ball。DR 用于在 Blanka Ball 被防后追击。Blanka 的 CA 有无敌 startup 不要 predictable 进攻。如果 Blanka 滚动逃跑用 DR 追击。SA2 Meteora (armored) 在 Blanka 乱攻时使用。对局节奏：保持冷静，punish 他的每一次鲁莽移动，用蓄力 armor 建立伤害优势。"
    keyMoves: ["Dimachaerus", "Gladius HP (charged)", "5HP (charged)"]
  - opponent: "dhalsim"
    difficulty: "disadvantageous"
    summary: "Dhalsim 的远距离控制是 Marisa 的噩梦——需要极端耐心和完美的 Drive Rush 时机"
    strategies:
      - "Dhalsim 是 Marisa 最不利的对局之一。他可以在远距离用 Yoga Fire 和长距离 limb (5HP, 5MK, 2MK) 持续骚扰你。你的 5HP 和 2MP 完全够不到他。不要跳——他的 anti-air (Yoga Blast, 5LP) 非常可靠。核心方法：Perfect Parry 吸波节省 Drive Gauge，然后用 DR 或 OD Quadriga (super armor) 突进。每一步接近都要付出代价，但这是唯一的路。蓄力 Quadriga 的 armor 是穿过波动的主要方式。"
      - "一旦进入中近距离（Scutum 范围），Dhalsim 没有好的逆转选项（除了 OD Yoga Blast 和 CA）。用 Scutum 的中段/下段/投技混合持续压制。Dhalsim 的 Yoga Teleport 可以逃跑但 26f startup 可以反应——如果他 teleport 到你身边用 5HP → Gladius HP 打他。关键是接近后绝不放手——将 Dhalsim 逼到角落是最理想的。角落的 Scutum 三层混合让 Dhalsim 无法 teleport 逃跑。"
      - "DI 在 Dhalsim 出 Yoga Fire 或长 limb (5HP, 2MK) 时使用。Perfect Parry 是你最好的中距离工具。DR 是你主要的接近手段但 timing 必须精准。Dhalsim 的 CA 是全程无敌的不要在他有 CA 时 whiff 大招。SA2 Meteora (armored) 可以穿 Yoga Fire 但消耗大。CA 在 Dhalsim teleport 后或出 risky limb 时使用。核心心态：极端耐心，逐步接近，一旦近身绝不放手。"
    keyMoves: ["Perfect Parry", "OD Quadriga", "Drive Rush"]
  - opponent: "e-honda"
    difficulty: "even"
    summary: "重装对决——Marisa 的蓄力 armor 可以穿 Honda 的部分进攻，但要注意 SPD 范围"
    strategies:
      - "Honda 的核心威胁是 Headbutt (buttslam) 和 Hundred Hand Slap (HHS)。HP Headbutt 是 -5 on block 可以用 2MP 或 Dimachaerus 惩罚。HHS 是 -10 on block 可以用 DR → 2MP → Impetus HK → j.HP → Gladius HP 重罚。Honda 的 Sumo Headbutt 有装甲但可以用 DI 打断。anti-air 他的 jump 用 2HP → Gladius MP 确认连段。Honda 的 forward dash 是 18f 可以反应——听到 dash 声音就出蓄力 Gladius。"
      - "Honda 想保持在近距离用 SPD 和 HHS 压制。你的优势在中距离——5HP 蓄力 (armor) 和 2MP 在中距离比 Honda 的工具更灵活。Honda 的 5HP 是 16f startup 很慢用 2MP 在恢复帧打他。双方都有重伤害但 Marisa 的蓄力 armor 让她在交换中更有优势。不要和 Honda 在纯近距离拼——他的 SPD 范围比你大。保持中距离用蓄力 5HP 和 Gladius 压制，确认后 DR 延伸连段。"
      - "DI 在 Honda 出 HHS 或 charge heavy attack 时使用。DR 用于确认 poke 命中后延伸连段。Honda 的 SA1 和 SA3 都是 armored reversal 有 meter 时不要 predictable。CA 在 Honda 出 buttslam landing recovery 时使用。SA2 Meteora (armored) 作为逆转反制他的持续压力。OD Quadriga 可以穿 Headbutt。对局节奏：中距离蓄力 armor 建立优势 → 确认连段高伤害 → 角落 Scutum 混合碾压。"
    keyMoves: ["5HP (charged)", "2MP", "Gladius HP (charged)"]
  - opponent: "dee-jay"
    difficulty: "even"
    summary: "Dee Jay 的 feint 系统和 Jus Cool 混合需要冷静应对——蓄力 armor 惩罚他的姿态"
    strategies:
      - "Dee Jay 的核心威胁是 Air Slasher 波动、Rolling Sobat 突进、和 Jus Cool 姿态混合。HP Air Slasher 两段 +3 on hit，波动战用 Perfect Parry 吸。Rolling Sobat MK (12f, -6 on block) 可以用 2MP 确认惩罚。关键是 Jus Cool 姿态——他出 214K 后有 LK 下段、MK overhead、HK 高段三个派生。蓄力 Gladius 是应对 Jus Cool 的利器——无论他选什么派生，你的 armor 可以吃掉第一击然后反击。"
      - "Dee Jay 的 Jus Cool 姿态恢复帧很长——如果你成功 block 了他的派生，有足够时间 DR 或 Dimachaerus 投他。214K~MK (overhead) +1 on block 但在出招前你可以用 OD Quadriga (armor) 穿过。214K~LK (下段) -3 on block 可以 2MP 惩罚。如果 Dee Jay 习惯频繁使用 Jus Cool，用 DR 在他的姿态启动帧打断他。你的蓄力 5HP 在中距离是对付姿态的最佳工具。"
      - "DI 在 Dee Jay 出 HP Air Slasher 或 Rolling Sobat 时使用。DR 用于确认 2MP 后延伸连段。SA2 Meteora (armored) 是你的逆转工具。OD Quadriga 可以穿 Air Slasher 接近。CA 在 Dee Jay whiff Jus Cool 派生时使用。注意他的 feint 系统（LP Air Slasher 假波动、LK Rolling Sobat 假突进）——不要被假动作诱导出蓄力。对局节奏：冷静应对 Jus Cool 混合 → 蓄力 armor 抓恢复帧 → 高伤害惩罚。"
    keyMoves: ["Gladius HP (charged)", "Perfect Parry", "5HP (charged)"]
  - opponent: "manon"
    difficulty: "even"
    summary: "双方都有重伤害但机制不同——Marisa 的 armor 对 Manon 的 strike/throw 混合"
    strategies:
      - "Manon 的核心威胁是 Renverse command grab 和 Révérence hit grab 的 Medal 升级系统。她的 2MP (6f) 比你的 (7f) 快 1f，但你的蓄力 armor 是她没有的工具。在 Manon 用 2MP poke 的间隙中蓄力 Gladius——她 poke 一发打在 armor 上然后你的三段命中。Manon 的 st.HP~HP (TC2) 是她的 anti-air 和 Medal 提升工具——不要 jump 因为她的 TC2 命中会提升 Medal Level。用 2HP 稳定 anti-air 她的 jump。"
      - "中距离你的蓄力 5HP 是最强工具。Manon 的所有普通技 on block 都是 -1 或更差（除了 5MP +2），她的进攻依赖 Drive Rush 来建立正帧。这意味着在 Manon 没有 Drive 时她几乎没有正帧进攻手段——大胆用蓄力 Gladius 在她的 poke gap 中反击。如果 Manon 习惯 command grab，在你的蓄力启动时她会试图投你——注意蓄力 Gladius 的启动帧和 Dimachaerus 的时机差。用 Scutum 混合反制她的蹲防习惯。"
      - "DI 在 Manon 出 Dégagé HK launcher 或 heavy attack 时使用。DR 用于确认 2MP 后延伸连段。Manon 的 SA2 Danse Étoile 是完全无敌的逆转——在她有 meter 时不要 predictable 出蓄力。CA 在 Manon whiff Renverse 或 Révérence 时使用。SA2 Meteora (armored) 反制她的 strike/throw 混合。对局节奏：蓄力 armor 穿她的 poke → 确认连段高伤害 → 比谁先建立优势（Medal vs 蓄力）。"
    keyMoves: ["5HP (charged)", "Gladius HP (charged)", "Scutum"]
  - opponent: "jp"
    difficulty: "disadvantageous"
    summary: "JP 的区域控制让 Marisa 寸步难行——需要极致的耐心和 Drive 管理"
    strategies:
      - "JP 是 Marisa 非常不利的对局。他的 Torbalan (portal) 区域控制和 Eminence (远距离 anti-air) 让你的接近变得极其困难。不要站在 full screen——逐步用 Perfect Parry 和 5HP 蓄力接近。JP 的 2HP 是很好的 poke 但 -13 on block 可以用 DR 惩罚（如果距离够）。他的 5HP 是 -8 on block 用 2MP 确认惩罚。JP 的 portal 设置需要时间，但你的接近速度不够快来打断。"
      - "接近 JP 的核心方式：1) Perfect Parry 吸他的 Torbalan 和波动节省 Drive Gauge。2) OD Quadriga (super armor) 穿过单个 Torbalan。3) DR 在他的 portal gap 中突进。一旦进入中距离，你的 Scutum 混合比 JP 的近距离防守更有效。用 Dimachaerus 抓他设置 portal 时的恢复帧。JP 的 2LP 是 4f 可以 mash 但你的蓄力 5HP 的 armor 吃掉。将 JP 逼到角落消除他的 portal 优势——角落的 Scutum 混合是他最怕的。"
      - "DI 在 JP 出 Torbalan 或 heavy attack 时使用。DR 是你主要的接近手段但 timing 必须精准。JP 的 CA 是全程无敌的不要在他有 CA 时 whiff 大招。SA2 Meteora (armored) 可以作为逆转在 JP 压制你时使用。CA 保留到关键时刻。核心心态：比对阵 Guile 还要有耐心，JP 的控制更全面但你每次接近机会都要最大化伤害——用 Scutum 三层混合在角落终结他。"
    keyMoves: ["Perfect Parry", "OD Quadriga", "Drive Rush"]
  - opponent: "zangief"
    difficulty: "advantageous"
    summary: "Marisa 的蓄力 armor 优于 Zangief 的接近方式——保持 SPD 范围外用高伤害碾压"
    strategies:
      - "Zangief 的核心威胁是 SPD (command grab) 和 armored attacks。永远不要站在 SPD 范围内不动——如果你在近距离，必须在按按钮或跳。HP SPD range 很大。关键区别：Zangief 没有好的中距离工具而你有 5HP 蓄力 (armor)。在 5HP 距离你可以持续骚扰而 Zangief 够不到你。Zangief 的 forward dash 是 18f 可以反应，听到 dash 声音就出蓄力 Gladius——他 dash 过来碰到你的 armor 被三段命中。"
      - "用 5HP 蓄力 (armor, plus on block)、2MP (+5 on hit) 在中距离持续骚扰。每次确认命中用 Gladius HP 收尾。Zangief 的 5HP 是 -6 on block 可以用 2MP 惩罚。他的 lariat 是 anti-air 但可以被低攻击 (2MK, 2LK) 打。如果他尝试接近用 5HP 蓄力打退他。如果 Zangief 习惯蹲等 SPD，用 Amphora (6HP) overhead 打他或 Scutum → P (中段) 打他。Dimachaerus 在他的 SPD range 外你投他他投不到你的距离使用。"
      - "DI 在 Zangief 出 lariat 或 heavy normal 时使用——lariat 不能挡 DI。DR 用于确认 poke 命中后延伸连段。Zangief 的 SA1 和 SA3 都是 armored reversal，有 meter 时不要 predictable。CA 在 Zangief jump-in 或 whiff SPD 时使用。SA2 Meteora (armored) 作为逆转。OD Quadriga 可以穿他的 lariat。始终保持中距离，用蓄力 5HP 和 Gladius 压制不让他进入 SPD 范围。"
    keyMoves: ["5HP (charged)", "Gladius HP (charged)", "2MP"]
  - opponent: "lily"
    difficulty: "advantageous"
    summary: "趁 Lily 充能 Wind Stock 时用蓄力 armor 进攻——Scutum 混合让她无法 free charge"
    strategies:
      - "Lily 的核心是 Wind Stock 系统。她需要 charge (214P) 来获得 stock，充能时是最脆弱的。趁这个窗口用 DR 或蓄力 Quadriga 进攻。有 stock 时她的 Tomahawk Buster (DP) 和 Condor Dive 变得更强。Lily 的 2LP 是 4f 可以在近距离和你交换但她的 st.MP 是 9f startup 比你的 2MP 慢。用 2MP 在中距离确认后 DR 延伸。蓄力 5HP 在她 Condor Spire 接近时 armor 吃掉然后反击。"
      - "中距离你的工具更优：5HP 蓄力 (armor) 和 2MP 的组合比 Lily 的普通技好。她的 Condor Spire (approaching move) 是 -6 on block 可以用 2MP 确认惩罚。anti-air 她的 Condor Dive 用 2HP → Gladius MP 确认连段。Scutum 三层混合压制在她没有 stock 时特别有效——Lily 没有 stock 时的伤害输出很低。用 Dimachaerus 指令投在她 block 后投她。持续 Scutum 混合不给她 free charge 的机会。"
      - "DI 在 Lily charge Wind Stock 或出 Condor Spire 时使用。DR 用于快速接近和打断她的充能。Lily 的 SA2 是 armored reversal。CA 在她空中 Condor Dive 时使用。SA2 Meteora (armored) 作为逆转。OD Quadriga 可以穿她的 Condor Spire。对局节奏：主动进攻，用蓄力 armor 和 Scutum 混合不给她 free charge 的机会。一旦你建立伤害优势而 Lily 没有 stock，你的高伤害碾压她的低输出。"
    keyMoves: ["5HP (charged)", "Scutum", "Dimachaerus"]
  - opponent: "cammy"
    difficulty: "even"
    summary: "高速对决——anti-air Cannon Strike 和用蓄力 armor 反击 Spiral Arrow 是关键"
    strategies:
      - "Cammy 的核心威胁是 Cannon Strike (dive kick) 和 Spiral Arrow (slide)。Cannon Strike 的角度变化大，需要仔细观察 anti-air 时机——用 2HP → Gladius MP 确认连段。Spiral Arrow 是 -6 到 -9 on block 取决于版本，用 2MP 确认后 DR → 5HP → Gladius HP 惩罚。Cammy 的 5MP 是 5f startup 很快要小心。蓄力 Gladius 在 Cammy close range poke 的间隙中特别有效——她的快速攻击碰到你的 armor 被反击。"
      - "Cammy 的速度和你的相比差很多——她是游戏中最快的角色之一，而你是最慢的。但你的蓄力 armor 是她没有的工具。用蓄力 5HP 在她接近的路径上等她，armor 吃掉她的 poke 后反击。Scutum 三层混合在 Cammy 落地时使用——她的 Hooligan Combination 是空中混合但可以 2HP anti-air 打掉。Cammy 想用 speed 和 dive kick 打乱你的节奏——你需要保持冷静，每次 anti-air 都用 2HP → Gladius 确认。"
      - "DI 在 Cammy 出 Spiral Arrow 或 heavy Cannon Strike 时使用。DR 用于确认 2MP 命中后延伸连段。Cammy 的 OD Cannon Spike 是她的逆转但不是完全无敌。CA 在她 Cannon Strike 跳入时使用。SA2 Meteora (armored) 是你最好的逆转。OD Quadriga 可以穿 Spiral Arrow。对局节奏：冷静 anti-air → 蓄力 armor 反击 → 确认连段高伤害 → 角落 Scutum 混合。"
    keyMoves: ["2HP", "5HP (charged)", "Gladius HP (charged)"]
  - opponent: "rashid"
    difficulty: "even"
    summary: "Rashid 的空中机动需要冷静应对——蓄力 armor 等他落地再反击"
    strategies:
      - "Rashid 的核心威胁是空中机动性（Eagle Spike, Ysaar glide）和 mix-up。Eagle Spike HP 版本是 -7 on block 可以用 2MP 惩罚。他的 Ysaar (whirlwind) 给他额外的 jump 和 glide option——不要追他空中，等他落地。Rashid 的 5MP 是 6f startup 很快，中距离要小心。anti-air 用 2HP → Gladius MP 确认连段。Rashid 的 Arabian Sky High (overhead) 是 22f startup 比较慢可以反应。蓄力 Gladius 在他 air approach 的落地帧中很有效。"
      - "保持中距离用 5HP 蓄力和 2MP 控制节奏。Rashid 想用 speed 控制比赛节奏，你需要用蓄力 armor 让他慢下来。一旦 Rashid 落地进入你的 Scutum 范围，用三层混合压制他。如果 Rashid 习惯用 Ysaar glide 接近，用 OD Quadriga (armor) 打断。2MP → DR → 5HP → Gladius HP 确认路线是标准连段入口。DR 接近后 Scutum 混合在 Rashid 落地时特别有效——他在空中无法防御你落地后的 Scutum 三择。"
      - "DI 在 Rashid 出 Eagle Spike 或 heavy whirlwind move 时使用。DR 用于追击他 glide 后的着陆。Rashid 的 SA2 是快速逆转。CA 在他 Eagle Spike whiff 或 glide landing 时使用。OD Quadriga 可以穿 Ysaar 接近。SA2 Meteora (armored) 作为逆转。核心心态：不要被他的 speed 搞乱节奏，用蓄力 armor → 确认连段 → Scutum 混合建立自己的节奏。"
    keyMoves: ["2HP", "5HP (charged)", "Scutum"]
  - opponent: "a-k-i"
    summary: "趁 A.K.I. 设置毒之前 rush down——蓄力 armor 穿过她的毒系攻击"
    difficulty: "advantageous"
    strategies:
      - "A.K.I. 的核心威胁是毒系统（toxic brew, 毒蛇 trap）。她需要时间设置毒 cloud 和 ground trap，趁她 setup 时用 DR 或蓄力 Quadriga 快速接近。被毒后不要慌——毒伤害是可以承受的，继续进攻比逃跑更有效。你的蓄力 armor 可以穿过她的 toxic projectile 和 ground trap 设置动画。用 5HP 蓄力在中距离控制她的移动。每次确认连段用 Gladius HP 收尾。"
      - "中近距离你的 Scutum 三层混合比她的工具更强。2MP (+5 on hit) 作为确认工具。A.K.I. 的 toxic command grab 需要近距离，保持在 5HP 蓄力距离最有利。她的 2HP 是 -10 on block 可以用 DR 惩罚。她的 Nightshade Pulse (projectile) startup 很慢 (20f+) 可以 DI 打断。Dimachaerus 指令投在她习惯蹲防设置毒 trap 时特别有效——她蹲着设置 trap 正是你投她的好时机。Amphora (6HP) overhead 也因为同样的原因更有价值。"
      - "DI 在 A.K.I. 出 Nightshade Pulse 或 setup toxic trap 时使用。DR 用于快速接近不给她 setup 时间。A.K.I. 的 OD Heel Strike 是她最好的逆转但 range 有限。CA 在她 whiff toxic trap 或 jump-in 时使用。SA2 Meteora (armored) 可以穿过她的毒 projectile。全程进攻是最好的策略——防守就是给她 setup 的机会。即使被毒了也不要退，继续 Scutum 混合压制。"
    keyMoves: ["Gladius HP (charged)", "Scutum", "Drive Rush"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed 的 Psycho Flicker 让中距离困难——用 Perfect Parry 和蓄力 armor 找突破口"
    strategies:
      - "Ed 的核心威胁是 Psycho Flicker (长距离快速 poke) 和 Kill Rush (approaching armor move)。Psycho Flicker 的 range 很长让中距离很危险——用 5HP 蓄力从更远的距离 poke，不要走进 Flicker range。Kill Rush 是 armored 但可以用 DI 打断。Ed 的 5HP 是 -6 on block 可以用 2MP 惩罚。Perfect Parry 吸他的 psycho ball 是你建立 Drive 优势的方式。蓄力 Gladius 在 Ed 的 Flicker gap 中使用——armor 吃掉他的轻攻击后反击。"
      - "接近方式：用 Perfect Parry 吸他的 psycho ball，然后 DR 或 OD Quadriga (armor) 突进。一旦进入 Scutum 范围，Ed 的 defense 不强。用 Scutum 的中段/下段/投技三层混合压制。Ed 的 Snatcher (command grab) range 短，保持在 5HP 蓄力距离可以避免被他投。如果他习惯 mash Flicker，蓄力 5HP 的 armor 吃掉他的 Flicker 然后反击。DR → 2MP → Gladius HP 确认路线是标准连段入口。"
      - "DI 在 Ed 出 Kill Rush 或 Psycho Ball heavy 版时使用。DR 用于突破他的 flicker wall。Ed 的 SA2 是快速 armored reversal。CA 在他 Psycho Rush whiff 或 risky approach 时使用。SA2 Meteora (armored) 作为逆转。OD Quadriga 可以穿他的 flicker。对局节奏：Perfect Parry 建立 Drive 优势 → 蓄力 armor 突破接近 → Scutum 混合压制。"
    keyMoves: ["Perfect Parry", "5HP (charged)", "OD Quadriga"]
  - opponent: "akuma"
    difficulty: "even"
    summary: "Akuma 伤害恐怖但血量只有 9000——一次蓄力 Gladius 确认就能重创他 1/4 血量"
    strategies:
      - "Akuma 的核心威胁是巨大伤害输出和 demon flip 混合。他的 health 只有 9000（比标准少 1000），所以你的一个蓄力 Gladius HP 全中（1800+）就能扣掉他 1/5 血量。Demon Flip 的 punch/kick/throw 混合需要读取——用 2HP anti-air 打他的 flip 并确认 Gladius MP。Akuma 的 air Hadoken 让他的空中进攻更有层次但 anti-air 时机和普通 jump 类似。蓄力 5HP 在 Akuma 的 poke 间隙中特别有效——他的低血量意味着你每次 armor 成功的回报比平常更高。"
      - "中距离你的 5HP 蓄力 (+5 on hit charged) 和 2MP (+5 on hit) 可以和 Akuma 交换。他的 5MP 是 5f startup 很快要小心。Akuma 的 Gohadoken startup 和标准波动差不多，用 Perfect Parry 吸。他的 5HK 是 -6 on block 可以用 2MP 确认惩罚。关键是不让他 free 地设置 air fireball——每次他 jump 都用 2HP → Gladius 确认连段高伤害。Akuma 的低血量让 Marisa 的每次确认都特别有价值。Scutum 混合在 Akuma 习惯蹲防时特别致命。"
      - "DI 在 Akuma 出 heavy Gohadoken 或 sweep 时使用。DR 用于确认 2MP 后延伸连段——对 Akuma 每个 hit 都很珍贵因为他的低血量。Akuma 的 SA1 (Raging Demon) 是 command grab 有 armor break，不要在他有 meter 时 predictable 出蓄力。CA 在他 demon flip 或 whiff heavy attack 时使用——对 9000 HP 的角色 4000 伤害的 CA 是毁灭性的。SA2 Meteora (armored) 是反制他持续进攻的最佳工具。对 Akuma 你的蓄力成功率和伤害确认效率直接决定胜率。"
    keyMoves: ["5HP (charged)", "Gladius HP (charged)", "2HP"]
  - opponent: "m-bison"
    difficulty: "even"
    summary: "Bison 的 Psycho Power 压力循环需要识别 gap——蓄力 armor 打断他的节奏"
    strategies:
      - "M. Bison 的核心威胁是 Psycho Crusher 接近和 Scissors Loop 压力。HP Psycho Crusher 是 -8 on block 可以用 DR → 2MP → Impetus HK → j.HP → Gladius HP 惩罚。Scissors (LK version) 是 +1 on block 让他保持压力——不要乱按按钮，等他 scissors heavy 版本（-6 on block）再 punish。Bison 的 5HP 是 -5 on block 用 2MP 确认惩罚。中距离用 5HP 蓄力和他交换——蓄力 armor 吃掉他的 Scissors 后反击。"
      - "用 5HP 蓄力在中距离控制，Bison 需要 charge 时间来出 Psycho Crusher 和 Scissors。持续的蓄力压力不让他 free charge。Bison 想维持 Scissors Loop 压力循环——在 LK Scissors (+1 on block) 后他的常见选项是：继续按按钮、throw、或延迟。如果他持续进攻用蓄力 Gladius armor 吃掉他的 follow-up。如果他 delays 用 Dimachaerus 投他。2MP → DR → 5HP → Gladius HP 确认连段。Bison 的 2LP 是 4f 可以 mash 但你的蓄力 armor 吃掉。"
      - "DI 在 Bison 出 Psycho Crusher 或 heavy Scissors 时使用。DR 用于在 5HP 命中后快速接近延伸连段。Bison 的 SA2 是 armored reversal，有 meter 时不要 predictable。CA 在他 whiff Psycho Crusher 或 Scissors 时使用。SA2 Meteora (armored) 作为逆转反制他的持续压力。OD Quadriga 可以穿他的波动和 Scissors。对局节奏：识别他的 Scissors Loop gap → 蓄力 armor 反击 → 高伤害确认 → 角落 Scutum 混合。"
    keyMoves: ["5HP (charged)", "Gladius HP (charged)", "Scutum"]
  - opponent: "terry"
    difficulty: "even"
    summary: "Terry 有扎实的 neutral 但 Marisa 的蓄力 armor 是打破平衡的关键"
    strategies:
      - "Terry 的核心威胁是 Power Wave (波动) 和 Burn Knuckle (approaching move)。Power Wave 的 recovery 比标准波动快但伤害低。Burn Knuckle HP 版本是 -9 on block 可以用 2MP 或 DR → 2MP → Gladius HP 惩罚。他的 Rising Tackle 是 anti-air/DP 但 OD 版本才是完全无敌。Terry 的 Crack Shoot (overhead) 是 20f startup 可以反应。中距离用 5HP 蓄力和 2MP 交换。蓄力 Gladius 在 Terry 的 Burn Knuckle gap 中使用。"
      - "中距离你的 5HP 蓄力 (armor) 和 2MP 比 Terry 的普通技更有威胁。用 5HP 蓄力和他 poke，找机会 DR 接近。一旦进入 Scutum 范围，你的三层混合让 Terry 的防守有压力。Terry 的 5MP 是 8f 和你的 2MP (7f) 速度差不多但 range 更短。用 2MP → DR → 5HP → Gladius HP 确认路线。如果 Terry 习惯蹲防 Power Wave 后 block 等，用 Scutum → P (中段) 或 Dimachaerus 投他。"
      - "DI 在 Terry 出 Burn Knuckle 或 heavy Power Wave 时使用。DR 用于确认 2MP 后延伸连段。Terry 的 SA1 (Buster Wolf) 是 armored reversal。CA 在他 whiff Burn Knuckle 或 jump-in 时使用。SA2 Meteora (armored) 是你的逆转工具。OD Quadriga 可以穿 Power Wave。对局节奏：footies 交换 → 蓄力 armor 突破 → Scutum 混合压制 → 高伤害确认。"
    keyMoves: ["5HP (charged)", "Scutum", "Gladius HP (charged)"]
  - opponent: "mai"
    difficulty: "disadvantageous"
    summary: "Mai 的扇子投射和空中机动让接近变得复杂——需要比平时更极端的耐心"
    strategies:
      - "Mai 的核心威胁是 fan projectile 和 air mobility。她的 fan 波动可以多角度发射让接近变得复杂。她的 air fan 让她可以在空中持续骚扰，anti-air 很困难但 2HP 仍然是你最好的选择。不要追她空中——等她落地再进攻。她的 5MP 和 2MP range 都很长让中距离也不好打。Mai 的 fan 比 standard 波动更灵活，Perfect Parry 时机需要更精准。蓄力 Quadriga 是穿过 fan 的主要方式。"
      - "接近方式：用 Perfect Parry 吸 fan，然后 DR 或 OD Quadriga (super armor) 突进。5HP 蓄力在 fan gap 中 poke。一旦接近，用 Scutum 的中段/下段/投技三层混合压制——Mai 的普通技在近距离 frame data 不如你的好。将 Mai 逼到角落消除她的空中优势。如果 Mai 习惯 air fan 后 landing，用 2HP → Gladius MP 打她的 landing 确认连段。Scutum 混合在 Mai 落地后特别有效。"
      - "DI 在 Mai 出 fan projectile 或 air approach 时使用。DR 是你主要的接近手段——timing 必须精准。Mai 的 SA2 是快速 reversal。CA 在她空中 fan whiff 或 landing 时使用。SA2 Meteora (armored) 可以穿 fan。需要比平时更耐心，不要急于冲进去——每次接近都要有明确的 hit confirm 或 Scutum 混合计划。Drive Gauge 管理在这个对局中尤其重要。"
    keyMoves: ["Perfect Parry", "OD Quadriga", "Drive Rush"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena 的 capoeira range 和 healing 威胁——绝不能给她 free heal 的机会"
    strategies:
      - "Elena 的核心威胁是 deceptive range 的 capoeira kicks 和 healing ability。她的 5MK 和 2MK 的 range 比看起来长，需要保持适当距离。她的 healing 需要时间——绝对不能给她 free heal 的机会，保持压力持续进攻。Elena 的 Lynx Tail 是 multi-hit 可以用 DI 吸掉。用 5HP 蓄力在中距离控制她的移动。每次确认连段用 Gladius HP 收尾。蓄力 armor 在她 capoeira poke 的间隙中使用。"
      - "用 5HP 蓄力 (+5 on hit charged) 在中距离和她交换。Elena 的 5HP 是 -5 on block 可以用 2MP 惩罚。她的 Mallet Smash (overhead) 是 22f startup 可以反应。保持在 5HP 蓄力距离最有利——太近会被她的 capoeira mix-up 打，太远她可以 heal 或 poke。一旦接近用 Scutum 三层混合压制。Dimachaerus 指令投在她习惯蹲防时使用。Amphora (6HP) overhead 在她习惯蹲等你的投时使用。如果她试图 heal 用 DR 打断。"
      - "DI 在 Elena 出 Lynx Tail 或 heavy capoeira move 时使用。DR 用于确认 2MP 后延伸连段和打断她的 heal。Elena 的 SA2 是 invincible reversal。CA 在她 whiff capoeira kick 或 heal attempt 时使用。SA2 Meteora (armored) 作为逆转。OD Quadriga (armor) 可以穿她的 capoeira 多段攻击。对局节奏：持续 Scutum 压力不给她 heal 的空间，每次蓄力成功的高伤害确认碾压她的低伤害输出。"
    keyMoves: ["5HP (charged)", "Scutum", "Drive Rush"]
  - opponent: "volcano-handshake"
    difficulty: "even"
    summary: "Limited matchup data — 使用标准 Marisa gameplan：蓄力 armor 建立优势 → Scutum 混合"
    strategies:
      - "Volcano Handshake 作为新角色数据有限。根据已有信息，他的核心工具是 Burning Fist 系列攻击，具有高伤害但启动偏慢。用蓄力 5HP 和 2MP 在他的 heavy attack gap 中插入。anti-air 用 2HP → Gladius MP 确认连段。中距离用 5HP 蓄力和 2MP 控制。如果他接近用 Scutum 三层混合压制。"
      - "保持标准 Marisa gameplan：中距离用 5HP 蓄力、2MP poke。确认命中后 DR 延伸连段用 Gladius HP 收尾。在他 whiff heavy attack 时用 2MP 确认惩罚。如果他有 armored move 用 DI 打断。接近后用 Scutum 的中段/下段/投技三层混合压制。Dimachaerus 指令投在他习惯蹲防时使用。"
      - "DI 在他出 heavy attack 或 charge move 时使用。DR 用于确认和延伸连段。SA2 Meteora (armored) 是你的逆转。CA 在关键时刻使用。根据实际对局经验调整策略——核心不变：5HP 蓄力/2MP footsies → DR 接近 → Scutum 混合 → 蓄力 Gladius 高伤害确认。"
    keyMoves: ["5HP (charged)", "2MP", "Scutum"]
---

## Additional Notes

Marisa 是 Street Fighter 6 中的全新角色，以古罗马角斗士为设计灵感。她是一名身材高大、力量惊人的意大利珠宝设计师，将角斗士的战斗方式与现代风格完美融合，创造出独特的「Heavy Striker」战斗风格。

### Core Combo Routes

| Situation | Combo | Damage |
|---|---|---|
| Midscreen BnB | 2MP → 236HK (Impetus HK) → j.HP → 236HP (Gladius HP) | ~2500+ |
| Corner BnB | 5HP(charged) → Wall Splat → 236HP (Gladius HP) | ~3000+ |
| Drive Rush Route | 2MP → DR → 5HP(charged) → 236HP (Gladius HP) | ~2800+ |
| Light Confirm | 2LP → 2LP → 236LP (Gladius LP) | ~1400 |
| Anti-air Confirm | 2HP → 236MP (Gladius MP) | ~1800+ |
| Armor Read Punish | 5HP(charged, armor absorb) → 236HP (Gladius HP) | ~2200+ |
| Scutum Mix | 214K → P/K/360P (three-way mix) | ~1200-1400 |
| Punish Counter | 5HP → DR → 2MP → 236HK → j.HP → SA2/CA | ~3500+ |
| Overhead Route | 6HP (Amphora) → 236HP (Gladius HP) | ~2000+ |

### Key Frame Data Reference

| Move | Startup | On Hit | On Block | Notes |
|---|---|---|---|---|
| 2LP | 4f | +4 | -1 | Fastest normal, not cancellable |
| 5LP | 5f | +4 | 0 | Quick jab |
| 2MP | 7f | +5 | -2 | Main confirm button, cancellable |
| 5MP | 9f | +3 | -3 | Mid-range |
| 5HP | 14f | KD | -6 | Heavy normal, chargable |
| 5HP (charged) | 14f+ | Wall Splat | +2~+4 | Armor, plus on block |
| 2HP | 10f | +3 | -4 | Anti-air, cancellable |
| 2LK | 5f | +3 | -2 | Low |
| 5MK | 11f | +5 | -3 | Mid poke |
| 2MK | 8f | KD | -6 | Low, cancellable |
| 5HK | 13f | KD | -8 | Long range |
| 2HK | 13f | KD | -14 | Sweep, risky |
| 6HP (Amphora) | 20f | +2 | -6 | Overhead, two hits |
| Gladius LP | 16f | KD | -4 | Quick single hit |
| Gladius LP (charged) | 16f+ | KD+ | +2 | Armor, plus |
| Gladius MP | 18f | KD | -6 | Two hits |
| Gladius HP | 22f | Wall Splat | -8 | Three hits |
| Gladius HP (charged) | 22f+ | Wall Splat | +4 | Armor, plus |
| Quadriga LP | 16f | KD | -4 | Advancing |
| Quadriga HP | 22f | KD | -8 | Multi-hit advancing |
| Quadriga HP (charged) | 22f+ | KD+ | +3 | Armor, plus |
| Impetus LK | 14f | +2 | -2 | Low kick |
| Impetus HK | 20f | Launch | -8 | Launcher, juggle follow-up |
| Scutum → P | ~18f | KD | -4 | Mid follow-up |
| Scutum → K | ~16f | KD | -4 | Low follow-up |
| Scutum → Grab | ~8f | KD | - | Command grab from stance |
| Dimachaerus LP | 7f | KD | - | Command grab, short range |
| Dimachaerus HP | 8f | KD | - | Command grab, more damage |
| SA1 (236236+P) | 8f | KD | -20 | Level 1 Super |
| SA2 (214214+P) | 12f | KD | -30 | Level 2, armored |
| CA (214214+K) | 9f | KD | -28 | Critical Art, invincible |

### Health and Movement

- **Health:** 10,000 (standard)
- **Forward Walk Speed:** 3.20 (slow)
- **Back Walk Speed:** 2.80 (slow)
- **Forward Dash:** 18 frames
- **Back Dash:** 22 frames
- **Prejump Frames:** 4

### Charge System Guide

Marisa 的核心独特机制是蓄力装甲（Charge Armor），应用于 Gladius (236P)、Quadriga (214P) 和 5HP：
- **蓄力方式：** 按住攻击按钮不放，Marisa 会进入蓄力姿态，身上出现金色闪光
- **蓄力效果：** 蓄力期间获得 1-hit armor（吸收一次打击），释放后招式伤害增加、变为正帧 on block
- **蓄力版本对比：**
  - Gladius LP 蓄力：+2 on block，单段 armor
  - Gladius HP 蓄力：+4 on block，单段 armor，三段 Wall Splat
  - Quadriga HP 蓄力：+3 on block，单段 armor，多段突进
  - 5HP 蓄力：+2~+4 on block，单段 armor，Wall Splat

**核心策略：** 蓄力的关键不是每次都蓄满，而是读取对手的进攻节奏。在对手 predictable 出招时蓄力等他打你的 armor，然后反击造成巨大伤害。混合使用蓄力和不蓄力版本让对手无法判断你的节奏。注意 DI 是 armor 的克星——不要在对手有 DI 的风险下蓄力。OD 版本有 super armor（可扛多段攻击），是突破对手 multi-hit 攻击的最佳选择。

### Season Updates

- **Year 1 Patch:** 5HP 蓄力的 armor 窗口微调，蓄力时间略缩短。Gladius HP charged 的正帧从 +3 调整为 +4。
- **Year 2 Patch:** Scutum 姿态后的派生帧数微调，P 跟进和 K 跟进的确认窗口更稳定。Impetus HK launcher 后的 juggle window 微调。
- **Year 3:** Marisa 整体保持 B tier 定位，蓄力装甲和高单发伤害仍然是独特优势。在角落压制力方面属于顶级，但移动速度慢和对波动角色的弱点限制了她的一致性。
