---
layout: default
title: BibleDice
canonical_url: https://bibledice.fun/index.html
---

# 🎲 Welcome to BibleDice!

Explore Scripture through a fun, reflective dice-based game.

- 🎯 Roll your dice to select a Bible book and chapter
- 🧭 Use [SPEC prompts](instructions.md#spec-prompts) to focus your reading
- 📝 Reflect in your journal
- 🙏 Grow closer to God's Word

👉 Start now: [📄 Instructions](instructions.md)

👉 See: [Reading Tracker](text/reading-tracker.txt)

<!-- Enhanced Navigation -->
<nav class="bible-nav">
    <div class="nav-container">
        <div class="logo">🎲 BibleDice</div>
        <ul class="nav-menu">
            <li><a href="/">🏠 Home</a></li>
            <li><a href="/instructions/">📖 Instructions</a></li>
            <li><a href="/tables/">📚 All Tables</a></li>
            <li><a href="/text/reading-tracker.txt">📝 Tracker</a></li>
        </ul>
    </div>
</nav>

<!-- Early Books Toggle -->
<div class="bible-range-toggle">
    <label class="toggle-label">
        <input type="checkbox" id="earlyBooksToggle" class="toggle-checkbox">
        📖 Include Early Old Testament (Genesis - 1 Samuel)
        <small style="opacity: 0.8;">Check this to access books 1-9 by subtracting 9 from your roll</small>
    </label>
    
    <div id="earlyBooksTable" class="early-books-table">
        <h4>📜 Early Books Reference (Subtract 9 from your roll)</h4>
        <table>
            <tr><th>Your Roll</th><th>Minus 9 =</th><th>Book</th></tr>
            <tr><td>10</td><td>1</td><td>Genesis</td></tr>
            <tr><td>11</td><td>2</td><td>Exodus</td></tr>
            <tr><td>12</td><td>3</td><td>Leviticus</td></tr>
            <tr><td>13</td><td>4</td><td>Numbers</td></tr>
            <tr><td>14</td><td>5</td><td>Deuteronomy</td></tr>
            <tr><td>15</td><td>6</td><td>Joshua</td></tr>
            <tr><td>16</td><td>7</td><td>Judges</td></tr>
            <tr><td>17</td><td>8</td><td>Ruth</td></tr>
            <tr><td>18</td><td>9</td><td>1 Samuel</td></tr>
        </table>
    </div>
</div>

<script>
document.getElementById('earlyBooksToggle').addEventListener('change', function() {
    const table = document.getElementById('earlyBooksTable');
    if (this.checked) {
        table.classList.add('active');
    } else {
        table.classList.remove('active');
    }
});
</script>

<div class="dice-section">
    <div class="dice-instructions">
        <strong>🎲 Bible Book Number Chart</strong><br>
        Use a D10 (for the tens place) and a D6 (for the ones place) to generate a number between 10 and 66.
    </div>
    <div class="bible-table">
        | Number | Book             |   | Number | Book                 |
        |--------|------------------|---|--------|----------------------|
        | 10     | 2 Samuel         |   | 39     | Malachi              |
        | 11     | 1 Kings          |   | 40     | Matthew              |
        | 12     | 2 Kings          |   | 41     | Mark                 |
        | 13     | 1 Chronicles     |   | 42     | Luke                 |
        | 14     | 2 Chronicles     |   | 43     | John                 |
        | 15     | Ezra             |   | 44     | Acts                 |
        | 16     | Nehemiah         |   | 45     | Romans               |
        | 17     | Esther           |   | 46     | 1 Corinthians        |
        | 18     | Job              |   | 47     | 2 Corinthians        |
        | 19     | Psalms           |   | 48     | Galatians            |
        | 20     | Proverbs         |   | 49     | Ephesians            |
        | 21     | Ecclesiastes     |   | 50     | Philippians          |
        | 22     | Song of Solomon  |   | 51     | Colossians           |
        | 23     | Isaiah           |   | 52     | 1 Thessalonians      |
        | 24     | Jeremiah         |   | 53     | 2 Thessalonians      |
        | 25     | Lamentations     |   | 54     | 1 Timothy            |
        | 26     | Ezekiel          |   | 55     | 2 Timothy            |
        | 27     | Daniel           |   | 56     | Titus                |
        | 28     | Hosea            |   | 57     | Philemon             |
        | 29     | Joel             |   | 58     | Hebrews              |
        | 30     | Amos             |   | 59     | James                |
        | 31     | Obadiah          |   | 60     | 1 Peter              |
        | 32     | Jonah            |   | 61     | 2 Peter              |
        | 33     | Micah            |   | 62     | 1 John               |
        | 34     | Nahum            |   | 63     | 2 John               |
        | 35     | Habakkuk         |   | 64     | 3 John               |
        | 36     | Zephaniah        |   | 65     | Jude                 |
        | 37     | Haggai           |   | 66     | Revelation           |
        | 38     | Zechariah        |   |        |                      |
    </div>
</div>

📚 Looking for different ways to explore the Bible? Want to focus on just the Gospels, the Psalms, or Wisdom Literature?
See our [📄 Tables Guide](/tables.md) for alternative roll sets and themed reading paths.
