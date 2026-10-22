const devices = {
  bulb: {
    name: 'Electric Bulb',
    icon: '💡',
    badge: '⚡',
    efficiency: 85,
    summary: 'A bulb transforms electrical energy into light and heat, with some energy spreading to the surroundings as thermal energy.',
    everyday: 'You can observe the same idea in lamps, torches, and overhead lights at home or school.',
    steps: [
      { name: 'Electrical', color: '#5ad0ff' },
      { name: 'Light', color: '#ffd166' },
      { name: 'Thermal', color: '#ff8c42' }
    ]
  },
  solar: {
    name: 'Solar Panel',
    icon: '☀️',
    badge: '🔆',
    efficiency: 78,
    summary: 'Sunlight carries radiant energy that a solar panel captures and converts into electrical energy.',
    everyday: 'The same conversion appears in calculators, solar chargers, and rooftop panels.',
    steps: [
      { name: 'Solar', color: '#ffd166' },
      { name: 'Electrical', color: '#5ad0ff' }
    ]
  },
  fan: {
    name: 'Electric Fan',
    icon: '🌀',
    badge: '🌀',
    efficiency: 68,
    summary: 'Electrical energy powers the motor, which spins blades to create movement and also makes sound and heat.',
    everyday: 'This is similar to ceiling fans, table fans, and ventilation motors.',
    steps: [
      { name: 'Electrical', color: '#5ad0ff' },
      { name: 'Mechanical', color: '#6df5c3' },
      { name: 'Sound', color: '#ff7edb' },
      { name: 'Thermal', color: '#ff8c42' }
    ]
  },
  dam: {
    name: 'Hydroelectric Dam',
    icon: '💧',
    badge: '🌊',
    efficiency: 88,
    summary: 'Stored gravitational potential energy in water becomes kinetic energy, then mechanical energy, and finally electrical energy.',
    everyday: 'This conversion happens in hydroelectric power stations and large dams.',
    steps: [
      { name: 'Potential', color: '#7ed6ff' },
      { name: 'Kinetic', color: '#86f1ff' },
      { name: 'Mechanical', color: '#6df5c3' },
      { name: 'Electrical', color: '#5ad0ff' }
    ]
  },
  engine: {
    name: 'Car Engine',
    icon: '🚗',
    badge: '🔥',
    efficiency: 72,
    summary: 'The fuel stores chemical energy, which is released as heat and then converted into mechanical motion and sound.',
    everyday: 'Cars, buses, and motorcycles use this same energy chain every day.',
    steps: [
      { name: 'Chemical', color: '#6df5c3' },
      { name: 'Thermal', color: '#ff8c42' },
      { name: 'Mechanical', color: '#86f1ff' },
      { name: 'Sound', color: '#ff7edb' }
    ]
  },
  toy: {
    name: 'Battery-Powered Toy Car',
    icon: '🚙',
    badge: '🔋',
    efficiency: 74,
    summary: 'Chemical energy stored in the battery becomes electrical energy that drives the motor, creating movement.',
    everyday: 'This is common in remote-controlled cars, toy trains, and portable gadgets.',
    steps: [
      { name: 'Chemical', color: '#6df5c3' },
      { name: 'Electrical', color: '#5ad0ff' },
      { name: 'Mechanical', color: '#86f1ff' }
    ]
  },
  wind: {
    name: 'Wind Turbine',
    icon: '🌀',
    badge: '🌬️',
    efficiency: 80,
    summary: 'Moving air has kinetic energy that turns turbine blades, creating mechanical motion and then electrical energy.',
    everyday: 'Wind farms and turbines in open fields use this conversion for power generation.',
    steps: [
      { name: 'Wind Kinetic', color: '#7ed6ff' },
      { name: 'Mechanical', color: '#6df5c3' },
      { name: 'Electrical', color: '#5ad0ff' }
    ]
  },
  body: {
    name: 'Human Body',
    icon: '🧑‍🔬',
    badge: '💪',
    efficiency: 70,
    summary: 'Food provides chemical energy that the body converts into movement, warmth, and life processes.',
    everyday: 'This is seen in walking, running, thinking, and maintaining body temperature.',
    steps: [
      { name: 'Chemical', color: '#6df5c3' },
      { name: 'Mechanical', color: '#86f1ff' },
      { name: 'Thermal', color: '#ff8c42' }
    ]
  },
  speaker: {
    name: 'Microphone and Speaker',
    icon: '🔊',
    badge: '🎧',
    efficiency: 75,
    summary: 'Sound waves disturb a microphone, creating electrical signals, which a speaker turns back into audible sound.',
    everyday: 'This happens in loudspeakers, microphones, headphones, and phones.',
    steps: [
      { name: 'Sound', color: '#ff7edb' },
      { name: 'Electrical', color: '#5ad0ff' },
      { name: 'Sound', color: '#ff7edb' }
    ]
  },
  plant: {
    name: 'Plant Photosynthesis',
    icon: '🌿',
    badge: '🌞',
    efficiency: 90,
    summary: 'Plants capture solar energy and convert it into chemical energy stored in glucose during photosynthesis.',
    everyday: 'The same process supports growth in leaves, grasses, and crops across the world.',
    steps: [
      { name: 'Solar', color: '#ffd166' },
      { name: 'Chemical', color: '#6df5c3' }
    ]
  },
  battery: {
    name: 'Battery',
    icon: '🔋',
    badge: '🔌',
    efficiency: 82,
    summary: 'A battery stores chemical energy and releases it as electrical energy when connected to a circuit.',
    everyday: 'Batteries power remotes, flashlights, sensors, and portable electronic devices.',
    steps: [
      { name: 'Chemical', color: '#6df5c3' },
      { name: 'Electrical', color: '#5ad0ff' }
    ]
  }
};

const state = {
  currentDevice: 'bulb',
  quizIndex: 0,
  questionBank: [
    {
      question: 'Which sequence correctly describes a solar panel?',
      options: [
        'Electrical → Solar → Chemical',
        'Solar → Electrical',
        'Chemical → Mechanical → Sound',
        'Electrical → Light → Thermal'
      ],
      answer: 1,
      explanation: 'A solar panel captures radiant solar energy and converts it into electrical energy.'
    },
    {
      question: 'What happens to some energy in real machines?',
      options: [
        'It disappears completely',
        'It becomes more useful than before',
        'It is transferred to the surroundings as heat and sound',
        'It turns into gravity'
      ],
      answer: 2,
      explanation: 'The law of conservation of energy states that energy is not destroyed; it changes form and often spreads into the surroundings.'
    },
    {
      question: 'Which device converts chemical energy into mechanical energy with electricity in between?',
      options: [
        'Solar panel',
        'Battery-powered toy car',
        'Electric bulb',
        'Dam'
      ],
      answer: 1,
      explanation: 'A battery-powered toy car changes stored chemical energy into electrical energy, then into mechanical movement.'
    }
  ]
};

const deviceGrid = document.getElementById('device-grid');
const deviceName = document.getElementById('device-name');
const deviceBadge = document.getElementById('device-badge');
const deviceDescription = document.getElementById('device-description');
const flowDiagram = document.getElementById('flow-diagram');
const efficiencyPill = document.getElementById('efficiency-pill');
const deviceVisual = document.getElementById('device-visual');
const quizCard = document.getElementById('quiz-card');

function renderDeviceCards() {
  deviceGrid.innerHTML = Object.entries(devices)
    .map(
      ([key, device]) => `
        <button class="device-card ${key === state.currentDevice ? 'active' : ''}" data-device="${key}">
          <span class="device-label">
            <strong>${device.name}</strong>
          </span>
          <span class="device-icon">${device.icon}</span>
        </button>
      `
    )
    .join('');

  document.querySelectorAll('.device-card').forEach((button) => {
    button.addEventListener('click', () => {
      state.currentDevice = button.dataset.device;
      renderAll();
    });
  });
}

function renderDeviceVisual() {
  const device = devices[state.currentDevice];
  deviceName.textContent = device.name;
  deviceBadge.textContent = device.badge;
  deviceDescription.textContent = device.summary;
  efficiencyPill.textContent = `Efficiency ${device.efficiency}%`;

  deviceVisual.innerHTML = `
    <div class="device-core">
      <div class="device-symbol">${device.icon}</div>
    </div>
  `;
}

function renderFlowDiagram() {
  const device = devices[state.currentDevice];
  flowDiagram.innerHTML = device.steps
    .map(
      (step, index) => `
        <div class="flow-step" style="box-shadow: inset 0 0 18px ${step.color}19; border-color: ${step.color}33;">
          <span class="step-dot" style="background:${step.color}; color:${step.color};"></span>
          <span class="step-label">${step.name}</span>
        </div>
      `
    )
    .join('');
}

function getSliderValues() {
  return {
    solar: Number(document.getElementById('solarIntensity').value),
    wind: Number(document.getElementById('windSpeed').value),
    water: Number(document.getElementById('waterFlow').value),
    motor: Number(document.getElementById('motorInput').value)
  };
}

function updateExperimentReadouts() {
  const sliderValues = getSliderValues();
  const labels = {
    solarIntensity: ['solarIntensity', 'solarIntensityValue'],
    windSpeed: ['windSpeed', 'windSpeedValue'],
    waterFlow: ['waterFlow', 'waterFlowValue'],
    motorInput: ['motorInput', 'motorInputValue']
  };

  Object.entries(labels).forEach(([key, ids]) => {
    const val = sliderValues[key.replace('Intensity', '').replace('Speed', 'speed').replace('Flow', 'flow').replace('Input', 'input')];
    const valueMap = {
      solar: sliderValues.solar,
      wind: sliderValues.wind,
      water: sliderValues.water,
      motor: sliderValues.motor
    };
    const value = valueMap[key.includes('solar') ? 'solar' : key.includes('wind') ? 'wind' : key.includes('water') ? 'water' : 'motor'];
    document.getElementById(ids[1]).textContent = `${value}%`;
  });

  const device = devices[state.currentDevice];
  const useful = Math.min(96, Math.round((device.efficiency * 0.9) + (sliderValues.solar * 0.12) + (sliderValues.wind * 0.08) + (sliderValues.water * 0.06) + (sliderValues.motor * 0.08)));
  const surroundings = Math.max(4, 100 - useful);
  const stored = Math.min(90, Math.round((useful + surroundings) / 2));

  document.getElementById('usefulBar').style.width = `${useful}%`;
  document.getElementById('surroundingsBar').style.width = `${surroundings}%`;
  document.getElementById('storedBar').style.width = `${stored}%`;

  document.getElementById('usefulValue').textContent = `${useful}%`;
  document.getElementById('surroundingsValue').textContent = `${surroundings}%`;
  document.getElementById('storedValue').textContent = `${stored}%`;

  document.getElementById('overall-efficiency').textContent = `${device.efficiency}%`;
}

function renderAssistantChat(initial = false) {
  const assistantChat = document.getElementById('assistant-chat');
  const device = devices[state.currentDevice];

  if (initial) {
    assistantChat.innerHTML = `
      <div class="message bot">
        Welcome to the lab! I can explain how ${device.name.toLowerCase()} works and where its energy goes.
      </div>
    `;
    return;
  }

  const responses = [
    `${device.name} converts ${device.summary.toLowerCase()}`,
    `Some energy is transferred to the surroundings because friction, resistance, and vibration convert useful energy into heat and sound.`,
    `Efficiency improves when there is less friction, better insulation, smoother motion, and devices designed to reduce wasted energy.`,
    `You can see a similar conversion in ${device.everyday.toLowerCase()}`
  ];

  assistantChat.innerHTML += `
    <div class="message bot">${responses[Math.floor(Math.random() * responses.length)]}</div>
  `;
  assistantChat.scrollTop = assistantChat.scrollHeight;
}

function askAssistant(question) {
  const device = devices[state.currentDevice];
  const q = question.toLowerCase();
  const assistantChat = document.getElementById('assistant-chat');

  assistantChat.innerHTML += `<div class="message user">${question}</div>`;

  let answer = `${device.summary} It is an excellent example of energy conservation in action.`;

  if (q.includes('conversion') || q.includes('convert') || q.includes('transformation')) {
    answer = `${device.summary}`;
  }

  if (q.includes('surroundings') || q.includes('heat') || q.includes('sound') || q.includes('lost')) {
    answer = `Some energy spreads to the surroundings due to friction, resistance, vibration, and inefficiency. In ${device.name.toLowerCase()}, this often appears as heat and sound, while the useful output is what we want to use.`;
  }

  if (q.includes('efficiency') || q.includes('improve')) {
    answer = `Improving efficiency means reducing wasted energy: lubricating moving parts, using better conductors, insulating hot surfaces, and designing devices with less resistance.`;
  }

  if (q.includes('everyday') || q.includes('life') || q.includes('where')) {
    answer = `You can see this in ${device.everyday.toLowerCase()}`;
  }

  assistantChat.innerHTML += `<div class="message bot">${answer}</div>`;
  assistantChat.scrollTop = assistantChat.scrollHeight;
}

function renderQuiz() {
  const quiz = state.questionBank[state.quizIndex];
  const options = quiz.options
    .map(
      (option, index) => `
        <button class="quiz-option" data-index="${index}">${String.fromCharCode(65 + index)}. ${option}</button>
      `
    )
    .join('');

  quizCard.innerHTML = `
    <div class="quiz-header">
      <h4>Challenge ${state.quizIndex + 1} of ${state.questionBank.length}</h4>
      <span class="quiz-track">Energy Quiz</span>
    </div>
    <div class="quiz-question">${quiz.question}</div>
    <div class="quiz-options">${options}</div>
  `;

  quizCard.querySelectorAll('.quiz-option').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedIndex = Number(button.dataset.index);
      const correct = selectedIndex === quiz.answer;

      const feedbackClass = correct ? '' : 'error';
      const feedbackText = correct
        ? `Correct! ${quiz.explanation}`
        : `Not quite. ${quiz.explanation}`;

      quizCard.querySelector('.quiz-options').insertAdjacentHTML(
        'beforeend',
        `<div class="quiz-feedback ${feedbackClass}">${feedbackText}</div>`
      );

      setTimeout(() => {
        state.quizIndex = (state.quizIndex + 1) % state.questionBank.length;
        renderQuiz();
      }, 1800);
    });
  });
}

function bindLabObjects() {
  document.querySelectorAll('.lab-object').forEach((button) => {
    button.addEventListener('click', () => {
      state.currentDevice = button.dataset.device;
      renderAll();
    });
  });
}

function bindAssistantInputs() {
  document.getElementById('askAssistant').addEventListener('click', () => {
    const input = document.getElementById('assistantInput');
    if (!input.value.trim()) return;
    askAssistant(input.value.trim());
    input.value = '';
  });

  document.getElementById('assistantInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      document.getElementById('askAssistant').click();
    }
  });

  document.querySelectorAll('.prompt-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      askAssistant(chip.dataset.prompt);
    });
  });
}

function bindSliderEvents() {
  const sliderIds = ['solarIntensity', 'windSpeed', 'waterFlow', 'motorInput'];
  sliderIds.forEach((id) => {
    document.getElementById(id).addEventListener('input', () => {
      updateExperimentReadouts();
    });
  });
}

function renderAll() {
  renderDeviceCards();
  renderDeviceVisual();
  renderFlowDiagram();
  updateExperimentReadouts();
  renderAssistantChat(true);
}

renderDeviceCards();
renderDeviceVisual();
renderFlowDiagram();
renderAssistantChat(true);
renderQuiz();
bindLabObjects();
bindAssistantInputs();
bindSliderEvents();
updateExperimentReadouts();

const heroButton = document.querySelector('.primary-btn');
if (heroButton) {
  heroButton.addEventListener('click', () => {
    document.getElementById('simulator').scrollIntoView({ behavior: 'smooth' });
  });
}

const ghostButton = document.querySelector('.ghost-btn');
if (ghostButton) {
  ghostButton.addEventListener('click', () => {
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
  });
}
