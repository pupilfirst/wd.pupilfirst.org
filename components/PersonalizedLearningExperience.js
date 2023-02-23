import SectionWithHeading from "./SectionWithHeading";

const facultyMembers = [
  {
    name: "Dr. Srikanth R",
    imgSrc: "/faculty-members/Dr._Srikanth_R-Faculty_2_rfnguv_e6ecqi.png",
    designation: "Assistant Professor",
    institute: "Chaitanya Bharathi Institute of Technology, Hyderabad",
  },
  {
    name: "Mrs. S Durga Devi",
    imgSrc: "/faculty-members/Mrs._S._Durga_Devi-Faculty_1_vvoyw4_gupiyj.png",
    designation: "Assistant Professor",
    institute: "Chaitanya Bharathi Institute of Technology, Hyderabad",
  },
  {
    name: "Mrs. M Lalitha",
    imgSrc: "/faculty-members/Mrs._M._Lalitha-Faculty_1_cdx2nq_vakqu5.png",
    designation: "Assistant Professor",
    institute:
      "G.Narayanamma Institute of Technology and Science For Women,Hyderabad",
  },
  {
    name: "Mrs. Manthena Deepthi",
    imgSrc:
      "/faculty-members/Mrs._Manthena_Deepthi-Faculty_2_rwozck_ivbcn6.png",
    designation: "Assistant Professor",
    institute:
      "G.Narayanamma Institute of Technology and Science For Women,Hyderabad",
  },
  {
    name: "Dr. Padmaja B",
    imgSrc: "/faculty-members/Dr._B_Padmaja-Faculty_1_fnjkym_u4vrst.png",
    designation: "Associate Professor & Head",
    institute: "Institute of Aeronautical Engineering, Hyderabad",
  },
  {
    name: "Mr. E Krishna Rao Patro",
    imgSrc:
      "/faculty-members/Mr._E_Krishna_Rao_Patro-Faculty_2_ftogpf_o5jw7i.png",
    designation: "Assistant Professor",
    institute: "Institute of Aeronautical Engineering, Hyderabad",
  },
  {
    name: "Dr. Roopa Chandrika",
    imgSrc: "/faculty-members/Dr._Roopa_Chandrika_wjygte.jpg",
    designation: "Professor",
    institute: "Malla Reddy College of Engineering and Technology, Hyderabad",
  },
  {
    name: "Dr. S. Shanthi",
    imgSrc: "/faculty-members/Dr._S._Shanthi_kc6wqn.jpg",
    designation: "Head of the Department CSE",
    institute: "Malla Reddy College of Engineering and Technology, Hyderabad",
  },
  {
    name: "Dr. Ahmad Jamal",
    imgSrc: "/faculty-members/Dr._Ahmad_Jamal_iwtzao.jpg",
    designation: "Assistant Professor",
    institute: "Tula's Institute, Dehradun",
  },
  {
    name: "Mr. Tejas Chauhan",
    imgSrc: "/faculty-members/Mr._Tejas_Chauhan-_Faculty_1_xreey3_lckpot.png",
    designation: "Assistant Professor",
    institute: "Marwadi University",
  },
  {
    name: "Ms. Dipti Theng",
    imgSrc: "/faculty-members/Ms._Dipti_Theng-Faculty_1_v5s6j9_nwzw5k.png",
    designation: "Assistant Professor",
    institute: "G H Raisoni College of Engineering, Nagpur",
  },
  {
    name: "Ms. Jyoti Anand",
    imgSrc: "/faculty-members/Ms._Jyoti_Anand_rpupvp.png",
    designation: "Assistant Professor",
    institute: "University of Engineering and Management, Jaipur",
  },
  {
    name: "Ms. Hiral M. Patel",
    imgSrc: "/faculty-members/Prof._Hiral_M._Patel_mil4tw.jpg",
    designation: "Assistant Professor",
    institute: "Sankalchand Patel College of Engineering, Visnagar",
  },
  {
    name: "Mr. Ganesh Deshmukh",
    imgSrc: "/faculty-members/Mr._Ganesh_Deshmukh-Faculty_1_akbvpz_fqjcly.png",
    designation: "Assistant Professor",
    institute: "Vardhaman College of Engineering, Shamshabad",
  },
  {
    name: "Mr. Prajwal Maredukonda",
    imgSrc:
      "/faculty-members/Mr._Prajwal_Maredukonda-Faculty_2_mmq7ly_a3adax.png",
    designation: "Assistant Professor",
    institute: "Vardhaman College of Engineering, Shamshabad",
  },
  {
    name: "Mrs. Savita Ajay Kumbhare",
    imgSrc:
      "/faculty-members/Mrs._Savita_Ajay_Kumbhare-Faculty_1_aublwf_svvzbq.png",
    designation: "Assistant Professor",
    institute: "Pimpri Chinchwad College of Engineering (PCCoE), Pune",
  },
  {
    name: "Mr. Shailesh Hule",
    imgSrc: "/faculty-members/Mr._Shailesh_Hule-Faculty_2_ehmnqd_xrjtep.png",
    designation: "Assistant Professor",
    institute: "Pimpri Chinchwad College of Engineering (PCCoE), Pune",
  },
  {
    name: "Joshi Padma Narasimhachari",
    imgSrc: "/faculty-members/Mrs._Joshi_Padma_Narasimhachari_ppguz7.jpg",
    designation: "Assistant Professor",
    institute: "Sreyas Institute of Engineering and Technology",
  },
  {
    name: "N. Santhosh Ramchander",
    imgSrc: "/faculty-members/Mr._N._Santhosh_Ramchander_xd56fp.jpg",
    designation: "Assistant Professor",
    institute: "Sreyas Institute of Engineering and Technology",
  },
  {
    name: "Mr. Rakesh Kumar",
    imgSrc: "/faculty-members/Mr._Rakesh_Kumar_cqalr2.png",
    designation: "Assistant Professor",
    institute: "Tula's Institute, Dehradun",
  },
  {
    name: "Dr. Damodharan Palaniappan",
    imgSrc: "/faculty-members/Dr-Damodharan_Palaniappan.jpg",
    designation: "Sr.Assistant Professor",
    institute: "Marwadi University",
  },
  {
    name: "Mr. Patel Mehulkumar Shankarlal",
    imgSrc: "/faculty-members/Mr._Patel_Mehulkumar_Shankarlal.png",
    designation: "Assistant Professor",
    institute: "Sankalchand Patel College of Engineering, Visnagar",
  },
  {
    name: "Mr. Sameer B.Patil",
    imgSrc: "/faculty-members/Mr.Sameer_B.Patil.jpg",
    designation: "Assistant Professor",
    institute: "KIT's College of Engineering, Kolhapur",
  },
  {
    name: "Dr. Bhavani Sankar Panda",
    imgSrc: "/faculty-members/Dr._Bhavani_Sankar_Panda.jpg",
    designation: "Professor",
    institute: "Raghu Engineering College, Visakhapatnam",
  },
  {
    name: "Dr. Meena Bhagavathula",
    imgSrc: "/faculty-members/Dr._Meena_Bhagavathula.jpg",
    designation: "Assistant Professor",
    institute: "Raghu Engineering College, Visakhapatnam",
  },
  {
    name: "Dr. Kamble Shiva Kumar",
    imgSrc: "/faculty-members/LITE-avatar.svg",
    designation: "Assistant Professor",
    institute: "ACE Engineering College, Hyderabad",
  },
  {
    name: "Prof. Gyara Monika",
    imgSrc: "/faculty-members/LITE-avatar.svg",
    designation: "Assistant Professor",
    institute: "ACE Engineering College, Hyderabad",
  },
  {
    name: "Prof. P. Anitha",
    imgSrc: "/faculty-members/Prof._P._Anitha_p.jpg",
    designation: "Assistant Professor",
    institute: "Hindusthan College of Engineering and Technology, Coimbatore",
  },
  {
    name: "Prof. Ruchita Shah",
    imgSrc: "/faculty-members/Prof._Ruchita_D._Shah.jpg",
    designation: "Assistant Professor",
    institute:
      "Department Of Computer Science Faculty Of Management And Technology Gujarat Vidyapith Ahmedabad",
  },
  {
    name: "Dr. Sanjay Nalbalwar",
    imgSrc: "/faculty-members/Dr._SL_Nalbalwar.jpg",
    designation: "Professor & Head (E&TE)",
    institute: "Dr. Babasaheb Ambedkar Technological University, Lonere",
  },
  {
    name: "Prof. Ria Bandyopadhyay",
    imgSrc: "/faculty-members/Prof.-Ria-JIS-School-of-Polytechnic.jpg",
    designation: "HOD (CST)",
    institute: "JIS School Of Polytechnic, Kalyani",
  },
  {
    name: "Dr. Nilesh B. Fal Dessai",
    imgSrc: "/faculty-members/Dr._Nilesh_B._Fal_Dessai.png",
    designation: "Associate Professor and HOD",
    institute: "Goa College of Engineering, Ponda, Goa",
  },
];

let FacultyMember = ({ name, imgSrc, designation, institute }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full object-cover overflow-hidden">
        <img
          className="w-32 h-32 rounded-full object-cover overflow-hidden"
          src={imgSrc}
          alt={"Photo of" + name}
        />
      </div>
      <p className="mt-4 font-semibold text-white">{name} </p>
      <p className="text-gray-200 pt-1.5">{designation}</p>
      <p className="text-gray-400 text-xs">{institute}</p>
    </div>
  );
};

export default function PersonalizedLearningExperiece() {
  return (
    <SectionWithHeading heading="Get Personalised Guidance">
      <p className="text-white mt-4 md:text-lg w-full md:w-4/5">
        As a beginner, we expect you to make many mistakes. Get personalised
        guidance from LITE faculty members &amp; student teaching assistants to
        find answers and confidently move ahead.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10 py-16">
        {facultyMembers.map((facultyMember, index) => (
          <FacultyMember
            key={index}
            name={facultyMember.name}
            imgSrc={facultyMember.imgSrc}
            designation={facultyMember.designation}
            institute={facultyMember.institute}
          />
        ))}
      </div>
    </SectionWithHeading>
  );
}
