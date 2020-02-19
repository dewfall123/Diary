// gradientBorder.js
class gradientBorderPainter {
  static get inputProperties() {
    return [
      '--border-radius',
    ];
  }

  paint(ctx, geom, properties) {
    // Use `ctx` as if it was a normal canvas
    const { width, height } = geom;
    const r = properties.get('--border-radius');

    // 渐变色
    const lineargradient = ctx.createLinearGradient(0, height, width, 0);
    lineargradient.addColorStop(0, 'gold');
    lineargradient.addColorStop(1, 'deeppink');
    ctx.fillStyle = lineargradient;
  
    ctx.beginPath();
    ctx.moveTo(0, r);
    ctx.quadraticCurveTo(0, 0, r, 0);
    ctx.lineTo(width - r, 0);
    ctx.quadraticCurveTo(width, 0, width, r);
    ctx.lineTo(width, height - r);
    ctx.quadraticCurveTo(width, height, width - r, height);
    ctx.lineTo(r, height);
    ctx.quadraticCurveTo(0, height, 0, height - r);
    ctx.lineTo(0, r);
    ctx.fill();
  }
}

// Register our class under a specific name
registerPaint('gradientBorder', gradientBorderPainter);