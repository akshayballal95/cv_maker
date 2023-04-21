import { c as create_ssr_component, e as escape, v as validate_component, b as add_attribute, d as each, a as subscribe } from "../../../chunks/index2.js";
import { u as user, i as isLoading } from "../../../chunks/AuthStore.js";
import { w as writable } from "../../../chunks/index.js";
import "firebase/firestore";
import { Configuration, OpenAIApi } from "openai";
import "html2canvas";
import "jspdf";
class WorkExperience {
  constructor() {
    this.company_name = "";
    this.job_title = "";
    this.city = "";
    this.country = "";
    this.start_date = "";
    this.end_date = "";
    this.description = "";
  }
  company_name;
  job_title;
  city;
  country;
  start_date;
  end_date;
  description;
}
let Project$1 = class Project {
  constructor() {
    this.title = "";
    this.start_date = "";
    this.end_date = "";
    this.description = "";
  }
  title;
  start_date;
  end_date;
  description;
};
class Address {
  constructor() {
    this.address_line_1 = "";
    this.address_line_2 = "";
    this.city = "";
    this.pincode = "";
  }
  address_line_1;
  address_line_2;
  city;
  pincode;
}
class Education {
  constructor() {
    this.institute_name = "";
    this.field = "";
    this.degree = "";
    this.city = "";
    this.country = "";
    this.start_date = "";
    this.end_date = "";
  }
  institute_name;
  field;
  degree;
  city;
  start_date;
  end_date;
  country;
}
class PersonalInformation {
  constructor() {
    this.first_name = "";
    this.last_name = "";
    this.phone_number = "";
    this.email = "";
    this.position = "";
    this.introduction = "";
  }
  first_name;
  last_name;
  phone_number;
  email;
  position;
  introduction;
}
class TargetCompany {
  constructor() {
    this.company_name = "";
    this.job_description = "";
    this.position = " ";
  }
  company_name;
  position;
  job_description;
}
class Resume {
  constructor() {
    this.id = "";
    this.target_company = new TargetCompany();
    this.avatar = "";
    this.personal_information = new PersonalInformation();
    this.education = [new Education()];
    this.address = new Address();
    this.work_experience = [new WorkExperience()];
    this.projects = [new Project$1()];
  }
  id;
  avatar;
  target_company;
  personal_information;
  projects;
  address;
  education;
  work_experience;
}
let loading = writable(false);
let selectedResume = writable(new Resume());
let resumes = writable([]);
const FormCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let collapsed;
  let { name = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  collapsed = true;
  return `<div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body"><h2 class="text-2xl cursor-pointer">${escape(name)}</h2>

        ${!collapsed ? `<div class="lg:bg-base-300 lg:rounded lg:p-10">${slots.default ? slots.default({}) : ``}</div>` : ``}</div>
</div>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { personal_information = new PersonalInformation() } = $$props;
  if ($$props.personal_information === void 0 && $$bindings.personal_information && personal_information !== void 0)
    $$bindings.personal_information(personal_information);
  return `<body>${validate_component(FormCard, "FormCard").$$render($$result, { name: "Personal Information" }, {}, {
    default: () => {
      return `<div class="lg:grid grid-cols-2 gap-4"><div><label for="first-name" class="label"><span class="label-text">First Name</span></label>
                <input type="text" id="first-name" name="first-name" class="input input-bordered w-full"${add_attribute("value", personal_information.first_name, 0)}></div>
            <div><label for="last-name" class="label"><span class="label-text">Last Name</span></label>                <input type="text" id="last-name" name="last-name" class="input input-bordered w-full"${add_attribute("value", personal_information.last_name, 0)}></div>

            <div><label for="email" class="label"><span class="label-text">Email</span></label>                <input type="text" id="email" name="email" class="input input-bordered w-full"${add_attribute("value", personal_information.email, 0)}></div>
            <div><label for="phone-number" class="label"><span class="label-text">Phone Number</span></label>                <input type="text" id="phone-number" name="phone-number" class="input input-bordered w-full"${add_attribute("value", personal_information.phone_number, 0)}></div>
            <div class="col-span-2"><label for="position" class="label"><span class="label-text">Job Position</span></label>                <input type="text" id="position" name="position" class="input input-bordered w-full"${add_attribute("value", personal_information.position, 0)}></div>
            <div class="col-span-2"><label for="introduction" class="label"><span class="label-text">Introduction</span></label>                <textarea id="introduction" name="introduction" class="input input-bordered w-full">${personal_information.introduction || ""}</textarea></div></div>`;
    }
  })}
</body>`;
});
const Address_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { address = new Address() } = $$props;
  if ($$props.address === void 0 && $$bindings.address && address !== void 0)
    $$bindings.address(address);
  return `<body>${validate_component(FormCard, "FormCard").$$render($$result, { name: "Address" }, {}, {
    default: () => {
      return `<div class="lg:grid grid-cols-2 gap-4"><div class="col-span-2"><label for="address-line-1" class="label"><span class="label-text">Address Line 1</span></label>                <input type="text" id="address-line-1" name="address-line-1" class="input input-bordered w-full "${add_attribute("value", address.address_line_1, 0)}></div>

            <div class="col-span-2"><label for="address-line-2" class="label"><span class="label-text">Address Line 2</span></label>                <input type="text" id="address-line-2" name="address-line-2" class="input input-bordered w-full"${add_attribute("value", address.address_line_2, 0)}></div>

            <div><label for="city" class="label"><span class="label-text">City</span></label>                <input type="text" id="city" name="city" class="input input-bordered w-full"${add_attribute("value", address.city, 0)}></div>

            <div><label for="pincode" class="label"><span class="label-text">Pincode</span></label>                <input type="text" id="pincode" name="pincode" class="input input-bordered w-full"${add_attribute("value", address.pincode, 0)}></div></div>`;
    }
  })}
</body>`;
});
const FormTemplate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  let { index } = $$props;
  let { name } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div class="form-container flex flex-col "><div class="flex justify-between items-center"><h3 class="text-xl">${escape(name)} ${escape(index + 1)}</h3>
        <button class="btn"><i class="fa-solid fa-trash-can"></i></button></div>
    ${slots.default ? slots.default({}) : ``}</div>`;
});
const Education_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { educations = [new Education()] } = $$props;
  if ($$props.educations === void 0 && $$bindings.educations && educations !== void 0)
    $$bindings.educations(educations);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<body>${validate_component(FormCard, "FormCard").$$render($$result, { name: "Education" }, {}, {
      default: () => {
        return `${each(educations, (education, i) => {
          return `${validate_component(FormTemplate, "FormTemplate").$$render(
            $$result,
            {
              name: "Education",
              index: i,
              items: educations
            },
            {
              items: ($$value) => {
                educations = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<div class="container lg:grid grid-cols-2 grid-rows-3 gap-4"><div class="col-span-2"><label for="institution-name" class="label"><span class="label-text">Institution Name</span></label>
                        <input type="text" id="institution-name" name="institution-name" class="input input-bordered w-full "${add_attribute("value", education.institute_name, 0)}></div>
                    <div><label for="Field" class="label"><span class="label-text">Field of Study</span></label>
                        <input type="text" id="field" name="field" class="input input-bordered w-full max-w-xs"${add_attribute("value", education.field, 0)}></div>
                    <div class=""><label for="degree" class="label"><span class="label-text">Degree</span></label>
                        <input type="text" id="degree" name="degree" required class="input input-bordered w-full max-w-xs"${add_attribute("value", education.degree, 0)}></div>
                    <div><label for="start-date" class="label"><span class="label-text">Start Date</span></label>
                        <input type="text" id="start_date" name="start_date" class="input input-bordered w-full max-w-xs"${add_attribute("value", education.start_date, 0)}></div>
                    <div class=""><label for="end_date" class="label"><span class="label-text">End Date</span></label>
                        <input type="text" id="end_date" name="end_date" required class="input input-bordered w-full max-w-xs"${add_attribute("value", education.end_date, 0)}></div>
                    <div class=""><label for="city" class="label"><span class="label-text">City</span></label>
                        <input type="text" id="city" name="city" class="input input-bordered w-full max-w-xs"${add_attribute("value", education.city, 0)}></div>
                    <div><label for="degree" class="label"><span class="label-text">Country</span></label>
                        <input type="text" id="country" name="country" class="input input-bordered w-full max-w-xs"${add_attribute("value", education.country, 0)}></div>
                </div>`;
              }
            }
          )}
            <div class="divider"></div>`;
        })}
        <button class="btn btn-outline w-full mt-5 border-dashed">Add Education </button>`;
      }
    })}
</body>`;
  } while (!$$settled);
  return $$rendered;
});
const Experience$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let exp1 = new WorkExperience();
  let { work_exps } = $$props;
  if ($$props.work_exps === void 0 && $$bindings.work_exps && work_exps !== void 0)
    $$bindings.work_exps(work_exps);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    work_exps = [exp1];
    $$rendered = `<body>${validate_component(FormCard, "FormCard").$$render($$result, { name: "Work Experience" }, {}, {
      default: () => {
        return `${each(work_exps, (work, i) => {
          return `${validate_component(FormTemplate, "FormTemplate").$$render(
            $$result,
            {
              name: "Experience",
              index: i,
              items: work_exps
            },
            {
              items: ($$value) => {
                work_exps = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<div class="lg:grid grid-rows-4 grid-cols-2 gap-4"><div class="col-span-2"><label for="company-name" class="label"><span class="label-text">Company Name</span></label>
                        <input type="text" id="company-name" name="company-name" class="input input-bordered w-full"${add_attribute("value", work.company_name, 0)}></div>
                    <div class="col-span-2"><label for="job_title" class="label"><span class="label-text">Job Title</span></label>
                        <input type="text" id="job_title" name="job_title" class="input input-bordered w-full"${add_attribute("value", work.job_title, 0)}></div>
                    <div><label for="city" class="label"><span class="label-text">City</span></label>
                        <input type="text" id="city" name="city" class="input input-bordered w-full max-w-xs"${add_attribute("value", work.city, 0)}></div>

                    <div><label for="country" class="label"><span class="label-text">Country</span></label>
                        <input type="text" id="country" name="country" class="input input-bordered w-full max-w-xs"${add_attribute("value", work.country, 0)}></div>
                    <div><label for="start_date" class="label"><span class="label-text">Start Date Date</span></label>
                        <input type="text" id="start_date" name="start_date" class="input input-bordered w-full max-w-xs"${add_attribute("value", work.start_date, 0)}></div>
                    <div><label for="end_date" class="label"><span class="label-text">End Date</span></label>
                        <input type="text" id="end_date" name="end_date" class="input input-bordered w-full max-w-xs"${add_attribute("value", work.end_date, 0)}></div>
                    <div class="col-span-2"><label for="Description" class="label"><span class="label-text">Description</span></label>
                        <textarea id="description" name="description" class="input input-bordered w-full">${work.description || ""}</textarea>
                    </div></div>
            `;
              }
            }
          )}
            <div class="divider"></div>`;
        })}
        <button class="btn btn-outline w-full mt-5 border-dashed">Add Experience
        </button>`;
      }
    })}
</body>`;
  } while (!$$settled);
  return $$rendered;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let exp1 = new Project$1();
  let { projects = [exp1] } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<body>${validate_component(FormCard, "FormCard").$$render($$result, { name: "Projects" }, {}, {
      default: () => {
        return `${each(projects, (project, i) => {
          return `${validate_component(FormTemplate, "FormTemplate").$$render(
            $$result,
            {
              name: "Projects",
              index: i,
              items: projects
            },
            {
              items: ($$value) => {
                projects = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<div class="lg:grid grid-cols-2 gap-4"><div class="col-span-2"><label for="title" class="label"><span class="label-text">Title</span></label>
                        <input type="text" id="title" name="title" class="input input-bordered w-full"${add_attribute("value", project.title, 0)}></div>
                    <div><label for="start-date" class="label"><span class="label-text">Start Date</span></label>
                        <input type="text" id="start_date" name="start_date" class="input input-bordered w-full"${add_attribute("value", project.start_date, 0)}></div>
                    <div><label for="end_date" class="label"><span class="label-text">End Date</span></label>
                        <input type="text" id="end_date" name="end_date" class="input input-bordered w-full"${add_attribute("value", project.end_date, 0)}></div>

                    <div class="col-span-2"><label for="description" class="label"><span class="label-text">Description</span></label>
                        <textarea id="description" name="description" class="input input-bordered w-full">${project.description || ""}</textarea>
                    </div></div>
            `;
              }
            }
          )}`;
        })}
        <button class="btn btn-outline w-full mt-5 border-dashed">Add Project
        </button>`;
      }
    })}</body>`;
  } while (!$$settled);
  return $$rendered;
});
const profileImage_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".fa-cloud-upload-alt.svelte-xbj4o5{margin-right:10px}",
  map: null
};
const ProfileImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { avatar } = $$props;
  if ($$props.avatar === void 0 && $$bindings.avatar && avatar !== void 0)
    $$bindings.avatar(avatar);
  $$result.css.add(css$3);
  return `<body><div class="card w-full bg-base-100 shadow-xl"><div class="card-body"><h2 class="text-2xl">Profile Image</h2>

            <button class="btn btn-outline"><i class="fas fa-cloud-upload-alt svelte-xbj4o5"></i> Upload
            </button>
            <input style="display:none" type="file" accept=".jpg, .jpeg, .png"></div></div>
</body>`;
});
const Target_company = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { targetCompany = new TargetCompany() } = $$props;
  if ($$props.targetCompany === void 0 && $$bindings.targetCompany && targetCompany !== void 0)
    $$bindings.targetCompany(targetCompany);
  return `<body>${validate_component(FormCard, "FormCard").$$render($$result, { name: "Target Company" }, {}, {
    default: () => {
      return `<div class="lg:grid grid-rows-2 grid-cols-2 gap-4"><div><label for="company_name" class="label"><span class="label-text">Company Name</span></label>
                <input type="text" id="company-name" name="company-name" class="input input-bordered w-full max-w-xs"${add_attribute("value", targetCompany.company_name, 0)}></div>

            <div><label for="position" class="label"><span class="label-text">Position</span></label>
                <input type="text" id="position" name="position" class="input input-bordered w-full max-w-xs"${add_attribute("value", targetCompany.position, 0)}></div>

            <div class="col-span-2"><label for="job_description" class="label"><span class="label-text">Job Description</span></label>
                <textarea id="job_description" name="job_description" class="input input-bordered w-full">${targetCompany.job_description || ""}</textarea></div></div>`;
    }
  })}</body>`;
});
const configuration = new Configuration({
  organization: "org-wfyqIlTzeT9kjNlsWrmAWHz1",
  apiKey: "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"
});
new OpenAIApi(configuration);
const Experience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedResume: selectedResume2 } = $$props;
  if ($$props.selectedResume === void 0 && $$bindings.selectedResume && selectedResume2 !== void 0)
    $$bindings.selectedResume(selectedResume2);
  return `${each(selectedResume2.work_experience, (experience) => {
    return `<div class="flex flex-col"><p class="text-[10px] text-[#2f3c55]">${escape(experience.start_date)} - ${escape(experience.end_date)}</p>
        <div class="flex flex-row font-bold"><p class="text-[12px] text-[#2f3c55] ">${escape(experience.company_name)} | 
            </p>

            <p class="text-[12px] text-[#2f3c55] ">${escape(experience.country)}</p></div>
        <p class="text-[10px] font-bold text-[#2f3c55] ">${escape(experience.job_title)}</p>
        <ul class="list-disc mt-1 text-justify ml-2 ">${each(experience.description.split("\n"), (des, i) => {
      return `<li class="text-[9px] text-justify ">${escape(des)}
                </li>`;
    })}</ul>
    </div>`;
  })}`;
});
const Introduction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedResume: selectedResume2 } = $$props;
  if ($$props.selectedResume === void 0 && $$bindings.selectedResume && selectedResume2 !== void 0)
    $$bindings.selectedResume(selectedResume2);
  return `<div class="flex flex-col gap-0 "><h1 class="leading-tight p-0 m-0"><span class="text-[32px] text-[#2f3c55] tracking-widest font-bold">${escape(selectedResume2.personal_information.first_name)}
            </span><span class="text-[32px] tracking-widest font-light">${escape(selectedResume2.personal_information.last_name)}</span></h1>
        <h2 class="text-[#2f3c55] tracking-widest p-0 m-0 ">${escape(selectedResume2.personal_information.position)}</h2>
        <p class="text-[9px] text-justify mt-2 ">${escape(selectedResume2.personal_information.introduction)}</p></div>`;
});
const Left_side = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedResume: selectedResume2 } = $$props;
  if ($$props.selectedResume === void 0 && $$bindings.selectedResume && selectedResume2 !== void 0)
    $$bindings.selectedResume(selectedResume2);
  return `<div class="w-[180px] bg-[#323B4C] flex flex-col gap-4 justify-between pt-8 pb-8 text-gray-300 font-Lato"><img alt="profile" class="w-[120px] h-[120px] rounded-full self-center"${add_attribute("src", selectedResume2.avatar, 0)}>

    <div class="flex flex-col pl-4 mt-2 gap-2"><div class="contact flex flex-col"><h1 class="text-lg">Contact</h1>
            <hr class="h-px border-0 bg-white"></div>
        <div><p class="text-[12px] font-semibold">Phone</p>
            <p class="text-[10px] tracking-wide font-normal">${escape(selectedResume2.personal_information.phone_number)}</p></div>
        <div><p class="text-[12px] font-semibold">Email</p>
            <p class="text-[10px] tracking-wide font-normal">${escape(selectedResume2.personal_information.email)}</p></div>
        <div><p class="text-[12px] font-semibold">Address</p>
            <p class="text-[10px] tracking-wide font-normal">${escape(selectedResume2.address.address_line_1)}</p>
            <p class="text-[10px] tracking-wide font-normal">${escape(selectedResume2.address.address_line_2)}</p>
            <p class="text-[10px] tracking-wide font-normal">${escape(selectedResume2.address.city)}: ${escape(selectedResume2.address.pincode)}</p></div></div>

    <div class="flex flex-col pl-4 mt-2 gap-2"><div class="contact flex flex-col"><h1 class="text-lg">Education</h1>
            <hr class="h-px border-0 bg-white"></div>
        ${each(selectedResume2.education, (education) => {
    return `<div><p class="text-[12px] font-semibold">${escape(education.start_date)} - ${escape(education.end_date)}</p>
                <p class="text-[12px] font-semibold">${escape(education.institute_name)}</p>
                <p class="text-[10px] tracking-wide font-normal">${escape(education.degree)}</p>
                <p class="text-[10px] tracking-wide font-normal">${escape(education.field)}
                </p></div>
            <div></div>`;
  })}</div>
    <div class="flex flex-col pl-4 mt-2 gap-2"><div class="contact flex flex-col"><h1 class="text-lg">Expertise</h1>
            <hr class="h-px border-0 bg-white"></div>
        <ul class="list-disc flex flex-col gap-1 ml-3"><li class="text-[12px] font-semibold ">Project Management</li>
            <li class="text-[12px] font-semibold ">Modeling</li>
            <li class="text-[12px] font-semibold ">Leadership</li>
            <li class="text-[12px] font-semibold ">Patents</li></ul></div>

    <div class="flex flex-col pl-4 mt-2 gap-2"><div class="contact flex flex-col"><h1 class="text-lg">Languages</h1>
            <hr class="h-px border-0 bg-white"></div>
        <ul class="list-disc ml-3 flex flex-col gap-1"><li class="text-[12px] font-semibold ">English</li>
            <li class="text-[12px] font-semibold ">Hindi</li></ul></div></div>`;
});
const Project2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedResume: selectedResume2 } = $$props;
  if ($$props.selectedResume === void 0 && $$bindings.selectedResume && selectedResume2 !== void 0)
    $$bindings.selectedResume(selectedResume2);
  return `${each(selectedResume2.projects, (project) => {
    return `<div class="flex flex-col"><div class="flex flex-row"><p class="text-[12px] font-bold text-[#2f3c55]">${escape(project.title)}
            </p></div>
        <p class="text-[9px]">${escape(project.start_date)} - ${escape(project.end_date)}</p>
        
        <ul class="list-disc text-justify"><p class="text-[9px]">${escape(project.description)}</p></ul>
    </div>`;
  })}`;
});
const PreviewContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedResume: selectedResume2 } = $$props;
  if ($$props.selectedResume === void 0 && $$bindings.selectedResume && selectedResume2 !== void 0)
    $$bindings.selectedResume(selectedResume2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div id="resume" class="container border-black border-solid border-2 h-[842px] w-[595px] flex ">${validate_component(Left_side, "LeftSide").$$render(
      $$result,
      { selectedResume: selectedResume2 },
      {
        selectedResume: ($$value) => {
          selectedResume2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}
<div class="w-[400px] pt-8 pl-4 pr-4 pb-8 font-Lato flex flex-col gap-4 justify-between text-[#6f6d6d]">${validate_component(Introduction, "Introduction").$$render(
      $$result,
      { selectedResume: selectedResume2 },
      {
        selectedResume: ($$value) => {
          selectedResume2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}
    <div class="flex flex-col gap-2"><div class="flex flex-col"><h1 class="text-[#2f3c55] font-semibold">Experience</h1>

            <hr class="h-px border-0 bg-gray-900"></div>
        ${validate_component(Experience, "Experience").$$render(
      $$result,
      { selectedResume: selectedResume2 },
      {
        selectedResume: ($$value) => {
          selectedResume2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

    <div class="flex flex-col gap-2"><div class="flex flex-col"><h1 class="text-[#2f3c55] font-semibold">Projects</h1>
            <hr class="h-px border-0 bg-gray-900"></div>
        ${validate_component(Project2, "Project").$$render(
      $$result,
      { selectedResume: selectedResume2 },
      {
        selectedResume: ($$value) => {
          selectedResume2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const input_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-1ut1ybu{display:flex;flex-direction:column;min-height:100vh;margin:0 auto;padding:30px;box-sizing:border-box;gap:20px}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showalert;
  let preview;
  let image;
  let $loading, $$unsubscribe_loading;
  let $selectedResume, $$unsubscribe_selectedResume;
  let $$unsubscribe_user;
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  $$unsubscribe_selectedResume = subscribe(selectedResume, (value) => $selectedResume = value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    showalert = false;
    preview = false;
    image = "";
    $$rendered = `<body><div class="container svelte-1ut1ybu">${$loading == true ? `<div class="transition alert alert-info shadow-lg w-80 m-auto"><div><div role="status"><svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg>
                        <span class="sr-only">Loading...</span></div>

                    <span>Populating fields.... please wait</span></div></div>` : ``}
        ${showalert ? `<div class="transition alert alert-success shadow-lg w-4/5 m-auto"><div><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Saved!</span></div></div>` : ``}
        <label for="my-drawer-2" class="btn btn-square drawer-button lg:hidden"><i class="fa-solid fa-bars fa-xl"></i></label>

        <div class="button-set flex align-items-center justify-between"><button class="btn btn-success gap-2"><i class="fa-solid fa-floppy-disk"></i> Save</button>

            ${$loading == true ? `<button class="btn loading" disabled>Submit <i class="fa-sharp fa-solid fa-arrow-right"></i></button>` : `<button class="btn btn-primary gap-2"><i class="fa-regular fa-share-from-square"></i> Submit
                </button>`}</div>

        ${validate_component(Target_company, "TargetCompany").$$render(
      $$result,
      {
        targetCompany: $selectedResume.target_company
      },
      {
        targetCompany: ($$value) => {
          $selectedResume.target_company = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(ProfileImage, "ProfileImage").$$render(
      $$result,
      { avatar: $selectedResume.avatar },
      {
        avatar: ($$value) => {
          $selectedResume.avatar = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(About, "About").$$render(
      $$result,
      {
        personal_information: $selectedResume.personal_information
      },
      {
        personal_information: ($$value) => {
          $selectedResume.personal_information = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(Address_1, "Address").$$render(
      $$result,
      { address: $selectedResume.address },
      {
        address: ($$value) => {
          $selectedResume.address = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(Education_1, "Education").$$render(
      $$result,
      { educations: $selectedResume.education },
      {
        educations: ($$value) => {
          $selectedResume.education = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(Experience$1, "Experience").$$render(
      $$result,
      {
        work_exps: $selectedResume.work_experience
      },
      {
        work_exps: ($$value) => {
          $selectedResume.work_experience = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(Projects, "Projects").$$render(
      $$result,
      { projects: $selectedResume.projects },
      {
        projects: ($$value) => {
          $selectedResume.projects = $$value;
          $$settled = false;
        }
      },
      {}
    )}

        <button class="btn drawer-button lg:hidden">Preview</button>

        <div id="res" class="hidden">${validate_component(PreviewContainer, "PreviewContainer").$$render(
      $$result,
      { selectedResume: $selectedResume },
      {
        selectedResume: ($$value) => {
          $selectedResume = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
        ${preview ? `<img class="lg:hidden" alt=""${add_attribute("src", image, 0)}>` : ``}</div>
</body>`;
  } while (!$$settled);
  $$unsubscribe_loading();
  $$unsubscribe_selectedResume();
  $$unsubscribe_user();
  return $$rendered;
});
const resume_item_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "body.svelte-15t8xy{width:100%}div.svelte-15t8xy{display:flex;font-weight:500;font-size:14px;justify-content:flex-start;align-items:center;gap:15px}",
  map: null
};
const Resume_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  let $selectedResume, $$unsubscribe_selectedResume;
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_selectedResume = subscribe(selectedResume, (value) => $selectedResume = value);
  let { resume } = $$props;
  if ($$props.resume === void 0 && $$bindings.resume && resume !== void 0)
    $$bindings.resume(resume);
  $$result.css.add(css$1);
  $$unsubscribe_user();
  $$unsubscribe_selectedResume();
  return `<body class="svelte-15t8xy"><div class="w-full svelte-15t8xy">

        <i class="fa-solid fa-file"></i><p class="truncate w-14 grow">${escape(resume.target_company.company_name)} - ${escape(resume.target_company.position)}</p>
        ${$selectedResume.id == resume.id ? `<i class="fa-solid fa-trash-can"></i>` : ``}</div>
</body>`;
});
const logo = "/_app/immutable/assets/ResuMatic.682e69c6.png";
const Preview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedResume, $$unsubscribe_selectedResume;
  $$unsubscribe_selectedResume = subscribe(selectedResume, (value) => $selectedResume = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<body><button title="Contact Sale" class="fixed z-90 bottom-10 right-8 btn btn-accent text-white hover:bg-blue-700 hover:drop-shadow-2xl ">Download <i class="fa-solid fa-download ml-2"></i></button>

   ${validate_component(PreviewContainer, "PreviewContainer").$$render(
      $$result,
      { selectedResume: $selectedResume },
      {
        selectedResume: ($$value) => {
          $selectedResume = $$value;
          $$settled = false;
        }
      },
      {}
    )}
</body>`;
  } while (!$$settled);
  $$unsubscribe_selectedResume();
  return $$rendered;
});
const sidenav_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-14gq38b{margin:0px;height:100vh;display:flex}.editor.svelte-14gq38b{height:100%;box-sizing:border-box;overflow-y:scroll;min-width:600px}.output.svelte-14gq38b{display:flex;flex-direction:column;align-items:center;padding:20px;overflow-y:scroll}.logout-btn.svelte-14gq38b{margin-top:auto;justify-self:flex-end}@media(max-width: 850px){.output.svelte-14gq38b{display:none}}@media(max-width: 450px){.container.svelte-14gq38b{flex:none}.editor.svelte-14gq38b{flex:none;min-width:0;width:100vw}.output.svelte-14gq38b{display:none}}",
  map: null
};
const Sidenav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedResume, $$unsubscribe_selectedResume;
  let $$unsubscribe_user;
  let $resumes, $$unsubscribe_resumes;
  $$unsubscribe_selectedResume = subscribe(selectedResume, (value) => $selectedResume = value);
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_resumes = subscribe(resumes, (value) => $resumes = value);
  $$result.css.add(css);
  $$unsubscribe_selectedResume();
  $$unsubscribe_user();
  $$unsubscribe_resumes();
  return `<body><div class="drawer drawer-mobile"><input id="my-drawer-2" type="checkbox" class="drawer-toggle">
        <div class="drawer-content flex flex-col items-center justify-center">
            <div class="container svelte-14gq38b"><div class="editor svelte-14gq38b">${validate_component(Input, "Input").$$render($$result, {}, {}, {})}</div>

                <div class="output svelte-14gq38b">${validate_component(Preview, "Preview").$$render($$result, {}, {}, {})}</div></div></div>
        <div class="drawer-side shadow-xl"><label for="my-drawer-2" class="drawer-overlay"></label>

            <div class="menu p-4 w-72 bg-base-100 text-base-content space-y-3 h-full flex flex-col"><img${add_attribute("src", logo, 0)} alt="">
                <button class="btn btn-outline mb-5 gap-2"><i class="fa-sharp fa-light fa-plus"></i> Add Resume</button>
                
                ${$resumes ? `<div class="content flex flex-col gap-1 grow">${each($resumes, (res, i) => {
    return `
                            <li>
                                <a class="${escape(
      $selectedResume.id == res.id ? "active bg-primary-focus" : "",
      true
    ) + ""}">${validate_component(Resume_item, "ResumeItem").$$render($$result, { resume: res }, {}, {})}</a>
                            </li>`;
  })}</div>` : ``}

                <button class="btn btn-outline h-30">My Account</button>

                <button class="btn btn-error h-30 logout-btn svelte-14gq38b">Logout</button></div></div></div></body>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading, $$unsubscribe_isLoading;
  let $user, $$unsubscribe_user;
  $$unsubscribe_isLoading = subscribe(isLoading, (value) => $isLoading = value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_isLoading();
  $$unsubscribe_user();
  return `

${$$result.head += `<!-- HEAD_svelte-1axtkfm_START --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer"><!-- HEAD_svelte-1axtkfm_END -->`, ""}

${$isLoading == false && $user ? `${validate_component(Sidenav, "Sidenav").$$render($$result, {}, {}, {})}` : ``}`;
});
export {
  Page as default
};
