---
name: "Dhalsim"
subtitle: "The Yoga Master"
overview: "Dhalsim 是来自印度的瑜伽大师，Street Fighter 系列经典的远程控制型角色。他利用超长的四肢和瑜伽火焰在远距离压制对手，通过 Yoga Fire、Yoga Flame 和多样的空中 drill 控制空间。Yoga Float 和 Yoga Teleport 提供独特的移动选项，让对手难以预测他的位置。HP 只有 9500（低于标准），一旦被近身就非常脆弱，但在远距离他的 poke 和 projectile 无与伦比。SA1 Yoga Ark 用于 combo 延伸和逆转，SA2 Yoga Inferno 提供强大的火力压制，SA3 Yoga Sunburst 是终极 comeback tool。掌握 Dhalsim 需要精确的距离控制和对手角色理解的深度。"
keyMoves:
  - name: "Yoga Fire (LP)"
    input: "236LP (↓↘→+LP)"
    description: "Dhalsim 的基础波动拳。16f startup，600 damage。飞行速度中等，是远距离控制的核心工具。LP 版本速度最快，用于 poke 和干扰对手移动。On hit 造成 +5 优势，可以在远距离确认后接 SA2 或 SA3。在对手的 projectile 战中需要预判 timing 来对波或绕过。OD 版本 (236PP) 速度快且 damage 高 (400+400)，是确认连段的重要工具。"
    startup: 16
    active: 6
    recovery: 29
    damage: 600
  - name: "Yoga Fire (HP)"
    input: "236HP (↓↘→+HP)"
    description: "重版 Yoga Fire，20f startup，800 damage。飞行速度慢但 hitbox 更大，可以 cover 更多的垂直空间。用于远距离封锁对手走位和 okizeme setup。HP Fire 在 tip range 使用时 recovery 安全，但如果被跳过或 DI 则非常危险。在角落配合 Yoga Flame 可以形成 projectile layered pressure。"
    startup: 20
    active: 8
    recovery: 31
    damage: 800
  - name: "Yoga Flame"
    input: "214P (↓↙←+P)"
    description: "近距离火焰攻击，多段 hit。LP 版本 12f startup，MP 版本 14f，HP 版本 16f。HP Yoga Flame 总 damage 约 1200 (400+400+400)。近距离 combo ender 和 anti-air 工具。OD 版本 (214PP) 有更长的 active frames 和更高的 damage，可以作为 reversal 使用（有 invincible frames）。是 Dhalsim 被近身时最重要的 close-range tool。"
    startup: 12
    active: 20
    recovery: 30
    damage: 1200
  - name: "Yoga Blast"
    input: "214K (↓↙←+K)"
    description: "Dhalsim 的专用 anti-air。LK 版本 10f startup，800 damage。斜上方的火焰 blast，专门对付 jump-in 和空中进攻。MK 版本角度更高，HK 版本 range 更远。On hit 造成 knockdown +38，是 Dhalsim 最可靠的 anti-air 选项。OD 版本有 invincible frames 可以作为完全无敌的逆转使用。记住：Yoga Blast 对 ground attack 无效，只在对手空中时使用。"
    startup: 10
    active: 8
    recovery: 34
    damage: 800
  - name: "Yoga Teleport"
    input: "63214P/K (→↓↘←+P/K)"
    description: "瞬间移动到对手位置。P 版本出现在对手前方，K 版本出现在对手后方。20f+ recovery 使其高风险高回报。用于 escape corner pressure、surprise approach 和 dodge projectile。在 burnout 时使用 Yoga Teleport 是 escape 的关键手段。不要 predictable 地使用——对手可以在你的 recovery 帧 punishing。OD 版本 recovery 稍短但仍需谨慎。"
    startup: 1
    active: 0
    recovery: 20
    damage: 0
  - name: "Yoga Float"
    input: "空中 PPP"
    description: "Dhalsim 在空中停留的独特能力。激活后可以在空中水平移动并使用空中 normal 和 special。配合 j.2HK (Drill Kick) 和空中 Yoga Fire 形成独特的空中压制。Float 的速度在最新 patch 中增加，允许更精细的 spacing 调整。Float → Drill Kick 是 Dhalsim 最有效的 approach 角度之一。Float 时间有限，需要注意落地 timing。"
    startup: 1
    active: 0
    recovery: 0
    damage: 0
  - name: "Drill Kick (j.2HK)"
    input: "空中 2HK (空中 ↓+HK)"
    description: "Dhalsim 的标志性空中钻踢。从空中斜下方攻击，是 Dhalsim 最主要的 approach 工具。HP Drill damage 900，MK Drill damage 700。角度可以通过输入时机微调——早出角度浅（远距离），晚出角度陡（近距离）。On hit 给予 knockdown +20~+30。配合 Yoga Float 使用可以延迟 timing 让对手难以 anti-air。被 block 后是 -8~-12，需要配合 Float timing 控制 distance 来保持安全。"
    startup: 7
    active: 10
    recovery: 8
    damage: 900
  - name: "5HP (Long Range Punch)"
    input: "HP"
    description: "Dhalsim 最标志性的远距离 poke。11f startup，800 damage，range 极长。是 Dhalsim 远距离 spacing 的核心——在 max range 使用几乎无法被 punish。On hit +3，on block -4~-7（取决于 distance）。5HP → Yoga Flame 是远距离确认路线。Whiff 时 recovery 长 (32f) 可以被 DI 或 whiff punish，所以不要 predictable 地出。Counter Hit 5HP 可以 combo 进 SA1。"
    startup: 11
    active: 4
    recovery: 32
    damage: 800
  - name: "2MK (Low Slide)"
    input: "2MK (↓+MK)"
    description: "远距离 low attack。10f startup，500 damage。Range 很长是 Dhalsim 地面 low poke 的主力。可以 low profile 部分 mid attack。2MK → LP Yoga Fire 是基础确认路线。On hit +4 可以维持 pressure。是让对手不敢站防的关键 low——配合 5HP 和 5HK 形成 high/low 投射混合。"
    startup: 10
    active: 4
    recovery: 18
    damage: 500
  - name: "5HK (Long Range Kick)"
    input: "HK"
    description: "Dhalsim 最远距离的 ground normal。13f startup，900 damage。Range 比 5HP 更远但 startup 更慢。主要用于 far range whiff punish 和 poke battle。On hit knockdown。On block 非常危险 (-10~-15) 所以只在 max range 使用。5HK 可以 stuff 很多 character 的 approach move。也可以作为 anti-air 使用但 timing 要求高。"
    startup: 13
    active: 5
    recovery: 36
    damage: 900
  - name: "Yoga Ark (SA1)"
    input: "236236K (↓↘→↓↘→+K)"
    description: "Level 1 Super Art。7f startup，2000 damage (2200 as CA)。Strike invincible frames 1-8。多段旋转踢击，可以从 Yoga Flame 或 5HP confirm 进入。是 Dhalsim 的 primary reversal 和 combo extender。Knockdown +15。用于 anti-air、reversal 和 combo 终结。有 meter 时让对手的 approach 更谨慎。"
    startup: 7
    active: 12
    recovery: 45
    damage: 2000
  - name: "Yoga Inferno (SA2)"
    input: "214214P (↓↙←↓↙←+P)"
    description: "Level 2 Super Art。5f startup，多段 fireball barrage。总 damage 约 2800。Strike/Projectile invincible frames 1-4。连续发射多个 Yoga Fire 形成 wall of fire。用于确认连段终结和远距离 poke confirm (5HP → SA2)。在 projectile war 中 SA2 可以穿过对手的波动给予重创。也可以作为 reversal 使用但 invincible 窗口短。"
    startup: 5
    active: 30
    recovery: 40
    damage: 2800
  - name: "Yoga Sunburst (SA3)"
    input: "236236P (↓↘→↓↘→+P)"
    description: "Level 3 Super / Critical Art。9f startup，4000 damage (4500 as Critical Art)。Fully invincible frames 1-11。Dhalsim 的终极 comeback tool——巨大的火焰 blast 全程无敌。用于 punish 对手的 commitment move、reversal 和确认连段终结。Knockdown +50 (+14 as CA)。CA damage 4500 可以在 low HP 时逆转局势。"
    startup: 9
    active: 8
    recovery: 52
    damage: 4000
tips:
  - "远距离 spacing 是 Dhalsim 的生命线。5HP (11f, 800dmg) 和 2MK (10f, 500dmg) 是你的远距离 poke 核心。在 max range 用 5HP → Yoga Flame 确认伤害。2MK → LP Yoga Fire 是 low poke + projectile 确认。5HK (13f) 用于更远距离的 whiff punish。记住：5HP 被 block 是 -4~-7，只在 max range 使用才安全。3HK (slide) 用于远距离 low knockdown 但 recovery 长。"
  - "Yoga Fire 是远距离控制的核心。LP Yoga Fire (16f) 速度最快用于 poke，HP Yoga Fire (20f) 速度慢但 cover 更多空间。在 full screen 用 Yoga Fire 逼迫对手 approach，然后准备 anti-air (2HP 或 Yoga Blast) 或 poke (5HP/2MK) 他们的 approach attempt。不要无脑发——每个 Yoga Fire 都要配合后续的 spacing 调整。OD Yoga Fire 速度快确认连段用。"
  - "Drill Kick (j.2HK) 是 Dhalsim 最有效的 approach 工具。配合 Yoga Float 可以从各种角度进攻——Float 延迟后 Drill 让对手难以判断 timing。HP Drill (900dmg) 角度陡适合近距离，MK Drill (700dmg) 角度浅适合远距离。Drill 被 block 是 -8~-12，所以在 tip range 使用或配合 Float spacing 来保持安全。也可以在 Drill 被 block 后用 Yoga Teleport escape。"
  - "Anti-air 是 Dhalsim 防守的关键。2HP (9f) 是 ground anti-air——在对手 jump-in 时 pre-emptive 使用。Yoga Blast (214K, 10f) 是专用 anti-air，LK 版本最常用，on hit knockdown +38。如果对手 predictably jump，可以用 SA1 (Yoga Ark, 7f, invincible 1-8f) 完全逆转空中进攻。Float 后的空中 normal 也可以用于 air-to-air。不要只用一种 anti-air——混合使用让对手无法 adapt。"
  - "被近身时 Dhalsim 非常脆弱。Yoga Flame (214P) 是你最好的 close-range tool——HP 版本 damage 高 (1200) 且多段 hit。OD Yoga Flame 有 invincible frames 可以作为 reversal。Yoga Teleport (63214P/K) 用于 escape——P 版本出现在对手前方，K 版本出现在对手后方。在 corner 时 K 版本 Teleport 可以 escape corner。Drive Reversal 用于 escape pressure sequence。SA1/SA3 作为 last resort reversal。"
  - "DI (Drive Impact) 时机：对手出 heavy normal (如 Ryu sweep, Ken HP Hadoken) 或 commitment move 时使用 DI。Dhalsim 的 DI 不是最强因为你的 normal recovery 长容易被 DI punish——所以你的 DI 使用需要更 reactive 而非 proactive。Drive Rush 用于确认 5HP 或 2MK 命中后延伸连段——5HP → DR → 2MP → Yoga Flame 是标准确认路线。Drive Rush 也可以用于快速 close distance。"
  - "SA 选择策略：SA1 (Yoga Ark, 7f) 用于 anti-air、reversal 和 combo extender——是你最常用的 SA。SA2 (Yoga Inferno, 5f) 用于远距离 poke confirm (5HP → SA2) 和 projectile war。SA3 (Yoga Sunburst, 9f) 保留到关键时刻——4000 damage 可以逆转局势。推荐默认选 SA1 因为它的 reversal 和 combo extension 价值最高。SA3 在 need kill confirm 时选择。"
  - "对局节奏核心：Dhalsim 的 gameplan 是远距离控制 → 逼迫对手 approach → anti-air/punish approach → reset distance。永远不要主动接近对手（除非对手是 grappler 且你可以 kite）。每个对局的甜点距离不同——vs Zangief 保持 full screen，vs Guile 可以适当 close distance 到 mid-range。Burnout 时你的 Yoga Fire 和 poke 更强但 Teleport escape 更危险。根据对手类型调整：vs rushdown 保持 maximum distance，vs zoner 在 mid-range exchange。"
matchups:
  - opponent: "luke"
    difficulty: "disadvantageous"
    summary: "Luke 的 Flash Knuckle 快速接近和 Sand Blast 控制让 Dhalsim 难以维持远距离优势"
    strategies:
      - "Luke 的核心威胁是 Flash Knuckle (快速 approach) 和 Sand Blast 波动控制中距离。HP Sand Blast 是 +3 on hit 但你可以用 5HP (11f) 在他的 recovery 帧poke 他。Luke 的 DR → Flash Knuckle 接近速度极快——你必须在他 DR 的瞬间用 2HP 或 Yoga Blast anti-air 他可能的 jump-in option。不要 predictable 地发 Yoga Fire——Luke 可以 DR 穿过波动。用 LP Yoga Fire 间断性地 poke，保持 5HP 和 2MK 在 hand 来 control spacing。"
      - "中距离用 5HP 和 2MK 交换。Luke 的 5MP (5f) 比你的任何 normal 都快——不要和他近距离 exchange。确认 5HP 命中后接 Yoga Flame 或 SA2。Luke 的 jump-in 用 2HP (9f) 或 Yoga Blast (214K, 10f) anti-air。Luke 的 VA (Vulcan Blast) Super 让他可以在远距离 punish 你的 whiff——不要在 Luke 有 meter 时随意 whiff heavy normal。"
      - "DI 时机：Luke 出 HP Sand Blast 或 heavy Flash Knuckle 时使用。DR 用于确认 5HP/2MK 命中后延伸连段——但谨慎使用 Drive Gauge 因为你需要 Drive Reversal 来 escape pressure。Luke 的 SA3 (Pale Rider, 10f) 速度和你 SA3 差不多。Drive Reversal 在 Luke 的 Flash Knuckle pressure gap 中使用。对局节奏：尽量保持远距离，用 Yoga Fire + 5HP/2MK 控制，anti-air 每个 jump-in，被接近后用 Teleport 或 DR escape。"
    keyMoves: ["5HP", "Yoga Fire (LP)", "Yoga Blast"]
  - opponent: "ryu"
    difficulty: "even"
    summary: "远程火力对决，双方都有强大的波动——谁先 read 对手的 pattern 谁赢"
    strategies:
      - "Ryu 的核心威胁是 Denjin Charge 后的强化 Hadoken (wall splat) 和 Shoryuken anti-air。你的 5HP range 比 Ryu 的 5HP 远，在 max range poke battle 中你有优势。Ryu 的 Hadoken recovery 比 Yoga Fire 稍慢——你可以在 his Hadoken recovery 期间发 LP Yoga Fire 抢占 timing。Denjin Charge Hadoken 会 wall splat 必须用 Perfect Parry 或 Yoga Teleport dodge。"
      - "中距离用 5HP 和 2MK 控制。Ryu 的 2MK (7f) 速度快但 range 短，你的 2MK (10f) range 更远。确认 5HP 命中后接 Yoga Flame 或 SA2。Ryu 的 jump-in 用 2HP 或 Yoga Blast anti-air——Ryu 的 j.HP 很强但你的 Yoga Blast 专门克制空中进攻。Ryu 的 Hashogeki (214P) 是 close-range tool——被近身时小心这个 move。"
      - "DI 在 Ryu 出 heavy Hadoken 或 sweep 时使用。DR 用于确认 5HP 命中后延伸——5HP → DR → 2MP → Yoga Flame 是标准确认。Ryu 的 SA3 (Shin Shoryuken, 9f) 速度极快——不要在他有 CA 时随意 commit。SA1 用于 anti-air Ryu 的 jump 或逆转。SA2 用于 projectile war 中抢占优势。对局节奏：波动对波 + 远距离 poke，找机会确认 damage，anti-air 每个 jump-in。"
    keyMoves: ["5HP", "Yoga Fire (LP)", "2HP"]
  - opponent: "chun-li"
    difficulty: "disadvantageous"
    summary: "Chun-Li 的极快速度和长距离 normal 让 Dhalsim 难以维持 spacing，她的 Serenity Stream 混合特别危险"
    strategies:
      - "Chun-Li 的核心威胁是极快的 normal speed (5MP 5f, 2MP 6f) 和 Serenity Stream 姿态混合。她的 5HP range 虽然不如你但速度更快 (8f vs 11f)——在 poke exchange 中她有 frame advantage。Kikoken 波动速度较快，需要用 Perfect Parry 或 Yoga Teleport 应对。Serenity Stream 后的 follow-up 可以 low profile 你的 5HP——用 2MK (low) 代替来 counter her stance。"
      - "保持 maximum distance 用 Yoga Fire 和 5HP/5HK 控制。不要让 Chun-Li 进入她的 2MP range——一旦进入她会用快速 normal chain 压制你。确认 5HP 命中后接 Yoga Flame。Chun-Li 的 jump-in 用 Yoga Blast anti-air——她的空中腿 attack range 大但 Yoga Blast 的 invincible 让你可以在 timing 上赢。Chun-Li 的 Tensho Kicks 是她的 reversal，有 meter 时不要 predictable 地 Drill Kick approach。"
      - "DI 在 Chun-Li 出 2HP 或 sweep 时使用。DR 用于确认 5HP 命中后延伸连段。Chun-Li 的 OD Tensho Kicks 是完全无敌的 reversal。Drive Reversal 在她的 Serenity Stream pressure gap 中使用。SA1 用于 anti-air 或逆转。SA3 在关键时刻使用——Chun-Li 的 CA damage 高但你可以在她 whiff stance move 时 punish。对局节奏：尽量拉开距离，用波动和 long poke 控制空间，被近身后第一时间 Teleport escape。"
    keyMoves: ["Yoga Fire (HP)", "5HP", "Yoga Blast"]
  - opponent: "jamie"
    difficulty: "advantageous"
    summary: "趁 Jamie 喝酒等级低时远距离压制——Dhalsim 的 zoning 完全克制 Jamie 的短距离 gameplan"
    strategies:
      - "Jamie 的威胁随喝酒等级增长。Level 0-1 时他几乎没有远距离工具。开局立刻用 Yoga Fire 持续骚扰，不给他 free drink 的空间。Jamie 的 Bakushin (酒步) 是 approach tool 但 -4 on block 可以用 2MK punish。Jamie 的 2LP (4f) 速度快但 range 短——保持在 5HP range 外。用 5HP 和 2MK 在 max range 持续 poke，每个 Yoga Fire timing 都要配合你的 spacing 调整。"
      - "Jamie approach 方式有限：ground dash (18f, 可以 react)，jump-in (Yoga Blast anti-air)，drink recovery 窗口 (5HP/2MK punish)。确认 5HP 命中后接 Yoga Flame。Drill Kick (j.2HK) 用于主动 approach 时有效因为 Jamie 的 anti-air 不强。Jamie 没有 meter 时没有好的 reversal——大胆用 5HP poke 和 Drill approach。Jamie 有 meter 时注意他的 OD Bakkai (reversal kick)。"
      - "DI 在 Jamie 出 heavy attack 或 attempting drink 时使用——打断他的 drink 是最高优先级。DR 用于确认 5HP/2MK 后延伸连段。SA1 用于 anti-air Jamie 的 jump。SA2 用于远距离 poke confirm。SA3 在 Jamie 低 HP 时终结。全程保持进攻性 zoning——不给他任何 free drink 的空间，每次他 attempt drink 都要 punish。"
    keyMoves: ["Yoga Fire (LP/HP)", "5HP", "2MK"]
  - opponent: "guile"
    difficulty: "even"
    summary: "经典远程炮战，Guile 的 Sonic Boom 控制力强但 Dhalsim 有更多 approach 角度"
    strategies:
      - "Guile 的核心威胁是 Sonic Boom 控制和 Flash Kick anti-air。你的 Yoga Fire recovery 比 Sonic Boom 慢但 5HP range 比 Guile 的 5HP 远。Projectile war 的关键是 timing——在 Guile 的 Sonic Boom recovery 期间发 Yoga Fire，用 Perfect Parry 吸收 Sonic Boom 节省 Drive Gauge。Guile 的 Flash Kick 是最可靠的 anti-air 之一——不要 predictable 地 jump 或 Drill approach。"
      - "中距离用 5HP 和 2MK 在 max range poke。Guile 的 5HP 是 -6 on block 用 2MK punish。他的 2HK sweep 是 -12 on block 用 5HP punish。确认 5HP 命中后接 Yoga Flame 或 SA2。Approach 方式：Drill Kick 从不同角度，Yoga Teleport 到他身后（但 recovery 风险），或逐步用 Perfect Parry + walk forward 缩短距离。Guile 的 Sonic Blade (236K) 是 stationary projectile 可以和 Sonic Boom 叠加——看到 Sonic Blade 时立刻用 Drill 或 Teleport approach。"
      - "DI 在 Guile 出 Sonic Blade 或 heavy Sonic Boom 时使用。DR 用于确认 5HP 后延伸连段。Guile 的 SA reversals 都需要 charge——如果你能保持 pressure 不让他 charge，他就无法 reversal。Drive Reversal 用于 escape Flash Kick pressure。SA1 用于 anti-air 或逆转。SA3 在 Guile whiff Flash Kick 或 heavy Sonic Boom 时使用。核心心态：耐心，逐步 close distance，一旦进入 mid-range 就用 5HP 优势 range 持续压制。"
    keyMoves: ["5HP", "Yoga Fire (LP)", "Perfect Parry"]
  - opponent: "kimberly"
    difficulty: "disadvantageous"
    summary: "Kimberly 的 teleport 混合和 speed 让 Dhalsim 的远距离 control 难以维持"
    strategies:
      - "Kimberly 的核心威胁是 teleport (消失后出现) 和幻影 dive kick 的速度混合。她的 teleport 有明显的 startup 动画但出现位置难以预判——用 2HP 或 Yoga Blast 在她出现时 anti-air。如果她 teleport 到地面用 5HP 或 2MK 在她的 recovery 帧打击。不要 predictable 地发 Yoga Fire——她可以 teleport 绕过波动直接接近你。保持 moving 和改变你的站位来让她难以预判 teleport 落点。"
      - "中距离你的 5HP 和 2MK 在 max range 仍然有效。确认 5HP 命中后接 Yoga Flame。Kimberly 的 run stop mix-up 需要反应——overhead 版本可以 DI 打断，low 版本 block 后 punish。Kimberly 的 dive kick 角度多变但 Yoga Blast (10f) 仍然是你最好的 anti-air。一旦被 Kimberly 进入 close range，她的 mix-up 非常危险——用 Drive Reversal 或 Yoga Teleport 第一时间 escape。"
      - "DI 在 Kimberly 出 heavy run stop 或幻影 dive kick 时使用。DR 用于确认 5HP 后延伸。Kimberly 的 OD Bushin Senpukyaku 是她的 reversal 但不是完全无敌——有 meter 时仍然可以尝试 Drill approach。SA1 用于 anti-air 她的空中进攻。SA3 在关键时刻使用。对局节奏：不要站在原地不动，持续移动和改变距离，用 Yoga Fire + 5HP/2MK 在移动中 poke，anti-air 每个 approach attempt。"
    keyMoves: ["Yoga Blast", "5HP", "Yoga Teleport"]
  - opponent: "juri"
    difficulty: "disadvantageous"
    summary: "Juri 的 Fuha stock 系统和 aggressive rush 能力让她在接近后完全压制 Dhalsim"
    strategies:
      - "Juri 的核心是 Fuha stock 系统。她在 charge (214K) 时最脆弱——用 5HP 或 LP Yoga Fire punish 她 charge attempt。有 stock 时她的 623HP (DP) 和 Fuhajin release 都变强。Juri 的 DR speed 极快，可以从 mid-range 瞬间进入 close range——你必须随时准备 anti-air 或 Teleport escape。她的 5MP (5f) 是最快的 mid-range button，不要和她近距离 normal exchange。"
      - "保持 maximum distance 用 Yoga Fire 和 5HP/2MK 控制。确认 5HP 命中后接 Yoga Flame 或 SA2。Juri 的 jump-in 用 Yoga Blast anti-air。Juri 的 Fuhajin release (projectile) 可以用 Perfect Parry 吸或 5HP 在她的 recovery poke。关键是始终不让她 free charge Fuha stock——每次她 charge 都要 punish。一旦 Juri 有 3 stocks 她的 damage output 和 pressure 暴增。"
      - "DI 在 Juri charge Fuha stock 或出 heavy attack 时使用。DR 用于确认 5HP 后延伸连段。Juri 的 OD DP 是完全无敌的 reversal，有 meter 时不要 predictable。Drive Reversal 用于 escape 她的 Fuha-enhanced pressure。SA1 用于 anti-air 或逆转。SA3 在 Juri whiff commitment move 时使用。核心策略：远距离 zoning + punish charge attempt + anti-air 每个 approach。"
    keyMoves: ["Yoga Fire (LP)", "5HP", "Yoga Blast"]
  - opponent: "ken"
    difficulty: "disadvantageous"
    summary: "Ken 的 Jinrai 压力和快速 approach 让 Dhalsim 难以 establish 远距离 gameplan"
    strategies:
      - "Ken 的核心威胁是 Jinrai Kick (236K) 的高/低混合和 Run 系统的持续压力。Ken 的 DR speed 是 game-best 之一——他可以从 mid-range 瞬间 close distance。你的 5HP 和 2MK 必须 pre-emptive 使用来 stuff 他的 approach。Ken 的 LP Shoryuken (5f, invincible 1-8) 会打掉你的 Drill approach——不要在他有 meter 时 predictable 地 Drill。用 Yoga Fire 间断性地 poke 和 interrupt 他的 approach rhythm。"
      - "中距离用 5HP 和 2MK 在 max range poke。Ken 的 2MP (+5 on hit) 和你的 2MK range 差不多但速度更快——保持在 max range。确认 5HP 命中后接 Yoga Flame。Ken 的 jump-in 用 Yoga Blast anti-air。Ken 的 Hadoken recovery 比 Yoga Fire 快但 range 不如你的 5HP 远。Ken 的 Dragonlash Kick (run → K) 是 approach tool 但可以被 5HP stuff 或 Yoga Blast anti-air。"
      - "DI 在 Ken 出 heavy Hadoken 或 Jinrai HK 时使用。DR 用于确认 5HP 命中后延伸——但保留 Drive Gauge 给 Drive Reversal。Ken 的 SA3 (Shippu Jinraikyaku, 9f) 速度极快。Drive Reversal 在 Ken 的 Jinrai pressure gap 中使用。SA1 用于 anti-air 或逆转。SA3 在关键时刻使用。对局节奏：reactive zoning，用 pre-emptive poke stuff approach，anti-air 每个 jump，被 close 后立刻 escape。"
    keyMoves: ["5HP", "Yoga Fire (LP)", "Yoga Blast"]
  - opponent: "blanka"
    difficulty: "disadvantageous"
    summary: "Blanka 的 Coward Crouch 和 3HP 让穿越 Yoga Fire 比大多数角色容易，win rate 偏 Blanka 约 58%"
    strategies:
      - "Blanka 的核心威胁是 Coward Crouch (↓+PP, 从 frame 9 low profile) 和 3HP (Amazon River Run, 14f low) 可以 low profile 你的 Yoga Fire 并获得 knockdown。你的 5HP 和 2MK overhead 攻击可以 hit Coward Crouch 状态的 Blanka。不要 predictable 地发 Yoga Fire——Blanka 会用 3HP 滑过波动直接 close distance。混合使用 5HP overhead 和 2MK low 来 keep Blanka guessing。"
      - "保持 far range 用 Yoga Fire 和 5HP 控制。Blanka 的 Blanka Ball approach 可以用 2HP 或 Perfect Parry 应对——LP Ball 在 tip range 使用时你需要 pre-emptive 才能 punish。确认 5HP 命中后接 Yoga Flame。Blanka 的 jump-in 用 Yoga Blast anti-air。Blanka 的 Backstep Rolling Attack (cross-up) 需要判断方向——如果看到 arc 动画就准备 anti-air 或 block cross-up 方向。"
      - "DI 在 Blanka 出 Blanka Ball 或 Electric Thunder 时使用。DR 用于确认 5HP 后延伸连段。Blanka 的 SA2 (Lightning Beast) 启用后 chargeless Rolling 是最大的威胁——一旦他 SA2 就必须更加 passive 因为 Rolling 无法被 predictably anti-air。Drive Reversal 用于 escape Electric Thunder pressure。SA1 用于 anti-air 或逆转。SA3 在关键时刻使用。核心心态：比平时更少发波动，更多用 normal poke，anticipate 3HP 和 Coward Crouch。"
    keyMoves: ["5HP", "2MK", "Yoga Blast"]
  - opponent: "dhalsim"
    difficulty: "even"
    summary: "镜像对战——比拼谁的 spacing 更精确、谁的 Yoga Fire timing 更好、谁失误更少"
    strategies:
      - "镜像的核心是 Yoga Fire timing 和 spacing 控制。双方都有一样的工具——关键是 pre-emptive 使用 5HP 和 2MK 来 stuff 对手的 Yoga Fire startup。不要 predictable 地发波动——对手会用 5HP 在你的 recovery punish。用 Yoga Fire 的 timing 变化来让对手难以判断你的 pattern。谁的 5HP spacing 更好谁就赢——在 max range 5HP 几乎无法被 punish。"
      - "Yoga Teleport 在镜像中特别有用——teleport 到对手身后可以 punish predictable 的波动 timing。但对手也可以做同样的事，所以不要 predictable 地 teleport。Drill approach 在镜像中 risky 因为对手有完美的 anti-air 工具 (Yoga Blast, 2HP)。Yoga Float 可以改变空中 timing 但对手也可以。镜像的核心是 read 对手的 pattern 然后 counter。"
      - "DI 在对手出 heavy Yoga Fire 或 5HK 时使用。DR 用于确认 5HP 后延伸。SA1 用于 anti-air 对手的 Drill approach。SA2 在 projectile war 中抢占优势。SA3 在对手 whiff heavy move 时使用。镜像对局节奏：比谁更 patient，谁的 spacing 更精确，谁的 Yoga Fire timing 更好。"
    keyMoves: ["5HP", "Yoga Fire (LP)", "Yoga Blast"]
  - opponent: "e-honda"
    difficulty: "advantageous"
    summary: "经典有利对局——Dhalsim 的远距离 zoning 完全克制 Honda 的 ground-only approach"
    strategies:
      - "Honda 的核心威胁是 Sumo Headbutt (approach) 和 Hundred Hand Slap (close range pressure)。你的 5HP 和 Yoga Fire 在远距离完全压制 Honda——他的 Sumo Headbutt 需要 charge 时间你可以在他的 charge recovery poke。Honda 的 Sumo Slam (jumping attack) 可以用 Yoga Blast (10f) anti-air。关键是保持 far range 不让 Honda 进入他的 command grab (Oicho Throw) range。"
      - "远距离无脑用 LP/HP Yoga Fire 压制，Honda 几乎无法接近。Honda 的 ground approach 只有 dash (18f, 可以 react) 和 Sumo Headbutt (charge required)。确认 5HP 命中后接 Yoga Flame 或 SA2。如果 Honda jump 用 Yoga Blast anti-air。Honda 的 Hundred Hand Slap 是 close-range nightmare——绝对不能让他 close enough 使用这个 move。保持 5HP max range spacing。"
      - "DI 在 Honda 出 Hundred Hand Slap 或 Sumo Headbutt 时使用。DR 用于确认 5HP 后延伸连段。Honda 没有 meter 时没有 good reversal——大胆用 Drill approach 和 5HP poke。Honda 的 SA1 (Super Zutsuu) 是 armored reversal 有 meter 时小心。SA1 用于 anti-air Honda 的 jump。SA2 在远距离 poke confirm 时使用。SA3 在 Honda 低 HP 时终结。全程保持远距离 zoning。"
    keyMoves: ["Yoga Fire (LP/HP)", "5HP", "Yoga Blast"]
  - opponent: "dee-jay"
    difficulty: "even"
    summary: "音速对瑜伽，远程火力对决——Dee Jay 的 MG Strike 混合让 approach 有挑战"
    strategies:
      - "Dee Jay 的核心威胁是 MG Strike (projectile approach) 和 Jackknife Maximum (flash kick anti-air)。他的 DR 是 game-best 之一——偶尔用 5LP 或 2MK 在 neutral check 他的 DR attempt。Dee Jay 的 projectile recovery 比 Yoga Fire 快但你的 5HP range 更远。Projectile war 的关键是 timing——在 Dee Jay 的波动 recovery 期间发 Yoga Fire 或 5HP poke。"
      - "中距离用 5HP 和 2MK 在 max range poke。确认 5HP 命中后接 Yoga Flame。Dee Jay 的 jump-in 用 Yoga Blast anti-air。Dee Jay 的 Jackknife Maximum 是他的 anti-air/reversal——不要 predictable 地 Drill approach。Dee Jay 的 Jus Cool (214K~K) 是 reset tool 可以用 5HP stuff。保持 mid to far range，用 Yoga Fire 和 5HP/2MK 控制 spacing。"
      - "DI 在 Dee Jay 出 Jackknife Maximum 或 MG Strike heavy 版时使用。DR 用于确认 5HP 后延伸连段。Dee Jay 的 OD Jackknife 是他的 reversal。Drive Reversal 用于 escape MG Strike pressure。SA1 用于 anti-air 或逆转。SA2 在 projectile war 中使用。SA3 在关键时刻使用。对局节奏：标准远距离 zoning，anti-air approach，punish commitment。"
    keyMoves: ["5HP", "Yoga Fire (LP)", "Yoga Blast"]
  - opponent: "manon"
    difficulty: "advantageous"
    summary: "Manon 的短距离和慢 approach 让 Dhalsim 可以轻松维持远距离 zoning"
    strategies:
      - "Manon 的威胁随 Medal Level 增长 (command grab damage 和 range 增加) 但她的 approach 极慢。Level 0-1 时她的 command grab 范围很短，大胆用 Yoga Fire 和 5HP/2MK 远距离 poke。Manon 的 5MP (8f) 比 2MP (6f) 慢但在 range 上不如你的 5HP。用 5HP 和 2MK 在 max range 持续施压不让她 free combo 叠 medal。Manon 没有 3f button，你的 5LP (5f) 可以和她的 2LP (4f) 交换。"
      - "远距离用 Yoga Fire 持续骚扰，Manon 几乎没有远距离工具来 counter。她的 approach 选项有限：ground approach (慢) 和 jump-in (Yoga Blast anti-air)。确认 5HP 命中后接 Yoga Flame。Manon 的 command grab 需要近距离——保持 far range 就完全安全。Drill Kick approach 在 Manon 没有 meter 时非常有效因为她的 anti-air 不强。"
      - "DI 在 Manon 出 heavy attack 或 attempting medal combo 时使用。DR 用于确认 5HP 后延伸连段。Manon 的 OD Chassé (reversal kick) 是她最好的逆转但 range 有限。SA1 用于 anti-air 或逆转。SA3 在连段终结时使用。全程远距离 zoning——不给她任何 close distance 的机会。"
    keyMoves: ["Yoga Fire (LP/HP)", "5HP", "2MK"]
  - opponent: "marisa"
    difficulty: "advantageous"
    summary: "Marisa 的慢 startup 和 armored attack 可以被 Dhalsim 的远距离 zoning 轻松 counter"
    strategies:
      - "Marisa 的核心威胁是 armored attack (Gladius, Phalanx) 和巨大 damage output (HP 10500 比 Dhalsim 多 1000)。但她的 startup 极慢——Gladius 是 20f+ startup，你的 5HP (11f) 可以在她 startup 期间打击。Marisa 的 armored move 会 absorb 一 hit 但 Yoga Fire 是 projectile 可以在 armor 后继续 hit。OD Yoga Fire 的多段 hit 特别有效 vs armor。用 5HP 和 2MK 在 max range 持续 poke，不要让她进入 Gladius range。"
      - "远距离用 Yoga Fire 持续骚扰。Marisa 的 approach 非常慢——ground approach 不可能不被 punish，jump-in 被 Yoga Blast anti-air。确认 5HP 命中后接 Yoga Flame 或 SA2。Marisa 的 Quadriga (charge punch) 有 armor 但 Yoga Fire 的 projectile 属性可以 break armor。Marisa 的 Scutum (armor stance) 是她的 'reversal'——Yoga Fire 和 Drill Kick 可以 punish Scutum。"
      - "DI 是对 Marisa 最重要的 tool——react to Gladius, Phalanx, Quadriga, charged heavies with DI。DR 用于确认 5HP 后延伸连段。Drive Reversal 用于 escape 她的 close range pressure。Marisa 没有 good reversal without meter——大胆远距离 poke。SA1 用于 anti-air 或逆转。SA3 在 Marisa 低 HP 时终结。全程保持 far range zoning。"
    keyMoves: ["Yoga Fire (LP/OD)", "5HP", "DI"]
  - opponent: "jp"
    difficulty: "even"
    summary: "两个 zoner 的对决——JP 的 Torbalan portal 控制 vs Dhalsim 的 Yoga Fire + long range poke"
    strategies:
      - "JP 的核心威胁是 Torbalan (portal) 区域控制和 Eminence (远距离 anti-air)。不要站在 full screen 不动——JP 会设 portal 控制 space。你的 5HP range 比 JP 的 5HP 远 (11f vs 14f)，在 max range poke battle 中你有优势。JP 的 2HP 是很好的 poke 但 -13 on block 可以用 5HP punish。JP 的 portal 有 startup 时间可以用 Drill Kick 或 Teleport 穿过。"
      - "中距离用 5HP 和 2MK 在 max range poke。JP 的 5HP 是 -8 on block 用 2MK punish。确认 5HP 命中后接 Yoga Flame 或 SA2。JP 的 Torbalan 可以用 Yoga Fire out-poke 或 Drill Kick 穿过。JP 的 Eminence anti-air 很强但 Yoga Float → Drill timing 变化可以让 JP 难以判断 anti-air timing。一旦进入 mid-range，你的 normal 优势更大。"
      - "DI 在 JP 出 Torbalan 或 heavy attack 时使用。DR 用于确认 5HP 后延伸连段。JP 的 SA 是全程无敌的，不要在他有 CA 时 whiff 大招。Drive Reversal 用于 escape JP 的 close range pressure。SA1 用于 anti-air 或逆转。SA2 在 projectile war 中使用。SA3 在 JP whiff heavy attack 时使用。对局节奏：读准 portal timing，用 5HP poke 优势 range，逐步 close distance 后持续压制。"
    keyMoves: ["5HP", "Yoga Fire (LP)", "Yoga Teleport"]
  - opponent: "zangief"
    difficulty: "advantageous"
    summary: "经典有利对局——Dhalsim 的远距离 zoning 完全克制 Zangief 的 ground-only approach，Zangief 几乎摸不到"
    strategies:
      - "Zangief 的核心威胁是 SPD (command grab) 和 armored attacks。永远不要站在 SPD range 内——保持在 far range 用 Yoga Fire 和 5HP/2MK 控制。Zangief 的 forward dash 是 18f 可以 react，听到 dash 声音就 Yoga Blast 或 back dash。Zangief 的 lariat 是 anti-air 但可以被 low attack (2MK, 3HK) 打。Zangief 的 SPD range 很大但你的 5HP range 更大——在 max range 用 5HP 持续 poke。"
      - "远距离无脑用 LP/HP Yoga Fire 压制，Zangief 几乎没有任何远距离工具。确认 5HP 命中后接 Yoga Flame 或 SA2。Zangief 的 jump-in 用 Yoga Blast anti-air——他的 jump 慢但 damage 高所以每个 anti-air 都不能 miss。Drill Kick approach 在 Zangief 有 meter 时要小心他的 SA1 (armored super)。Zangief 的 approach 几乎只有 dash 和 jump——都是你可以 react 和 punish 的。"
      - "DI 在 Zangief 出 lariat 或 heavy normal 时使用——lariat 不能挡 DI。DR 用于确认 5HP 后延伸连段。Zangief 的 SA1 和 SA3 都是 armored reversal，有 meter 时不要 predictable。SA1 用于 anti-air Zangief 的 jump。SA3 在 Zangief 低 HP 时终结。核心策略：永远保持远距离，用 Yoga Fire + 5HP/2MK 控制每一个 approach angle，anti-air 每个 jump-in。"
    keyMoves: ["Yoga Fire (LP/HP)", "5HP", "Yoga Blast"]
  - opponent: "lily"
    difficulty: "advantageous"
    summary: "Lily 的短距离和 Wind Stock charge 需求让 Dhalsim 可以轻松远距离 zoning"
    strategies:
      - "Lily 的核心是 Wind Stock 系统。她需要 charge (214P) 来获得 stock——趁她 charge 时用 5HP 或 LP Yoga Fire punish。有 stock 时她的 Tomahawk Buster (DP) 和 Condor Dive 变强。Lily 的 HP 只有 9500 和你一样——每个 hit 都更珍贵。Lily 的 normal range 短，你的 5HP 完全可以 out-range 她的所有 ground normal。"
      - "远距离用 Yoga Fire 和 5HP/2MK 持续 poke。确认 5HP 命中后接 Yoga Flame。Lily 的 Condor Spire (approaching move) 是 -6 on block 用 2MK punish。Lily 的 jump-in 用 Yoga Blast anti-air。Lily 的 Condor Dive 是空中 approach 但可以被 2HP 或 Yoga Blast anti-air。关键是始终不让她 free charge Wind Stock——每次她 charge 都要 punish。"
      - "DI 在 Lily charge Wind Stock 或出 Condor Spire 时使用。DR 用于确认 5HP 后延伸连段。Lily 的 SA2 是 armored reversal 有 meter 时小心。SA1 用于 anti-air Lily 的 Condor Dive。SA3 在连段终结时使用。对局节奏：远距离 zoning + punish charge attempt + anti-air 每个 approach。"
    keyMoves: ["Yoga Fire (LP)", "5HP", "2MK"]
  - opponent: "cammy"
    difficulty: "disadvantageous"
    summary: "Cammy 的极速 approach 和 Cannon Strike mix 让 Dhalsim 的远距离控制难以 establish"
    strategies:
      - "Cammy 的核心威胁是 Cannon Strike (dive kick) 和 Spiral Arrow (slide)。Cannon Strike 角度多变让 anti-air 困难——用 Yoga Blast 预判她的 dive kick timing。Spiral Arrow HP 版本是 -7~-9 on block 可以用 2MK 或 5HP punish 但 timing 窗口小。Cammy 的 DR speed 极快——她会用 DR 瞬间 close distance。不要站在原地发 Yoga Fire——Cammy 会 DR 穿过波动直接 close range。"
      - "保持 maximum distance 用 Yoga Fire 和 5HP/2MK 控制。确认 5HP 命中后接 Yoga Flame。Cammy 的 Hooligan Combination 是空中混合但可以被 Yoga Blast anti-air 或 block 后 punish。Cammy 的 Cannon Spike (DP) 是她的 reversal——有 meter 时不要 predictable 地 Drill approach。关键是不要 predictable——持续改变你的 spacing 和 Yoga Fire timing。"
      - "DI 在 Cammy 出 Spiral Arrow 或 heavy Cannon Spike 时使用。DR 用于确认 5HP 后延伸连段。Drive Reversal 用于 escape Cammy 的 close range pressure——必须第一时间 escape 因为 Cammy 的 mix-up 非常危险。SA1 用于 anti-air Cannon Strike。SA3 在关键时刻使用。对局节奏：reactive zoning，不要 predictable，anti-air 每个 approach，被 close 后第一时间 Teleport/DR escape。"
    keyMoves: ["Yoga Blast", "5HP", "Yoga Teleport"]
  - opponent: "rashid"
    difficulty: "disadvantageous"
    summary: "Rashid 的空中机动性和 Ysaar glide 系统让 Dhalsim 的 anti-air 和远距离 control 都面临挑战"
    strategies:
      - "Rashid 的核心威胁是 Eagle Spike 和 Ysaar (whirlwind) glide system。Ysaar 给他额外的 jump 和 glide option——他可以在空中调整 timing 让你的 anti-air 困难。Eagle Spike HP 版本是 -7 on block 可以用 2MK punish 但 recovery 快需要 Drive Rush 才能可靠 punish。Rashid 的 Spinning Mixer 是 approach tool 但可以被 5HP stuff。不要追 Rashid 空中——等他落地再 punish。"
      - "保持 mid to far range 用 5HP 和 Yoga Fire 控制。确认 5HP 命中后接 Yoga Flame。Rashid 的 glide approach 用 2HP 或 Yoga Blast anti-air——但 timing 需要适应他的 glide speed。Rashid 的 whirlwind projectile 可以用 Perfect Parry 吸或 Yoga Fire 对波。关键是不要被 Rashid 的 speed 打乱你的节奏——按你的 spacing 和 timing 打，不要 reactively 追他。"
      - "DI 在 Rashid 出 Eagle Spike 或 heavy whirlwind move 时使用。DR 用于追击他 glide 后的着陆。Drive Reversal 用于 escape 他的 close range pressure。SA1 用于 anti-air Rashid 的空中进攻。SA2 在远距离 poke confirm 时使用。SA3 在关键时刻使用。核心心态：不要被他的 speed 搞乱节奏，保持你的 spacing gameplan。"
    keyMoves: ["5HP", "Yoga Fire (LP)", "Yoga Blast"]
  - opponent: "a-k-i"
    difficulty: "disadvantageous"
    summary: "A.K.I. 的毒系统和快速 approach 让 Dhalsim 被 poison 后的持续 pressure 非常危险"
    strategies:
      - "A.K.I. 的核心威胁是毒系统——被毒后你的 HP 持续下降，迫使你必须更 aggressive 来弥补。她的 Nightshade Pulse (projectile) startup 慢 (20f+) 但 range 长。A.K.I. 的 approach 非常灵活——Toxic Essence (command grab) 和 Heel Strike (anti-air/reversal) 混合。趁她 setup toxic trap 时用 5HP 或 LP Yoga Fire punish。被毒后不要慌——继续你的 zoning gameplan 但需要更快地找到 damage。"
      - "保持 far range 用 Yoga Fire 和 5HP/2MK 控制。确认 5HP 命中后接 Yoga Flame。A.K.I. 的 approach 主要是 ground dash 和 jump-in——用 Yoga Blast anti-air。A.K.I. 的 toxic trap setup 有 startup 可以用 Drill Kick 穿过。A.K.I. 的 2HP 是 -10 on block 可以用 5HP punish。关键是不要 free 地被 poison——每次她 attempt poison setup 都要 punish。"
      - "DI 在 A.K.I. 出 Nightshade Pulse 或 setup toxic trap 时使用。DR 用于确认 5HP 后延伸连段。A.K.I. 的 OD Heel Strike 是她的 reversal 但 range 有限。Drive Reversal 用于 escape 她的 poison-enhanced pressure。SA1 用于 anti-air 或逆转。SA3 在关键时刻使用。全程保持远距离 zoning——被毒后更要坚持 spacing 不要慌。"
    keyMoves: ["5HP", "Yoga Fire (LP)", "Yoga Blast"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed 的 Psycho Flicker long range poke 让 mid-range 有挑战，但 Dhalsim 有更多 zoning 工具"
    strategies:
      - "Ed 的核心威胁是 Psycho Flicker (长距离快速 poke) 和 Kill Rush (approaching armor move)。Psycho Flicker 的 range 让 mid-range 很危险——保持在 5HP max range 用远距离 normal 而不是进入 Flicker range。Ed 的 Psycho Ball 是 projectile 可以用 Perfect Parry 吸或 Yoga Fire 对波。Kill Rush 是 armored 但 Yoga Fire 的 projectile 属性可以 break armor。OD Yoga Fire 多段 hit 特别有效 vs Kill Rush。"
      - "保持 far range 用 Yoga Fire 和 5HP/2MK 控制。确认 5HP 命中后接 Yoga Flame 或 SA2。Ed 的 5HP 是 -6 on block 用 2MK punish。Ed 的 approach 主要是 Kill Rush 和 Psycho Ball cover——用 Yoga Fire interrupt Kill Rush startup 或 Perfect Parry Psycho Ball 后 poke。Ed 的 Snatcher (command grab) range 短保持 mid-range 就安全。"
      - "DI 在 Ed 出 Kill Rush 或 Psycho Ball heavy 版时使用。DR 用于确认 5HP 后延伸连段。Ed 的 OD Kill Rush 是他的 reversal。Drive Reversal 用于 escape close range pressure。SA1 用于 anti-air 或逆转。SA2 在远距离 poke confirm 时使用。SA3 在关键时刻使用。对局节奏：保持 far range，用 Yoga Fire + 5HP out-range Flicker，punish Kill Rush startup。"
    keyMoves: ["Yoga Fire (LP/OD)", "5HP", "Perfect Parry"]
  - opponent: "akuma"
    difficulty: "disadvantageous"
    summary: "Akuma 的巨大伤害和 air Hadoken layering 让 Dhalsim 的远距离 control 复杂化，但 Akuma 只有 9000 HP"
    strategies:
      - "Akuma 的核心威胁是巨大伤害输出和 demon flip 混合，加上 air Hadoken layering。他的 HP 只有 9000——一个 good confirm (5HP → Yoga Flame → SA2) 就能重创他。Demon Flip 的 punch/kick/throw 混合需要读取——用 Yoga Blast (10f) anti-air flip approach。Air Hadoken 让他的空中进攻更有层次但你的 2HP 可以 anti-air 空中 Hadoken 后的 landing recovery。关键是不要让他 free 地 set air fireball layer。"
      - "中距离你的 5HP 在 max range 可以和 Akuma 交换。他的 5MP (5f) 比你的任何 normal 都快——不要 close range exchange。Akuma 的 Gohadoken startup 比 Hadoken 快但可以用 Perfect Parry 吸或 5HP 在 recovery poke。确认 5HP 命中后接 Yoga Flame——对 Akuma 每个 hit 都很珍贵因为他的 low HP。Akuma 的 Goshoryuken (DP) 是 invincible reversal——有 meter 时不要 predictable。"
      - "DI 在 Akuma 出 heavy Gohadoken 或 sweep 时使用。DR 用于确认 5HP 后延伸连段——对 Akuma 的 low HP 每个 confirm 都很重要。Akuma 的 SA1 (Raging Demon) 是 command grab 有 armor break——不要在他有 meter 时 predictable。Drive Reversal 用于 escape close range demon flip pressure。SA1 用于 anti-air 或逆转。SA3 在 Akuma low HP 时终结。对局节奏：patient zoning，anti-air 每个 demon flip，punish Akuma 的 low HP。"
    keyMoves: ["5HP", "Yoga Blast", "Perfect Parry"]
  - opponent: "m-bison"
    difficulty: "disadvantageous"
    summary: "M. Bison 的 Psycho Power pressure 和 Scissors loop 让 Dhalsim 被 close 后难以 escape"
    strategies:
      - "M. Bison 的核心威胁是 Psycho Crusher 接近和 Scissors Loop 压力。HP Psycho Crusher 是 -8 on block 用 2MK 或 5HP punish 但 timing 窗口小。Scissors LK version 是 +1 on block 让他保持 pressure——不要乱按按钮，等他 scissors heavy 版本 (-6 on block) 再 punish。Bison 的 5HP 是 -5 on block 用 2MK punish。Bison 需要 charge 时间——持续 pressure 不让他 free charge。"
      - "保持 far range 用 Yoga Fire 和 5HP/2MK 控制。确认 5HP 命中后接 Yoga Flame 或 SA2。Bison 的 Psycho Crusher approach 可以用 Yoga Blast anti-air (如果是 air 版) 或 5HP stuff (如果是 ground 版)。Bison 的 Devil Reverse 是空中混合可以用 Yoga Blast anti-air。关键是不要被他的 Scissors loop 困住——一旦进入 his pressure cycle 用 Drive Reversal 或 Yoga Teleport escape。"
      - "DI 在 Bison 出 Psycho Crusher 或 heavy Scissors 时使用。DR 用于确认 5HP 后延伸连段。Bison 的 SA2 是 armored reversal 有 meter 时不要 predictable。Drive Reversal 用于 escape Scissors loop pressure——在你的 Drive Gauge 充足时使用。SA1 用于 anti-air 或逆转。SA3 在关键时刻使用。核心策略：远距离 zoning + punish Psycho Crusher + 被 close 后第一时间 escape。"
    keyMoves: ["5HP", "Yoga Fire (LP)", "Yoga Teleport"]
  - opponent: "terry"
    difficulty: "even"
    summary: "Terry 的 Power Wave 波动和 Burn Knuckle approach 需要标准 zoning 应对"
    strategies:
      - "Terry 的核心威胁是 Power Wave (波动) 和 Burn Knuckle (approaching move)。Power Wave 的 recovery 比 Yoga Fire 快但你的 5HP range 更远——在 max range 用 5HP poke 他的 Power Wave recovery。Burn Knuckle HP 版本是 -9 on block 用 2MK 或 5HP punish。Terry 的 Rising Tackle 是 anti-air/DP 但 OD 版本才是 fully invincible——在没有 meter 时 Drill approach 更安全。Terry 的 Crack Shoot (overhead) 是 20f startup 可以反应 block。"
      - "中距离用 5HP 和 2MK 在 max range poke。确认 5HP 命中后接 Yoga Flame 或 SA2。Terry 的 jump-in 用 Yoga Blast anti-air。Terry 的 5MP (8f) startup 比你的 2MP (7f) 稍慢。Power Wave 可以用 Perfect Parry 吸或 Yoga Fire 对波。保持 far to mid range 用标准 zoning gameplan。"
      - "DI 在 Terry 出 Burn Knuckle 或 heavy Power Wave 时使用。DR 用于确认 5HP 后延伸连段。Terry 的 SA1 (Buster Wolf) 是 armored reversal 有 meter 时小心。Drive Reversal 用于 escape close range pressure。SA1 用于 anti-air 或逆转。SA3 在关键时刻使用。对局节奏：标准远距离 zoning gameplan，punish Burn Knuckle，anti-air jump-in。"
    keyMoves: ["5HP", "Yoga Fire (LP)", "Yoga Blast"]
  - opponent: "mai"
    difficulty: "disadvantageous"
    summary: "Mai 的 fan projectile 多角度发射和 air mobility 让 Dhalsim 的 anti-air 和 zoning 都面临挑战"
    strategies:
      - "Mai 的核心威胁是 fan projectile 的多角度发射和 air mobility。她的 air fan 让她可以在空中持续骚扰——你的 Yoga Blast 需要 pre-emptive timing 才能 anti-air。不要追她空中——等她落地再 punish。她的 5MP 和 2MP range 都很长让 mid-range 也不好打。保持 far range 用 Yoga Fire 和 5HP/2MK 控制。3HK (slide) 可以 low profile 部分 fan trajectory。"
      - "保持 maximum distance 用 Yoga Fire 和 5HP 控制。确认 5HP 命中后接 Yoga Flame。Mai 的 air approach 用 Yoga Blast anti-air 但 timing 需要适应她的 air speed。Mai 的 ground normal 在 close range 很强——保持在 max range。Drill approach 在 Mai 没有 meter 时有效但她的 fan 可以 cover air angle。Perfect Parry 吸 fan 是节省 Drive Gauge 的好方法。"
      - "DI 在 Mai 出 fan projectile 或 air approach landing 时使用。DR 用于确认 5HP 后延伸连段。Mai 的 SA2 是快速 reversal 有 meter 时小心。Drive Reversal 用于 escape close range pressure。SA1 用于 anti-air Mai 的空中 fan attack。SA3 在关键时刻使用。需要比平时更 patient，逐步缩短距离，一旦进入 5HP max range 就持续压制。"
    keyMoves: ["5HP", "Yoga Fire (LP)", "Perfect Parry"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena 的 capoeira range 和 healing 需要 Dhalsim 持续 pressure 来 counter"
    strategies:
      - "Elena 的核心威胁是 deceptive range 的 capoeira kicks 和 healing ability。她的 5MK 和 2MK 的 range 比看起来长，需要保持适当距离。她的 healing 需要时间——不要给她 free heal 的机会，持续用 Yoga Fire 和 5HP 保持 pressure。Yoga Fire 可以 interrupt 她的 heal startup。Elena 的 Mallet Smash (overhead) 需要反应 anti。"
      - "保持 far to mid range 用 5HP 和 2MK 和她交换。确认 5HP 命中后接 Yoga Flame。Elena 的 jump-in 用 Yoga Blast anti-air。保持在 5HP max range 最有利——太近会被她的 capoeira mix-up 打，太远她可以 heal 或 poke。Elena 的 capoeira kicks recovery 长可以 whiff punish。关键是不要给她 free heal——每次她 attempt heal 都要 Yoga Fire 或 5HP interrupt。"
      - "DI 在 Elena 出 multi-hit capoeira move 或 heavy attack 时使用。DR 用于确认 5HP 后延伸连段。SA1 用于 anti-air 或逆转。SA2 用于远距离 poke confirm。SA3 在她 whiff capoeira kick 或 heal attempt 时使用。全程保持远距离 pressure——不给她任何 free heal 或 free approach 的空间。"
    keyMoves: ["Yoga Fire (LP/HP)", "5HP", "Yoga Blast"]
  - opponent: "volcano-handshake"
    difficulty: "advantageous"
    summary: "Volcano Handshake 的慢 approach 让 Dhalsim 可以轻松远距离 zoning"
    strategies:
      - "Volcano Handshake 作为新角色数据有限。根据已有信息，他的核心工具是 Burning Fist 系列攻击，具有高 damage 但 startup 偏慢。用 5HP (11f) 在他的 heavy attack startup 期间打击。Yoga Fire 持续骚扰他的 approach。保持在 far range 用 5HP 和 2MK 在 max range poke。如果他有 armored move 用 OD Yoga Fire 的多段 hit break armor。"
      - "远距离用 Yoga Fire 和 5HP/2MK 持续控制。确认 5HP 命中后接 Yoga Flame。他的 approach 主要是 ground approach——用 Yoga Fire interrupt 和 Yoga Blast anti-air jump-in。保持 standard Dhalsim gameplan：far range zoning + anti-air + poke。Drill Kick approach 在他没有 meter 时有效。"
      - "DI 在他出 heavy attack 或 charge move 时使用。DR 用于确认 5HP 后延伸连段。SA1 用于 anti-air 或逆转。SA3 在关键时刻使用。全程保持远距离 zoning——他的 slow startup 和你的 long range poke 是你的优势。"
    keyMoves: ["Yoga Fire (LP)", "5HP", "2MK"]
---

## Additional Notes

Dhalsim is one of the most iconic Street Fighter characters, returning in Street Fighter 6 with his signature long-range toolkit. His playstyle revolves around controlling space with Yoga Fire projectiles and extended-limb normals, making him the definitive zoner of the roster.

### Core Combo Routes

| Situation | Combo | Damage |
|---|---|---|
| Midscreen BnB | 5HP → LP Yoga Flame | ~2000 |
| Low Confirm | 2MK → LP Yoga Fire | ~1100 |
| Anti-air Confirm | 2HP → HP Yoga Blast | ~1600 |
| Drive Rush Route | 5HP → DR → 2MP → HP Yoga Flame | ~2600 |
| Drill Approach | j.2HK (Drill) → 2MP → LP Yoga Flame | ~2300 |
| Corner Route | 5HP → DR → b+HP → HP Yoga Flame → SA2 | ~4000 |
| Punish Counter | 5HP → DR → b+HP → HP Yoga Flame → SA1 | ~3800 |
| SA2 Confirm | 5HP → SA2 (Yoga Inferno) | ~3200 |
| Critical Art Route | 5HP → DR → b+HP → HP Yoga Flame → SA3 | ~4800 |

### Key Frame Data Reference

| Move | Startup | On Hit | On Block | Notes |
|---|---|---|---|---|
| 5LP | 5f | +3 | -1 | Fastest normal |
| 2LP | 5f | +4 | -2 | Fast confirm |
| 2MP | 7f | +5 | +1 | Close confirm |
| b+HP (Knee) | 7f | +6 | -2 | Close combo filler |
| 5HP | 11f | +3 | -4~-7 | Long range poke |
| 2HP | 9f | KD | -8 | Anti-air |
| 2MK | 10f | +4 | -2 | Long range low |
| 5HK | 13f | KD | -10~-15 | Max range poke |
| 3HK (Slide) | 14f | KD+20 | -18 | Low slide approach |
| LP Yoga Fire | 16f | +5 | -4 | Fast projectile |
| HP Yoga Fire | 20f | +6 | -6 | Heavy projectile |
| LP Yoga Flame | 12f | KD | -6 | Close combo ender |
| HP Yoga Flame | 16f | KD | -8 | Heavy combo ender |
| Yoga Blast (LK) | 10f | KD+38 | -12 | Anti-air special |
| Drill (j.2HK) | 7f | KD+20~30 | -8~-12 | Air approach |
| SA1 (Yoga Ark) | 7f | KD+15 | -25 | Invincible reversal |
| SA2 (Yoga Inferno) | 5f | KD+20 | -30 | Projectile super |
| SA3 (Yoga Sunburst) | 9f | KD+50 | -46 | Fully invincible CA |

### Health and Movement

- **Health:** 9,500 (below average)
- **Forward Walk Speed:** 4.20
- **Back Walk Speed:** 3.60
- **Forward Dash:** 21 frames
- **Back Dash:** 24 frames
- **Prejump Frames:** 5

### Season Updates

- **June 2025 Patch:** Yoga Float speed increased, allowing finer spacing adjustments while airborne. Various hitbox/frame adjustments documented in official Buckler's Boot Camp patch notes.
