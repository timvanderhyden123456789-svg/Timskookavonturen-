const blogPosts = [
  {
    title: "Nieuwe menukaart bij Van der Valk Tilburg",
    category: "Professioneel",
    image: svgCard("Nieuwe menukaart", "🍽️", "#8b5e34", "#d58e4c"),
    excerpt: "Een kijkje achter de schermen bij het ontwikkelen van nieuwe vis- en vegetarische gerechten.",
  },
  {
    title: "AFC Ajax over de vloer",
    category: "Professioneel",
    image: svgCard("AFC Ajax in huis", "⚽", "#8e1f1f", "#1f3b73"),
    excerpt: "Wat er komt kijken bij koken voor een topsportgezelschap en hoe voorbereiding en timing samenkomen.",
  },
  {
    title: "Nieuw gerecht met bijpassende wijn",
    category: "Hobby",
    image: svgCard("Gerecht en wijn", "🍷", "#4b1f35", "#b15c78"),
    excerpt: "Thuis experimenteren met smaken, structuur en een wijn die het gerecht sterker maakt.",
  },
  {
    title: "Etentje bij Puick in Breda",
    category: "Hobby",
    image: svgCard("Puick Breda", "🥂", "#1f4d47", "#7fc7b5"),
    excerpt: "Inspiratie opdoen met verrassende combinaties, mooie presentaties en fijne wijnen.",
  },
  {
    title: "Luxe avond bij Brut172",
    category: "Hobby",
    image: svgCard("Brut172", "⭐", "#101828", "#7c6741"),
    excerpt: "Een culinaire ervaring op hoog niveau, met aandacht voor detail, techniek en verfijning.",
  },
  {
    title: "Wijnvakantie in de Bourgogne",
    category: "Hobby",
    image: svgCard("Bourgogne", "🍇", "#513427", "#d7a574"),
    excerpt: "Van streekgerechten tot mooie wijnhuizen: een reis vol smaak, verhalen en inspiratie.",
  }
];

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@timskookavonturen",
    icon: youtubeIcon(),
    tagline: "Gerecht video’s en keukenmomenten",
    description: "Hier komen uitgebreide video’s van gerechten, kooktechnieken, opmaak en verhalen uit de keuken.",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/tims.kook.avonturen",
    icon: instagramIcon(),
    tagline: "Esthetische foodfoto’s en sfeer",
    description: "Voor mooie borden, close-ups van ingrediënten, wijnmomenten en de sfeer achter mijn culinaire avonturen.",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@tims.kook.avonture",
    icon: tiktokIcon(),
    tagline: "Grappige momenten en korte gerechtjes",
    description: "Korte clips, leuke momenten in en rond de keuken en snelle recepten met een knipoog.",
  }
];

function svgCard(title, emoji, from, to) {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 500'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='${from}' />
          <stop offset='100%' stop-color='${to}' />
        </linearGradient>
      </defs>
      <rect width='800' height='500' rx='40' fill='url(#g)' />
      <circle cx='690' cy='110' r='70' fill='rgba(255,255,255,0.14)' />
      <circle cx='120' cy='420' r='90' fill='rgba(255,255,255,0.09)' />
      <text x='70' y='170' font-size='88'>${emoji}</text>
      <text x='70' y='300' font-family='Verdana, sans-serif' font-size='42' font-weight='700' fill='white'>${title}</text>
      <text x='70' y='360' font-family='Verdana, sans-serif' font-size='22' fill='rgba(255,255,255,0.9)'>Tims kook avonturen</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function instagramIcon() {
  return `
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5"></rect>
      <circle cx="12" cy="12" r="4"></circle>
      <circle cx="17.3" cy="6.7" r="0.8" fill="currentColor" stroke="none"></circle>
    </svg>`;
}

function youtubeIcon() {
  return `
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 12.2c0 2.4-.3 4-.7 5-.3.8-.9 1.4-1.7 1.7-1.5.6-6.6.6-6.6.6s-5.1 0-6.6-.6c-.8-.3-1.4-.9-1.7-1.7-.4-1-.7-2.6-.7-5s.3-4 .7-5c.3-.8.9-1.4 1.7-1.7C6.9 5 12 5 12 5s5.1 0 6.6.6c.8.3 1.4.9 1.7 1.7.4 1 .7 2.6.7 4.9Z"></path>
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none"></path>
    </svg>`;
}

function tiktokIcon() {
  return `
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M14 4c.5 1.6 1.7 2.9 3.2 3.5.9.4 1.8.6 2.8.6"></path>
      <path d="M14 4v10.3a4.3 4.3 0 1 1-3.4-4.2"></path>
    </svg>`;
}

function renderBlogs(filter = "Alles") {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;
  const visible = filter === 'Alles' ? blogPosts : blogPosts.filter((post) => post.category === filter);
  grid.innerHTML = visible.map((post) => `
    <article class="card blog-card">
      <img class="blog-image" src="${post.image}" alt="${post.title}" />
      <div class="blog-body">
        <span class="tag">${post.category}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <span class="arrow-link">Lees later verder →</span>
      </div>
    </article>
  `).join('');
}

function renderSocials() {
  const grid = document.getElementById('social-grid');
  if (!grid) return;
  grid.innerHTML = socialLinks.map((item) => `
    <a class="card social-card" href="${item.href}" target="_blank" rel="noreferrer">
      <div class="social-icon">${item.icon}</div>
      <h3>${item.name}</h3>
      <div class="social-tagline">${item.tagline}</div>
      <p>${item.description}</p>
      <div class="arrow-link">Ga naar ${item.name} →</div>
    </a>
  `).join('');
}

function initBlogFilters() {
  document.querySelectorAll('[data-filter]').forEach((el) => {
    el.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach((btn) => btn.classList.remove('active'));
      el.classList.add('active');
      renderBlogs(el.dataset.filter);
    });
  });
}

function initGame() {
  const gameEl = document.getElementById('game');
  if (!gameEl) return;

  const game = {
    width: 560,
    chefX: 88,
    obstacleWidth: 42,
    gravity: 1.1,
    jumpForce: 14,
    runSpeed: 8,
    clearTarget: 3,
    phase: 'idle',
    chefHeight: 0,
    velocity: 0,
    obstacles: [],
    spawned: 0,
    cleared: 0,
    timer: null,
    clearedIds: new Set(),
  };

  const chefEl = document.getElementById('chef');
  const overlayEl = document.getElementById('game-overlay');
  const overlayTitleEl = document.getElementById('overlay-title');
  const overlayCopyEl = document.getElementById('overlay-copy');
  const scoreTextEl = document.getElementById('score-text');
  const statusTextEl = document.getElementById('status-text');
  const lockedNoticeEl = document.getElementById('locked-notice');
  const emailFormEl = document.getElementById('email-form');
  const successBoxEl = document.getElementById('success-box');

  function obstacleType(index) {
    const types = [
      { emoji: '🐟', label: 'vis' },
      { emoji: '🔪', label: 'mes' },
      { emoji: '🍳', label: 'koekenpan' },
    ];
    return types[index % types.length];
  }

  function clearObstacleDom() {
    gameEl.querySelectorAll('.obstacle').forEach((el) => el.remove());
  }

  function drawGame() {
    chefEl.style.left = `${game.chefX}px`;
    chefEl.style.transform = `translateY(-${game.chefHeight}px)`;
    clearObstacleDom();
    game.obstacles.forEach((obstacle) => {
      const el = document.createElement('div');
      el.className = 'obstacle';
      el.style.left = `${obstacle.x}px`;
      el.title = obstacle.type.label;
      el.textContent = obstacle.type.emoji;
      gameEl.appendChild(el);
    });
    scoreTextEl.textContent = `Gehaald: ${game.cleared}/${game.clearTarget}`;
    const labels = {
      idle: 'Klaar om te starten',
      playing: 'Spelen',
      lost: 'Verloren',
      won: 'Gewonnen',
    };
    statusTextEl.textContent = `Status: ${labels[game.phase]}`;
  }

  function setOverlay(title, copy, visible = true) {
    overlayTitleEl.textContent = title;
    overlayCopyEl.textContent = copy;
    overlayEl.style.display = visible ? 'flex' : 'none';
  }

  function unlockForm() {
    lockedNoticeEl.style.display = 'none';
    emailFormEl.style.display = 'block';
  }

  function lockForm() {
    lockedNoticeEl.style.display = 'block';
    emailFormEl.style.display = 'none';
    successBoxEl.style.display = 'none';
  }

  function stopGame() {
    if (game.timer) {
      clearInterval(game.timer);
      game.timer = null;
    }
  }

  function startGame() {
    stopGame();
    game.phase = 'playing';
    game.chefHeight = 0;
    game.velocity = 0;
    game.obstacles = [{ id: 1, x: game.width + 20, type: obstacleType(0) }];
    game.spawned = 1;
    game.cleared = 0;
    game.clearedIds = new Set();
    lockForm();
    setOverlay('', '', false);
    drawGame();

    game.timer = setInterval(() => {
      const nextVelocity = game.velocity - game.gravity;
      const nextHeight = Math.max(0, game.chefHeight + nextVelocity);
      game.velocity = nextHeight === 0 && nextVelocity < 0 ? 0 : nextVelocity;
      game.chefHeight = nextHeight;

      game.obstacles = game.obstacles.map((item) => ({ ...item, x: item.x - game.runSpeed }));
      const last = game.obstacles[game.obstacles.length - 1];
      if (game.spawned < game.clearTarget && (!last || last.x < game.width - 170)) {
        game.obstacles.push({
          id: game.spawned + 1,
          x: game.width + 40,
          type: obstacleType(game.spawned),
        });
        game.spawned += 1;
      }

      const hit = game.obstacles.some((obstacle) => {
        const horizontalHit = obstacle.x < game.chefX + 30 && obstacle.x + game.obstacleWidth > game.chefX;
        const verticalHit = game.chefHeight < 34;
        return horizontalHit && verticalHit;
      });

      if (hit) {
        game.phase = 'lost';
        stopGame();
        setOverlay('Oeps', 'Je raakte een obstakel. Probeer opnieuw.', true);
        drawGame();
        return;
      }

      game.obstacles.forEach((item) => {
        if (item.x < -game.obstacleWidth && !game.clearedIds.has(item.id)) {
          game.clearedIds.add(item.id);
          game.cleared += 1;
          if (game.cleared >= game.clearTarget) {
            game.phase = 'won';
            stopGame();
            setOverlay('Gewonnen', 'Top. Je hebt drie obstakels gehaald.', true);
            unlockForm();
          }
        }
      });

      game.obstacles = game.obstacles.filter((item) => item.x >= -game.obstacleWidth);
      drawGame();
    }, 40);
  }

  function jump() {
    if (game.phase !== 'playing') return;
    if (game.chefHeight === 0) game.velocity = game.jumpForce;
  }

  document.getElementById('start-game')?.addEventListener('click', startGame);
  document.getElementById('jump-game')?.addEventListener('click', jump);
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      event.preventDefault();
      if (game.phase === 'idle' || game.phase === 'lost') startGame();
      else jump();
    }
  });

  emailFormEl?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    if (!email) return;
    successBoxEl.textContent = `Bedankt ${name || 'chef'}, je aanmelding met ${email} is opgeslagen in deze demo.`;
    successBoxEl.style.display = 'block';
  });

  drawGame();
}

document.addEventListener('DOMContentLoaded', () => {
  renderBlogs();
  renderSocials();
  initBlogFilters();
  initGame();
});