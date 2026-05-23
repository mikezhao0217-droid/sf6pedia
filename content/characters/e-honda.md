---
name: "E.Honda"
subtitle: "The Sumo Tormentor"
overview: "E.Honda 是 Street Fighter 系列经典的相扑格斗家，以强大的近身压制力和命令投为核心的 grappler 型角色。他利用 Sumo Headbutt 突进拉近距离，Hundred Hand Slap 提供持续的正面压力，Oicho Throw 命令投让对手不敢一直防御。SF6 新增的 Teppo (铁砲) 系列招式大幅提升了中距离作战能力，Sumo Smash (百贯落とし) 提供了 plus on block 的 overhead 威胁。HP 10500（高于标准），高耐久让他能承受更多风险来拉近距离。SA1 Sumo Spirit 用于 combo 延伸和 confirm，SA2 Super Killer Head Ram 提供全屏突进 punish，SA3 The Ultimate Splash 是强大的 comeback tool。掌握 E.Honda 需要耐心地在中距离寻找机会突入近距离，然后用命令投和 plus frame 压制对手到角落。"
keyMoves:
  - name: "Sumo Headbutt (LP/MP)"
    input: "46P (←蓄→+P)"
    description: "E.Honda 的核心突进技。LP 版本 14f startup，800 damage，突进距离短但 recovery 较好。MP 版本 16f startup，1000 damage，中距离突进。HP 版本 18f startup，1200 damage，长距离突进但被 block 后 punish 窗口大 (-12)。Sumo Headbutt 是 Honda 拉近距离的主要手段——在对手 whiff 或发 projectile 后用 HP 版本突入。LP 版本可以用于中距离 poke battle 中的突袭。OD 版本 (46PP) 有 armor 且 damage 更高，可以穿过分身和 single hit 投射物。注意不要在近距离乱出 HP Headbutt，被 block 后几乎必定被 punish。"
    startup: 14
    active: 8
    recovery: 26
    damage: 800
  - name: "Hundred Hand Slap"
    input: "214P (↓↙←+P，可连打)"
    description: "E.Honda 的标志性百裂张手。LP 版本 6f startup，多段 hit 总 damage 约 600。MP 版本 8f startup，总 damage 约 900。HP 版本 10f startup，总 damage 约 1200。近距离 combo 核心和 pressure tool——on block 大部分版本是 -2 到 +2，HP 版本甚至 plus on block (+1~+3)。OD 版本 (214PP) damage 极高且可以穿投射物，是重要的 reversal 和 confirm 工具。Hundred Hand Slap 的持续性让它成为 corner pressure 的主力——HP 版本 block 后可以继续 Oicho Throw 或 5MP tick throw。"
    startup: 6
    active: 20
    recovery: 18
    damage: 900
  - name: "Oicho Throw"
    input: "360P (近距离←↙↓↘→↗↑↖+P)"
    description: "E.Honda 的命令投，grappler 身份的核心。5f startup，LP 版本 1200 damage，MP 版本 1500 damage，HP 版本 1700 damage。投后 knockdown +26~+30，提供 okizeme 机会。HP Oicho Throw damage 最高但 whiff recovery 极长。Oicho Throw 是 Honda 近距离混合博弈的关键——当对手害怕 Hundred Hand Slap 和 plus frame normal 时，Oicho Throw 就有了价值。tick throw setup：5LP (+3 on hit) → walk forward Oicho Throw，或者 Hundred Hand Slap (plus on block) → Oicho Throw。OD 版本 (360PP) 有 invincible startup，可以作为 reversal 投使用。"
    startup: 5
    active: 2
    recovery: 28
    damage: 1500
  - name: "Sumo Smash (Neko Damashi)"
    input: "214K (↓↙←+K)"
    description: "E.Honda 的空中屁股坐击，overhead 属性。LK 版本 22f startup，1000 damage，近距离 overhead。MK 版本 24f startup，1200 damage，中距离。HK 版本 26f startup，1400 damage，远距离但 recovery 最长。Sumo Smash 最重要的是 on block 是 +2~+4，这意味着即使被防 Honda 仍然有 frame advantage！这让 Sumo Smash 成为一个低风险的 approach 工具——被 block 也赚 frame，hit 了给 knockdown。OD 版本 (214KK) 有更快的 startup 和更高的 damage，且 hit 后可以 combo。在 opponent cornered 时 Sumo Smash → Oicho Throw 是极强的高/低混合。"
    startup: 22
    active: 6
    recovery: 16
    damage: 1200
  - name: "Teppo (铁砲张手)"
    input: "236P (↓↘→+P)"
    description: "SF6 新增招式，三段掌击。LP 版本 10f startup，400×3 = 1200 damage。MP 版本 12f startup，500×3 = 1500 damage。HP 版本 14f startup，600×3 = 1800 damage。Teppo 是 Honda 中距离作战的重要工具——有不错的 range 和 pushback，on hit 给 knockdown。HP Teppo 的 range 非常远可以 catch opponent walking back。可以 cancel 进 SA1 或 SA2。OD 版本 (236PP) 有 armor properties 和更高的 damage，是 Honda 少数有 super armor 的招式。Teppo 大幅改善了 Honda 在中距离的威胁，让他不再完全依赖 Sumo Headbutt 突进。"
    startup: 10
    active: 12
    recovery: 22
    damage: 1200
  - name: "5MP (Medium Punch)"
    input: "MP"
    description: "Honda 中距离最核心的 normal。8f startup，400 damage。Range 优秀，是 Honda spacing 的基础。On hit +3，on block +1，是 Honda 少数 plus on block 的 ground normal。5MP → 5MP stagger pressure 是 Honda 中距离的基本进攻节奏。5MP → Oicho Throw 是经典的 tick throw。5MP 被 DI 可以用 OD Hundred Hand Slap 或 OD Teppo 来 absorb。在 mid-range 不断用 5MP poke 然后混合 DR (Drive Rush) 5MP 或 Headbutt 突入是 Honda 的基本 game plan。Counter Hit 5MP 可以 combo 进 HP Hundred Hand Slap。"
    startup: 8
    active: 4
    recovery: 16
    damage: 400
  - name: "2MK (Crouching Medium Kick)"
    input: "2MK (↓+MK)"
    description: "Honda 的远距离 low poke。10f startup，500 damage。Range 比 5MP 更远，是让对手不敢站防的关键 low。On hit +4，on block -1。2MK → LP Teppo 是基础 confirm 路线。2MK 主要用于 mid-range 的 low attack，配合 5MP 和 Sumo Smash (overhead) 形成高中低三维混合。2MK 被 DI 比较危险，所以不要 predictable 地使用。在 corner pressure 中 2MK → 5MP stagger 是有效的 block string。"
    startup: 10
    active: 4
    recovery: 18
    damage: 500
  - name: "Harai Kick"
    input: "6HK (→+HK)"
    description: "Honda 的独特攻击，前进步伐踢击。12f startup，700 damage。有前进位移，是 Honda approach 的 normal 工具。On hit +2，on block -4。Harai Kick 的 range 比看起来远，可以 catch opponent trying to walk back。主要用于 mid-range poke battle 中的 approach 和 whiff punish。6HK → Sumo Headbutt 是远距离 confirm 路线。也可以 cancel 进 special move。"
    startup: 12
    active: 4
    recovery: 20
    damage: 700
  - name: "Sumo Spirit (SA1)"
    input: "236236P (↓↘→↓↘→+P)"
    description: "Level 1 Super Art。7f startup，2000 damage (2200 as CA)。Strike invincible frames 1-7。Honda 以相扑姿态冲撞，可以从大多数 normal 和 special cancel进入。是 Honda 的 primary combo extender 和 reversal tool——5MP CH → Sumo Spirit 是基础 confirm。Knockdown +20 提供 okizeme。用于 anti-air、reversal 和 confirm 终结。有 meter 时对手的 pressure 需要更加谨慎，Honda 可以在 gap 中插入 SA1 逆转。也可以作为 projectile punish 使用。"
    startup: 7
    active: 10
    recovery: 40
    damage: 2000
  - name: "Super Killer Head Ram (SA2)"
    input: "214214K (↓↙←↓↙←+K)"
    description: "Level 2 Super Art。9f startup，2800 damage (3200 as CA)。Strike/Projectile invincible frames 1-8。全屏突进头锤，是 Honda 最 powerful 的 punish tool。可以从 full screen 惩罚对手的任何 commitment——whiffed move、recovery 长的 special、甚至部分 projectile。SA2 是 Honda 在中远距离的终极威胁——对手知道 SA2 的存在就必须在 full screen 更加谨慎。Damage 2800 非常可观，confirm 进 SA2 是 Honda 最高 damage 的路线之一。作为 reversal 使用时 invincible 窗口足够 cover 大多数 meaty timing。"
    startup: 9
    active: 8
    recovery: 45
    damage: 2800
  - name: "The Ultimate Splash (SA3)"
    input: "236236K (↓↘→↓↘→+K) / Level 3"
    description: "Level 3 Super / Critical Art。9f startup，4200 damage (4700 as Critical Art)。Fully invincible frames 1-12。Honda 的终极 comeback tool——巨大的飞身坐击全程无敌。用于 punish 对手的 commitment move、reversal 和 confirm 终结。Knockdown +50 (+14 as CA)。CA damage 4700 可以在 low HP 时逆转局势。SA3 的 range 虽然不如 SA2 那么远，但 startup 快且 fully invincible 让它成为最可靠的 reversal。在 Honda 濒死时 SA3 CA 是最恐怖的 comeback threat。"
    startup: 9
    active: 10
    recovery: 50
    damage: 4200
tips:
  - "中距离 5MP 是 Honda spacing 的核心。8f startup，on block +1，range 优秀。基本 game plan：在 mid-range 用 5MP 和 2MK poke 对手，找机会用 DR 5MP 或 Sumo Headbutt 突入近距离。一旦进入近距离就用 Hundred Hand Slap (plus on block) 和 Oicho Throw 的混合压制对手。5MP → 5MP stagger pressure 让对手不敢乱动，然后突然 walk forward Oicho Throw。记住不要在远距离乱出 HP Headbutt——被 block 后必定被 punish。"
  - "Sumo Smash (百贯落とし) 是 Honda 最被低估的工具。On block 是 +2~+4，即使被防 Honda 仍然有利！在中距离突然出 Sumo Smash 可以 closing distance 同时保持 advantage。Sumo Smash (被 block +3) → Oicho Throw 是极强的高/低/投混合——对手如果站防 Sumo Smash 就吃 Oicho Throw，如果蹲防就吃 2MK low。在 corner 这个 mixup 更加致命。OD Sumo Smash hit 后可以 combo 进 SA1 或 SA2，damage 非常可观。"
  - "Oicho Throw 的 tick throw setup 是 Honda 近身压制的灵魂。最基础的是 5LP (+3 on hit) → walk forward Oicho Throw。更高级的有：Hundred Hand Slap (plus on block) → walk forward Oicho Throw，5MP (+1 on block) → Oicho Throw，以及 2LP (+4 on hit) → Oicho Throw。对手一旦开始 delay tech 或 jump escape 你的 tick throw，就改用 5MP stagger 或 2MK low 来 punish 他们的 escape 尝试。OD Oicho Throw 有 invincible 可以作为 reversal。"
  - "Drive Rush 是 Honda 拉近距离的关键系统。DR 5MP 是最基础的 approach——从 mid-range 突然加速拉近距离，on block 仍然 +3。DR 2HP 是 overhead approach。DR cancel 从 5MP 或 2MK 可以让 Honda 突然进入 command throw range。Honda 的 DR 主要用于从 mid-range 突入 close range——不要浪费 DR 在已经 close 的距离。在有 3+ Drive bar 时 Honda 的威胁最大，因为可以 DR 突入后继续 pressure。"
  - "SA2 Super Killer Head Ram 是 Honda 最独特的工具——全屏 punish。对手在任何距离的 whiff 或 recovery 长的 move 都可以被 SA2 惩罚。这给了 Honda 一种 passive threat——即使不主动突入，对手也必须小心不要在 full screen 乱出 move。配合 SA1 的 combo confirm 和 SA3 的 fully invincible reversal，Honda 的 Super Art 选择非常灵活。建议 default 用 SA1 用于 combo 和 reversal，SA2 用于 full screen punish 和 zoner matchup。"
  - "Anti-air 选项：HP Hundred Hand Slap 的 OD 版本可以用作 anti-air。2HP 是基本的 anti-air normal。5HP 也可以 stuff 部分 jump-in。最重要的 anti-air 是 SA1 Sumo Spirit——7f startup invincible，可以从任何 normal confirm。在对手喜欢 jump-in escape Honda pressure 时，准备 SA1 anti-air 是关键。也可以用 OD Sumo Smash 来 anti-air——空中遇到提前出 Sumo Smash 可以截击。"
  - "Honda 的 corner pressure 是 game plan 的终极目标。一旦把对手逼到角落，用 5MP/2MP stagger pressure 配合 Hundred Hand Slap 和 Oicho Throw 的混合。Sumo Smash overhead 在 corner 更加有效因为对手不能后退。HP Hundred Hand Slap block 后是 plus，可以继续 pressure 或突然 Oicho Throw。DI 在 corner 是双刃剑——Honda 可以用 DI 逼对手 but 对手也可能 DI escape pressure。保持 Drive gauge 管理很重要——burnout 的 Honda 在 corner 之外几乎没有威胁。"
matchups:
  - opponent: "luke"
    difficulty: "even"
    summary: "标准 mid-range 对局，双方的工具都有发挥空间"
    strategies:
      - "Luke 的中距离工具 (5MP, 2MP, Flash Knuckle) 和 Honda 的 5MP/2MK 形成均势 poke battle。Luke 的 Sand Blast 需要用 Sumo Headbutt 或 OD Hundred Hand Slap 穿过。注意 Luke 的 Flash Knuckle (214P) 系列——LP 版本 -6 可以用 5MP punish，但 HP 版本有更远的 pushback 可能需要 walk forward 才能打到。Luke 的 DR pressure 很强，Honda 需要用 5MP mash 或 OD Oicho Throw 来 interrupt。"
      - "Honda 在近距离有优势——Oicho Throw 的存在让 Luke 不敢一直 block。Luke 的 AA (2HP → Flash Knuckle) 很可靠所以 Honda 不要过度 jump-in。用 DR 5MP 从 mid-range 突入比 jump-in 更安全。Luke 的 SA2 (Pale Blue) 全屏判定需要注意 timing。"
      - "DI 使用：Luke 的 Flash Knuckle 和 Sand Blast recovery 长，用 DI 可以 punish。Honda 自己的 Hundred Hand Slap 被 DI 比较危险，注意不要 predictable。DR/Drive Reversal：用 Drive Reversal escape Luke 的 corner pressure，尤其是 Flash Knuckle 系列。SA2 Super Killer Head Ram 可以 punish Luke 的远距离 Sand Blast。"
    keyMoves: ["5MP", "Sumo Headbutt", "Oicho Throw"]
  - opponent: "ryu"
    difficulty: "even"
    summary: "经典对波对决，Honda 需要耐心穿越波动拳"
    strategies:
      - "Ryu 的 Hadouken 是 Honda 需要穿越的主要障碍。用 LP Sumo Headbutt 在 mid-range 穿波，OD Hundred Hand Slap absorb 投射物。不要 full screen 乱冲——HP Headbutt 被 Ryu 确认 Hadouken 后可以 SA2 punish。Ryu 的 5MP 和 2MK range 和 Honda 差不多，mid-range 是均势。注意 Ryu 的 Hashogeki——可以 confirm 进 SA1 或 SA3。"
      - "一旦进入近距离 Honda 占优——Oicho Throw 让 Ryu 不敢一直 block，Hundred Hand Slap plus on block 可以持续 pressure。Ryu 的 Shoryuken 是 invincible reversal 所以不要 predictable 地 pressure。Ryu whiff Shoryuken 后用 HP Hundred Hand Slap 或 Oicho Throw 重罚。Ryu 的 c.MK → Hadouken confirm 是中距离威胁，用 5MP  outrange 或者 block 后用 Sumo Headbutt 反击。"
      - "DI 用于 punish Ryu 的 Hadouken recovery。Honda 的 SA2 Super Killer Head Ram 可以从 full screen punish Ryu 的 Hadouken——这是让 Ryu 不敢在远距离无脑发波的关键。SA1 用于 combo confirm 和 anti-air。在 Ryu 有 SA3 meter 时不要乱出 commitment move。"
    keyMoves: ["Sumo Headbutt", "OD Hundred Hand Slap", "SA2"]
  - opponent: "chun-li"
    difficulty: "disadvantageous"
    summary: "Chun-Li 的速度和 poke range 给 Honda 造成很大压力"
    strategies:
      - "Chun-Li 的 5MP (9f, range 极远) 和 2MP 是 mid-range 最强的 poke 工具之一。Honda 的 5MP range 不如 Chun-Li，需要更耐心地找机会。Chun-Li 的 Kikoken 比较快，Honda 需要用 Sumo Headbutt 穿越但 timing 更严格。Chun-Li 的 Hazanshu (214K) overhead 可以 catch Honda 蹲防，注意站防切换。Chun-Li 的 walk speed 比 Honda 快很多，她可以轻松地 spacing in and out。"
      - "Honda 需要用 DR 来拉近距离——DR 5MP 或 DR 2HP 是主要 approach。一旦 close Honda 的 Oicho Throw 和 Hundred Hand Slap 压制很强，Chun-Li 没有 invincible reversal (除了 SA) 所以 corner pressure 更有效。但 Chun-Li 的 2LP mashing 可以 interrupt Honda 的 gap，所以 stagger timing 要变化。Chun-Li 的 legs (Spinning Bird Kick) 有 armor break 属性需要注意。"
      - "SA2 从 full screen punish Chun-Li 的 Kikoken 或 whiffed move。DI 用于 punish Chun-Li 的 long recovery normal。注意 Chun-Li 的 SA2 (Sensenpfu) 是全屏多段 kick rush，Honda 在 mid-range 不要给 free opening。Drive Reversal 用于 escape Chun-Li 的 corner pressure——她的 5LP/2LP stagger 非常强。"
    keyMoves: ["DR 5MP", "Sumo Headbutt", "Oicho Throw"]
  - opponent: "jamie"
    difficulty: "advantageous"
    summary: "Honda 的耐久和近距离压制克制 Jamie 的酒后进攻"
    strategies:
      - "Jamie 开局需要喝酒来获得 power up，Honda 可以利用这段时间主动进攻。用 Sumo Headbutt 在 Jamie 喝酒动画时突入是 free damage。Jamie 的 5MP 和 2MK range 一般，Honda 在 mid-range 可以用 5MP outrange。Jamie 的 Broken Tea Cup (4HK) overhead 需要注意但 startup 慢 (20f+) 可以反应。Jamie 满酒后攻击力大增但 Honda 的 10500 HP 可以承受更多 hit。"
      - "一旦进入近距离 Honda 完全压制 Jamie。Oicho Throw 让 Jamie 不敢 block，Hundred Hand Slap plus on block 持续 pressure。Jamie 的 reversal option 有限 (需要 SA)，corner pressure 对 Jamie 非常致命。Jamie 的 free drink command (214P) 有 recovery，Honda 可以用 Sumo Headbutt 或 Teppo punish。Jamie 的 SWK (236K) 被 block 后是 -4~-6，Honda 可以用 5MP punish。"
      - "DI 用于 punish Jamie 的 214P 喝酒和长 recovery special。Jamie 的 SA1 (Goten Senpukyaku) 有 invincible startup 但 damage 不高。SA2 Super Killer Head Ram 可以在 Jamie 从 full screen 喝酒时 punish。Honda 的 SA1 用于 combo confirm 和 reversal。Drive Rush 积极使用拉近距离。"
    keyMoves: ["5MP", "Oicho Throw", "Sumo Headbutt"]
  - opponent: "guile"
    difficulty: "disadvantageous"
    summary: "经典不利对局，Guile 的 zoning 完美克制 Honda 的突进"
    strategies:
      - "Guile 是 Honda 最难打的对局之一。Sonic Boom 的 recovery 极短让 Honda 很难穿波。HP Sumo Headbutt 被 Guile block 后几乎必定被 punish (-12)。Honda 需要非常耐心地 walk and block 逼近——不要急，等 Guile whiff normal 或 Sonic Boom recovery 才突进。OD Hundred Hand Slap 可以 absorb Sonic Boom 但 Drive 消耗大。Guile 的 2MK (远距离 low) 和 5HP (对空) 都是顶级的。"
      - "如果 Honda 能成功拉近距离则有机会。Guile 的 Flash Kick 被 block 后 -20+ 是 free punish，但 Guile 通常不会轻易出。在 close range 用 Oicho Throw 混合 5MP stagger pressure。Guile 的 5LP 和 2LP 是 fast poke 可以 interrupt Honda 的 approach。Guile 的 back charge 意味着他一直有 Flash Kick 威胁，Honda 需要用 tick throw timing 来 bypass。DR 5MP 是最有效的 approach 方式。"
      - "SA2 Super Killer Head Ram 是这个对局的关键——从 full screen punish Guile 的 Sonic Boom。如果 Guile 知道你有 SA2 就会更谨慎地发波，给 Honda 更多呼吸空间。DI 用于 absorb Sonic Boom 但 Guile 可以 DI back 所以要小心。Drive Reversal 用于 escape Guile 的 corner pressure。在 Guile 有 SA2 (Sonic Hurricane) 时不要 full screen 突进。"
    keyMoves: ["SA2", "OD Hundred Hand Slap", "DR 5MP"]
  - opponent: "kimberly"
    difficulty: "even"
    summary: "Kimberly 的速度 vs Honda 的耐久，看谁先建立优势"
    strategies:
      - "Kimberly 的 run mixup (236K 系列) 是她的核心进攻。LP Bushin Senpukyaku 被 block 后 -4，Honda 可以用 5MP punish。HP 版本 overhead 需要站防。Kimberly 的 5MP 和 2MP speed 快但 range 一般，Honda 可以用 5MP outrange。Kimberly 的 shuriken (214P) 有 recovery，可以用 Sumo Headbutt punish。注意 Kimberly 的 teleport (V-Trigger style move) 可以突然出现在 Honda 身后——用 5MP 或 2MP mash 来 cover。"
      - "Honda 在近距离有优势——Oicho Throw 和 Hundred Hand Slap 压制让 Kimberly 难以呼吸。Kimberly 的 2LP 速度快可以 interrupt gap 但 Honda 的 stagger timing 变化可以 beat。一旦 corner Kimberly，她的 escape option 非常有限 (没有 invincible reversal 除了 SA)。Kimberly 的 jump-in strong 但 Honda 有 2HP 和 SA1 anti-air。"
      - "DI 用于 punish Kimberly 的 shuriken 和 run special 的 recovery。Kimberly 的 SA1 (Bushinryu Senpukyaku) 从 anywhere 都很危险。SA2 用于 full screen punish Kimberly 的 commit。Drive Reversal escape Kimberly 的 teleport pressure。注意 Kimberly 的 OD run 系列——有 armor properties 不要尝试 mash。"
    keyMoves: ["5MP", "Oicho Throw", "2HP (anti-air)"]
  - opponent: "juri"
    difficulty: "even"
    summary: "Juri 的中距离工具很强但 Honda 可以用耐久硬扛"
    strategies:
      - "Juri 的 5MP 和 2MP 是顶级的中距离 poke，range 和 speed 都优秀。Honda 需要用 5MP 和 2MK 在 max range 交换。Juri 的 Fuharenkyaku (214K) 系列——LK 是 low，MK 是 mid，HK 是 overhead——形成高中低混合。注意 Juri 的 Fuha stock——有 stock 时她的 move 被强化。在 Juri 没 stock 时更积极地 approach。Juri 的 2MK → Fuharenkyaku confirm 很强，Honda 在 mid-range 要注意 spacing。"
      - "Honda 在 close range 有优势。Oicho Throw 惩罚 Juri 的 block habit，Hundred Hand Slap plus on block 持续 pressure。Juri 有 2LP mash 可以 interrupt gap 所以 stagger timing 要变化。Juri 的 Shiku (623K) 是 invincible reversal 所以不要 predictable 地 meaty。一旦 Juri whiff Shiku 就用 HP Hundred Hand Slap 或 Oicho Throw 重罚。Honda 的高 HP (10500) 让他可以承受 Juri 的 poke 然后 find one opening 逆转。"
      - "DI 用于 absorb Juri 的 Fuharenkyaku 和 projectile。SA2 punish Juri 的 long recovery move。Drive Reversal escape Juri 的 corner pressure——她的 5LP stagger 非常强。SA1 用于 combo confirm。注意 Juri 的 SA2 (Feng Shui Engine) 激活后获得 stock refill 和强化 move——在这段时间更 defensive。"
    keyMoves: ["5MP", "Oicho Throw", "Hundred Hand Slap"]
  - opponent: "ken"
    difficulty: "even"
    summary: "Ken 的 rushdown vs Honda 的 grappler 压制，谁先手谁占优"
    strategies:
      - "Ken 的 5MP 和 2MP 是优秀的 mid-range normal。Ken 的 Jinrai Kick (236K) 系列——HK 是 overhead，LK 是 mid，MK 是 low——形成 strong mixup。Honda 需要注意区分 Jinrai 系列。Ken 的 Hadouken 比 Ryu 的稍弱但仍然需要注意。Ken 的 DR pressure 非常强，DR 5MP → 5MP → Jinrai 是常见 string。Honda 可以在 gap 用 OD Oicho Throw interrupt。Ken 的 2MK → Hadouken confirm range 远，Honda 在 mid-range 要小心。"
      - "Honda 在 close range 的 Oicho Throw 威慑让 Ken 不能一直 block。Hundred Hand Slap plus on block 持续 pressure。Ken 的 Shoryuken 是 invincible reversal 所以 Honda 需要 tick throw timing 来 beat。Ken whiff Shoryuken 后是 free punish——HP Hundred Hand Slap 或 walk forward Oicho Throw。Ken 的 run cancel (623K) 系列可以突然 close distance，Honda 需要保持冷静用 5MP 或 2LP mash。"
      - "DI 用于 punish Ken 的 Hadouken 和 Jinrai Kick recovery。SA2 从 full screen punish Ken 的 projectile 或 commit move。Drive Reversal escape Ken 的 corner pressure。注意 Ken 的 SA1 (Shippu Jinraikyaku) 是 fast combo ender 和 reversal。Ken 的 SA3 是 fully invincible reversal，Honda 在 Ken 有 meter 时更谨慎。"
    keyMoves: ["5MP", "Oicho Throw", "Sumo Headbutt"]
  - opponent: "blanka"
    difficulty: "even"
    summary: "两个 tricky 角色的对决，Honda 需要读 Blanka 的电球和移动"
    strategies:
      - "Blanka 的 Blanka Ball (46P) 是突进技，和 Honda 的 Sumo Headbutt 类似。LP Blanka Ball 被 block 后 -6 可以用 5MP punish。HP Blanka Ball recovery 更长。Blanka 的 electricity (piano input) 是 close range pressure tool 但 Honda 的 Oicho Throw 可以 punish。Blanka 的 2MK (slide) range 远但 recovery 长 (-14) 可以 punish。注意 Blanka 的 hop (HCF/K)——可以突然 close distance 或 mixup high/low。"
      - "Honda 在 close range 明显优势——Oicho Throw 让 Blanka 不敢 block，Hundred Hand Slap plus on block 持续 pressure。Blanka 的 5LP 速度快但 damage 低。Blanka 的 Blanka Chan bomb (projectile) 需要用 Sumo Headbutt 穿过或 block 然后 approach。Blanka 的 vertical hop (upback K) 可以突然改变 position，Honda 需要用 2HP 或 SA1 anti-air。"
      - "DI 用于 punish Blanka Ball 和 slide 的 recovery。SA2 从 full screen punish Blanka Ball。注意 Blanka 的 SA1 (Dynamic Rolling) 有 invincible startup 可以作为 reversal。Blanka 的 SA3 (Shout of Earth) 是 fully invincible，Honda 在 Blanka 有 meter 时不要乱 commit。DR 积极使用来拉近距离。"
    keyMoves: ["5MP", "Oicho Throw", "SA2"]
  - opponent: "dhalsim"
    difficulty: "advantageous"
    summary: "Honda 的突进工具克制 Dhalsim 的远距离控制"
    strategies:
      - "Dhalsim 是远程控制型角色但 Honda 有多种工具穿越。LP Sumo Headbutt 可以穿 LP Yoga Fire。OD Hundred Hand Slap absorb 投射物。Dhalsim 的 5HP 和 5HK range 极远但 recovery 长——用 DI 可以 punish。Dhalsim 的 HP 只有 9500，Honda 的 Oicho Throw damage 很可观。SA2 Super Killer Head Ram 从 full screen punish Dhalsim 的任何 projectile 和 long recovery normal——这是 Dhalsim 最害怕的。"
      - "一旦 close Dhalsim 几乎没有 escape option。Oicho Throw 和 Hundred Hand Slap 压制 Dhalsim 到角落就基本赢了。Dhalsim 的 Yoga Teleport 有 recovery 可以用 5MP 或 2MK punish。Dhalsim 的 Yoga Blast (anti-air) 对 ground Honda 无效。Honda 的高 HP 让他可以承受几发 Yoga Fire 然后 find opening。不要 jump-in——Dhalsim 的 anti-air (Yoga Blast, 2HP) 太强。用 DR 和 Sumo Headbutt 地面突进。"
      - "DI 是 Dhalsim 的噩梦——他的 long recovery normal 都可以被 DI punish。SA2 从 full screen 惩罚 Dhalsim 是 key matchup tool。SA1 用于 combo confirm。Dhalsim 的 SA1 (Yoga Ark) invincible 但 range 短——在 max range pressure 时注意。Dhalsim 的 SA3 (Yoga Sunburst) fully invincible 是 comeback threat。"
    keyMoves: ["Sumo Headbutt", "SA2", "DR 5MP"]
  - opponent: "dee-jay"
    difficulty: "disadvantageous"
    summary: "Dee Jay 的快速 mixup 和 projectile 控制让 Honda 难以接近"
    strategies:
      - "Dee Jay 的 Air Slasher (46P) 是快速 projectile，recovery 比 Guile 的 Sonic Boom 稍长但仍然很难 punish。Dee Jay 的 2MP 和 5MP 是 fast poke，mid-range 能力和 Honda 相当。Dee Jay 的 Jackknife Maximum (236K) 被 block 后 -4~-8 可以 punish，但 Dee Jay 通常用 MP 版本 (+2 on hit) 来维持 pressure。Dee Jay 的 Double Rolling Sobat (214K) overhead 需要站防。注意 Dee Jay 的 Musical Chair (command grab)——虽然 Honda 是 grappler 但也要小心被 grab。"
      - "Honda 需要耐心地 walk and block 逼近。一旦 close Honda 的 Oicho Throw 和 Hundred Hand Slap 有优势。Dee Jay 的 2LP 速度快可以 interrupt gap 所以 stagger timing 要变化。Dee Jay 有 invincible reversal (SA1 Jus Cool) 所以不要 predictable pressure。Dee Jay 的 panic meter 填满后获得新的 mixup option。DR 5MP 是最有效的 approach。"
      - "DI 用于 punish Dee Jay 的 Air Slasher 和 Jackknife recovery。SA2 从 full screen punish projectile。注意 Dee Jay 的 SA1 是 invincible reversal。Drive Reversal escape Dee Jay 的 corner pressure。在 Dee Jay 有 SA2/SA3 时不要 full screen 乱冲。"
    keyMoves: ["DR 5MP", "Oicho Throw", "Sumo Headbutt"]
  - opponent: "manon"
    difficulty: "advantageous"
    summary: "Honda 的 damage output 和耐久在 grappler 内战中占优"
    strategies:
      - "Manon 是另一个 grappler 但她的命令投需要 medal stack 来强化。开局 Manon 的 command throw damage 低 (约 1200)，Honda 的 Oicho Throw 直接就有 1500+ damage。Manon 的 5MP 和 2MP range 好 但 Honda 的 5MP 在 closer range 更强。Manon 的 4HK (overhead) startup 慢可以 reaction block。Manon 的 Rond-point (236K) 被 block 后是 -6 可以用 5MP punish。Honda 的高 HP (10500) vs Manon 的标准 HP 让 Honda 在 trade battle 中占优。"
      - "这个对局是 grappler 内战所以 positioning 特别重要。Honda 需要在 command throw range 内建立 advantage。5MP stagger pressure → Oicho Throw 是基本 pattern。Manon 也在找 command throw 所以 Honda 不要太 predictable。Manon 的 SA1 (Arabesque) 是 invincible reversal 可以 beat Honda 的 pressure。Honda 的 Hundred Hand Slap plus on block 在这个对局特别有效——Manon 的 close range 选项没有 Honda 多。"
      - "DI 用于 punish Manon 的 Rond-point 和 long recovery normal。SA2 从 mid-range punish Manon 的 commit。注意 Manon 的 medal stack——每次 command throw 成功她的 damage 和 range 都增加。早期不要让 Manon free medal。Drive Reversal escape Manon 的 corner pressure。"
    keyMoves: ["5MP", "Oicho Throw", "Hundred Hand Slap"]
  - opponent: "marisa"
    difficulty: "even"
    summary: "高伤害对决，谁的 hit 确认更精准谁赢"
    strategies:
      - "Marisa 是高 damage brawler，每一击都很重。她的 5MP 和 2MP 有 armor (Gladius system) 让 Honda 的 poke 更危险。Marisa 的 Quadriga (214P) 被 block 后 -8~-10 可以 punish，但 armor 让它很难在 active frames 被 stuff。Marisa 的 6HP (overhead) 启动慢但 damage 高。注意 Marisa 的 Scutum (214K) counter stance——如果 Honda 用 normal 她可以 counter hit 然后 combo。用 Oicho Throw beat Scutum (counter stance 不能 beat throw)。"
      - "Honda 在这个对局需要更多使用 throw 而不是 normal attack 来 beat Marisa 的 armor。Oicho Throw 是 key——Marisa 的 armor 对 throw 无效。Hundred Hand Slap 的 multi-hit 可以 beat single hit armor 但 timing 需要精确。Honda 的高 HP (10500) vs Marisa 的标准 HP 让 Honda 可以多扛一两次 hit。Marisa whiff Gladius 后用 Sumo Headbutt 或 Teppo punish。"
      - "DI 用于 absorb Marisa 的 Gladius 系列——她的 armor move 被 DI 可以 break。SA1 用于 combo confirm 和 anti-air。SA2 从 mid/full screen punish Marisa 的 commit move (Gladius recovery 长)。注意 Marisa 的 SA3 (Protesilaus) damage 极高 (4500+)，Honda 不要给她 free opening。Drive Reversal escape Marisa 的 corner pressure。"
    keyMoves: ["Oicho Throw", "Teppo", "Sumo Headbutt"]
  - opponent: "jp"
    difficulty: "disadvantageous"
    summary: "JP 的远距离控制让 Honda 极难接近"
    strategies:
      - "JP 是 SF6 最强的 zoner 之一。Torre Ann (spike projectile) 从 full screen 控制 Honda 的移动。JP 的 5HP 和 2HP range 极远可以 stuff Honda 的 approach。JP 的 2MK → special confirm 在 mid-range 很强。JP 的 levitation 可以从空中发 projectile，Honda 的 anti-air (2HP) range 不够。最难的是 JP 的 comfort zone 在 full screen 而 Honda 需要 close range——HP Sumo Headbutt 突进被 JP 的 normal 和 spike punish。"
      - "Honda 需要极其耐心地 walk and block，用 OD Hundred Hand Slap absorb spike。DR 5MP 从 mid-range 突入是最佳 approach。一旦 close Honda 有优势——Oicho Throw 和 Hundred Hand Slap 让 JP 没有 breathing room。JP 的 5LP 和 2LP 速度快可以 interrupt gap 但 Honda 的 stagger timing 可以 beat。JP 的悲叹之树 (236P) 有 recovery 可以用 Sumo Headbutt punish。JP 在 corner 几乎没有 escape option 除了 SA。"
      - "SA2 是这个对局最重要的 tool——从 full screen punish JP 的 Torre Ann 和悲叹之树。如果 JP 知道你有 SA2 meter 他会更谨慎地发 spike。DI 用于 absorb JP 的 projectile 但 JP 可以 DI back。Drive Reversal escape JP 的 close pressure (rare 但存在)。SA1 用于 combo confirm 和 reversal。这个对局考验 Honda 玩家的耐心。"
    keyMoves: ["SA2", "DR 5MP", "OD Hundred Hand Slap"]
  - opponent: "zangief"
    difficulty: "even"
    summary: "终极 grappler 内战，谁先 command throw 谁赢"
    strategies:
      - "Grappler 内战的核心是 command throw range 和 tick throw timing。Zangief 的 SPD range 比 Honda 的 Oicho Throw 稍远，但 Honda 的 startup 更快 (5f vs 5f 实际相当)。Honda 的 5MP (+1 on block) 是 tick throw 的核心——5MP → Oicho Throw。Zangief 的 5MP 和 2MP 也在 tick throw range。双方的 HP 都高 (10500 vs 11000) 所以 damage race 需要 more hit。Zangief 的 lariat (PPP) 有 armor 可以 beat Honda 的 normal 但 throw 可以 beat lariat。"
      - "Honda 的 advantage 是有更好的 mid-range tool (Teppo, Sumo Smash) 和更灵活的 approach。Zangief 依赖 SPD fear 来建立 offense，Honda 也有 Oicho Throw fear 但同时有 better poke。用 5MP 和 2MK 在 max range poke Zangief，不要走进 SPD range。如果 Zangief whiff SPD 用 HP Hundred Hand Slap 或 SA1 punish。Zangief 的 condor spire (approach move) 被 block 后可以 punish。"
      - "DI 用于 absorb Zangief 的 lariat 和 long recovery normal。SA1 用于 combo confirm。SA2 从 mid-screen punish Zangief 的 commit。注意 Zangief 的 SA1 (Bolshoi Suplex) invincible reversal。Zangief 的 SA3 (Final Atomic Buster) 是全 game 最恐怖的 command throw——4500+ damage。Honda 在 Zangief 有 SA3 时不要在 close range 乱 commit normal。"
    keyMoves: ["5MP", "Oicho Throw", "HP Hundred Hand Slap"]
  - opponent: "lily"
    difficulty: "even"
    summary: "Lily 的 wind charge mixup vs Honda 的 grappler 压制"
    strategies:
      - "Lily 是 wind warrior，使用 Tomahawk 和 condor dive 进行 mid-range 战斗。Lily 的 5MP 和 2MP range 一般但 speed 快。Lily 的 condor spire (236K) approach move 被 block 后 -4~-6 可以用 5MP punish。Lily 的 wind charge (214P) 强化她的下一个 special——强化后的 move damage 和 range 都增加。注意 Lily 的 overhead (4HK) 和 low (2MK) mixup。Lily 的 HP 标准 (10000) 比 Honda 低。"
      - "Honda 在 close range 明显优势——Oicho Throw 让 Lily 不敢 block。Hundred Hand Slap plus on block 持续 pressure。Lily 有 invincible reversal (SA1) 所以不要 predictable pressure。Lily 的 2LP 可以 interrupt gap 所以 stagger timing 要变化。Lily whiff condor dive 后是 free punish。Honda 的高 HP 可以承受 Lily 的 poke 然后找 one opening 逆转。"
      - "DI 用于 punish Lily 的 condor spire 和 long recovery normal。SA2 从 mid/full screen punish Lily 的 commit。注意 Lily 的 SA1 (Rising Fang) invincible reversal。Drive Reversal escape Lily 的 corner pressure。DR 5MP 是 Honda 的主要 approach 方式。"
    keyMoves: ["5MP", "Oicho Throw", "Sumo Headbutt"]
  - opponent: "cammy"
    difficulty: "even"
    summary: "Cammy 的速度和 pressure vs Honda 的耐久和投技"
    strategies:
      - "Cammy 是 rushdown character 速度极快。她的 Cannon Spike (623K) 是 invincible anti-air 和 reversal。Cammy 的 5MP 和 2MP speed 快 range 一般，和 Honda 的 5MP 在 mid-range 基本均势。Cammy 的 Cannon Strike (空中 214K) 从空中俯冲，Honda 需要用 2HP 或 SA1 anti-air。Cammy 的 Hooligan (214P) 是空中突进 mixed with throw/overhead，Honda 需要 block low/default 然后 reaction。Cammy 的 Spiral Arrow (236K) 被 block 后 -4~-8 可以 punish。"
      - "Honda 需要 stay patient 让 Cammy come to him。Cammy 在 offensive 时 Honda 可以 find opening 用 Oicho Throw punish。5MP stagger pressure → Oicho Throw 是基础 game plan。Cammy whiff Cannon Spike 后是 free punish——HP Hundred Hand Slap 或 walk forward Oicho Throw。Cammy 的 walk speed 快可以 spacing in and out，Honda 需要用 DR 来拉近距离。Honda 的高 HP 让他可以承受 Cammy 的 rush 然后 one read 逆转。"
      - "DI 用于 absorb Cammy 的 Spiral Arrow 和 Cannon Strike recovery。SA1 用于 combo confirm 和 anti-air。SA2 从 mid-screen punish Cammy 的 commit。注意 Cammy 的 SA1 (Spin Drive Smasher) invincible 可以作为 reversal。Cammy 的 SA3 (Delta Red Assault) fully invincible 是 comeback threat。Drive Reversal escape Cammy 的 intense pressure。"
    keyMoves: ["5MP", "Oicho Throw", "2HP (anti-air)"]
  - opponent: "rashid"
    difficulty: "even"
    summary: "Rashid 的风系移动 vs Honda 的 ground 压制"
    strategies:
      - "Rashid 是 wind-based rushdown character。他的 Eagle Spike (214K) 从空中俯冲，LP 版本被 block 后 -6 可以 punish。Rashid 的 Spinning Mixer (236P) 被 block 后 +1~-2，fast multi-hit move。Rashid 的 5MP 和 2MP speed 快但 range 一般。Rashid 的 wall jump 和 air movement 让他的 approach angle 难以预测——Honda 需要用 2HP anti-air。Rashid 的 ADS (236236K) SA1 全屏突进需要注意。注意 Rashid 的 YSA (floor projectile) 控制 Honda 的前进路线。"
      - "Honda 在 ground close range 有优势。Oicho Throw 和 Hundred Hand Slap 压制 Rashid。Rashid 的 2LP 速度快可以 interrupt gap 但 Honda 的 stagger timing 可以 beat。Rashid whiff Eagle Spike 后是 free punish。Honda 需要控制 ground game 不让 Rashid 轻易到空中。一旦 corner Rashid，他的 escape option 主要靠 SA。"
      - "DI 用于 punish Rashid 的 Eagle Spike 和 Spinning Mixer recovery。SA2 从 full screen punish Rashid 的 projectile 和 commit move。注意 Rashid 的 SA1 是 fast reversal。Drive Reversal escape Rashid 的 corner pressure。DR 5MP 是 Honda 的主要 approach。"
    keyMoves: ["5MP", "Oicho Throw", "2HP (anti-air)"]
  - opponent: "a-k-i"
    difficulty: "advantageous"
    summary: "A.K.I. 的 poison damage 被 Honda 的耐久和高伤害 counter"
    strategies:
      - "A.K.I. 是 poison-based assassin。她的毒液和 trap 控制场面但 Honda 的高 HP (10500) 可以承受 poison tick。A.K.I. 的 5MP 和 2MP range 短，Honda 可以用 5MP outrange。A.K.I. 的 toxin (projectile) 有 recovery 可以用 Sumo Headbutt punish。A.K.I. 的 claret (236P) 被 block 后 -8 可以用 5MP punish。注意 A.K.I. 的 creep (214K) 低位移动和 ambush——用 5MP mash 来 cover。A.K.I. 的 HP 标准 (10000) 比 Honda 低。"
      - "Honda 在 close range 完全压制 A.K.I.。Oicho Throw 让她不敢 block，Hundred Hand Slap plus on block 持续 pressure。A.K.I. 的 reversal option 有限 (没有 invincible reversal 除了 SA)。corner pressure 对 A.K.I. 非常致命。A.K.I. 需要 poison stack 来 maximize damage 但 Honda 的 Oicho Throw threat 让她难以 free 地 setup poison。不要让 A.K.I. free 地 setup trap——主动 approach 打断她的 setup。"
      - "DI 用于 punish A.K.I. 的 projectile 和 long recovery special。SA2 从 mid/full screen punish A.K.I. 的 commit。SA1 用于 combo confirm。注意 A.K.I. 的 SA1 (Serpent Lash) 是 poison application tool。A.K.I. 的 SA3 是 fully invincible comeback tool。DR 积极使用拉近距离打断 A.K.I. 的 poison setup。"
    keyMoves: ["5MP", "Oicho Throw", "Sumo Headbutt"]
  - opponent: "ed"
    difficulty: "even"
    summary: "Ed 的 psycho power 和 Honda 的相扑力对决"
    strategies:
      - "Ed 是 psycho power boxer 使用 flicker punch 和 psycho shot。他的 5MP 和 2MP 有 good range 和 speed。Ed 的 Psycho Flicker (214P) 是 multi-hit punch series 被 block 后 +1~-2。Ed 的 Killstepper (236K) approach move 被 block 后 -4 可以 punish。Ed 的 Psycho Shot (46P) projectile 有 recovery 可以用 Sumo Headbutt punish。注意 Ed 的 psycho upper (623P) anti-air 和 reversal。Ed 的 HP 标准。"
      - "Honda 在 close range 有 advantage——Oicho Throw 的存在让 Ed 不敢一直 block。Hundred Hand Slap plus on block 可以持续 pressure。Ed 的 2LP 速度快可以 interrupt gap 但 Honda 的 stagger timing 变化可以 beat。Ed 有 invincible reversal (Psycho upper / SA) 所以不要 predictable pressure。Honda 需要在 mid-range 用 5MP 和 2MK 建立 spacing game 然后 DR 突入。"
      - "DI 用于 punish Ed 的 Psycho Shot 和 Killstepper recovery。SA2 从 full screen punish Ed 的 projectile。注意 Ed 的 SA1 (Psycho Cannon) 是 fast combo ender。Ed 的 SA2 (Psycho Storm) multi-hit psycho rush 很危险。Drive Reversal escape Ed 的 corner pressure。SA1 用于 combo confirm。"
    keyMoves: ["5MP", "Oicho Throw", "Sumo Headbutt"]
  - opponent: "akuma"
    difficulty: "disadvantageous"
    summary: "Akuma 的高伤害和 zoner 工具让 Honda 难以承受"
    strategies:
      - "Akuma 是 high-risk high-reward 的 shotokan 角色但 HP 只有 9000 (全 game 最低之一)。Akuma 的 Gohadouken 和 Shakunetsu Hadouken 提供 strong zoning。Akuma 的 5MP 和 2MP 优秀但 range 不如 Honda 的 5MP。Akuma 的 Rakan (213P) 系列——counter stance 和 multi-hit attack——非常 tricky。注意 Akuma 的 air fireball (Zanku Hadouken) 让他的 approach angle 难以 anti-air。Akuma 的 Shoryuken invincible reversal 很强。Akuma 的 damage output 极高，两三个 confirm 就能 KO Honda。"
      - "Honda 需要利用 Akuma 的低 HP——每次 Honda 打到 combo + Oicho Throw 的 damage 对 Akuma 来说都很致命。Walk and block approach Akuma，穿 Gohadouken 用 OD Hundred Hand Slap 或 LP Sumo Headbutt。一旦 close Honda 的 Oicho Throw 和 Hundred Hand Slap 压制让 Akuma 难以 escape。Akuma 的 Ashura Senku (teleport) 有 recovery 可以 punish 但 timing 需要 read。不要 jump-in——Akuma 的 anti-air (Shoryuken) 太强。"
      - "SA2 从 full screen punish Akuma 的 Gohadouken。SA1 用于 combo confirm。注意 Akuma 的 SA1 (Shun Goku Satsu / Raging Demon) 是 command grab——Honda 不要在 close range idle。Akuma 的 SA3 (Shin Shun Goku Satsu) fully invincible damage 极高。DI 用于 absorb Gohadouken 和 long recovery normal。Drive Reversal escape Akuma 的 pressure。这个对局 Honda 可以 fewer hit 赢但每一个 mistake 都很 costly。"
    keyMoves: ["Oicho Throw", "Sumo Headbutt", "SA2"]
  - opponent: "m-bison"
    difficulty: "even"
    summary: "Bison 的 psycho power control vs Honda 的 ground 压制"
    strategies:
      - "Bison (Dictator) 使用 psycho power 进行 mid-range 控制和突进。他的 Psycho Blast (46P) 是 projectile 有 recovery 可以 punish。Bison 的 5MP 和 2MP range 好 但 Honda 的 5MP 在 closer range 有优势。Bison 的 Psycho Axe (5HK) 是 long range overhead。注意 Bison 的 Head Stomp (46K) 和 Devil Reverse——空中突进工具 Honda 需要 2HP 或 SA1 anti-air。Bison 的 Scissors Kick (214K) 被 block 后 LP 版本 +2 维持 pressure，HP 版本 -6 可以 punish。"
      - "Honda 在 ground close range 有 advantage。Oicho Throw 和 Hundred Hand Slap 压制 Bison。Bison 的 2LP 和 5LP speed 快可以 interrupt gap。Bison 有 invincible reversal (SA) 所以不要 predictable pressure。Honda 需要在 mid-range 用 5MP 和 2MK poke 然后 DR 突入。Bison 的 HP 标准 (10000)。注意 Bison 的 back jump HP/MP air-to-air 很强，Honda 不要乱 jump。"
      - "DI 用于 punish Bison 的 Scissors Kick 和 Psycho Blast recovery。SA2 从 full screen punish Bison 的 projectile 和 Head Stomp approach。SA1 用于 combo confirm 和 anti-air。Drive Reversal escape Bison 的 Scissors Kick pressure。注意 Bison 的 SA1 (Knee Press Nightmare) 是 fast combo ender。Bison 的 SA3 fully invincible 是 comeback threat。"
    keyMoves: ["5MP", "Oicho Throw", "Sumo Headbutt"]
  - opponent: "terry"
    difficulty: "even"
    summary: "Terry 的 power wave 和 burn knuckle vs Honda 的相扑压制"
    strategies:
      - "Terry Bogard 是 Fatal Fury 的 guest character。他的 Power Wave (236P) 是 ground projectile 有 recovery 可以用 Sumo Headbutt punish。Terry 的 Burn Knuckle (236P) 突进技被 block 后 -4~-8 可以 punish。Terry 的 5MP 和 2MP 不错 但 range 和 Honda 相当。Terry 的 Crack Shot (214K) 是 overhead 需要站防。注意 Terry 的 Rising Tackle (623P) anti-air 和 reversal。Terry 的 Power Dunk 有 armor properties。"
      - "Honda 在 close range 有 advantage——Oicho Throw 让 Terry 不敢一直 block。Hundred Hand Slap plus on block 持续 pressure。Terry 有 invincible reversal (Rising Tackle / SA) 所以不要 predictable pressure。Terry 的 2LP 可以 interrupt gap 所以 stagger timing 要变化。Honda 需要在 mid-range 用 5MP 建立 spacing game 然后 DR 突入。Terry 的 HP 标准。"
      - "DI 用于 punish Terry 的 Power Wave 和 Burn Knuckle recovery。SA2 从 full screen punish Terry 的 projectile。注意 Terry 的 SA1 (Power Geyser) 是 powerful reversal and combo ender。Terry 的 SA3 (Buster Wolf) fully invincible。Drive Reversal escape Terry 的 pressure。SA1 用于 combo confirm。"
    keyMoves: ["5MP", "Oicho Throw", "Sumo Headbutt"]
  - opponent: "mai"
    difficulty: "even"
    summary: "Mai 的速度和 projectile vs Honda 的耐久和投技"
    strategies:
      - "Mai Shiranui 是 Fatal Fury 的 guest character，kunoichi 类型。她的 fan projectile (multiple versions) 提供 zoning 但 recovery 不短可以 punish。Mai 的 5MP 和 2MP speed 快 range 一般。Mai 的 Ryuenbu (236P) fire burst 被 block 后有 gap 可以 punish。注意 Mai 的 air movement 和 dive——她和 Cammy 类似的空中 approach 需要 Honda 用 2HP anti-air。Mai 的 HP 标准。Mai 的 Musasabi no Mai (air 214K) dive attack 从各种角度进攻。"
      - "Honda 在 ground close range 有 advantage。Oicho Throw 和 Hundred Hand Slap 压制 Mai。Mai 的 reversal option 有限 (没有 invincible reversal 除了 SA)。corner pressure 对 Mai 非常致命。Mai 的 2LP 速度快可以 interrupt gap 但 Honda 的 stagger timing 可以 beat。Honda 需要耐心地穿 Mai 的 projectile 然后用 DR 5MP 突入。Honda 的高 HP 让他可以承受 Mai 的 poke 然后找 opening。"
      - "DI 用于 punish Mai 的 fan projectile 和 special recovery。SA2 从 full screen punish Mai 的 projectile。SA1 用于 combo confirm 和 anti-air。注意 Mai 的 SA1 (Hishou Ryuenjin) invincible reversal。Mai 的 SA3 (Chou Hissatsu Shinobi-Bachi) fully invincible 是 comeback threat。Drive Reversal escape Mai 的 pressure。"
    keyMoves: ["5MP", "Oicho Throw", "2HP (anti-air)"]
  - opponent: "elena"
    difficulty: "even"
    summary: "Elena 的 capoeira range 和 heal vs Honda 的 grappler 压制"
    strategies:
      - "Elena 是 capoeira fighter 使用 range 优秀的 kick attack。她的 5MK 和 2MK range 远 speed 快，在 mid-range 是威胁。Elena 的 Scratch Wheel (623K) 是 invincible anti-air。Elena 的 Mallet Smash (214K) 是 overhead 需要站防。注意 Elena 的 healing ability——如果给她 free time 她 can heal back HP，Honda 不能在 full screen idle。Elena 的 Lynx Tail (236K) multi-hit capoeira spin 被 block 后 +1~-2。Elena 的 HP 标准。"
      - "Honda 需要持续 press Elena 不让她 free heal。DR 5MP 和 Sumo Headbutt 积极拉近距离。一旦 close Honda 的 Oicho Throw 和 Hundred Hand Slap 压制很强。Elena 有 invincible reversal (Scratch Wheel / SA) 所以不要 predictable pressure。Elena 的 2LP 可以 interrupt gap。Honda 的高 HP 让他可以 trade hit 但 Elena 的 range 优势需要 Honda 更 precise 地找 approach timing。"
      - "DI 用于 punish Elena 的 long recovery kick 和 special。SA2 从 mid/full screen punish Elena 的 commit。SA1 用于 combo confirm 和 anti-air。注意 Elena 的 SA1 invincible。Elena 的 SA3 fully invincible 是 comeback threat。Drive Reversal escape Elena 的 pressure。关键是不要给 Elena free space 让她 heal。"
    keyMoves: ["DR 5MP", "Oicho Throw", "Sumo Headbutt"]
  - opponent: "volcano-handshake"
    summary: "limited data on Volcano Handshake，基于通用 grappler 对策"
    difficulty: "even"
    strategies:
      - "Volcano Handshake 作为新角色 data 有限，但基于 grappler 类型的通用对策：注意 command throw range 不要轻易走进 throw range。5MP 在 max range poke 是安全的 spacing tool。如果对手有 armor move 用 Oicho Throw 或 multi-hit (Hundred Hand Slap) 来 beat。HP 高的 grappler 内战 damage race 激烈，每一次 confirm 都要 maximize。"
      - "Honda 的 advantage 在于有更好的 mid-range tool (Teppo, Sumo Smash) 和灵活的 approach option。用 5MP 和 2MK 在 max range 建立 spacing。Sumo Smash (plus on block) 可以安全地 close distance。Oicho Throw 的 tick throw setup 是 close range 核心。注意对手的 command throw range 可能比 Honda 更远或更近——early game 试探 range。"
      - "DI 用于 absorb armor move 和 long recovery special。SA1 用于 combo confirm。SA2 从 mid-screen punish opponent commit。Drive Reversal escape corner pressure。SA3 作为 comeback tool 保留。根据对局中观察到的 pattern 调整策略。"
    keyMoves: ["5MP", "Oicho Throw", "Hundred Hand Slap"]
---
