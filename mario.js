
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    //console.log("Uh oh... the pyramid is under construction.");
    //console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!
      for (var count = 1; count <= height; count++) {
        var hash = count + 1, space = height - count, line = '';
        for (var hcnt = 0; hcnt < hash; hcnt++)
          line += "#";
        for (var spcnt = 0; spcnt < space; spcnt++)
          line = " " + line;
        console.log(line);
    }
}
