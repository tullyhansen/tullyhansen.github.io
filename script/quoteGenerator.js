/*********************************************************************
*  #### Random Quote Generator ####
*  Coded by David J Nice.
*  http://www.davidjnice.com/quote_generator.html
*********************************************************************/

var quote = new Array()
quote[0] = 'Updating my homepage since 1998.'
quote[1] = '#botALLY to the #bone.'
quote[2] = 'I owe you an email. Sorry about that.'

var randomquote = Math.floor(Math.random()*(quote.length));
function printquote(){
document.write(quote[randomquote]);
}