const ws = new WebSocket(`ws://${location.host}`);
ws.binaryType = 'arraybuffer';

ws.onmessage = event => {
    let data;
    if (event.data instanceof ArrayBuffer) {
        let decoder = new TextDecoder("utf-8");
        data = decoder.decode(event.data);
    } else {
        data = event.data.toString();
    }
    refresh(JSON.parse(data));

}

function refresh(dataArray) {
    let list = $("#data-list");
    list.html('');
    dataArray.forEach(data => {
        let elem = $(osDataTemplate);
        elem.find(".user").html(data.user);
        elem.find(".platform").html(data.platform);
        elem.find(".os").html(data.os);
        elem.find(".arch").html(data.arch);
        elem.find(".cpus").html(data.cpus);
        elem.find(".ethernet").html(data.network.ethernet);
        elem.find(".wireless").html(data.network.wireless);
        elem.find(".freemem").html(data.mem.free.toFixed(1) + ' GB');
        elem.find(".totalmem").html(data.mem.total.toFixed(1) + ' GB');
        const perc = data.mem.free / data.mem.total;
        if (perc >= 0.5) {
            elem.find(".pie-chart .foreground").css({
                background: 'steelblue'
            })
            elem.find(".pie-chart .background").css({
                background: 'silver'
            })
            elem.find(".pie-chart .hand").css({
                transform: `rotate(${perc * 360}deg)`,
                background: 'silver'
            });
            elem.find(".pie-chart").css({
                transform: `rotate(${((0.5 - perc) * 360)}deg)`
            })
        } else {
            elem.find(".pie-chart .foreground").css({
                background: 'steelblue'
            })
            elem.find(".pie-chart .background").css({
                background: 'silver'
            })

            elem.find(".pie-chart .hand").css({
                transform: `rotate(${perc * 360}deg)`,
                background: 'steelblue'
            });


        }
        list.append(elem);
    });
}

const osDataTemplate = `
<div class="os-data">
        <h3>User</h3>
        <div class="data-row">
            <label>Name</label> <span class="user"></span>
        </div>
        <h3>Computer</h3>
        <div class="data-row">
            <label>Platform</label> <span class="platform"></span>
        </div>
        <div class="data-row">
            <label>OS</label> <span class="os"></span>
        </div>
        <div class="data-row">
            <label>Architecture</label> <span class="arch"></span>
        </div>
        <div class="data-row">
            <label>CPU Cores</label> <span class="cpus"></span>
        </div>
        <h3>IP Addresses</h3>
        <div>
            <div class="data-row">
                <label>Ethernet</label> <span class="ethernet"></span>
            </div>
            <div>
                <label>Wi-Fi</label> <span class="wireless"></span>
            </div>
        </div>
        <h3>Memory</h3>
        <div class="pie-chart">
            <div class="background"></div>
            <div class="foreground"></div>
            <div class="hand"></div>
        </div>
        <div class="data-row">
            <label>Free</label> <span class="freemem"></span>
        </div>
        <div class="data-row">
            <label>Total</label> <span class="totalmem"></span>
        </div>
    </div>
`;