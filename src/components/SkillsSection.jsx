import React from 'react'

const skills = [
  {
    name: "Languages",
    image: "https://skillicons.dev/icons?i=html,css,js,ts,python,java,c,cpp"
  },
  {
    name: "Tools",
    image: "https://skillicons.dev/icons?i=git,linux,vscode,kali"
  },
  {
    name: "Cybersecurity Tools",
    icons: [
      { name: "Burp Suite", image: "/icons/burpsuite.svg" },
      { name: "Nmap", image: "/icons/nmap.svg", className: "" },
      { name: "Wireshark", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Wireshark_Logo.svg" },
    ]
  },
  {
    name: "Consepts",
    icons: [
        {name: "Owasp", image: "/icons/OWASP.svg", className: " "},
    ]
  }
];

const SkillsSection = () => {
return (
    <section id="skills" className="relative py-24 px-4 " >
      <div className="container max-w-4xl mx-auto w-full">
        <h3 className=' text-3xl md:text-4xl font-bold md:mb-11 text-center'>
            My <span className='text-primary'> Skills</span>
        </h3>
        <div className="bg-card rounded-xl shadow-md p-6 flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                {skills.map((skill, index) => (
                    <div key={index} className='py-4 text-center'>
                        <span className="font-bold text-xl sm:text-2xl mb-3 block">
                        {skill.name}
                        </span>

                        {skill.image && (
                        <img
                            src={skill.image}
                            alt={skill.name}
                            loading="lazy"
                            className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto"
                        />
                        )}

                        {skill.icons && (
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {skill.icons.map((icon, i) => (
                            <div key={i} className="flex flex-col items-center w-20">
                                <img
                                src={icon.image}
                                alt={icon.name}
                                className={` w-12 h-12 object-contain  ${icon.className || ""}`}
                                />
                                <span className="text-sm mt-1 ">{icon.name}</span>
                            </div>
                            ))}
                        </div>
                        )}
                    </div>
                    ))}

            </div>
        </div>
      </div>
    </section>
)
}

export default SkillsSection
