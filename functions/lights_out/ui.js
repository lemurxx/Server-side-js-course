let App = (function() {
    const getTemplate = (active, row, col) => `<div data-col="${col}" data-row="${row}" class="circle ${active ? 'active' : ''}"><div class="fore"></div><div class="back"></div></div>`;

    function subscribeClick(handler) {
        $("#app").off('click', '.circle');
        $("#app").on('click', '.circle', function(ev) {
            let target = $(ev.target).closest('.circle');
            handler(+target.attr('data-row'), +target.attr('data-col'));
        })
    }

    function updateView(row, col, val) {
        console.log(row, col, val)
        let el = $(`#app .row:nth-of-type(${row + 1}) .circle:nth-of-type(${col + 1})`);
        if (val) {
            el.addClass('active');
        } else {
            el.removeClass('active');
        }
    }

    function createView(size) {
        let html = Array.from({ length: size },
                (v, i) => Array.from({ length: size }, (v2, j) => false))
            .reduce((sum, el, i) => sum += `<div class="row">${el.reduce((s, e, j) => s += getTemplate(e, i, j), '')}</div>`, '')
        $('#app').html(html);
    }

    return {
        createView: createView,
        updateView: updateView,
        subscribeClick: subscribeClick
    }
})();