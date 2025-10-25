// src/pages/activities.js

export default function Activities() {
  return (
    <div className="bg-black text-white">
      <head>
        <title>Activities - Suhas Anumolu</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
          }
          h1, h2, h3, .text-xl, .text-3xl, .text-5xl {
            font-family: 'Poppins', sans-serif;
          }
        `}</style>
      </head>

      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="text-xl font-bold">Suhas Anumolu</div>
        <nav className="flex space-x-6 text-gray-400">
          <a href="/" className="group relative transition-colors duration-300 hover:text-white">
            Home
            <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all w-0 group-hover:w-full"></span>
          </a>
          <a href="/activities" className="group relative transition-colors duration-300 hover:text-white">
            Activities
            <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all w-0 group-hover:w-full"></span>
          </a>
          <a href="/projects" className="group relative transition-colors duration-300 hover:text-white">
            Projects
            <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all w-0 group-hover:w-full"></span>
          </a>
          <a href="/projects" className="group relative transition-colors duration-300 hover:text-white">
            Research
            <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all w-0 group-hover:w-full"></span>
          </a>
          <a href="/#contact" className="group relative transition-colors duration-300 hover:text-white">
            Contact
            <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all w-0 group-hover:w-full"></span>
          </a>
        </nav>
      </header>

      <main className="px-8 py-16 max-w-7xl mx-auto">
        {/* Hero Banner like Projects section */}
        <section
          className="relative text-center py-16 mb-16 w-full bg-cover bg-center rounded-2xl overflow-hidden"
          style={{ backgroundImage: "url('/banner1.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 opacity-80"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
              Activities
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto">
              Explore my leadership roles, initiatives, and extracurriculars.
            </p>
          </div>
        </section>

        {/* === ROW 1: 4 Cards === */}
        <section className="text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">School Involvement</h2>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Card 1 */}
          <ActivityCard
            title="Robotics"
            image="robotics_img.jpg"
            description={
              <>
                <strong className="underline">Leadership:</strong> Team Marketing Lead and Lead Coder, FTC Team 20343 Robot in Pieces.
                <br />
                <br />
                <strong className="underline">Accolades:</strong> 1x regional qualifier semifinalists, Judge's award, Innovate Award sponsored by RTX, 3rd place Motivate Award, 3rd place Think Award.
                <br />
                <br />
                <strong className="underline">Details:</strong> As marketing lead, I lead training initiatives and outreach workshops, assist fundraising efforts, and spearhead brainstorming sessions. I also directed the technical development of our team's robot, coordinating mechanical, electrical, software, and auxiliary teams throughout the season. I directly lead the software team, writing autonomous computer vision code and driver-controlled TeleOp code in Java. I also drive our robot at competitions.
                <br />
                <br />
                Our team receives minimal funding from Maryland, so as marketing lead, I've strived to maximize innovation on a low budget. Instead of purchasing expensive new motors to replace older, slower ones, I engineered custom PID controls and other software solutions to automatically adjust power levels in our robots and enhance stability. I also developed a club website (
                <a
                  href="https://chs-ftc-robotics.github.io/new-website/"
                  target="_blank"
                  className="text-blue-400 underline hover:text-blue-600"
                >
                  linked here
                </a>) to help newer members navigate through the club's past.
              </>
            }
          />

          {/* Card 2 */}
          <ActivityCard
            title="Advancing AI Learning"
            image="AI_Club.png"
            description={
              <>
                <strong className="underline">Leadership:</strong> Club President
                <br />
                <br />
                <strong className="underline">Accolades:</strong> SAILea High School Leadership Team, Scholastic AI League Club Partnership
                <a
                  href="https://www.sailea.org/"
                  target="_blank"
                  className="text-blue-400 underline hover:text-blue-600"
                > Sailea</a>
                <br />
                <br />
                <strong className="underline">Details:</strong> As marketing lead, I lead training initiatives and outreach workshops, assist fundraising efforts, and spearhead brainstorming sessions. I also directed the technical development of our team's robot, coordinating mechanical, electrical, software, and auxiliary teams throughout the season. I directly lead the software team, writing autonomous computer vision code and driver-controlled TeleOp code in Java. I also drive our robot at competitions.
                <br />
                <br />
                Our team receives minimal funding from Maryland, so as marketing lead, I've strived to maximize innovation on a low budget. Instead of purchasing expensive new motors to replace older, slower ones, I engineered custom PID controls and other software solutions to automatically adjust power levels in our robots and enhance stability. We also developed a club website (
                <a
                  href="https://linktr.ee/CHS_AI_Club"
                  target="_blank"
                  className="text-blue-400 underline hover:text-blue-600"
                >
                  linked here
                </a>) to help newer members navigate through the club's past.
              </>
            }
          />

          {/* Card 3 */}
          <ActivityCard
            title="CAD Club / DesCo"
            image="CAD.png"
            description={
              <>
                <strong className="underline">Leadership:</strong> Club President
                <br />
                <br />
                <strong className="underline">Accolades:</strong> Fusion 360 Certified User (Autodesk), Design Excellence Award (CAD & 3D Modelling Contest)
                <br />
                <br />
                <strong className="underline">Details:</strong> As Club President, I led a team of students in mastering computer-aided design (CAD) tools including AutoCAD, Fusion 360, and TinkerCAD. I organized and ran weekly design challenges, skill-building workshops, and hands-on engineering simulations to help members build real-world design experience. I created a mentorship system and an archived design project library to guide newer members in understanding core design principles and past club work. I also initiated collaborative projects with our school’s robotics and engineering teams to prototype mechanical components and chassis systems. Delved into the realms of virtual reality, 3D modeling, CNC machining, and more.
                <br />
                <br />
                Organized workshops, design challenges, and peer-led tutorials to foster technical growth and collaboration. Spearheaded club initiatives that bridged design theory with real-world applications, encouraging innovation and hands-on problem-solving. (
                <a
                  href="https://cadclub.vercel.app/"
                  target="_blank"
                  className="text-blue-400 underline hover:text-blue-600"
                >
                  linked here
                </a>) to help newer members navigate through the club's past.
              </>
            }
          />

          {/* Card 4 */}
          <ActivityCard
            title="Machine Learning in Medicine & Web/Java Dev"
            image="logos.png"
            description={
              <>
                <strong className="underline">Leadership:</strong> MLMC Machine Learning Teacher, Java/Web Dev Vice President
                <br />
                <br />
                <strong className="underline">Accolades:</strong> 300+ Extension Installs, 10+ websites & 10+ workshops hosted
                <br />
                <br />
                <strong className="underline">Details:</strong> I led cross-disciplinary projects applying machine learning to real-world medical challenges. This included developing CNN models for image-based diagnostics, hosting workshops on AI in healthcare, and building explainable AI tools for clinicians. During my JHU research internship, I worked on AI-driven healthcare pipelines.
                <br />
                <br />
                I also developed a web platform used by 1.2K+ students to find internships and a Chrome extension with 300+ users to improve focus. As VP of the Web Dev Club, I led React and JavaScript sessions and taught GitHub and Java fundamentals. My work emphasized accessibility, open-source collaboration, and real-world usability. (
                <a
                  href="https://chs-java-dev.vercel.app/"
                  target="_blank"
                  className="text-blue-400 underline hover:text-blue-600"
                >
                  linked here
                </a>) to explore more.
              </>
            }
          />
        </section>

        {/* === ROW 2: Multiple Small Images Side by Side === */}
        <section className="w-full mb-16">
          <div className="border-2 border-white p-4 shadow-md">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {["robotics.png", "robotics_group.png", "board.png", "rbotics.png", "gallery_robotics.png"].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Image ${i + 1}`}
                  className="w-full h-40 object-cover shadow-md transform hover:scale-105 transition duration-300"
                />
              ))}
            </div>
          </div>
        </section>

     {/* === ROW 3: Community Service + Activism Cards === */}
<section className="mt-8 mb-20">
  <h2 className="text-4xl font-extrabold text-white mb-6 text-center">Community Service</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Card 1 */}
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
      <img src="SAO.png" alt="Director of Tech" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">Director of Technology — Student Advocacy Org</h3>
      <p className="text-gray-400 text-sm whitespace-pre-line">
        <strong className="text-white underline">Role:</strong> Director of Technology, 501(c)(3) Nonprofit (Maryland Advocacy)
        <br />
        <strong className="text-white underline">Duration:</strong> August 2024 – Present
        <br />
        <strong className="text-white underline">Impact:</strong> Led a 10-person tech team to maintain and expand the nonprofit’s digital infrastructure, ensuring high availability and security across all platforms. Designed, built, and secured the organization's website with user authentication, dynamic content management, and ADA-compliant accessibility features. Implemented automated systems for event registration, internal communications, and volunteer coordination, reducing manual overhead. Integrated CRM and analytics tools to track member engagement and optimize outreach campaigns. Mentored junior developers and introduced best practices for version control, documentation, and deployment pipelines, significantly improving team efficiency and code quality.
      </p>
       <a 
      href="https://student-advocacy-organization.github.io/SAO-Website/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-400 underline hover:text-blue-300"
    >
      More information can be found here →
    </a>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
      <img src="SIM.png" alt="STEM in Medicine" className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">Co-Founder/CTO — STEM in Medicine</h3>
      <p className="text-gray-400 text-sm whitespace-pre-line">
        <strong className="text-white underline">Role:</strong> Co-Founder & CTO, Maryland STEM in Medicine
        <br />
        <strong className="text-white underline">Duration:</strong> September 2024 – Present
        <br />
        <strong className="text-white underline">Impact:</strong> Taught Biology, Engineering, and STEM fundamentals in 6+ hands-on educational workshops for both high school and middle school students, reaching over 40 participants. Designed and delivered interactive lessons tailored to various age groups and learning levels, making complex topics like genetics, robotics, and circuitry accessible and engaging. Led curriculum development, incorporating real-world applications, visual demos, and project-based learning. Oversaw all aspects of tech deployment, including slide creation, simulations, and hybrid delivery platforms to ensure seamless instruction. Collected feedback and iteratively improved workshop content, resulting in increased student engagement and consistent knowledge gains as reflected in post-session assessments and surveys.
      </p>
    <a 
      href="https://stem-in-medicine.github.io/STEM-In-Med-Website/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-400 underline hover:text-blue-300"
    >
      More information can be found here →
    </a>
    </div>

   {/* Card 3 */}
<div className="bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
  <img src="hackathon.png" alt="Python Instructor" className="w-full h-40 object-cover rounded-md mb-4" />
  <h3 className="text-xl font-semibold text-white mb-2">QuHacks & Howard County Hour of Code</h3>
  <p className="text-gray-400 text-sm whitespace-pre-line">
    <strong className="text-white underline">Role:</strong> Workshop/Website Lead & Article Author, Outreach 
    <br />
    <strong className="text-white underline">Details:</strong> Organized and led the QuHacks and HOCO HOC U18 hackathons, bringing together 150+ participants for each event. Fundraised $9,500 in monetary and $25,000 in-kind sponsorships from 22 companies. Designed and coordinated workshops, mentorship sessions, and technical challenges to foster real-world problem-solving and collaboration. Published 40 free educational articles as team, garnering 1,260 hours of retention and 7,300 views, hosting 360 students from 15 local schools, many of whom were first-time coders, and built a vibrant, inclusive learning community for youth in STEM.
    <br /><br />
    <a 
      href="https://hocohoc.org/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-400 underline hover:text-blue-300"
    >
      More information can be found here →
    </a>
    <br></br>
    <a 
      href="https://quhacks.tech/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-400 underline hover:text-blue-300"
    >
      and here →
    </a>
  </p>
</div>

  </div>
</section>
{/* === ROW 4: STEM Internships Section === */}
<section className="mt-12 mb-24 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-extrabold text-white mb-10 text-center">STEM Internships</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Card 1 - Cyrion Lab */}
      <div className="rounded-2xl overflow-hidden bg-[#111827] shadow-md hover:shadow-xl transition-all border border-gray-800 hover:border-blue-500 flex flex-col">
        <img src="cyrion.png" alt="Cosmos Logo" className="w-full h-40 object-contain bg-black p-4" />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-3 text-center">Cyrion Labs</h3>
        <p className="text-gray-300 text-base mb-3">
  Worked on PLVA (Privacy Layer for Visual Agents), an AI model that detects and obscures privacy-threatening elements (PTEs) in web-based images. Helped train and evaluate ML models for identifying faces, text, and documents. I also implemented auto-redaction pipelines; co-authoring a paper on the system’s development and privacy impact.
</p>
         <p className="text-gray-300 text-base mb-5">
  <span className="text-white font-semibold underline">Technical Accomplishments:</span> Developed and fine-tuned object detection models to identify privacy-threatening elements (PTEs) like faces, screens, and ID cards in real-world images.  
  Built auto-redaction pipelines using Python and OpenCV, enabling real-time blurring and anonymization. Conducted annotation refinement and model benchmarking, contributing to PLVA's deployment-ready architecture.  
</p>
          <a href="https://cyrionlabs.org/" className="mt-auto inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
            Explore Cyrion Labs
          </a>
        </div>
      </div>

      {/* Card 2 - ASPIRE */}
      <div className="rounded-2xl overflow-hidden bg-[#111827] shadow-md hover:shadow-xl transition-all border border-gray-800 hover:border-blue-500 flex flex-col">
        <img src="apl.png" alt="JHU APL Logo" className="w-full h-40 object-contain bg-black p-4" />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-3 text-center">ASPIRE — JHU APL</h3>
          <p className="text-gray-300 text-base mb-3">
          Selected among ~7% of applicants, I interned for 3 months (300+ hours) at Johns Hopkins Applied Physics Lab (APL), assisting in the development of AI-driven cybersecurity systems by analyzing network traffic, optimizing detection algorithms, and supporting real-world research into threat identification and mitigation. Currently working as FPS Intern devloping an GenAI based ProGAN, fake image generator and detector pipeline.        </p>
          <ul className="text-gray-300 text-base list-disc list-inside mb-5">
            <li>Machine learning model support & tuning (e.g., Isolation Forest, Random Forest) to classify network threats and optimize detection accuracy.</li>
            <li>Python, Wireshark, and embedded systems</li>
            <li>Network traffic analysis & feature extraction</li>
          </ul>
          <a
  href="https://drive.google.com/file/d/1x2_-inwMPzEVp9Kd6rKRp7zhiNZpjhMA/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-auto inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
>
  View My Project
</a>

        </div>
      </div>

      {/* Card 3 - AI Sense */}
      <div className="rounded-2xl overflow-hidden bg-[#111827] shadow-md hover:shadow-xl transition-all border border-gray-800 hover:border-blue-500 flex flex-col">
        <img src="ai sense.png" alt="HCIL Logo" className="w-full h-40 object-contain bg-black p-4" />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-3 text-center">AI Sense - UMBC</h3>
          <p className="text-gray-300 text-base mb-3">
            As a UMBC AI Sense AI/ML research intern under a Ph.D professor and graduate students, helped design an AI-powered coexistence systems utilizing edge computing to support sustainable wildlife management. Created proprietary sensor fusion and edge AI for environmental changes, enhancing sustainability.

          </p>
          <li>Developed and optimized edge AI models for wildlife detection and classification using low-power embedded devices (Used Raspberry Pi).</li>
            <li>Engineered custom sensor fusion pipelines integrating thermal, acoustic, and visual data to improve detection accuracy in complex outdoor environments.</li>
          <p className="text-gray-300 text-base mb-5">
            <span className="text-white font-semibold underline">Focus Areas:</span> Edge AI & sensor fusion, Image Detection, Low-power embedded systems, Wildlife tracking & behavioral modeling. 
          </p>
          <a href="https://aisenseusa.com/" className="mt-auto inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
            What I Researched
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
      </main>
    </div>
  );
  
}
{/* Footer */}
<footer className="bg-gray-900 py-4 text-center text-gray-500 text-sm">
© 2025 Suhas Anumolu Portfolio
</footer>
function ActivityCard({ title, image, description }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 whitespace-pre-line">{description}</p>
    </div>
  );
}






