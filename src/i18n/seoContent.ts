import type { Locale } from '../types/calendar';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface SeoSectionData {
  h1: string;
  subtitle: string;
  frameworkTitle: string;
  frameworkSubtitle: string;
  platformsTitle: string;
  platformsSubtitle: string;
  comparisonTitle: string;
  comparisonSubtitle: string;
  howToTitle: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: FaqItem[];
  howToSteps: HowToStep[];
}

export const seoContentByLocale: Record<Locale, SeoSectionData> = {
  en: {
    h1: "Free 30-Day Social Media Content Calendar & Planner Online",
    subtitle: "Plan, organize, and export a month of high-converting social media posts directly in your browser. 100% free, zero-server privacy, instant CSV & PNG image export.",
    frameworkTitle: "The 30-Day Content Framework: How Top Creators Plan 1 Month in 10 Minutes",
    frameworkSubtitle: "Consistency beats talent. By dividing your 30-day strategy into proven content pillars, you eliminate creator block and grow faster across TikTok, Instagram, YouTube, and LinkedIn.",
    platformsTitle: "Tailored for Every Major Social Media Platform",
    platformsSubtitle: "Select the optimal format for each network. From TikTok vertical video hooks to LinkedIn carousels and X threads.",
    comparisonTitle: "Why 100% Client-Side LocalStorage Beats Cloud Schedulers",
    comparisonSubtitle: "Traditional tools force you through expensive subscriptions, logins, and cloud data collection. Content30 keeps your editorial strategy 100% private on your machine.",
    howToTitle: "How to Plan Your 30-Day Social Media Calendar in 4 Simple Steps",
    faqTitle: "Frequently Asked Questions (FAQ)",
    faqSubtitle: "Everything you need to know about the Content30 client-side editorial planner.",
    faqs: [
      {
        question: "Is Content30 really 100% free with no hidden paywalls?",
        answer: "Yes, Content30 is completely free and open-source. There are no paid tiers, no monthly subscriptions, and no post limits. All features—including unlimited CSV spreadsheet exports, high-resolution PNG image downloads, and JSON backups—are 100% free forever."
      },
      {
        question: "Where is my social media content stored?",
        answer: "All your data is stored 100% on your device using browser-native LocalStorage. Nothing is ever sent to or stored on an external cloud server. Your content strategy, hooks, draft captions, and hashtags remain private on your machine."
      },
      {
        question: "Can I export my 30-day plan to Excel or Google Sheets?",
        answer: "Yes. Clicking 'Export CSV' instantly downloads a structured spreadsheet formatted with headers for Day Number, Post Title, Platform, Content Format, Status, Posting Time, Hook/Notes, Caption, and Hashtags. You can import this into Excel, Google Sheets, Notion, or Airtable."
      },
      {
        question: "How do I download my calendar as an image (PNG)?",
        answer: "Click 'Export Image (PNG)' in the top action toolbar. Content30 uses client-side canvas technology to render a crisp, high-definition 2x image of your 30-day calendar, perfect for printing or sharing with clients and team members."
      },
      {
        question: "Which social media platforms does Content30 support?",
        answer: "Content30 has built-in tags and icons for TikTok, Instagram, YouTube, X (Twitter), LinkedIn, Pinterest, Threads, and Facebook, supporting Reels, Carousels, Short-form Videos, Long Videos, Text Threads, Stories, and Articles."
      },
      {
        question: "Do I need to create an account or provide an email?",
        answer: "No. Content30 requires zero registration. You can open the page, plan your 30 days of posts immediately, and export your strategy without ever entering an email or password."
      },
      {
        question: "How do I backup and restore my content calendar between devices?",
        answer: "Use 'Backup JSON' to save a local backup file of your entire 30-day plan to your computer. On your other device, simply click 'Restore JSON' and select the file to load your calendar instantly."
      },
      {
        question: "Does Content30 work on mobile phones and tablets?",
        answer: "Yes. On mobile devices and tablets, Content30 seamlessly transitions to an optimized vertical timeline view with icon-only controls, making it effortless to plan, draft hooks, and update statuses on your phone."
      }
    ],
    howToSteps: [
      {
        name: "Define Platform & Content Formats",
        text: "Assign each day of the month to a target platform (TikTok, Instagram, YouTube, LinkedIn, X, Pinterest) and choose whether it is a Reel, Carousel, Photo, Long Video, or Thread."
      },
      {
        name: "Draft High-Converting Hooks & Angles",
        text: "Click any day slot to write an opening hook that stops the scroll, outline 2-3 key takeaways, and write your full caption and hashtags."
      },
      {
        name: "Track Production Status",
        text: "Monitor progress with visual status indicators: move posts from Idea to Scripting, In Progress, and Ready as you record and edit."
      },
      {
        name: "Export to CSV or High-Res PNG",
        text: "Download your completed 30-day schedule with one click as an Excel/Google Sheets CSV or high-resolution PNG image with zero server uploads."
      }
    ]
  },

  es: {
    h1: "Calendario de Contenido de 30 Días para Redes Sociales Gratis Online",
    subtitle: "Planifica, organiza y exporta un mes de publicaciones para redes sociales en tu navegador. 100% gratis, sin servidores y con privacidad absoluta.",
    frameworkTitle: "El Método de 30 Días: Cómo Planificar 1 Mes en 10 Minutos",
    frameworkSubtitle: "La consistencia supera al talento. Organiza tu mes en pilares de contenido para crecer en TikTok, Instagram, YouTube y LinkedIn.",
    platformsTitle: "Optimizado para Todas las Redes Sociales Principales",
    platformsSubtitle: "Elige el formato adecuado: desde vídeos verticales para TikTok hasta carruseles de Instagram e hilos en X.",
    comparisonTitle: "Por Qué el Almacenamiento Local Supera a las Herramientas en la Nube",
    comparisonSubtitle: "Sin suscripciones caras ni servidores externos. Tus ideas se guardan únicamente en tu propio dispositivo.",
    howToTitle: "Cómo Planificar tu Calendario de 30 Días en 4 Pasos",
    faqTitle: "Preguntas Frecuentes (FAQ)",
    faqSubtitle: "Todo lo que necesitas saber sobre el planificador de contenido Content30.",
    faqs: [
      {
        question: "¿Content30 es realmente 100% gratuito?",
        answer: "Sí, Content30 es totalmente gratuito y de código abierto. No hay planes de pago ni límites de publicaciones."
      },
      {
        question: "¿Dónde se guardan mis ideas y publicaciones?",
        answer: "Todo se almacena en el LocalStorage de tu navegador. Nada se envía a servidores externos."
      },
      {
        question: "¿Puedo exportar mi plan a Excel o Google Sheets?",
        answer: "Sí, pulsa 'Exportar CSV' para descargar tu hoja de cálculo completa con títulos, ganchos y fechas."
      },
      {
        question: "¿Cómo descargo mi calendario como imagen PNG?",
        answer: "Haz clic en 'Exportar Imagen (PNG)' en la barra superior para generar una imagen en alta resolución."
      },
      {
        question: "¿Qué redes sociales son compatibles?",
        answer: "Incluye soporte para TikTok, Instagram, YouTube, X (Twitter), LinkedIn, Pinterest, Threads y Facebook."
      },
      {
        question: "¿Necesito registrarme o dar mi correo electrónico?",
        answer: "No. Puedes usar todas las funciones al instante sin crear cuentas ni registros."
      },
      {
        question: "¿Cómo transfiero mi calendario a otro ordenador?",
        answer: "Usa 'Copia de Seguridad JSON' para guardar tu archivo y 'Restaurar JSON' para cargarlo en otro equipo."
      },
      {
        question: "¿Funciona en teléfonos móviles y tablets?",
        answer: "Sí, en móviles se adapta automáticamente a una vista cronológica vertical ultra limpia."
      }
    ],
    howToSteps: [
      {
        name: "Elige Plataforma y Formato",
        text: "Asigna cada día a una red social (TikTok, Instagram, YouTube) y elige el tipo de contenido."
      },
      {
        name: "Escribe Ganchos y Guiones",
        text: "Haz clic en cada día para redactar ganchos atractivos, notas y textos completos."
      },
      {
        name: "Controla el Estado de Producción",
        text: "Cambia el estado de Idea a Guión, En Progreso y Listo conforme preparas tus publicaciones."
      },
      {
        name: "Exporta en CSV o Imagen",
        text: "Descarga tu calendario en formato CSV para hojas de cálculo o en imagen PNG en alta definición."
      }
    ]
  },

  fr: {
    h1: "Calendrier Éditorial 30 Jours Réseaux Sociaux Gratuit en Ligne",
    subtitle: "Planifiez, organisez et exportez 30 jours de publications directement dans votre navigateur. 100% gratuit, sans serveur et totalement privé.",
    frameworkTitle: "La Méthode 30 Jours : Planifiez 1 Mois de Contenu en 10 Minutes",
    frameworkSubtitle: "La régularité est la clé de la croissance. Éliminez la panne d'inspiration sur TikTok, Instagram, YouTube et LinkedIn.",
    platformsTitle: "Adapté à Toutes les Plateformes Majeures",
    platformsSubtitle: "Du format court vertical pour TikTok aux carrousels d'Instagram et articles LinkedIn.",
    comparisonTitle: "Pourquoi le Stockage Local Surpasse les Outils Cloud",
    comparisonSubtitle: "Aucun abonnement mensuel, aucun compte obligatoire. Vos idées restent stockées sur votre appareil.",
    howToTitle: "Comment Planifier Votre Calendrier en 4 Étapes Simples",
    faqTitle: "Foire Aux Questions (FAQ)",
    faqSubtitle: "Tout ce que vous devez savoir sur le planificateur de contenu Content30.",
    faqs: [
      {
        question: "Content30 est-il vraiment 100% gratuit ?",
        answer: "Oui, Content30 est entièrement gratuit et open-source, sans aucune formule payante ni limitation."
      },
      {
        question: "Où sont stockées mes données éditoriales ?",
        answer: "Toutes vos données restent dans le LocalStorage de votre navigateur. Rien n'est envoyé vers des serveurs cloud."
      },
      {
        question: "Puis-je exporter vers Excel ou Google Sheets ?",
        answer: "Oui, cliquez sur 'Exporter en CSV' pour télécharger un tableur complet et structuré."
      },
      {
        question: "Comment enregistrer le calendrier en image PNG ?",
        answer: "Cliquez sur 'Exporter en Image (PNG)' pour générer un fichier haute définition prêt à imprimer ou partager."
      },
      {
        question: "Quels réseaux sociaux sont pris en charge ?",
        answer: "TikTok, Instagram, YouTube, X (Twitter), LinkedIn, Pinterest, Threads et Facebook."
      },
      {
        question: "Faut-il créer un compte ou donner un e-mail ?",
        answer: "Non, aucune inscription ni mot de passe n'est requis."
      },
      {
        question: "Comment transférer mon planning sur un autre ordinateur ?",
        answer: "Utilisez 'Sauvegarde JSON' pour exporter votre fichier, puis 'Restaurer JSON' sur votre autre appareil."
      },
      {
        question: "L'application fonctionne-t-elle sur smartphone et tablette ?",
        answer: "Oui, l'affichage bascule automatiquement sur une vue chronologique verticale adaptée aux mobiles."
      }
    ],
    howToSteps: [
      {
        name: "Définissez la Plateforme et le Format",
        text: "Attribuez chaque jour à un réseau social et choisissez s'il s'agit d'un Reel, Carrousel ou Vidéo."
      },
      {
        name: "Rédigez vos Accroches et Notes",
        text: "Cliquez sur chaque case pour écrire votre hook d'introduction, vos points clés et vos hashtags."
      },
      {
        name: "Suivez l'État d'Avancement",
        text: "Passez vos contenus de l'état Idée à Rédaction, En Cours, puis Prêt au fur et à mesure."
      },
      {
        name: "Exportez en CSV ou Image PNG",
        text: "Téléchargez votre calendrier mensuel en un clic, sans aucun téléversement sur serveur."
      }
    ]
  },

  pt: {
    h1: "Calendário de Conteúdo de 30 Dias para Redes Sociais Grátis Online",
    subtitle: "Planeje, organize e exporte um mês de publicações diretamente no seu navegador. 100% gratuito, sem servidor e com privacidade total.",
    frameworkTitle: "O Método de 30 Dias: Como Planejar 1 Mês em 10 Minutos",
    frameworkSubtitle: "Constância supera o talento. Elimine o bloqueio criativo e acelere seu crescimento no TikTok, Instagram, YouTube e LinkedIn.",
    platformsTitle: "Otimizado para Todas as Principais Redes Sociais",
    platformsSubtitle: "Do formato vertical para TikTok aos carrosséis do Instagram e threads no X.",
    comparisonTitle: "Por Que o Armazenamento Local É Superior às Ferramentas em Nuvem",
    comparisonSubtitle: "Sem mensalidades caras nem bancos de dados externos. Suas estratégias ficam salvas no seu aparelho.",
    howToTitle: "Como Criar seu Calendário de 30 Dias em 4 Passos",
    faqTitle: "Perguntas Frequentes (FAQ)",
    faqSubtitle: "Tudo o que você precisa saber sobre o planejador de conteúdo Content30.",
    faqs: [
      {
        question: "O Content30 é realmente 100% gratuito?",
        answer: "Sim, o Content30 é gratuito e de código aberto, sem planos pagos nem limites de criação."
      },
      {
        question: "Onde ficam salvas as minhas postagens?",
        answer: "Todos os dados ficam no LocalStorage do seu navegador. Nada é enviado para a nuvem."
      },
      {
        question: "Posso exportar meu plano para Excel ou Google Planilhas?",
        answer: "Sim, clique em 'Exportar CSV' para baixar uma planilha completa e organizada."
      },
      {
        question: "Como baixar meu calendário em imagem PNG?",
        answer: "Clique em 'Exportar Imagem (PNG)' para salvar o cronograma em alta resolução para imprimir ou compartilhar."
      },
      {
        question: "Quais redes sociais são suportadas?",
        answer: "Suporte completo para TikTok, Instagram, YouTube, X (Twitter), LinkedIn, Pinterest, Threads e Facebook."
      },
      {
        question: "Preciso criar conta ou informar meu e-mail?",
        answer: "Não. Você pode começar a planejar imediatamente sem nenhum cadastro."
      },
      {
        question: "Como transferir meu calendário para outro computador?",
        answer: "Use o botão 'Backup JSON' para salvar o arquivo e 'Restaurar JSON' para carregar em outro navegador."
      },
      {
        question: "Funciona bem em celulares e tablets?",
        answer: "Sim, o layout muda automaticamente para uma linha do tempo vertical otimizada para toque."
      }
    ],
    howToSteps: [
      {
        name: "Escolha a Rede e o Formato",
        text: "Defina para cada dia se o post será Reel, Carrossel, Vídeo Longo ou Thread."
      },
      {
        name: "Escreva Ganchos e Roteiros",
        text: "Abra qualquer dia para escrever o gancho inicial, tópicos centrais e hashtags."
      },
      {
        name: "Acompanhe o Status de Produção",
        text: "Mude o status de Ideia para Roteiro, Em Andamento e Pronto conforme você cria."
      },
      {
        name: "Exporte em CSV ou Imagem",
        text: "Baixe seu planejamento de 30 dias em CSV ou imagem de alta qualidade instantaneamente."
      }
    ]
  },

  ja: {
    h1: "無料30日間SNS投稿コンテンツカレンダー ＆ プランナー",
    subtitle: "ブラウザ上で完結するプライバシー重視の30日間SNS運用計画ツール。完全無料・サーバー送信ゼロ・CSVとPNG画像へ即時出力。",
    frameworkTitle: "30日間コンテンツ設計フレームワーク：1ヶ月の投稿を10分で計画",
    frameworkSubtitle: "継続こそが最大の武器。TikTok、Instagram、YouTube、X（Twitter）、LinkedInの投稿を体系化し、ネタ切れを防ぎます。",
    platformsTitle: "主要なすべてのSNSプラットフォームに最適化",
    platformsSubtitle: "TikTokショート動画の冒頭フックから、Instagramカルーセル、Xスレッドまで柔軟に対応。",
    comparisonTitle: "クラウド型ツールよりブラウザ保存（LocalStorage）が優れている理由",
    comparisonSubtitle: "月額サブスクやアカウント登録、クラウドへの情報送信は不要。すべての戦略はお手元の端末内で厳重に守られます。",
    howToTitle: "30日分の投稿計画を立てる4つの簡単ステップ",
    faqTitle: "よくある質問（FAQ）",
    faqSubtitle: "Content30コンテンツカレンダーに関する疑問にお答えします。",
    faqs: [
      {
        question: "本当に完全無料で利用できますか？",
        answer: "はい。有料プランや課金要素は一切なく、すべての機能を永久に無料でご利用いただけます。"
      },
      {
        question: "作成した投稿データはどこに保存されますか？",
        answer: "お使いのブラウザ内（LocalStorage）にのみ安全に保存されます。外部サーバーへの送信は一切行われません。"
      },
      {
        question: "Excelやスプレッドシート（CSV）への書き出しは可能ですか？",
        answer: "はい。「CSV出力」ボタンをクリックすると、タイトル、フック、本文、ハッシュタグが整理されたCSVファイルを即時ダウンロードできます。"
      },
      {
        question: "カレンダーを高解像度の画像（PNG）として保存できますか？",
        answer: "はい。「画像保存 (PNG)」ボタンを押すだけで、印刷やクライアント共有に最適な高解像度PNG画像を生成して保存できます。"
      },
      {
        question: "対応しているSNSプラットフォームは？",
        answer: "TikTok、Instagram、YouTube、X (Twitter)、LinkedIn、Pinterest、Threads、Facebookに対応しています。"
      },
      {
        question: "会員登録やメールアドレスの入力は必要ですか？",
        answer: "不要です。アクセス後すぐに計画を始めることができ、個人情報の入力は一切求められません。"
      },
      {
        question: "別のパソコンや端末へデータを移行できますか？",
        answer: "「JSONバックアップ」でファイルを保存し、移行先で「JSON復元」を実行することで簡単にデータ移行が可能です。"
      },
      {
        question: "スマートフォンやタブレットでも快適に使えますか？",
        answer: "はい。モバイル端末では自動的に見やすい縦スクロールのタイムライン表示に切り替わります。"
      }
    ],
    howToSteps: [
      {
        name: "プラットフォームと形式を選定",
        text: "各日ごとに投稿先のSNS（Instagram、TikTokなど）と形式（リール、カルーセルなど）を設定します。"
      },
      {
        name: "魅力的なフックと本文を執筆",
        text: "クリックして編集モーダルを開き、スクロールの手を止める冒頭フックやメモ、本文を入力します。"
      },
      {
        name: "制作ステータスを可視化",
        text: "「アイデア」から「台本作成」「制作中」「準備完了」へと進捗をリアルタイムに更新します。"
      },
      {
        name: "CSVまたは画像として書き出し",
        text: "完成した30日分の計画をCSVスプレッドシートや高解像度PNG画像として手元に保存します。"
      }
    ]
  }
};
