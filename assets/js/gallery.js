import cf from "https://esm.sh/campfire.js@3.0.1";

export const Gallery = (...srcs) => {
    const [elt, main, options] = cf.nu('div.album', {
        raw: true,
        gimme: ['.album-main>img', '.album-options'],
        contents: `
        <div class=album-main>
            <img src="${srcs[0]}">
        </div>
        <div class=album-options>
            ${srcs.map((itm, idx) =>
            `<img class=album-option src="${itm}">`).join('')}
        </div>
        `,
    })

    options.onclick = (e) => {
        console.log(e.target.tagName, e.target.src);
        if (e.target?.tagName === 'IMG') main.src = e.target.src;
    }

    return elt;
}