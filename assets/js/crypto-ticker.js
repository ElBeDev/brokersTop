(function () {
  'use strict';

  /* ── Coin config ── */
  var COINS = {
    BTC:  { base: 83250.00, decimals: 2, vol: 0.0007, color: '#F7931A' },
    ETH:  { base: 1624.80,  decimals: 2, vol: 0.0010, color: '#627EEA' },
    SOL:  { base: 122.45,   decimals: 2, vol: 0.0014, color: '#9945FF' },
    XRP:  { base: 2.0840,   decimals: 4, vol: 0.0012, color: '#00AAE4' },
    DOGE: { base: 0.16520,  decimals: 5, vol: 0.0018, color: '#C2A633' }
  };

  /* ── Seed historical data (40 points walking back from base) ── */
  Object.keys(COINS).forEach(function (id) {
    var c = COINS[id];
    c.history = [];
    var p = c.base * (1 - c.vol * 12);
    for (var i = 0; i < 39; i++) {
      p = p * (1 + (Math.random() - 0.48) * c.vol * 2.5);
      c.history.push(p);
    }
    c.history.push(c.base);
    c.current  = c.base;
    c.openPrice = c.history[0];
  });

  /* ── Draw sparkline on a <canvas> ── */
  function drawSparkline(canvasId, history, color) {
    var canvas = document.getElementById(canvasId);
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    var min = Math.min.apply(null, history);
    var max = Math.max.apply(null, history);
    var range = (max - min) || (min * 0.001) || 1;

    var pts = history.map(function (v, i) {
      return [
        (i / (history.length - 1)) * W,
        H - 4 - ((v - min) / range) * (H - 8)
      ];
    });

    /* Gradient fill */
    var grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, color + '44');
    grad.addColorStop(1, color + '00');
    ctx.beginPath();
    ctx.moveTo(pts[0][0], H);
    pts.forEach(function (p) { ctx.lineTo(p[0], p[1]); });
    ctx.lineTo(pts[pts.length - 1][0], H);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    /* Line */
    ctx.beginPath();
    pts.forEach(function (p, i) {
      if (i === 0) ctx.moveTo(p[0], p[1]);
      else ctx.lineTo(p[0], p[1]);
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.8;
    ctx.lineJoin = 'round';
    ctx.lineCap  = 'round';
    ctx.stroke();

    /* End dot */
    var last = pts[pts.length - 1];
    ctx.beginPath();
    ctx.arc(last[0], last[1], 3, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }

  /* ── Format price display ── */
  function fmt(val, decimals) {
    if (val >= 1000) {
      return '$' + val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    return '$' + val.toFixed(decimals);
  }

  /* ── Update one row in the DOM ── */
  function updateRow(id) {
    var c = COINS[id];
    var priceEl = document.getElementById('price-' + id);
    var pctEl   = document.getElementById('pct-'   + id);
    var row     = document.getElementById('cr-'    + id);
    if (!priceEl || !pctEl || !row) return;

    var prev = c.history[c.history.length - 2] || c.current;
    var up   = c.current >= prev;
    var pct  = (c.current - c.openPrice) / c.openPrice * 100;

    priceEl.textContent = fmt(c.current, c.decimals);
    pctEl.textContent   = (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%';
    pctEl.className     = 'cd-pct ' + (pct >= 0 ? 'up' : 'down');

    /* Row flash */
    row.classList.remove('flash-up', 'flash-down');
    /* Force reflow so animation restarts */
    void row.offsetHeight;
    row.classList.add(up ? 'flash-up' : 'flash-down');

    drawSparkline('spark-' + id, c.history, c.color);
  }

  /* ── Tick: advance all prices ── */
  function tick() {
    Object.keys(COINS).forEach(function (id) {
      var c = COINS[id];
      /* Slight mean-reversion bias so prices stay realistic */
      var drift  = (c.base - c.current) / c.base * 0.15;
      var random = (Math.random() - 0.48) * c.vol * 2.6;
      c.current  = Math.max(c.current * (1 + drift + random), c.base * 0.7);
      c.history.push(c.current);
      if (c.history.length > 50) c.history.shift();
      updateRow(id);
    });
  }

  /* ── Init ── */
  function init() {
    Object.keys(COINS).forEach(function (id) {
      drawSparkline('spark-' + id, COINS[id].history, COINS[id].color);
    });
    setInterval(tick, 3000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
