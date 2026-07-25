
import { NavItem, CharacterEntry, LoreEntry } from './types';


export const NAV_ITEMS: NavItem[] = [
  { id: 'civilizacao', label: 'Civilização' },
  { id: 'deuses', label: 'Deuses' },
  { id: 'energias', label: 'Energias' },
  { id: 'entidades', label: 'Entidades' },
  { id: 'personagens', label: 'Personagens' },
  { id: 'reinos', label: 'Reinos' },
  { id: 'regioes', label: 'Regiões' },
];

export const MOCK_CHARACTERS: CharacterEntry[] = [
  {
    id: "sublimy",
    name: "Sublimy Excelsior",
    role: "A Entidade Primordial",
    description: "O criador indireto do universo, nascido da implosão do nada absoluto em Candor.",
    fullStory: "Sublimy Excelsior é o criador indireto do universo. Ele existia em Candor, o 'nada' absoluto — sem cor, imagem, som, tempo ou espaço. Sua existência era uma oscilação de energia sem destino. Em sua infinita caminhada entre o nada e o tudo, sentiu uma energia imensurável pela primeira vez. Segurando a última oscilação, ele implodiu seu próprio núcleo no vazio, expandindo-se e criando o espaço-tempo finito, habilitando seus sentidos sem depender de sua energia ilimitada. Ao perceber outras formas divinas ao seu redor, entendeu que havia apenas 'acendido a luz' para a criação material e espiritual. Sua consciência tornou-se um sistema complexo e dinâmico, compreendendo que seu corpo era o próprio universo e sua mente, o infinito. Essa percepção fez florescer a vida nos planetas e estabeleceu a hierarquia astral, segregando deuses, entidades, anjos e demônios, onde nada se cria, tudo se transforma.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 100, forcaFisica: 100, forcaMagica: 100, defesa: 100, tecnica: 100 }
  },
  {
    id: "abaddot",
    name: "Abaddot",
    role: "O Rei Amaldiçoado",
    description: "O imperador que converte o luto em poder absoluto, conhecido como o Deus de Pedra.",
    fullStory: "Conhecido como o 'Deus de Pedra', Abaddot possui um poder trágico e aterrorizante: a cada morte de um ente querido, ele absorve energia vital e poder para conquistar o mundo. Sua frieza lendária é, na verdade, uma armadura contra a dor excruciante de ver sua família assassinada desde a infância e sofrer injustiças raciais em seu reino. Ele aprendeu cedo que demonstrar fraqueza é um convite para ser pisoteado neste mundo podre. Enquanto todos veem um imperador gélido e invencível, poucos percebem as 'lágrimas congeladas' que se quebram no chão. Suas conquistas territoriais são gigantescas, mas insignificantes comparadas ao peso que sua alma carrega.",
    image: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 95, forcaFisica: 98, forcaMagica: 100, defesa: 99, tecnica: 90 }
  },
  {
    id: "gaeziel",
    name: "Gaeziel Aud-Balder",
    role: "Portador da Cegueira Negra",
    description: "Um guerreiro marcado pela tragédia, cujo olhar carrega o peso de escolhas impossíveis.",
    fullStory: "Nascido em Azardian, Gaeziel teve uma infância turbulenta. Criado pelo tio Aud Van-Gard, viu-o ser assassinado por piratas aos 8 anos, despertando uma fúria de energia negra que dizimou os agressores. Adotado pelo exército sob tutela de Bill Mantic, tornou-se um guerreiro de elite. Sua tragédia atingiu o ápice quando precisou salvar seus filhos gêmeos através de um pacto com um 'anjo da morte': em troca da vida deles, jamais poderia olhar em seus olhos, sob pena de matá-los instantaneamente. Em uma busca desesperada por reverter a maldição, derrotou o Dragão da Sabedoria, Wyzern, apenas para descobrir que o feitiço era irreversível. A dor o levou à loucura no deserto, onde sua energia de ódio ameaçou todos os reinos. No confronto final, acabou matando seu próprio filho ao olhá-lo por engano, e morreu nos braços do segundo filho, libertando-se finalmente de sua agonia.",
    image: "https://i.imgur.com/FJJnEwT.jpeg",
    attributes: { sabedoria: 80, forcaFisica: 95, forcaMagica: 100, defesa: 85, tecnica: 95 }
  },
  {
    id: "georgine",
    name: "Georgine Trois",
    role: "Guerreira de Winter-est",
    description: "Bruta e direta, cada soco de Georgine carrega a força total de sua linhagem.",
    fullStory: "Membro da renomada família Trois do continente de Winter-est, Georgine é a definição de força bruta. Conhecida por não ter paciência para estratégias longas ou diálogos em batalha, ela busca terminar seus combates o mais rápido possível. Os guerreiros de sua linhagem são famosos pela resistência sobre-humana, e Georgine não é exceção: cada golpe desferido por ela utiliza 100% de sua capacidade física, tornando-a uma máquina de demolição no campo de batalha.",
    image: "https://images.unsplash.com/photo-1601655077464-9493f0b4d458?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 40, forcaFisica: 100, forcaMagica: 10, defesa: 85, tecnica: 70 }
  },
  {
    id: "valinsck",
    name: "Valinsck",
    role: "Assassino Teleportador",
    description: "Um justiceiro solitário que limpa o crime em um raio de 100km.",
    fullStory: "Valinsck dominou a rara magia do teletransporte, permitindo-lhe eliminar inimigos em um raio de 100km. Seus sentidos (audição e visão) foram aprimorados muito além dos limites mágicos convencionais. Ele atua como um 'faxineiro' do submundo: onde ele vive, não há criminosos. Ele limpa becos, esconderijos de sequestradores e casas de comércio ilegal, agindo sempre sozinho até o fim de seus dias.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 85, forcaFisica: 70, forcaMagica: 90, defesa: 40, tecnica: 100 }
  },
  {
    id: "carius",
    name: "Cariús",
    role: "A Entidade do Sacrifício",
    description: "Um demônio evoluído que transcendeu sua natureza através do amor.",
    fullStory: "Cariús era um demônio evoluído e controverso, atormentado por questionamentos filosóficos. Ele desenvolveu um sentimento próximo ao amor por sua companheira — uma emoção teoricamente restrita a anjos e deuses. Quando reis demônios a levaram para 'reduzir a população' de regiões superlotadas, a indignação de Cariús o transformou. O desejo egoísta deu lugar ao altruísmo e à vontade de se sacrificar, elevando-o ao status de Entidade: um meio-termo raro entre deuses, anjos e demônios.",
    image: "https://images.unsplash.com/photo-1541410202976-13a89e49eb72?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 92, forcaFisica: 88, forcaMagica: 95, defesa: 90, tecnica: 85 }
  },
  {
    id: "tairon",
    name: "Tairon Shildan",
    role: "O Materializador",
    description: "Um dos 5 melhores escudeiros do mundo, capaz de fundir-se ao seu metal.",
    fullStory: "Tairon Shildan está entre os cinco melhores escudeiros existentes. Seu escudo, feito de 245kg de cromo puro, é inquebrável. Sua habilidade especial é a 'Fusão Material': ele pode fundir o metal do escudo ao seu próprio corpo, transformando-o em armaduras impenetráveis ou armas devastadoras conforme a necessidade do combate.",
    image: "https://images.unsplash.com/photo-1614271383344-77a82925b44c?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 60, forcaFisica: 95, forcaMagica: 50, defesa: 100, tecnica: 80 }
  },
  {
    id: "nico",
    name: "Nico Yasah",
    role: "O Abatedor Gudan",
    description: "Um órfão da raça Gudan, frio e letal, moldado pela tragédia.",
    fullStory: "Nico é um jovem da raça Gudan, membro do violento Clã Lariats. Órfão desde cedo e ciente do ódio do mundo contra sua espécie, manteve-se frio e racional, evitando o ressentimento. Adotado por Almost Yan, tornou-se o 'abatedor' exclusivo do clã devido à sua frieza e inteligência de batalha. Após perder sua esposa e filho em um ataque de uma gangue rival, Nico enlouqueceu silenciosamente. Ele exterminou a gangue inimiga sozinho usando apenas um porrete e, ao final, desabou em lágrimas — a primeira vez que demonstrou tal emoção. Buscando redenção ou morte, confrontou seu pai adotivo, Almost, em um final trágico.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 88, forcaFisica: 92, forcaMagica: 40, defesa: 75, tecnica: 98 }
  },
  {
    id: "zamma",
    name: "Zamma Can-Legan",
    role: "Caçadora de Gudans",
    description: "Uma guerreira de Orfalia movida pela vingança contra a raça dos deuses de sangue.",
    fullStory: "Lutadora de Orfalia e usuária do estilo 'Bi-gun' (lança e pistola de Crónica), Zamma dedica sua vida a caçar Gudans. Sua motivação nasce de um trauma: aos 8 anos, viu seu clã ser dizimado pelo grupo 'Deuses de Sangue', composto por essa raça poderosa. Acreditando que a união dos Gudans causaria uma guerra mundial, ela busca exterminá-los preventivamente.",
    image: "https://i.imgur.com/0WVD4dV.png",
    attributes: { sabedoria: 75, forcaFisica: 85, forcaMagica: 20, defesa: 60, tecnica: 95 }
  },
  {
    id: "kajioku",
    name: "KajiOku No Iro",
    role: "Mestre das 4 Chamas",
    description: "O herdeiro do Fogo Branco que desafiou o próprio reino por justiça.",
    fullStory: "Originalmente Oki Kantsuki, ele é filho do mestre do fogo branco (cura e aprimoramento), uma arte perseguida. Após encontrar seu pai carbonizado por mestres rivais, Oki treinou sozinho até os 17 anos e desafiou os três Grão-Mestres do Fogo (Vermelho, Verde e Azul) do reino, ameaçando destruir a estátua do imperador Carbon para chamar atenção. Ele derrotou dois mestres, mas perdeu para o terceiro. Sua coragem e a revelação de sua linhagem comoveram os mestres, que decidiram ensiná-lo, tornando-o o lendário sucessor capaz de dominar todas as chamas.",
    image: "https://images.unsplash.com/photo-1542315024-c15c0e257a07?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 85, forcaFisica: 90, forcaMagica: 98, defesa: 70, tecnica: 95 }
  },
  {
    id: "valkyria",
    name: "Valkyria de Parlax",
    role: "A Caçadora de Titãs",
    description: "Princesa guerreira que carrega a glória e o fardo de uma mentira.",
    fullStory: "Filha dos imperadores de Parlax e descendente da raça Balyiana. Valkyria matou o Titã Vardeaux 'sozinha', trazendo sua cabeça como prova de uma suposta invasão para justificar a quebra da lei 'Paz de Titã'. Na verdade, ela teve ajuda de outros guerreiros que morreram no combate. O único sobrevivente, o atirador mercenário Denzel, agora a persegue anonimamente, sabendo que a glória dela é construída sobre mentiras e sangue.",
    image: "https://images.unsplash.com/photo-1540206232501-c3534898144b?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 65, forcaFisica: 90, forcaMagica: 30, defesa: 80, tecnica: 85 }
  },
  {
    id: "sarotto",
    name: "Sarotto N",
    role: "O Halvgod Sem Nome",
    description: "Um ex-escravo que encontrou liberdade e amor nos braços de uma princesa.",
    fullStory: "Sarotto, da raça halvgods, não tinha família ou clã; seu nome foi dado por ele mesmo. Escravizado por sua força física, fugiu após se machucar e sentir dor pela primeira vez. Na cidade grande, tornou-se um faz-tudo mercenário de alto custo. Sua vida mudou ao conhecer Cassie Lemûr, uma princesa fugitiva cansada de sua vida mimada. Juntos, provaram que os opostos se atraem.",
    image: "https://images.unsplash.com/photo-1628038768074-b52e3919e1c4?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 50, forcaFisica: 98, forcaMagica: 10, defesa: 90, tecnica: 75 }
  },
  {
    id: "odall",
    name: "Odall BoHuan",
    role: "O Anjo Caído",
    description: "Um ser celestial que redescobriu a humanidade através da injustiça.",
    fullStory: "Expulso do mundo espiritual por recusar ordens injustas, Odall caiu em uma vila sob ataque. Ao presenciar o assassinato brutal de uma mãe protegendo seu bebê, foi tomado por ódio e compaixão, sentimentos mortais. Ele salvou o bebê, Andreas Valitud, e o criou, assumindo a forma de seu melhor amigo. Morreram juntos em uma guerra, com Odall renascendo como anjo, mas carregando eternamente a saudade humana.",
    image: "https://images.unsplash.com/photo-1517774902120-e260938ee49d?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 100, forcaFisica: 80, forcaMagica: 100, defesa: 60, tecnica: 90 }
  },
  {
    id: "ayslan",
    name: "Ayslan Austrópy",
    role: "O Sentinela",
    description: "Guerreiro que desperta poder ilimitado ao sentir seus aliados em perigo.",
    fullStory: "Um dos mais fortes do clã Austrópy e portador do gene sentinela. Ayslan ativa uma transformação que eleva sua força em 200% exclusivamente quando sente que seus entes queridos estão desprotegidos. Ele luta pelos outros, tornando-se uma muralha inabalável quando a vida de seus aliados está em jogo.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 70, forcaFisica: 95, forcaMagica: 40, defesa: 95, tecnica: 80 }
  },
  {
    id: "ariel",
    name: "Ariel Golding",
    role: "A Dourada Oculta",
    description: "Filha de Goldans, esconde um poder solar sob a pele comum.",
    fullStory: "Filha de dois Goldans, raça perseguida por sua pele preciosa, Ariel nasceu com pele comum, o que a protegeu mas gerou desconfiança. Seu verdadeiro poder desperta através da raiva: sua energia negra é 'engolida' por sua genética, transformando-a em uma entidade dourada de poder mágico absurdo e compreensão total do ambiente, sem perder o controle.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 80, forcaFisica: 40, forcaMagica: 100, defesa: 60, tecnica: 85 }
  },
  {
    id: "shervak",
    name: "Pirata Shervak",
    role: "O Corsário Apaixonado",
    description: "Um vilão que encontrou redenção no amor por uma camponesa.",
    fullStory: "Shervak sequestrou uma camponesa achando ser uma princesa, atraindo a ira de um mafioso naval. No cativeiro, desenvolveu um afeto genuíno pela refém. Em sua batalha final contra a frota de resgate, sacrificou-se para arremessar a amada para a segurança, afundando com seu navio após ser atingido por um canhão.",
    image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 60, forcaFisica: 80, forcaMagica: 0, defesa: 50, tecnica: 85 }
  },
  {
    id: "quendal",
    name: "Quendål Forlatt",
    role: "A Lâmina de Pena",
    description: "O espadachim surdo que ouviu o grito da morte.",
    fullStory: "Surdo de nascença, tornou-se o maior espadachim de Maltan, conhecido pela leveza de seus golpes ('Lâmina de Pena'). Defendeu a cidade de 6 ataques, mas no sétimo, foi derrotado por um Mago da Morte que, cruelmente, lhe devolveu a audição. O som ensurdecedor dos gritos e da guerra o levou à loucura e ao suicídio antes do golpe final.",
    image: "https://images.unsplash.com/photo-1599696767520-20c22695e545?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 50, forcaFisica: 85, forcaMagica: 10, defesa: 40, tecnica: 100 }
  },
  {
    id: "christine",
    name: "Christine Oceân",
    role: "A Filha das Profundezas",
    description: "Uma maga do mar resgatada e criada por piratas.",
    fullStory: "Encontrada nos escombros no meio do oceano sem sinais de vida ao redor, Christine pertence à raça das profundezas (inimigos dos piratas). Resgatada pelo Capitão Tazo, foi criada como família pela tripulação, aprendendo que até os brutos piratas possuem histórias e sentimentos.",
    image: "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 80, forcaFisica: 40, forcaMagica: 90, defesa: 50, tecnica: 70 }
  },
  {
    id: "homero",
    name: "Homero & Lisa",
    role: "A Dupla da Justiça",
    description: "O caçador e a presa que se tornaram parceiros.",
    fullStory: "Homero, o maior caçador de recompensas de Kenturin, foi contratado para capturar o misterioso ninja Lisa. Durante uma batalha intensa, descobriu que o oponente formidável era uma mulher. A luta transformou-se em diálogo e, eventualmente, em amor. Homero a capturou apenas para receber a recompensa e pagar a fiança dela, libertando-a para viverem juntos.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 85, forcaFisica: 80, forcaMagica: 20, defesa: 70, tecnica: 95 }
  },
  {
    id: "thai",
    name: "Thai Raskebein",
    role: "A Perna de Trindad",
    description: "Guerreira otimista que luta com as pernas e sorri diante da guerra.",
    fullStory: "Do clã Raskebein, especialistas em combate com as pernas. Thai é a melhor lutadora de Trindad. Apesar de uma infância dura no exército, mantém o bom humor para não sucumbir à tristeza. Na 3ª guerra contra Whitsand-est, perdeu uma perna ao explodir sozinha uma base inimiga, garantindo a vitória para seu povo.",
    image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 60, forcaFisica: 90, forcaMagica: 0, defesa: 60, tecnica: 95 }
  },
  {
    id: "volcano",
    name: "Volcano",
    role: "O Ferreiro Geótico",
    description: "Humano frágil, mas o único capaz de forjar armas para os deuses.",
    fullStory: "O melhor ferreiro existente. Possui o talento de decifrar 'pontos geóticos' (fraquezas e potências de metais). Embora seja um humano fisicamente frágil que nunca realizou o sonho de ser herói, suas armas são capazes de danificar armaduras divinas. Todos os grandes heróis e titãs o respeitam e dependem de sua forja.",
    image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 100, forcaFisica: 30, forcaMagica: 20, defesa: 20, tecnica: 100 }
  },
  {
    id: "gamp",
    name: "Gamp Ram",
    role: "O Lutador do Vento",
    description: "Mestre do estilo NogenJorn, luta sem armaduras para sentir a liberdade.",
    fullStory: "Usuário do estilo NogenJorn, Gamp luta usando o próprio corpo e a menor quantidade de roupa possível para sentir o vento na pele — quanto mais vento, mais fortes seus golpes. Disciplinado pelo Mestre Diarã, aprendeu a ajudar os necessitados sem esperar recompensa, superando o trauma de seu abandono.",
    image: "https://images.unsplash.com/photo-1550950158-d0d960dff51b?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 80, forcaFisica: 85, forcaMagica: 50, defesa: 90, tecnica: 95 }
  },
  {
    id: "antila",
    name: "Maga Antíla",
    role: "A Herdeira Arcana",
    description: "Maga que acredita que o poder vem do sentimento e do conhecimento.",
    fullStory: "Filha do maior mago de sua época, viajou o mundo aprendendo nas melhores academias e na prática com seu pai. Após a morte dele, despertou uma poderosa magia negra que já havia estudado, derrotando os assassinos com facilidade ao controlar seus sentimentos.",
    image: "https://images.unsplash.com/photo-1574067359302-3c82e6d62885?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 95, forcaFisica: 30, forcaMagica: 100, defesa: 60, tecnica: 90 }
  },
  {
    id: "clariom",
    name: "Clariom Delux",
    role: "Anjo da Luz",
    description: "Um ser de luz enfraquecido pela escuridão humana.",
    fullStory: "Um dos anjos mais fortes do reino espiritual, mas cujo poder diminui no mundo térreo devido à densidade dos sentimentos ruins e da escuridão presente na sociedade humana.",
    image: "https://images.unsplash.com/photo-1628151016004-bb29a43a0e67?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 100, forcaFisica: 60, forcaMagica: 90, defesa: 50, tecnica: 80 }
  },
  {
    id: "pedro",
    name: "Minerador Pedro",
    role: "O Homem de Nucleóide",
    description: "Escavou o centro da terra e voltou com o corpo indestrutível.",
    fullStory: "Pedro passou 45 anos escavando rumo ao centro da terra para encontrar o metal Nucleóide. Suportando calores superiores ao fogo puro, seu corpo tornou-se 87% perfeito e resistente. Voltou como o homem mais rico de Trimera e usou sua fortuna para salvar sua cidade da miséria.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 70, forcaFisica: 100, forcaMagica: 0, defesa: 100, tecnica: 60 }
  },
  {
    id: "dasan",
    name: "Dasan Kaw-Waki",
    role: "Mestre dos Dedos",
    description: "O monge capaz de levantar ilhas com um único dedo.",
    fullStory: "Mestre do estilo Dedakar-Waki, Dasan controla os 4 elementos em cada dedo da mão. Expulso de seu clã por recusar o casamento da filha com um rei tirano, vagou pelo mundo sem nada até chegar quase morto ao continente místico de Trilayd. Seu poder é tal que pode levantar mares inteiros com o mínimo esforço.",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 95, forcaFisica: 90, forcaMagica: 100, defesa: 80, tecnica: 100 }
  },
  {
    id: "tandrios",
    name: "Tandrios",
    role: "O Mártir do Deserto",
    description: "O guerreiro que deu a vida para salvar prisioneiros na guerra continental.",
    fullStory: "Tandrios alistou-se na 3ª Guerra Mundial apenas para salvar prisioneiros. Engolido pelo exército inimigo de 6 milhões de homens, conseguiu escapar com um aliado, mas morreram no deserto de Kondor após lutar contra fanáticos, usando suas últimas energias para enviar um sinal de luz que guiou o resgate aos prisioneiros.",
    image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=1000&auto=format&fit=crop",
    attributes: { sabedoria: 70, forcaFisica: 80, forcaMagica: 40, defesa: 70, tecnica: 80 }
  },
  {
    id: "pawllon",
    name: "Pawllon Brawller",
    role: "O Guardião Cético",
    description: "Um guerreiro que recusou os deuses e confiou na razão humana até seu último suspiro diante do Criador.",
    fullStory: "Desde os primórdios da civilização de Trimera, a maioria dos seres humanos buscava conforto na ideia de uma entidade superior. Guiados pelo temor da morte e pela fé, prestavam culto a divindades que supostamente governavam a vida e o destino. No entanto, Pawllon Brawler sempre trilhou um caminho distinto. Recusava-se a acreditar que sua existência e força derivasse de uma divindade. Ainda que cético, era um homem de coração puro, leal e movido pela razão.\n\nDesde jovem, treinava com afinco, moldando seu corpo até atingir a perfeição aos 24 anos. Enfrentava a morte sem temor, mas a enxergava com frequência — uma companheira silenciosa em sua trajetória. Sua ascensão ao posto de guerreiro guardião consolidou sua reputação como símbolo de força e coragem.\n\nEm meio à sua jornada, conheceu uma guerreira devota, cuja fé o cativou. Por ela, participou de rituais sagrados, silenciando temporariamente seu ceticismo em nome do afeto. Contudo, a paz foi abalada por uma guerra brutal. Durante uma emboscada, Pawllon foi atacado por cinco fanáticos religiosos. Diante do ódio daqueles que se diziam seguidores do bem, sentiu sua alma se incendiar em fúria. “Se a fé deveria purificar, por que o fanatismo corrompeu?” — questionava-se.\n\nDominado pela ira, ativou sua forma lendária, uma fusão entre magia negra e seu gene sentinela, transfigurando-se numa criatura bestial. Três tentaram fugir, dois reagiram; todos pereceram. Cego pelo ódio, Pawllon massacrou indistintamente os inimigos — e também os aliados, inclusive os que lutavam ao lado de sua amada.\n\nQuando a batalha cessou, o corpo de Pawllon não mais se regenerava. Imerso em pensamentos, reviveu cada memória, até se recordar dela. Encontrou o corpo ensanguentado da companheira e, desolado, ajoelhou-se ao seu lado, lágrimas escorrendo em silêncio. No instante em que sua consciência começava a se esvair, uma figura surgiu diante dele: Nefastus, o próprio deus.\n\nPawllon ficou atônito. Nunca havia servido a nenhuma divindade, e ainda assim, ali estava o criador. Nefastus, com serenidade, reconheceu sua força e sua alma indomável. Disse-lhe que, apesar da descrença, Pawllon trilhou um caminho de bondade e razão, agindo por convicção própria — não por promessas celestes, mas por acreditar na responsabilidade de cada um diante do mundo.\n\nCom tristeza nos olhos, Pawllon murmurou:\n— “Então era você por trás de tudo, enquanto achávamos que cuidávamos uns dos outros…”\n\nO deus sorriu:\n— “Você nunca teve filtros, meu filho. A verdade é mais complexa do que imagina. Diga-me… por que tamanha dor no coração?”\n\nBrawler desabafou. Falou de sua felicidade ao lado dela, do arrependimento por tê-la matado sem perceber, de como se transformou num monstro a serviço da destruição. Disse que, por um momento, quase acreditou que os sentimentos mais profundos tivessem origem divina.\n\nNefastus então estendeu sua mão e apontou para uma luz.\n— “Ela morreu pelas mãos de um guerreiro, é verdade. Mas guardei sua alma. Vocês poderão se despedir.”\n\nPawllon, emocionado, sorriu como nunca antes. Correu ao encontro de sua amada, que o aguardava com serenidade. Ela sabia que aquele momento viria. Eles se abraçaram uma última vez, e Pawllon perguntou para onde ela iria.\n— “Ao centro das almas, no mundo espiritual — ou, como chamam, no mundo divino,” respondeu Nefastus. “Gostaria de acompanhá-la? Antes, quero mostrar a complexidade do meu propósito.”\n\nPawllon, embora comovido, manteve sua essência.\n— “Sei que ela estará em paz… e quanto à sua proposta… você já sabe minha resposta,” disse sorrindo com respeito. “Não posso trair tudo o que fui. Viver acreditando apenas para alcançar um paraíso no final seria negar minha verdade. Que eu seja apagado. Esse sempre foi meu destino. E se você for apenas uma miragem… bom, estou quase dormindo mesmo.”\n\nNefastus balançou a cabeça em aprovação.\n— “Tudo que você fez, foi por bondade. E eu sou a bondade. Sou também a miragem… e a realidade. Sou razão, emoção e criação. Mas você… você é você. Minha obra perfeita. Perfeita porque escolheu sem depender da minha vontade. Você é o mais próximo do pensamento autônomo-divino que já existiu.”\n\nE assim, Pawllon sorriu pela última vez, sem medo do que viria. Sua alma partiu não em busca de recompensa, mas em paz com seus próprios valores.\n\nMesmo diante do criador do universo, Pawllon manteve sua postura firme, recusando a ideia de que sua espécie fosse incapaz de se guiar sozinha. Foi um guerreiro da razão, um amante da ciência, e um defensor da liberdade interior. Descobriu, ao final, que havia sim algo além da vida — mas escolheu não ser moldado por essa revelação.\n\nPorque para Pawllon Brawler, o verdadeiro sentido da existência estava na escolha, na consciência, e na coragem de ser fiel a si mesmo — até o último suspiro.",
    image: "https://i.imgur.com/dogHUxe.png",
    attributes: { sabedoria: 95, forcaFisica: 100, forcaMagica: 60, defesa: 85, tecnica: 98 }
  }
];

export const MOCK_DATA: { [key: string]: LoreEntry[] } = {
  civilizacao: [
    { title: "Ordem de Aethelgard", description: "Os guardiões das muralhas douradas, conhecidos por sua arquitetura impenetrável e devoção ao sol." },
    { title: "Nômades de Zyr", description: "Viajantes das areias cantantes que dominam a arte da sobrevivência e do comércio de relíquias antigas." }
  ],
  deuses: [
    { title: "Ignis, o Eterno", description: "A chama primordial que moldou o núcleo de Trimera.", stats: { Dominio: "Fogo", Simbolo: "A Fênix" } },
    { title: "Aequor, o Vasto", description: "Senhor das marés e dos segredos submersos.", stats: { Dominio: "Água", Simbolo: "O Tridente Quebrado" } }
  ],
  energias: [
    { 
      title: "Energia Vital", 
      description: "",
      effects: [
        "É a base para todas as outras energias, com maior energia vital, maior capacidade de absorção de outras energias;",
        "A saúde é o principal fator para o aumento dessa energia, ou seja, alimentação, treino mental e físico. Outro fator é a genética."
      ]
    },
    { 
      title: "Energia Natural", 
      description: "",
      effects: [
        "Com essa energia, você consegue usar e manipular os elementos naturais;",
        "Tem-se mais repertório para usar magia, ou seja, adquire mais opções para poderes mágicos;",
        "Consegue regenerar e tratar a sua energia vital;",
        "Transfusão dos poderes para um objeto, como por exemplo, tornar uma espada flamejante."
      ]
    },
    { 
      title: "Energia Espiritual", 
      description: "",
      effects: [
        "Esta energia te dá maior capacidade de concentração e foco;",
        "Ganha também agilidade e calma para executar as ações;",
        "Necessária ter para se evoluir e transformar em sua versão melhorada."
      ]
    },
    { 
      title: "Energia Física", 
      description: "",
      effects: [
        "Capacidade maior de força física/corporal;",
        "Maior resistência a danos de DIVERSOS TIPOS (defesa);",
        "Maior fôlego;",
        "Recuperação rápida de ferimentos."
      ]
    },
    { 
      title: "Energia Astral", 
      description: "",
      effects: [
        "Maior capacidade de controlar o corpo físico;",
        "Com a especialidade dessa energia, ganha maior capacidade de manipulação celular;",
        "Mais capacidade de absorver a energia atômica ou quântica."
      ]
    },
    { 
      title: "Energia Mental", 
      description: "",
      effects: [
        "Maior capacidade de absorção de energia;",
        "Mais condições de se aplicar e executar ações e manipulações de energia;",
        "Mais calma na tomada de decisão;",
        "Maior capacidade de voltar ao estado de espírito inicial."
      ]
    },
    { 
      title: "Energia de Luz (Branca)", 
      description: "",
      effects: [
        "Capacidade de criação de magias defensivas e ofensivas da luz(maior alcance e eficiência);",
        "Maior capacidade de regenerar qualquer tipo de dano/ferimento;",
        "O fator cura é aprimorado automaticamente;",
        "Energia que trás o sentimento de calmaria no ambiente e leveza do corpo e mente;",
        "Mais força mágica em todos os poderes."
      ]
    },
    { 
      title: "Energia da Escuridão (Negra)", 
      description: "",
      effects: [
        "Capacidade de criação de magias defensivas e ofensivas das trevas(maior alcance e eficiência);",
        "Maior resistência e ausência de dores de danos e ferimentos;",
        "Energia que trás densidade e sentimento de desconforto no ambiente, além do sentimento de angústia e horror no corpo e mente;",
        "Mais força mágica em todos os poderes."
      ]
    },
    { 
      title: "Energia Mágica", 
      description: "",
      effects: [
        "Energia necessária para execução de poderes mágicos;",
        "Mais efetividade na execução de poder mágico;",
        "Capacidade de criação e manipulação de magias."
      ]
    },
    { 
      title: "Energia Química", 
      description: "",
      effects: [
        "Manipulação de elementos químicos;",
        "Maior repertório para criação e execução de poderes mágicos;"
      ]
    },
    { 
      title: "Energia Concentrada", 
      description: "",
      effects: [
        "Herança de energia com poderes, conhecimento e técnicas de algum ser-vivo falecido."
      ]
    },
    { 
      title: "Energia Mítica (Sobrenatural)", 
      description: "",
      effects: [
        "Enorme capacidade de força vital;",
        "Enorme capacidade de força mágica;",
        "Enorme capacidade de captura de energia;",
        "Melhoramento de todos os atributos."
      ]
    }
  ],
  reinos: [
    { title: "Drakonia", description: "Terras vulcânicas onde dragões e homens coexistem em uma aliança frágil." },
    { title: "Sylavara", description: "Florestas de cristal onde o tempo flui mais devagar." },
    { title: "Parlax", description: "Um reino monumental governado por uma linhagem imperial e famoso por suas muralhas que supostamente repeliram Titãs." },
    { title: "Azardian", description: "Uma nação rígida e militarista, lar de guerreiros de elite como Gaeziel, onde o treinamento de combate é lei." },
    { title: "Orfalia", description: "Reino de tradições guerreiras exóticas, conhecido por seus caçadores de Gudans e estilos de luta únicos como o Bi-gun." },
    { title: "Kenturin", description: "Uma cidade-estado mercantil vibrante e perigosa, famosa por abrigar a maior guilda de caçadores de recompensas de Trimera." }
  ],
  regioes: [
    { title: "Winter-est", description: "Continente gélido, lar da família Trois e de guerreiros brutais conhecidos por sua resistência ao frio extremo." },
    { title: "Whitsand-est", description: "Vastas planícies desérticas onde ocorreram grandes guerras continentais. Lar do deserto de Tândria." },
    { title: "Trilayd", description: "Um continente misterioso formado por 3 ilhas paradisíacas (Paz, Magia e Controle), cercado por muros de mármore." },
    { title: "Maltan", description: "O estado das lâminas, lar das 4 cidades com os melhores espadachins do mundo." },
    { title: "Karkova", description: "Ilhas estratégicas que frequentemente entram em conflito com o continente de Winter-est." },
    { title: "Trindad", description: "Reino militarizado pobre em recursos, mas rico em guerreiros marciais como o clã Raskebein." },
    { title: "Deserto de Kondor", description: "A região mais árida e mortal de Whitsand-est, conhecida como cemitério de exércitos e palco de batalhas históricas." }
  ]
};
