function addEducationForm() {
  let educationContainer = document.getElementById('education-form-section');
  let educationForm = educationContainer.children[0].cloneNode(true);
  educationForm.querySelectorAll('input').forEach(i => i.value = '');
  educationContainer.appendChild(educationForm);
}
function addExperienceForm() {
  let experienceContainer = document.getElementById('experience-form-section');
  let experienceForm = experienceContainer.children[0].cloneNode(true);
  experienceForm.querySelectorAll('input').forEach(i => i.value = '');
  experienceContainer.appendChild(experienceForm);
}
function addSkillForm() {
    let skillContainer = document.getElementById('skill-form-section');
    let skillForm = skillContainer.children[0].cloneNode(true);
    skillForm.querySelectorAll('input').forEach(i => i.value = '');
    skillContainer.appendChild(skillForm);
}
function addLanguageForm() {
    let languageContainer = document.getElementById('language-form-section');
    let languageForm = languageContainer.children[0].cloneNode(true);
    languageForm.querySelectorAll('input').forEach(i => i.value = '');
    languageContainer.appendChild(languageForm);
}
function addHobbyForm() {
    let hobbyContainer = document.getElementById('hobby-form-section');
    let hobbyForm = hobbyContainer.children[0].cloneNode(true);
    hobbyForm.querySelectorAll('input').forEach(i => i.value = '');
    hobbyContainer.appendChild(hobbyForm);
}


function updatePreview() {
    const name = document.getElementById('name').value.trim();
document.getElementById('name-preview').innerHTML = name ? `<i class="fa-solid fa-user"></i> ${name}` : '';

const phone = document.getElementById('phone').value.trim();
document.getElementById('phone-preview').innerHTML = phone ? `<i class="fa-solid fa-phone"></i> ${phone}` : '';



const about = document.getElementById('about').value.trim();
document.getElementById('about-preview').innerHTML = about ? about : '';

const email = document.getElementById('email').value.trim();
document.getElementById('email-preview').innerHTML = email ? `<i class="fa-solid fa-envelope"></i> ${email}` : '';

const website = document.getElementById('website').value.trim();
const websitePreview = document.getElementById('website-preview');
if (website) {
  websitePreview.innerHTML = `<i class="fa-solid fa-globe"></i> ${website}`;
  websitePreview.href = website;
} else {
  websitePreview.innerHTML = '';
  websitePreview.removeAttribute('href');
}

const bigName = document.getElementById('name').value.trim();
document.getElementById('big-name').innerText = bigName || '';

const headline = document.getElementById('headline').value.trim();
document.getElementById('headline-preview').innerText = headline || '';


document.getElementById("imageInput").addEventListener("change", function () {
    const file = this.files[0];
    const preview = document.getElementById("imagePreview");

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        };

        reader.readAsDataURL(file); // Converts file to base64
    } else {
        preview.src = "";
        preview.style.display = "none";
    }
});

    
}

document.querySelectorAll('#about, #address').forEach(function (input) {
  input.addEventListener('input', function () {
    const about = document.getElementById('about').value.trim();
    document.getElementById('about-preview').innerHTML = about ? about : '';

    const address = document.getElementById('address').value.trim();
    document.getElementById('address-preview').innerHTML = address
      ? `<i class="fa-solid fa-location-dot"></i> ${address}`
      : '';
  });
});



document.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', updatePreview);
});


document.getElementById('close-cv-preview').addEventListener('click', ()=>{
    document.querySelector('.preview-cv').style.display='none';
    document.querySelector('.blackishShade').style.display='none';
})

document.getElementById('open-cv-preview').addEventListener('click', ()=>{
    document.querySelector('.preview-cv').style.display='flex';
    document.querySelector('.blackishShade').style.display='block';
    document.querySelector('.cv-body').style.boxShadow='none';
    const fullPageElement = document.querySelector(".blackishShade");
    fullPageElement.style.height = document.documentElement.scrollHeight + "px";
})
updatePreview()





function generateEducationPreview() {
    const previewContainer = document.querySelector('.education-preview-section');
    previewContainer.innerHTML = '';

    const names = document.querySelectorAll('[name="degree-name[]"]');
    const dates = document.querySelectorAll('[name="degree-date[]"]');
    const institudes = document.querySelectorAll('[name="degree-institude[]"]');
    const descriptions = document.querySelectorAll('[name="degree-description[]"]');

    for (let i = 0; i < names.length; i++) {
        const year = dates[i].value || '';
        const institute = institudes[i].value || '';
        const degree = names[i].value || '';
        const desc = descriptions[i].value || '';
        let item = ''
        if (degree && year){
            item = `
            <div class="education-item mt-1">
                <p class="edu-title"><i class="fa-regular fa-circle-dot"></i> ${degree} | ${year}</p>
                <p class="edu-year">${institute}</p>
                ${desc ? `<p class="edu-detail"> ${desc}</p>` : ''}
            </div>
        `;
        }
        
        previewContainer.innerHTML += item;
    }
}

function generateExperiencePreview() {
    const previewContainer = document.querySelector('.experience-preview-section');
    previewContainer.innerHTML = '';

    const posts = document.querySelectorAll('[name="experience-post[]"]');
    const dates = document.querySelectorAll('[name="experience-date[]"]');
    const institudes = document.querySelectorAll('[name="experience-institude[]"]');
    const descriptions = document.querySelectorAll('[name="experience-description[]"]');

    for (let i = 0; i < posts.length; i++) {
        const year = dates[i].value || '';
        const institute = institudes[i].value || '';
        const post = posts[i].value || '';
        const desc = descriptions[i].value || '';
        let item = ''
        if(post && year){
            item = `
            <div class="job-item mt-1">
                <p class="job-company d-flex align-items-center justify-content-between">
                <span>${post}</span> <span><i class="fa-solid fa-clock"></i> ${year}</span>
                </p>
                <p class="job-position display-inline"><i class="fa-solid fa-location-dot"></i> ${institute}</p>
                ${ desc ?`<p class="exp-desc">${desc}</p>` : ''}
              </div>
        `;
        }
        previewContainer.innerHTML += item;
    }
}

function generateSkillPreview() {
    const previewContainer = document.querySelector('#skills-ul');
    previewContainer.innerHTML = '';

    const names = document.querySelectorAll('[name="skill-name[]"]');
    const percentages = document.querySelectorAll('[name="skill-percentage[]"]');

    for (let i = 0; i < names.length; i++) {
        const name = names[i].value || '';
        const percentage = percentages[i].value || '';
        let item = ""
        if (name){
            item = `
            <li>${name}${percentage ? ` ---- ${percentage}` : ''}</li>
        `;
        }
        
        previewContainer.innerHTML += item;
    }
}
function generateLanguagePreview() {
    const previewContainer = document.querySelector('#language-ul');
    previewContainer.innerHTML = '';

    const names = document.querySelectorAll('[name="language-name[]"]');
    const efficiencies = document.querySelectorAll('[name="language-efficiency[]"]');

    for (let i = 0; i < names.length; i++) {
        const name = names[i].value || '';
        let efficiency = '';
            if (efficiencies[i]) {
            efficiency = efficiencies[i].value || '';
            }
        let item = ""
        if (name){
            item = `
            <li>${name}${efficiency ? ` ---- ${efficiency}` : ''}</li>
        `;
        }
        
        previewContainer.innerHTML += item;
    }
}
function generateHobbyPreview() {
    const previewContainer = document.querySelector('#hobby-ul');
    previewContainer.innerHTML = '';

    const names = document.querySelectorAll('[name="hobby-name[]"]');

    for (let i = 0; i < names.length; i++) {
        const name = names[i].value || '';
        let item = ""
        if (name){
            item = `
            <li>${name}</li>
        `;
        }
        
        previewContainer.innerHTML += item;
    }
}


function previewFunctions(){
    generateEducationPreview()
    generateExperiencePreview()
    generateSkillPreview()
    generateLanguagePreview()
    generateHobbyPreview()
}








function downloadCV() {
  const element = document.getElementById("cv-preview"); 
  html2pdf()
    .set({
      margin: 0,
      filename: 'My_CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    })
    .from(element)
    .save();
}


function checkCvHeight() {
    document.querySelectorAll('.right-column, .left-column').forEach((i)=>{
        if (i.style.height == '1108px'){
            alert('Your CV may take second page, do you want to continue?');
        }
    })
}

document.querySelectorAll('input, #about, address').forEach((i)=>{
    i.addEventListener('input', checkCvHeight)
})