export class WorkExperience {
  constructor() {
    this.company_name = "";
    this.job_title = "";
    this.city = "";
    this.country = "";
    this.start_date = "";
    this.end_date = "";
    this.description = "";
  }

  
  company_name: string;
  job_title: string;
  city: string;
  country: string;
  start_date: string;
  end_date: string;
  description: string

}

export class Project {
  constructor() {
    this.title = "";
    this.start_date = "";
    this.end_date = "";
    this.description = "";
  }

  title: string;
  start_date: string;
  end_date: string;
  description: string

}

export class Address {
  constructor() {
    this.address_line_1 = "";
    this.address_line_2 = "";
    this.city = "";
    this.pincode = "";
  }

  address_line_1: string;
  address_line_2: string;
  city: string;
  pincode: string;

}


export class Education {
  constructor() {
    this.institute_name = "";
    this.field = "";
    this.degree = "";
    this.city = "";
    this.country = "";
  }

  institute_name: string;
  field: string;
  degree: string;
  city: string;
  country: string;

}

export class PersonalInformation {

  constructor() {
    this.first_name = "";
    this.last_name = "";
    this.phone_number = "";
    this.email = "";
    this.position="";
    this.introduction="";
  }
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  position:string;
  introduction:string;
}

export class Resume {
  constructor() {
    this.personal_information = new PersonalInformation();
    this.education = new Education();
    this.address = new Address();
    this.work_experience = [new WorkExperience()];
    this.projects = [new Project()];
  }

  personal_information: PersonalInformation;
  projects: Project[];
  address: Address;
  education: Education;
  work_experience: WorkExperience[];
}