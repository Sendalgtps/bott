let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/cecan'), 'βΏππ₯πππ§π’π₯β’ππ’π¨π§', wm, 'NEXT', '.cecanvietnam', m)
}

handler.help = ['cecansantuy']
handler.tags = ['cecan']
handler.command = /^(cecansantuy)$/i
handler.limit = 3

module.exports = handler