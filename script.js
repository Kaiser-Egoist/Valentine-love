// Handle the Yes button click
document.getElementById('yesBtn').onclick = function() {
    alert("Thank you, Mora! I’m so happy!");
    // Show the gift button after Yes
    document.getElementById('giftButtonContainer').style.display = 'block';
};

// Handle the No button click with teasing phrases
let noClicks = 0;
document.getElementById('noBtn').onclick = function() {
    if (noClicks === 0) {
        alert("Oh no! You can't say no to me, Mora!");
    } else if (noClicks === 1) {
        alert("Come on, don't make me beg... 😘");
    } else if (noClicks === 2) {
        alert("I know you want to say yes, Mora... ❤️");
    } else if (noClicks === 3) {
        alert("You’re just teasing me, aren’t you? 😏");
    }
    noClicks++;

    if (noClicks >= 4) {
        alert("You can't run from me, Mora. Say YES! 😘");
        document.getElementById('yesBtn').style.display = 'block';
        document.getElementById('noBtn').style.display = 'none'; // Hide "No" after 4th attempt
    }
};

// Handle the Gift button click to show the poem
document.getElementById('giftBtn').onclick = function() {
    alert("To My Lovely Mora, Here's a Poem:\n\n");
    alert("Mora, my love, you're my dream come true,\n");
    alert("With every glance, I'm falling more for you.\n");
    alert("Your smile, your eyes, your gentle touch,\n");
    alert("In your embrace, I feel so much.\n\n");

    alert("You're the reason I breathe, the beat in my heart,\n");
    alert("Since the day we met, we've never been apart.\n");
    alert("Each moment with you is a treasure so dear,\n");
    alert("I promise to cherish you, year after year.\n\n");

    alert("Your beauty, Mora, goes beyond what words can say,\n");
    alert("My love for you grows stronger each day.\n");
    alert("I hope this poem makes you smile wide,\n");
    alert("Because you'll always have me by your side.\n\n");
};