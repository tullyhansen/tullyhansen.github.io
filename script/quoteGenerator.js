/*********************************************************************
*  #### Random Quote Generator ####
*  Coded by David J Nice.
*  http://www.davidjnice.com/quote_generator.html
*********************************************************************/

var quote = new Array()
quote[0] = 'HTML for quote number 1'
quote[1] = 'HTML for quote number 2'
quote[2] = 'HTML for quote number 3'
quote[3] = 'HTML for quote number 4'

var randomquote = Math.floor(Math.random()*(quote.length));
function printquote(){
document.write(quote[randomquote]);
}