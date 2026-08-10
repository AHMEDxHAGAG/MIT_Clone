(() => {
  const styleProps = [
    "fontSize", "fontWeight", "fontFamily", "lineHeight", "letterSpacing",
    "color", "textTransform", "textDecoration", "backgroundColor", "background",
    "padding", "margin", "width", "height", "maxWidth", "minWidth",
    "display", "flexDirection", "justifyContent", "alignItems", "gap",
    "gridTemplateColumns", "gridTemplateRows", "borderRadius", "border",
    "boxShadow", "overflow", "position", "top", "right", "bottom", "left",
    "zIndex", "opacity", "transform", "transition", "cursor", "objectFit",
    "objectPosition", "filter", "backdropFilter", "whiteSpace"
  ];

  const getStyles = (element) => {
    const computed = getComputedStyle(element);
    return Object.fromEntries(
      styleProps
        .map((property) => [property, computed[property]])
        .filter(([, value]) => value && !["none", "normal", "auto", "0px", "rgba(0, 0, 0, 0)"].includes(value))
    );
  };

  const getSelector = (element) => {
    if (element.id) return `${element.tagName.toLowerCase()}#${CSS.escape(element.id)}`;
    const classes = [...element.classList].slice(0, 4).map((name) => `.${CSS.escape(name)}`).join("");
    let selector = `${element.tagName.toLowerCase()}${classes}`;
    const parent = element.parentElement;
    if (parent && parent.querySelectorAll(`:scope > ${selector}`).length > 1) {
      selector += `:nth-of-type(${[...parent.children].filter((child) => child.tagName === element.tagName).indexOf(element) + 1})`;
    }
    return selector;
  };

  const getElement = (element) => {
    const rect = element.getBoundingClientRect();
    return {
      selector: getSelector(element),
      tag: element.tagName.toLowerCase(),
      id: element.id || null,
      classes: [...element.classList],
      text: element.textContent.trim().replace(/\s+/g, " ").slice(0, 1200),
      box: {
        x: Math.round(rect.x + scrollX),
        y: Math.round(rect.y + scrollY),
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      },
      styles: getStyles(element)
    };
  };

  const candidates = [...document.querySelectorAll("body > *, header, main, footer, main > *, main > * > section, main > * > article, main > section, main > article, aside")]
    .filter((element, index, elements) => elements.indexOf(element) === index)
    .map(getElement);

  const assets = {
    images: [...document.images].map((image) => ({
      src: image.currentSrc || image.src,
      alt: image.alt,
      width: image.naturalWidth,
      height: image.naturalHeight,
      loading: image.loading,
      parent: image.parentElement ? getSelector(image.parentElement) : null,
      styles: getStyles(image)
    })),
    videos: [...document.querySelectorAll("video")].map((video) => ({
      src: video.currentSrc || video.src || video.querySelector("source")?.src || null,
      sources: [...video.querySelectorAll("source")].map((source) => source.src),
      poster: video.poster || null,
      autoplay: video.autoplay,
      loop: video.loop,
      muted: video.muted,
      playsInline: video.playsInline,
      parent: video.parentElement ? getSelector(video.parentElement) : null,
      styles: getStyles(video)
    })),
    backgrounds: [...document.querySelectorAll("body *")]
      .map((element) => ({ element, background: getComputedStyle(element).backgroundImage }))
      .filter(({ background }) => background && background !== "none")
      .map(({ element, background }) => ({ selector: getSelector(element), background }))
  };

  const controls = [...document.querySelectorAll("a, button, input, select, [tabindex]")].map((element) => ({
    selector: getSelector(element),
    tag: element.tagName.toLowerCase(),
    text: element.textContent.trim().replace(/\s+/g, " ").slice(0, 300),
    href: element instanceof HTMLAnchorElement ? element.href : null,
    ariaLabel: element.getAttribute("aria-label"),
    styles: getStyles(element)
  }));

  const colorPalette = [...new Set([...document.querySelectorAll("body, body *")].flatMap((element) => {
    const computed = getComputedStyle(element);
    return [computed.color, computed.backgroundColor, computed.borderColor];
  }).filter((value) => value && value !== "rgba(0, 0, 0, 0)"))];

  return JSON.stringify({
    url: location.href,
    title: document.title,
    viewport: { width: innerWidth, height: innerHeight, documentHeight: document.documentElement.scrollHeight },
    htmlClasses: [...document.documentElement.classList],
    bodyClasses: [...document.body.classList],
    bodyStyles: getStyles(document.body),
    metadata: [...document.querySelectorAll("meta")].map((meta) => ({
      name: meta.getAttribute("name"),
      property: meta.getAttribute("property"),
      content: meta.content
    })),
    icons: [...document.querySelectorAll('link[rel*="icon"]')].map((link) => ({
      rel: link.rel,
      href: link.href,
      sizes: link.sizes?.toString() || null,
      type: link.type || null
    })),
    stylesheets: [...document.querySelectorAll('link[rel="stylesheet"]')].map((link) => link.href),
    scripts: [...document.scripts].map((script) => script.src).filter(Boolean),
    fonts: [...new Set([...document.fonts].map((font) => `${font.family}|${font.weight}|${font.style}|${font.status}`))],
    colorPalette,
    candidates,
    assets,
    controls,
    classNames: [...new Set([...document.querySelectorAll("body *")].flatMap((element) => [...element.classList]))].sort()
  }, null, 2);
})()
