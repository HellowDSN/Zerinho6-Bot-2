exports.requirer = {
  'set-language': require('./staff/set-language.js'),
  ram: require('./bot/ram.js'),
  avatar: require('./utility/avatar.js'),
  help: require('./bot/help.js'),
  tictactoe: require('./games/tictactoe.js'),
  'tictactoe-profile': require('./games/tictactoe-profile.js'),
  'tictactoe-match': require('./games/tictactoe-match.js'),
  embed: require('./utility/embed.js'),
  'bot-invite': require('./bot/bot-invite.js'),
  eval: require('./bot/eval.js'),
  stoptyping: require('./bot/stoptyping.js'),
  userinfo: require('./utility/userinfo.js'),
  serverinfo: require('./utility/serverinfo.js'),
  render: require('./utility/render.js'),
  move: require('./staff/move.js'),
  rpg: require('./games/rpg.js'),
  info: require('./bot/info.js'),
  serverstats: require('./staff/serverstats.js'),
  ping: require('./bot/ping.js'),
  credits: require('./bot/credits.js'),
  bhaskara: require('./etc/bhaskara.js'),
  profile: require('./profile/profile.js'),
  give: require('./profile/give.js'),
  buy: require('./profile/buy.js'),
  daily: require('./profile/daily.js'),
  iteminfo: require('./profile/iteminfo.js'),
  guilddefault: require('./profile/guilddefault.js'),
  myprofile: require('./profile/myprofile.js'),
  moneymanager: require('./profile/moneymanager.js'),
  itemmanager: require('./profile/itemmanager.js'),
  sale: require('./profile/sale.js'),
  unsell: require('./profile/unsell.js'),
  currency: require('./profile/currency.js'),
  allcharts: require('./chart/allcharts.js'),
  author: require('./chart/author.js'),
  chart: require('./chart/chart.js'),
  fullcrashlog: require('./chart/fullcrashlog.js'),
  crashlog: require('./chart/crashlog.js'),
  id: require('./chart/id.js'),
  pack: require('./chart/pack.js'),
  random: require('./chart/random.js'),
  updatecharts: require('./chart/updatecharts.js'),
  version: require('./chart/version.js'),
  chartdealer: require('./chart/chartdealer.js'),
  fichas: require('./games/fichas.js')
}

// Do not put chartdealer there. ~ Zerinho6
exports.commandNames = [
  'set-language', 'ram', 'avatar', 'sale',
  'help', 'tictactoe', 'tictactoe-profile',
  'tictactoe-match', 'embed', 'bot-invite',
  'eval', 'stoptyping', 'userinfo', 'profile',
  'serverinfo', 'render', 'move', 'rpg', 'info',
  'serverstats', 'ping', 'credits', 'bhaskara',
  'buy', 'give', 'daily', 'iteminfo', 'myprofile',
  'guilddefault', 'moneymanager', 'itemmanager',
  'currency', 'unsell', 'allcharts', 'author',
  'chart', 'fullcrashlog', 'crashlog', 'id',
  'pack', 'random', 'updatecharts', 'version',
  'fichas'
]

exports.advanced = {
  Profile: ['profile', 'give', 'buy', 'daily', 'iteminfo', 'guilddefault', 'myprofile', 'moneymanager', 'itemmanager', 'sale', 'unsell', 'currency'],
  Chart: ['allcharts', 'author', 'chart', 'fullcrashlog', 'crashlog', 'id', 'pack', 'random', 'updatecharts', 'version'],
  Bot: ['ram', 'help', 'bot-invite', 'info', 'ping', 'credits', 'stoptyping', 'ping', 'eval'],
  Games: ['rpg', 'tictactoe', 'tictactoe-profile', 'tictactoe-match', 'fichas'],
  Utility: ['render', 'avatar', 'embed', 'userinfo', 'serverinfo'],
  Staff: ['move', 'set-language', 'serverstats'],
  Etc: ['bhaskara']
}
