let votingData = [
    { emoji: '\u{1F603}', count: 0 },
    { emoji: '\u{1F61C}', count: 0 },
    { emoji: '\u{1F609}', count: 0 },
    { emoji: '\u{1F60E}', count: 0 },
    { emoji: '\u{1F618}', count: 0 },
    { emoji: '\u{1F602}', count: 0 },
    { emoji: '\u{1F606}', count: 0 }
  ];
  
  function updateVotingResults() {
    let votingResultsDiv = document.getElementById('votingResults');
    votingResultsDiv.innerHTML = '';
  
    votingData.forEach(function(option) {
      let optionDiv = document.createElement('div');
      optionDiv.className = 'votingOption';
  
      let emojiDiv = document.createElement('div');
      emojiDiv.innerText = option.emoji;
      emojiDiv.className = 'emoji';
      emojiDiv.addEventListener('click', function() {
        option.count++;
        updateVotingResults();
      });
  
      let countDiv = document.createElement('div');
      countDiv.innerText = option.count;
  
      optionDiv.appendChild(emojiDiv);
      optionDiv.appendChild(countDiv);
      votingResultsDiv.appendChild(optionDiv);
    });
  }
  
  updateVotingResults();
