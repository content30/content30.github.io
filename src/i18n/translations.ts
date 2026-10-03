export interface Translation {
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    brandName: string;
    brandTagline: string;
    themeLight: string;
    themeDark: string;
    toggleTheme: string;
    selectLanguage: string;
    supportDev: string;
    privacyBadge: string;
  };
  hero: {
    badge: string;
    heading: string;
    headingHighlight: string;
    subtitle: string;
    privacyNote: string;
  };
  stats: {
    planned: string;
    ready: string;
    scripting: string;
    ideas: string;
    published: string;
    progress: string;
    daysCount: string;
  };
  toolbar: {
    searchPlaceholder: string;
    filterPlatform: string;
    filterStatus: string;
    allPlatforms: string;
    allStatuses: string;
    exportCsv: string;
    exportImage: string;
    exportingImage: string;
    print: string;
    backupJson: string;
    restoreJson: string;
    loadSample: string;
    resetPlan: string;
    resetConfirm: string;
    viewCalendar: string;
    viewTimeline: string;
  };
  dayCard: {
    dayPrefix: string;
    untitled: string;
    noNotes: string;
    clickToEdit: string;
    readyBadge: string;
  };
  modal: {
    title: string;
    dayNumber: string;
    postTitleLabel: string;
    postTitlePlaceholder: string;
    platformLabel: string;
    formatLabel: string;
    statusLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    captionLabel: string;
    captionPlaceholder: string;
    hashtagsLabel: string;
    hashtagsPlaceholder: string;
    timeLabel: string;
    autoSaveNotice: string;
    doneButton: string;
    clearButton: string;
    duplicateNext: string;
  };
  status: {
    idea: string;
    scripting: string;
    in_progress: string;
    ready: string;
    published: string;
  };
  contentType: {
    reel: string;
    carousel: string;
    single_image: string;
    long_video: string;
    text_thread: string;
    story: string;
    article: string;
  };
  features: {
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
  };
  footer: {
    tagline: string;
    craftedWith: string;
    privacyFirst: string;
    supportDevText: string;
    allRightsReserved: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    seo: {
      title: "Content30 | Free 100% Client-Side 30-Day Social Media Calendar",
      description: "A privacy-first, zero-server 30-day content planner built with Astro, React Islands, and Tailwind CSS. Plan, organize, and export a month of social media posts directly in your browser using local storage.",
      keywords: "free 30 day content calendar, social media planner online, private content scheduler, client-side content planner, instagram tiktok youtube calendar",
      ogTitle: "Content30 | Free 100% Client-Side 30-Day Social Media Calendar",
      ogDescription: "Plan, organize, and export 30 days of social media posts directly in your browser. 100% private, zero-server client-side storage."
    },
    nav: {
      brandName: "Content30",
      brandTagline: "30-Day Content Calendar",
      themeLight: "Light Mode",
      themeDark: "Dark Mode",
      toggleTheme: "Toggle Light/Dark Theme",
      selectLanguage: "Language",
      supportDev: "Support the Developer",
      privacyBadge: "100% Client-Side • Zero Server"
    },
    hero: {
      badge: "100% Client-Side • Zero Data Sent to Servers",
      heading: "Design Your Entire 30-Day",
      headingHighlight: "Social Media Strategy",
      subtitle: "Plan, organize, and export your monthly posts directly in your browser. Instant auto-save to LocalStorage, zero logins, and complete data privacy.",
      privacyNote: "Your content stays on your machine. Nothing ever leaves your browser."
    },
    stats: {
      planned: "Planned",
      ready: "Ready to Post",
      scripting: "Scripting",
      ideas: "Ideas",
      published: "Published",
      progress: "Month Completion",
      daysCount: "of 30 Days"
    },
    toolbar: {
      searchPlaceholder: "Search topics, notes, or tags...",
      filterPlatform: "Platform",
      filterStatus: "Status",
      allPlatforms: "All Platforms",
      allStatuses: "All Statuses",
      exportCsv: "Export CSV",
      exportImage: "Export Image (PNG)",
      exportingImage: "Rendering Image...",
      print: "Print Plan",
      backupJson: "Backup JSON",
      restoreJson: "Restore JSON",
      loadSample: "Load Sample Strategy",
      resetPlan: "Clear Month",
      resetConfirm: "Are you sure you want to clear all 30 days? This action cannot be undone unless you have a JSON backup.",
      viewCalendar: "Grid View",
      viewTimeline: "Timeline View"
    },
    dayCard: {
      dayPrefix: "Day",
      untitled: "Empty Post Slot",
      noNotes: "Click to write hook, caption, or script...",
      clickToEdit: "Click to edit Day",
      readyBadge: "Ready"
    },
    modal: {
      title: "Edit Content Slot",
      dayNumber: "Day",
      postTitleLabel: "Post Title or Core Angle",
      postTitlePlaceholder: "e.g., 3 Secret Habits Every Creator Needs in 2026",
      platformLabel: "Target Social Platform",
      formatLabel: "Content Format",
      statusLabel: "Production Status",
      notesLabel: "Opening Hook & Production Notes",
      notesPlaceholder: "Hook: Stop making this mistake...\nPoints: 1. ..., 2. ...\nCall to Action: Comment GUIDE below!",
      captionLabel: "Full Caption & Copy",
      captionPlaceholder: "Write your complete post caption here...",
      hashtagsLabel: "Hashtags & Keywords",
      hashtagsPlaceholder: "#contentcreation #creatorgrowth #socialmediatips",
      timeLabel: "Target Posting Time",
      autoSaveNotice: "Saved automatically to LocalStorage",
      doneButton: "Done",
      clearButton: "Clear Day",
      duplicateNext: "Copy to Next Day"
    },
    status: {
      idea: "Idea",
      scripting: "Scripting",
      in_progress: "In Progress",
      ready: "Ready",
      published: "Published"
    },
    contentType: {
      reel: "Reel / Short",
      carousel: "Carousel Slide",
      single_image: "Single Photo / Graphic",
      long_video: "Long-form Video",
      text_thread: "Text Thread / Post",
      story: "Story",
      article: "Newsletter / Article"
    },
    features: {
      f1Title: "100% Client-Side Privacy",
      f1Desc: "No logins, no tracking, and zero cloud databases. Your strategy remains strictly private in your browser's LocalStorage.",
      f2Title: "Fast Instant Export",
      f2Desc: "Download your completed 30-day editorial schedule as a structured CSV spreadsheet or a shareable high-res PNG image.",
      f3Title: "Built for Creators",
      f3Desc: "Tag by platform, track production status from Idea to Published, and plan captions and hooks seamlessly on desktop and mobile."
    },
    footer: {
      tagline: "Free 100% Client-Side 30-Day Social Media Calendar.",
      craftedWith: "Built with Astro, React, and Tailwind CSS for maximum speed and privacy.",
      privacyFirst: "All data stays stored locally on your device.",
      supportDevText: "Buy Me a Coffee",
      allRightsReserved: "All rights reserved. Free for commercial and personal creator use."
    }
  },

  es: {
    seo: {
      title: "Content30 | Calendario de Redes Sociales de 30 Días 100% en el Navegador",
      description: "Planificador de contenido de 30 días, seguro y sin servidores, creado con Astro, React y Tailwind CSS. Planifica y exporta un mes de publicaciones con total privacidad.",
      keywords: "calendario de contenido 30 dias gratis, planificador de redes sociales online, programador de contenido privado, sin servidores",
      ogTitle: "Content30 | Calendario de Redes Sociales de 30 Días",
      ogDescription: "Planifica y exporta 30 días de contenido para redes sociales directamente en tu navegador con total privacidad."
    },
    nav: {
      brandName: "Content30",
      brandTagline: "Calendario de 30 Días",
      themeLight: "Modo Claro",
      themeDark: "Modo Oscuro",
      toggleTheme: "Cambiar Tema Claro/Oscuro",
      selectLanguage: "Idioma",
      supportDev: "Apoyar al Desarrollador",
      privacyBadge: "100% en el Navegador • Cero Servidores"
    },
    hero: {
      badge: "100% en tu Dispositivo • Cero Datos Enviados",
      heading: "Diseña tu Estrategia de 30 Días",
      headingHighlight: "para Redes Sociales",
      subtitle: "Planifica, organiza y exporta tu mes de contenido directamente en el navegador. Guardado automático instantáneo, sin registros y con privacidad total.",
      privacyNote: "Tus ideas nunca salen de tu ordenador o teléfono."
    },
    stats: {
      planned: "Planificado",
      ready: "Listo para Publicar",
      scripting: "En Guión",
      ideas: "Ideas",
      published: "Publicado",
      progress: "Progreso Mensual",
      daysCount: "de 30 Días"
    },
    toolbar: {
      searchPlaceholder: "Buscar temas, notas o etiquetas...",
      filterPlatform: "Plataforma",
      filterStatus: "Estado",
      allPlatforms: "Todas las Plataformas",
      allStatuses: "Todos los Estados",
      exportCsv: "Exportar CSV",
      exportImage: "Exportar Imagen (PNG)",
      exportingImage: "Generando Imagen...",
      print: "Imprimir Plan",
      backupJson: "Copia de Seguridad JSON",
      restoreJson: "Restaurar JSON",
      loadSample: "Cargar Ejemplo",
      resetPlan: "Limpiar Mes",
      resetConfirm: "¿Estás seguro de que quieres borrar los 30 días? Esta acción no se puede deshacer sin una copia de seguridad.",
      viewCalendar: "Vista Calendario",
      viewTimeline: "Vista Cronológica"
    },
    dayCard: {
      dayPrefix: "Día",
      untitled: "Espacio sin Título",
      noNotes: "Haz clic para escribir el gancho, guión o texto...",
      clickToEdit: "Haz clic para editar el Día",
      readyBadge: "Listo"
    },
    modal: {
      title: "Editar Publicación",
      dayNumber: "Día",
      postTitleLabel: "Título o Ángulo Principal",
      postTitlePlaceholder: "ej., 3 Errores al Emprender en 2026",
      platformLabel: "Plataforma Objetivo",
      formatLabel: "Formato de Contenido",
      statusLabel: "Estado de Producción",
      notesLabel: "Gancho y Notas de Producción",
      notesPlaceholder: "Gancho: No hagas esto...\nPuntos: 1. ..., 2. ...\nLlamada a la acción: ¡Comenta GUIA!",
      captionLabel: "Texto Completo de la Publicación",
      captionPlaceholder: "Escribe tu texto completo aquí...",
      hashtagsLabel: "Hashtags y Palabras Clave",
      hashtagsPlaceholder: "#creadores #marketingdigital #redessociales",
      timeLabel: "Hora de Publicación",
      autoSaveNotice: "Guardado automáticamente en LocalStorage",
      doneButton: "Listo",
      clearButton: "Borrar Día",
      duplicateNext: "Copiar al Día Siguiente"
    },
    status: {
      idea: "Idea",
      scripting: "Guión",
      in_progress: "En Progreso",
      ready: "Listo",
      published: "Publicado"
    },
    contentType: {
      reel: "Reel / Corto",
      carousel: "Carrusel",
      single_image: "Foto / Gráfico",
      long_video: "Vídeo Largo",
      text_thread: "Hilo / Texto",
      story: "Historia",
      article: "Artículo / Newsletter"
    },
    features: {
      f1Title: "Privacidad 100% Local",
      f1Desc: "Sin registros ni servidores. Tu estrategia se guarda en tu propio dispositivo.",
      f2Title: "Exportación Rápida",
      f2Desc: "Descarga tu calendario en formato CSV o como imagen PNG en alta definición.",
      f3Title: "Creado para Creadores",
      f3Desc: "Etiqueta por red social, controla estados y planifica tus ganchos fácilmente."
    },
    footer: {
      tagline: "Calendario de Redes Sociales de 30 Días, gratis y 100% en el cliente.",
      craftedWith: "Desarrollado con Astro, React y Tailwind CSS para máxima velocidad.",
      privacyFirst: "Tus datos se quedan en tu navegador.",
      supportDevText: "Invítame a un Café",
      allRightsReserved: "Todos los derechos reservados. Libre para uso personal y comercial."
    }
  },

  fr: {
    seo: {
      title: "Content30 | Calendrier Éditorial 30 Jours 100% Côté Client Gratuit",
      description: "Planificateur de contenu de 30 jours axé sur la confidentialité et sans serveur. Conçu avec Astro, React et Tailwind CSS.",
      keywords: "calendrier éditorial 30 jours gratuit, planificateur réseaux sociaux en ligne, planificateur contenu privé",
      ogTitle: "Content30 | Calendrier Réseaux Sociaux 30 Jours Gratuit",
      ogDescription: "Planifiez et exportez 30 jours de publications directement dans votre navigateur en toute confidentialité."
    },
    nav: {
      brandName: "Content30",
      brandTagline: "Calendrier de 30 Jours",
      themeLight: "Mode Clair",
      themeDark: "Mode Sombre",
      toggleTheme: "Changer le Thème Clair/Sombre",
      selectLanguage: "Langue",
      supportDev: "Soutenir le Développeur",
      privacyBadge: "100% Côté Client • Zéro Serveur"
    },
    hero: {
      badge: "100% Côté Client • Aucune Donnée Envoyée",
      heading: "Créez Votre Stratégie de 30 Jours",
      headingHighlight: "sur les Réseaux Sociaux",
      subtitle: "Planifiez, organisez et exportez votre mois complet directement dans votre navigateur. Sauvegarde automatique instantanée et confidentialité absolue.",
      privacyNote: "Vos contenus restent sur votre appareil. Rien ne quitte votre navigateur."
    },
    stats: {
      planned: "Planifié",
      ready: "Prêt à Publier",
      scripting: "Rédaction",
      ideas: "Idées",
      published: "Publié",
      progress: "Progression du Mois",
      daysCount: "sur 30 Jours"
    },
    toolbar: {
      searchPlaceholder: "Rechercher sujets, notes ou mots-clés...",
      filterPlatform: "Plateforme",
      filterStatus: "Statut",
      allPlatforms: "Toutes les Plateformes",
      allStatuses: "Tous les Statuts",
      exportCsv: "Exporter en CSV",
      exportImage: "Exporter en Image (PNG)",
      exportingImage: "Création de l'image...",
      print: "Imprimer le Calendrier",
      backupJson: "Sauvegarde JSON",
      restoreJson: "Restaurer JSON",
      loadSample: "Charger un Exemple",
      resetPlan: "Effacer le Mois",
      resetConfirm: "Êtes-vous sûr de vouloir tout effacer ? Cette action est irréversible sans sauvegarde.",
      viewCalendar: "Vue Grille",
      viewTimeline: "Vue Chronologique"
    },
    dayCard: {
      dayPrefix: "Jour",
      untitled: "Emplacement Vide",
      noNotes: "Cliquez pour rédiger l'accroche ou les notes...",
      clickToEdit: "Cliquez pour modifier le Jour",
      readyBadge: "Prêt"
    },
    modal: {
      title: "Modifier la Publication",
      dayNumber: "Jour",
      postTitleLabel: "Titre ou Angle Principal",
      postTitlePlaceholder: "ex: 3 Habitudes Secrètes des Créateurs en 2026",
      platformLabel: "Plateforme Cible",
      formatLabel: "Format de Contenu",
      statusLabel: "Statut de Production",
      notesLabel: "Accroche (Hook) & Notes de Réalisation",
      notesPlaceholder: "Accroche : Arrêtez de faire ça...\nPoints clés : 1. ..., 2. ...\nAppel à l'action : Commentez GUIDE !",
      captionLabel: "Légende Complète",
      captionPlaceholder: "Rédigez votre texte complet ici...",
      hashtagsLabel: "Hashtags & Mots-clés",
      hashtagsPlaceholder: "#creationdecontenu #reseauxsociaux #marketing",
      timeLabel: "Heure de Publication",
      autoSaveNotice: "Enregistré automatiquement dans LocalStorage",
      doneButton: "Terminé",
      clearButton: "Vider le Jour",
      duplicateNext: "Dupliquer au Jour Suivant"
    },
    status: {
      idea: "Idée",
      scripting: "Rédaction",
      in_progress: "En Cours",
      ready: "Prêt",
      published: "Publié"
    },
    contentType: {
      reel: "Reel / Short",
      carousel: "Carrousel",
      single_image: "Photo / Graphique",
      long_video: "Vidéo Longue",
      text_thread: "Thread / Texte",
      story: "Story",
      article: "Article / Infolettre"
    },
    features: {
      f1Title: "Confidentialité Totale",
      f1Desc: "Aucun compte requis, aucun serveur. Vos données restent sur votre ordinateur.",
      f2Title: "Export Instantané",
      f2Desc: "Téléchargez votre grille en CSV ou en image haute résolution en un clic.",
      f3Title: "Conçu pour les Créateurs",
      f3Desc: "Gérez les statuts d'avancement et planifiez vos accroches avec fluidité."
    },
    footer: {
      tagline: "Calendrier de Réseaux Sociaux 30 Jours gratuit et 100% local.",
      craftedWith: "Conçu avec Astro, React et Tailwind CSS pour une rapidité absolue.",
      privacyFirst: "Toutes les données restent sur votre appareil.",
      supportDevText: "Offrez-moi un Café",
      allRightsReserved: "Tous droits réservés. Gratuit pour usage personnel et commercial."
    }
  },

  pt: {
    seo: {
      title: "Content30 | Calendário de Redes Sociais de 30 Dias 100% no Navegador",
      description: "Planejador de conteúdo de 30 dias sem servidor e focado em privacidade. Criado com Astro, React e Tailwind CSS.",
      keywords: "calendario de conteudo 30 dias gratis, planejador de redes sociais online, organizador de postagens privado",
      ogTitle: "Content30 | Calendário de 30 Dias para Redes Sociais",
      ogDescription: "Planeje e exporte 30 dias de publicações diretamente no seu navegador com total privacidade."
    },
    nav: {
      brandName: "Content30",
      brandTagline: "Calendário de 30 Dias",
      themeLight: "Modo Claro",
      themeDark: "Modo Escuro",
      toggleTheme: "Alternar Modo Claro/Escuro",
      selectLanguage: "Idioma",
      supportDev: "Apoiar o Desenvolvedor",
      privacyBadge: "100% no Navegador • Zero Servidor"
    },
    hero: {
      badge: "100% no Seu Navegador • Zero Envio para Servidores",
      heading: "Desenvolva sua Estratégia de 30 Dias",
      headingHighlight: "para Redes Sociais",
      subtitle: "Planeje, organize e exporte o mês completo diretamente no seu navegador. Salvamento automático imediato, sem cadastro e com privacidade máxima.",
      privacyNote: "Suas ideias permanecem no seu aparelho. Nada é enviado para a nuvem."
    },
    stats: {
      planned: "Planejado",
      ready: "Pronto p/ Postar",
      scripting: "Roteiro",
      ideas: "Ideias",
      published: "Publicado",
      progress: "Progresso do Mês",
      daysCount: "de 30 Dias"
    },
    toolbar: {
      searchPlaceholder: "Buscar tópicos, notas ou hashtags...",
      filterPlatform: "Plataforma",
      filterStatus: "Status",
      allPlatforms: "Todas as Plataformas",
      allStatuses: "Todos os Status",
      exportCsv: "Exportar CSV",
      exportImage: "Exportar Imagem (PNG)",
      exportingImage: "Gerando Imagem...",
      print: "Imprimir Calendário",
      backupJson: "Backup JSON",
      restoreJson: "Restaurar JSON",
      loadSample: "Carregar Exemplo",
      resetPlan: "Limpar Mês",
      resetConfirm: "Tem certeza de que deseja limpar todos os 30 dias? Isso não pode ser desfeito sem backup.",
      viewCalendar: "Visualização em Grade",
      viewTimeline: "Visualização em Linha do Tempo"
    },
    dayCard: {
      dayPrefix: "Dia",
      untitled: "Post em Branco",
      noNotes: "Clique para escrever o gancho, roteiro ou legenda...",
      clickToEdit: "Clique para editar o Dia",
      readyBadge: "Pronto"
    },
    modal: {
      title: "Editar Postagem",
      dayNumber: "Dia",
      postTitleLabel: "Título ou Ângulo do Conteúdo",
      postTitlePlaceholder: "ex: 3 Segredos que Todo Criador Precisa em 2026",
      platformLabel: "Rede Social Alvo",
      formatLabel: "Formato do Conteúdo",
      statusLabel: "Status de Produção",
      notesLabel: "Gancho (Hook) & Roteiro",
      notesPlaceholder: "Gancho: Pare de cometer esse erro...\nPontos: 1. ..., 2. ...\nChamada para ação: Comente GUIA!",
      captionLabel: "Legenda Completa",
      captionPlaceholder: "Escreva sua legenda completa aqui...",
      hashtagsLabel: "Hashtags e Palavras-chave",
      hashtagsPlaceholder: "#criacaodeconteudo #marketingdeconteudo #redessociais",
      timeLabel: "Horário da Postagem",
      autoSaveNotice: "Salvo automaticamente no LocalStorage",
      doneButton: "Concluir",
      clearButton: "Limpar Dia",
      duplicateNext: "Duplicar para o Próximo Dia"
    },
    status: {
      idea: "Ideia",
      scripting: "Roteiro",
      in_progress: "Em Andamento",
      ready: "Pronto",
      published: "Publicado"
    },
    contentType: {
      reel: "Reel / Vídeo Curto",
      carousel: "Carrossel",
      single_image: "Imagem Única",
      long_video: "Vídeo Longo",
      text_thread: "Thread / Texto",
      story: "Story",
      article: "Artigo / Newsletter"
    },
    features: {
      f1Title: "Privacidade 100% Local",
      f1Desc: "Sem login nem banco de dados. Suas ideias ficam guardadas apenas no seu navegador.",
      f2Title: "Exportação Fácil",
      f2Desc: "Baixe a planilha CSV completa ou a imagem do calendário em alta resolução.",
      f3Title: "Criado para Criadores",
      f3Desc: "Acompanhe status, organize por plataforma e monte seus roteiros com agilidade."
    },
    footer: {
      tagline: "Calendário de 30 Dias gratuito e 100% executado no navegador.",
      craftedWith: "Criado com Astro, React e Tailwind CSS para velocidade e privacidade.",
      privacyFirst: "Todos os dados ficam no seu dispositivo.",
      supportDevText: "Comprar um Café",
      allRightsReserved: "Todos os direitos reservados. Gratuito para uso pessoal e comercial."
    }
  },

  ja: {
    seo: {
      title: "Content30 | 完全クライアント側・無料30日間SNS投稿カレンダー",
      description: "サーバー不要・プライバシー重視の30日間コンテンツプランナー。Astro、React Islands、Tailwind CSSで構築。ブラウザのローカルストレージで安全に保存・CSVや画像へ即座に出力。",
      keywords: "無料30日コンテンツカレンダー, SNS運用プランナー, プライベートコンテンツ管理, クライアント側保存",
      ogTitle: "Content30 | 無料30日間SNS投稿カレンダー",
      ogDescription: "ブラウザ内で完結する安全な30日間SNSスケジュール管理ツール。完全クライアント側保存。"
    },
    nav: {
      brandName: "Content30",
      brandTagline: "30日間コンテンツカレンダー",
      themeLight: "ライトモード",
      themeDark: "ダークモード",
      toggleTheme: "テーマ切り替え",
      selectLanguage: "言語",
      supportDev: "開発者を応援する",
      privacyBadge: "100% クライアント保存 • サーバー送信なし"
    },
    hero: {
      badge: "100% クライアント側保存 • 外部サーバー送信ゼロ",
      heading: "30日分のSNS戦略を",
      headingHighlight: "ブラウザだけで完結",
      subtitle: "1ヶ月分の投稿アイデア、フック、台本をブラウザ上で計画・編集・書き出し。自動保存、ログイン不要、万全のプライバシー保護。",
      privacyNote: "作成したすべてのデータはお使いの端末内にのみ保存されます。"
    },
    stats: {
      planned: "計画済み",
      ready: "投稿準備完了",
      scripting: "台本作成中",
      ideas: "アイデア",
      published: "公開済み",
      progress: "月間進捗率",
      daysCount: "日 / 30日中"
    },
    toolbar: {
      searchPlaceholder: "トピック、台本、タグを検索...",
      filterPlatform: "プラットフォーム",
      filterStatus: "ステータス",
      allPlatforms: "全プラットフォーム",
      allStatuses: "全ステータス",
      exportCsv: "CSV出力",
      exportImage: "画像保存 (PNG)",
      exportingImage: "画像生成中...",
      print: "印刷する",
      backupJson: "JSONバックアップ",
      restoreJson: "JSON復元",
      loadSample: "サンプル計画を読み込む",
      resetPlan: "カレンダーをリセット",
      resetConfirm: "本当に30日分のデータを初期化しますか？バックアップがない場合は復元できません。",
      viewCalendar: "グリッド表示",
      viewTimeline: "タイムライン表示"
    },
    dayCard: {
      dayPrefix: "日目",
      untitled: "未設定のスロット",
      noNotes: "クリックしてフックや概要を記入...",
      clickToEdit: "クリックして編集",
      readyBadge: "完了"
    },
    modal: {
      title: "投稿内容の編集",
      dayNumber: "日目",
      postTitleLabel: "投稿タイトル / 切り口",
      postTitlePlaceholder: "例: 2026年に差がつくクリエイターの3つの習慣",
      platformLabel: "対象プラットフォーム",
      formatLabel: "投稿形式",
      statusLabel: "制作ステータス",
      notesLabel: "冒頭フック ＆ 構成メモ",
      notesPlaceholder: "フック: この間違いをしていませんか？\n構成: 1. ..., 2. ...\nCTA: 詳細はプロフのリンクへ！",
      captionLabel: "キャプション全文",
      captionPlaceholder: "投稿の本文をここに入力...",
      hashtagsLabel: "ハッシュタグ ＆ キーワード",
      hashtagsPlaceholder: "#SNS運用 #コンテンツマーケティング #クリエイター",
      timeLabel: "投稿予定時間",
      autoSaveNotice: "LocalStorageに自動保存されました",
      doneButton: "完了",
      clearButton: "この日をクリア",
      duplicateNext: "翌日へ複製"
    },
    status: {
      idea: "アイデア",
      scripting: "台本作成",
      in_progress: "制作中",
      ready: "準備完了",
      published: "公開済み"
    },
    contentType: {
      reel: "リール / ショート",
      carousel: "カルーセル",
      single_image: "画像1枚",
      long_video: "長尺動画",
      text_thread: "テキスト / スレッド",
      story: "ストーリー",
      article: "記事 / メルマガ"
    },
    features: {
      f1Title: "100% クライアント側保存",
      f1Desc: "ログインもクラウドも不要。あなたの戦略はすべて手元の端末で守られます。",
      f2Title: "CSV・画像へ即座に出力",
      f2Desc: "30日分の計画をCSVスプレッドシートや高解像度PNG画像としていつでも保存可能。",
      f3Title: "クリエイター向け設計",
      f3Desc: "プラットフォーム別の色分け、ステータス管理、フック設計を直感的に行えます。"
    },
    footer: {
      tagline: "完全クライアント側の無料30日間SNSコンテンツカレンダー。",
      craftedWith: "超高速とプライバシーのため Astro, React, Tailwind CSS で構築。",
      privacyFirst: "データはすべてお使いの端末内に安全に保持されます。",
      supportDevText: "開発者をコーヒーで応援",
      allRightsReserved: "All rights reserved. 商用・個人利用ともに無料。"
    }
  }
};
