import Stem from './images/stemCells_off.gif';
import genes from './images/Genetic_Engineering_off.gif';
import clinic from './images/ClinicalTrials_off.gif';
import vaccine from './images/Vaccinations_off.gif';
import brain from './images/Brain_Chemistry_off.gif';
import evolution from './images/Evolution_off.gif';
import pgd from './images/pgd_off.gif';
import stemcellactivity1 from './images/stemcellactivity1.png';
import stemcellactivity2 from './images/stemcellactivity2.png';
import stemcellactivity3 from './images/stemcellactivity3.png';
import stemcellopinionimage1 from './images/stemcellopinionimage1.png';
import stemcellopinionimage2 from './images/stemcellopinionimage2.png';
import stemcellopinionimage3 from './images/stemcellopinionimage3.png';
import evoopinionimage1 from './images/evoopinionimage1.png';
import evoopinionimage2 from './images/evoopinionimage2.png';
import evoopinionimage3 from './images/evoopinionimage3.jpg';
import evoactivityimage1 from './images/evoactivityimage1.png';
import evoactivityimage2 from './images/evoactivityimage2.png';
import evoactivityimage3 from './images/evoactivityimage3.png';
import genesopinionimage1 from './images/genesopinionimage1.png';
import genesopinionimage2 from './images/geneopinionimage2.png';
import genesopinionimage3 from './images/geneopinionimage3.png';
import geneactivityimage1 from './images/geneactivityimage1.png';
import geneactivityimage2 from './images/geneactivityimage2.png';
import geneactivityimage3 from './images/geneactivityimage3.png';
import vacactivity1 from './images/vacactivity1.png';
import vacactivity2 from './images/vacactivity2.png';
import vacactivity3 from './images/vacactivity3.png';
import vacopinion1 from './images/vacopinion1.png';
import vacopinion2 from './images/vacopinion2.png';
import vacopinion3 from './images/vacopinion3.png';
import brainactivityimage1 from './images/brainactivityimage1.png';
import brainactivityimage2 from './images/brainactivityimage2.png';
import brainactivityimage3 from './images/brainactivityimage3.png';
import brainopinionimage1 from './images/brainopinionimage1.png';
import brainopinionimage2 from './images/brainopinionimage2.png';
import brainopinionimage3 from './images/brainopinionimage3.png';
import clinicactivity1 from './images/clinicactivity1.png';
import clinicactivity2 from './images/clinicactivity2.png';
import clinicactivity3 from './images/clinicactivity3.png';
import clinicopinionimage1 from './images/clinicopinionimage1.png';
import clinicopinionimage2 from './images/clinicopinionimage2.png';
import clinicopinionimage3 from './images/clinicopinionimage3.png';


var TopicAPI3 = {
    topics: [
        {"topic": 'Stem-Cells',
         "vidsource": 'ARFgcoOrIpU',
         "title": 'Stem Cells',
         "img": 'Stemr',
         "science": {
         	vidsource: ""
                },
         "opinion": [  
                  {
                    img:stemcellopinionimage1,
                    tag: "Ethical arguments",
                    text: "RESEARCH the ethics of embryonic stem cell research according to EuroStemCell and WATCH some ethical arguments.",
                    links: "http://www.eurostemcell.org/factsheet/embryonic-stem-cell-research-ethical-dilemma"
                     },
                  {
                    img:stemcellopinionimage2,
                    tag: "Is the debate over?",
                    text: "READ this web page from the University of Utah. Do you think new developments might make stem cell research less controversial?",
                    links: "http://learn.genetics.utah.edu/content/stemcells/scissues/"
                      },
                  {
                    img:stemcellopinionimage3,
                    tag: "Trustworthy?",
                    text: "SCAN this website from Explore Stem Cells . Do you trust the information on it? Why? / Why not?",
                    links: "http://www.explorestemcells.co.uk/stemcellcontroversy.html"
                      }
                ]
              ,
              
            "activities": [
              {
              
                img:stemcellactivity1,
                tag: "Film about the research",
                text: "WATCH this 15-minute film from EuroStemCell for an introduction to the world of stem cell research.",
                links: "http://www.eurostemcell.org/films/a-stem-cell-story/English"
                 },
              {
               img:stemcellactivity2,
                tag: "Windpipe transplant",
                text: "WATCH and READ this news item from the BBC in 2008. What were the four stages in this windpipe transplant?" ,
                 links: "http://news.bbc.co.uk/1/hi/health/7735696.stm"
                  },
              {
                img:stemcellactivity3,
                tag: "Heart valves from stem cells",
                text: "WATCH this video clip from the journal Nature and READ the accompanying article. Can you identify any ethical considerations for this technology?",
                links: "http://www.nature.com/news/tissue-engineering-how-to-build-a-heart-1.13327"
                  },
            ],
          "quiz": {
  "quizTitle": "Stem-Cell Quiz",
  "questions": [
    {
      "question": "Approximately, how many cells are there in an adult human?",
      "questionType": "text",
      "answers": [
        "Hundreds",
        "Thousands",
        "Millions",
        "Trillions"
      ],
      "correctAnswer": "4"
    },
    {
      "question": " Adult stem cells help us to maintain and repair our bodies throughout our lives. Which of the following is NOT true about adult stem cells?",
      "questionType": "text",
      "answers": [
        "They have been used to treat leukaemia",
        "Some can be found in bones",
        "They are found in children",
        "They can grow into any cell type"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "New brain cells grown from stem cells might help us to treat diseases which affect the brain. Which of the following diseases would not be helped in this way?",
      "questionType": "text",
      "answers": [
        "Parkinson's",
        "Alzheimer's",
        "Heart disease",
        "Stroke"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which is not allowed in the UK?",
      "questionType": "text",
      "answers": [
         "Research into using stem cells to replace malfunctioning human cells",
          "Research into using stem cells to understand more about diseases",
          "Research into using stem cells to test out new drugs",
          "Research into using stem cells to create human clones"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "Scientists have found a way to turn human skin cells back into embryonic-like stem cells, what is the advantage over embryonic stem cells?",
      "questionType": "text",
      "answers": [
        "Skin can be stretched into different shapes",
        "The stem cells can be different colours",
        "The stem cells will be higher quality",
        "It reduces the need to harvest human stem cells from embryos"
      ],
      "correctAnswer": "4"
    },
     {
      "question": "How do scientists hope to use stem cells to treat diabetes?",
      "questionType": "text",
      "answers": [
        "Turn stem cells into pancreatic cells that produce glucose",
        "Turn stem cells into liver cells that produce insulin",
        "Turn stem cells into pancreatic cells that produce insulin",
        "Turn stem cells into insulin and inject" 
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Embryonic stem cells have been harvested from embryos that…?",
      "questionType": "text",
      "answers": [
      "They are usually derived from an embryo that was developed during in vitro fertilisation (IVF) of an egg.",
      "They are donated for research purposes with the informed consent of the donor.",
      "They are separated from an embryo that is four to five days old",
      "They can only give rise to only a limited number of body tissues." 
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Human adult stem cells show great potential for future medical research. Which of the following is NOT true?",
      "questionType": "text",
      "answers": [
        "They can only give rise to a limited number of body tissues.",
        "They are only found in adults",
        "They are difficult to identify and harvest",
        "They are found in bone marrow, the brain and skin"
              ],
      "correctAnswer": "4"
    },
    {
      "question": " Some stem cells can differentiate into any cell, some can give rise to almost any cell type and some are committed to produce specific cell types. Which of the combinations below describes a decrease in ability to differentiate?",
      "questionType": "text",
      "answers": [
        "Totipotent, pluripotent, multipotent",
        "Totipotent, multipotent, pluripotent",
        "Multipotent, pluripotent, totipotent",
        "Pluripotent, totipotent, multipotent"
              ],
      "correctAnswer": "2"
    },
    {
      "question": "Which of the following is NOT true about human embryonic stem cells?",
      "questionType": "text",
      "answers": [
        "They are usually derived from an embryo that was developed during in vitro fertilisation (IVF) of an egg.",
        "They are donated for research purposes with the informed consent of the donor.",
        "They are separated from an embryo that is four to five days old",
        "They can only give rise to only a limited number of body tissues." 
      ],
      "correctAnswer": "1"
        }
      ]
    },
          "discussion": ""
    },
    {"topic": 'Genetic-Engineering',
         "vidsource": 'fSHQmzsQEv8',
         "title": 'Genetic Engineering',
         "img": genes,
         "science": {
          vidsource: ""
                },
         "opinion": [  
                  {
                    img:genesopinionimage1,
                    tag: "Ethical issues",
                    text: "READ this article on the 'Ethical Issues in Genetic Engineering and Transgenics' from the American Institute of Biological Sciences",
                    links: "http://www.actionbioscience.org/biotechnology/glenn.html"
                     },
                  {
                    img:genesopinionimage2,
                    tag: "A Jewish perspective",
                    text: "READ this article from the BBC religion web site giving an interesting discussion on the ethics of genetic engineering from a Jewish perspective. ",
                    links: "http://www.bbc.co.uk/religion/religions/judaism/jewishethics/genetic_1.shtml"
                      },
                  {
                    img:genesopinionimage3,
                    tag: "GM debate in letter form",
                    text: "READ these exchanges in the Guardian between activists and an agricultural research group on genetically modified wheat crop trials",
                    links: "http://www.theguardian.com/environment/2012/jun/01/letter-take-flour-back-rothamsted"
                      }
                ]
              ,
              
            "activities": [
              {
              
                img:geneactivityimage1,
                tag: "GM crops",
                text: "READ the chapter on GM crops from the BioEthics Education Project (BEEP) and rate the pages",
                links: "http://www.beep.ac.uk/content/327.0.html"
                 },
              {
                img:geneactivityimage2,
                tag: "Manipulation techniques",
                text: "FIND and VIEW the animations for some of the different techniques used in genetic engineering from the DNA Learning Center",
                links: "http://www.dnai.org/b/"
                  },
              {
                img:geneactivityimage3,
                tag: "Genetic engineering overview",
                text: "READ through this comprehensive overview of genetic engineering from the ABPI. There are some nice clear animations to explore.",
                links: "http://www.abpischools.org.uk/page/modules/geneticengineeringnew/.cfm?coSiteNavigation_allTopic=1"
                  },
            ],
          "quiz": {
  "quizTitle": "Genetic-Engineering Quiz",
  "questions": [
    {
      "question": "In most cells in your body, the nucleus contains....?",
      "questionType": "text",
      "answers": [
        "The instructions to make the entire organism.",
        "Some of the instructions needed to make the different bits of an organism.",
        "All of the molecules needed to make the different bits of an organism",
        "The instructions needed to make a small part of an organism."
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Which answer is INCORRECT: 'A chromosome is ...'?",
      "questionType": "text",
      "answers": [
        "Made of DNA and can be found in the cell nucleus",
        "A structure that contains all the instructions needed to make a human",
        "Like a chapter in a recipe book and most human cells contain 46 of them",
        "A structure made up of hundreds of genes twisted and coiled up with each other"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "The genes of every living thing are made of DNA, this means we can…?",
      "questionType": "text",
      "answers": [
        "Transfer genes between individuals of the same species only",
        "Transfer genes between individuals from the same species and different species",
        "Transfer genes between individuals of different species only",
        "Transfer genes between living organisms of the same sex only"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Watson and Crick first described the structure of DNA as a double helix but who took the first pictures of DNA that made the description possible?",
      "questionType": "text",
      "answers": [
         "James Watson",
         "Francis Crick",
         "Neither! It was Rosalind Franklin"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What are restriction endonucleases?",
      "questionType": "text",
      "answers": [
        "Enzymes which can cut DNA at specific positions called recognition sequences",
        "Enzymes which can join DNA at specific positions called recognition sequences",
        "Enzymes which can cut DNA at specific positions called restriction sequences",
        "Enzymes which replicate DNA at specific positions called recognition sequences"
      ],
      "correctAnswer": "1"
    },
     {
      "question": "What are plasmids?",
      "questionType": "text",
      "answers": [
        "A small circle of DNA found within the cytoplasm of bacteria",
        "A small circle of DNA found within the nucleii of bacteria",
        "Long strands of DNA that have been twisted and coiled up so they are visible to the naked eye"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "After scientists insert genes into plasmids, why do they put the plasmids into bacteria?",
      "questionType": "text",
      "answers": [
      "The genes replicate and produce more copies of the plasmid",
      "The plasmids replicate and produce more copies of the bacteria",
      "The bacteria keep the plasmids warm until they hatch" 
      ],
      "correctAnswer": "4"
    },
    {
      "question": "Why do scientists often insert genes into plasmids which are resistant to antibiotics?",
      "questionType": "text",
      "answers": [
        "They can harvest genes which have not been contaminated with bacteria",
        "They can use antibiotics to get rid of any bacteria that don’t have the plasmid with their gene in it",
        "They can use antibiotics to get rid of all of the bacteria",
        "They can use antibiotics to remove the bacteria and extract the plasmid with their gene in it"
              ],
      "correctAnswer": "2"
    },
    {
      "question": "The restriction endonuclease cuts DNA strands so some nucleotides overhang. Which of the following is NOT true of the overhanging nucleotides?",
      "questionType": "text",
      "answers": [
        "It is called a sticky end",
        "It is specific to the restriction endonuclease used.",
        "It will only join up with complimentary overhanging DNA.",
        "It can be rejoined with ligase enzymes in a process called transformation "
              ],
      "correctAnswer": "4"
    },
    {
      "question": "Which of the following is an example of transformation?",
      "questionType": "text",
      "answers": [
        "When small bacteria are inserted into larger bacteria",
        "When are genes inserted into plasmids",
        "When plasmids are inserted into bacteria",
        "When plasmids are treated with antibiotics"
      ],
      "correctAnswer": "3"
        }
      ]
    },
          "discussion": ""
    },
        {"topic": 'Brain-Chemistry',
         "vidsource": 'GJQkbICY6ec',
         "title": 'Brain Chemistry',
         "img": brain,
         "science": {
          vidsource: ""
                },
         "opinion": [  
                  {
                    img:brainopinionimage1,
                    tag: "News report",
                    text: "WATCH this short film from Sky News about student use of smart drugs. Is it safe? Is it cheating?", 
                    links: "http://news.sky.com/story/1147488/smart-drug-modafinil-risks-student-health"
                     },
                  {
                    img:brainopinionimage2,
                    tag: "Vote",
                    text: "EXPLORE this App from the Wellcome Trust. Vote on whether you think it is OK to improve brain function with cognitive enhancers", 
                    links: "http://brainapp.wellcomeapps.com/"
                      },
                  {
                    img:brainopinionimage3,
                    tag: "Moral decisions",
                    text: "LISTEN to this 15 minute interview from the Oxford Centre for Neuroethics. Dr Molly Crockett talks  about the affect of Brain chemistry on Moral Decision-Making", 
                    links: "http://www.neuroethics.ox.ac.uk/bio-ethics_bites"
                      }
                ]
              ,
              
            "activities": [
              {
              
                img:brainactivityimage1,
                tag: "Structure and function of the brain",
                text: "READ this page from BBC Science and Nature then click on the brain map on the right  to see what happens where.", 
                links: "http://www.bbc.co.uk/science/humanbody/body/factfiles/brain/brain.shtml"
                 },
              {
                img:brainactivityimage2,
                tag: "Current research",
                text: "WATCH this 13 minute film fromTeachers TV about neuroscience and the cutting edge technologies used to study the brain. ", 
                links: "https://www.tes.co.uk/teaching-resource/teachers-tv-science-new-visions-in-neuroscience-6085009"
                  },
              {
                img:brainactivityimage3,
                tag: "Current research in neuroscience",
                text: "READ this news item from the BBC about research into neuroscience and listen to the podcasts", 
                links: "http://www.bbc.co.uk/news/health-19367832"
                  },
            ],
          "quiz": {
  "quizTitle": "Brain-Chemistry Quiz ",
  "questions": [
    {
      "question": "Which of the following would NOT be turned into electrical messages in your body?",
      "questionType": "text",
      "answers": [
        "Stubbing your toe",
        "The colour green",
        "X rays",
        "The scent of a rose"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which is NOT true for a reflex reaction?",
      "questionType": "text",
      "answers": [
        "It is automatic",
        "It involves the brain",
        "It is fast",
        "It involves nerve cells (neurons)"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which part of the brain controls homeostasis and coordinates movement?",
      "questionType": "text",
      "answers": [
        "The forebrain",
        "The midbrain",
        "The hindbrain"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which is NOT true of pathways in the brain?",
      "questionType": "text",
      "answers": [
         "They are made of neurons linked together",
          "They are permanent",
          "They can link to other pathways",
          "They can get weaker if not used"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which describes how a neuron passes messages happens?",
      "questionType": "text",
      "answers": [
        "Synapses are released into the axon from one neuron and land on the neurotransmitter of the next neuron",
        "Dendrites are released into the synapse from one neuron and land on the axon of the next neuron",
        "Neurotransmitters are released into the synapse from one neuron and land on the axon of the next neuron",
        "Neurotransmitters are released from one neuron into the synapse and land on the dendrite of the next neuron"
      ],
      "correctAnswer": "4"
    },
     {
      "question": "Which drugs do NOT exist?",
      "questionType": "text",
      "answers": [
        "Drugs that stop neurotransmitters being reabsorbed",
        "Drugs to increase interest in a task",
        "Drugs which can replace dead neurons",
        "Drugs which make us feel happier"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "When neurons die, pathways can break. New messages might not get stored and links with existing information might not get made. This can cause…?",
      "questionType": "text",
      "answers": [
      "Severe headaches",
      "Dementia and other memory problems",
      "Photographic memory",
      "Hyperactivity "
      ],
      "correctAnswer": "2"
    },
    {
      "question": "If too much neurotransmitter stays in the gap between neurons for too long, it can cause the next neuron to reduce its response – it becomes?",
      "questionType": "text",
      "answers": [
        "Desensitized",
        "Defibrilated",
        "Decomposed",
        "Decontaminate"
              ],
      "correctAnswer": "1"
    },
    {
      "question": "Which of the following is NOT a result of abnormal neurotransmitter levels?",
      "questionType": "text",
      "answers": [
        "Depression",
        "Hair loss",
        "Problems with concentration (ADHD).",
        "Anxiety"
              ],
      "correctAnswer": "2"
    },
    {
      "question": "Neurotransmitters land on receptors on the next neuron producing an electrical signal. After that, the neurotransmitter molecules are usually..?",
      "questionType": "text",
      "answers": [
        "Dispersed, deactivated or reabsorbed",
        "Sent off to the lungs",
        "Excreted though the cortex",
        "Sent down the axon of the next neuron"
      ],
      "correctAnswer": "1"
        }
      ]
    },
          "discussion": ""
    },
        {"topic": 'Vaccinations',
         "vidsource": 'WnREhRUmK_g',
         "title": 'Vaccinations',
         "img": vaccine,
         "science": {
          vidsource: ""
                },
         "opinion": [  
                  {
                    img:vacopinion1,
                    tag: "Critical eyes",
                    text: "READ the instructions on the BEEP website. Do you think Vaccination News gives a balanced view of vaccinations?", 
                    links: "http://www.beep.ac.uk/content/295.0.html"
                     },
                  {
                    img:vacopinion2,
                    tag: "MMR hoax",
                    text: "Read this extract from “Bad Science“ by Ben Goldacre. ", 
                    links: "http://www.badscience.net/2008/08/the-medias-mmr-hoax/"
                      },
                  {
                    img:vacopinion3,
                    tag: "A journalist's view",
                    text: "Read this opinion piece from a Telegraph journalist. Do you think he presented a good argument? Click through to the Al Jazeera report", 
                    links: "http://blogs.telegraph.co.uk/news/tomchiversscience/100196350/why-vaccination-matters-and-why-hippies-and-conspiracy-theorists-who-say-otherwise-are-dangerous/"
                      }
                ]
              ,
              
            "activities": [
              {              
                img:vacactivity1,
                tag: "How vaccines protect us",
                text: "RESEARCH how vaccines protect us by watching these videos from the NHS", 
                links: "http://www.nhs.uk/Conditions/vaccinations/Pages/How-vaccines-work.aspx"
               
                 },
              {
                img:vacactivity2,
                tag: "Immunity and vaccinations",
                text: "WATCH these animations from the ABPI on pages 2 and 4 on immunity and vaccinations. Can you do the quiz on page 6?", 
                links: "http://www.abpischools.org.uk/page/modules/infectiousdiseases_immunity/immunity2.cfm?coSiteNavigation_allTopic=1"
                  },
              {
                img:vacactivity3,
                tag: "HIV vaccine?",
                text: "READ about the challenges involved in developing a vaccine against HIV in this BBC News article",
                links: "http://news.bbc.co.uk/1/hi/health/7907774.stm"
                  },
            ],
          "quiz": {
  "quizTitle": "Vaccinations Quiz ",
  "questions": [
    {
      "question": "What are the chemicals produced by some white blood cells for targeting and destroying bacteria or viruses?",
      "questionType": "text",
      "answers": [
        "Antigens",
        "Antipathies",
        "Pathogens",
        "Antibodies"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "Once your white cells have defeated a pathogen, they seem to remember how to make antibodies the next time it appears. This means...?",
      "questionType": "text",
      "answers": [
        "...it will take longer to destroy the pathogen",
        "...you will display more symptoms",
        "...you will feel dizzy and tired",
        "...the invaders will be destroyed before they have chance to make you feel unwell"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "A vaccine can be made from a disease causing pathogen. It shouldn't make you sick because the pathogen....?",
      "questionType": "text",
      "answers": [
        "...is inflated so easier for your cells to spot",
        "...is covered in a sticky film so it adheres to your arteries",
        "... is a dead or weakened form",
        "... has gone off"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "For herd immunity to be effective, what percentage of the population need to be vaccinated?",
      "questionType": "text",
      "answers": [
         "20 - 30%",
        "40 - 50%",
        "60 - 70%",
        "80 - 90%"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "What happened when people stopped getting their children vaccinated with the MMR vaccine?",
      "questionType": "text",
      "answers": [
        "People were fine because of herd immunity",
        "There was a significant rise in autism cases",
        "There was a significant fall in autism cases",
"There were significantly more cases of measles"
      ],
      "correctAnswer": "4"
    },
     {
      "question": "Which of the following target specific pathogens?",
      "questionType": "text",
      "answers": [
        "Chemical barriers in the first line of defence",
        "Physical barriers in the first line of defence",
        "Phagocytes in the second line of defence",
        "Lymphocytes in the third line of defence"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "The transmission of pathogens is about how they are passed from one organism to another. Which of the following describes Direct methods of transmission?",
      "questionType": "text",
      "answers": [
      "Spreading diseases through contact with the infected person",
      "Spreading diseases through drinking water (like cholera)",
      "Spreading diseases through contaminated food (like salmonella)",
      "Spreading diseases through the air (like the influenza virus)."
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Indirect methods of transmission include:?",
      "questionType": "text",
      "answers": [
        "Spreading diseases through contaminated food (like salmonella)",
        "Spreading diseases through the air (like the influenza virus)",
        "Spreading diseases via a vector; another organism. (e.g. malaria is transmitted by the mosquito)",
        "All of the above"
              ],
      "correctAnswer": "4"
    },
    {
      "question": "Our first line of defence against infection stops pathogens entering your body with physical and chemical barriers. Which of the following is a chemical barrier?",
      "questionType": "text",
      "answers": [
        "Skin",
        "Mucus in airways (which traps microorganisms)",
        "Cilia in our airways",
        "Lysozymes (enzymes in tears)"
              ],
      "correctAnswer": "4"
    },
    {
      "question": "Which is NOT passive immunisation ?",
      "questionType": "text",
      "answers": [
        "When we are given antibodies that we didn’t make ourselves",
        "An antibody injection (artificial immunity)",
        "Mother’s breast milk (natural immunity)",
        "When our own lymphocytes respond to infections"
      ],
      "correctAnswer": "4"
        }
      ]
    },
          "discussion": ""
    },
        {"topic": 'Clinical-Trials',
         "vidsource": 'y15o0HxzPPU',
         "title": 'Clinical Trials',
         "img": clinic,
         "science": {
          vidsource: ""
                },
         "opinion": [  
                  {
                    img:clinicopinionimage1,
                    tag: "Placebo group ethics",
                    text: "Vice President of a pharmaceutical company talks about some ethical issues on the Stanford University website.", 
                    links: "http://ecorner.stanford.edu/authorMaterialInfo.html?mid=2724"
                     },
                  {
                    img:clinicopinionimage2,
                    tag: "Developing countries",
                    text: "READ this topic guide from Debating Matters (a debate competition for teams of 6th Formers) about human trials in the developing world.", 
                    links: "http://www.debatingmatters.com/topicguides/topicguide/clinical_trials/"
                      },
                  {
                    img:clinicopinionimage3,
                    tag: "A Doctor's opinion",
                    text: "WATCH this video from NHS Choices. Dr Ben Goldacre explains why he thinks clinical trials are important, what they involve and who can take part in one.", 
                    links: "https://www.youtube.com/watch?v=nReoI5CniAw"
                      }
                ]
              ,
              
            "activities": [
              {              
                img:clinicactivity1,
                tag: "Drug development process ",
                text: "RESEARCH this detailed guide to the drug development process from the Association of the British Pharmaceutical Industries ", 
                links: "http://www.abpischools.org.uk/page/modules/makingmedicies/makingmedicines2.cfm?age=Age%20Range%2016-19&subject=Applied%20science"
                 },
              {
                img:clinicactivity2,
                tag: "Medicine or poison?",
                text: "EXPLORE these online articles from the Wellcome Trust. If you like them, why not order the free magazine? ", 
                links: "http://bigpictureeducation.com/issues"
                  },
              {
                img:clinicactivity3,
                tag: "Regulating medicines",
                text: "EXPLORE this site from the MHRA. Who is this website for? What sort of information can you get from it? What information can you send in?", 
                links: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency#page=DynamicListMedicines"
                  },
            ],
          "quiz":{
  "quizTitle": "Clinical-Trials Quiz ",
  "questions": [
    {
      "question": "A placebo is...?",
      "questionType": "text",
      "answers": [
        "A pill that looks the same as the one containing the drug being tested",
        "A pill containing the chemical being tested in a drug trial",
        "A pill with similar properties to the drug being tested in the trial",
        "An ineffectual ‘false’ pill which does not contain the chemical being tested"      
        ],
      "correctAnswer": "4"
    },
    {
      "question": "In a randomised double-blind controlled trial...?",
      "questionType": "text",
      "answers": [
        "The doctors know, but the patients don’t know who is getting a placebo",
        "Neither the doctors nor the patients know who is getting a placebo",
        "The patients know, but the doctors don’t know who is getting a placebo",
        "The doctors and the patients know who is getting a placebo"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Scientists try to reduce the number of tests carried out on animals through 'the 3 Rs'. Which of the following is NOT one of the 3 Rs?",
      "questionType": "text",
      "answers": [
        "REPLACING the use of animals wherever possible",
        "RECYCLING the animals for pets after they have been of service",
        "REDUCING the number of animals needed to a minimum",
        "REFINING tests to cause animals the least possible distress"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Phase 1 trials test...?",
      "questionType": "text",
      "answers": [
         "A large dose of the drug in a few healthy volunteers",
          "A small dose of the drug in a few patients with the disease",
          "A small dose of the drug in thousands of patients with the disease",
          "A small dose of the drug in a few healthy volunteers"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "Phase 2 trials test...?",
      "questionType": "text",
      "answers": [
        "A large dose of the drug in a few healthy volunteers",
        "A small dose of the drug in a few patients with the disease",
        "A small dose of the drug in thousands of patients with the disease",
        "A small dose of the drug in a few healthy volunteers"
      ],
      "correctAnswer": "2"
    },
     {
      "question": "Phase 3 trials test...?",
      "questionType": "text",
      "answers": [
        "A large dose of the drug in a few healthy volunteers",
        "A small dose of the drug in a few patients with the disease",
        "A small dose of the drug in thousands of patients with the disease",
        "A small dose of the drug in a few healthy volunteers"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "In pre-clinical development, researchers often start by selecting a target associated with a disease then search for a molecule/compound that will affect the target and alter the disease. The target is usually..?",
      "questionType": "text",
      "answers": [
      "A gene or protein",
      "The lead compound",
      "A healthy volunteer",
      "A rat or small mammal"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "What does In vitro mean?",
      "questionType": "text",
      "answers": [
        "Experimentation done in or on the living tissue of a whole, living organism",
        "Experimentation done in partial or dead organisms",
        "The technique of performing a given procedure in a controlled environment outside of a living organism",
        "Experimentation done in pure oxygen"
              ],
      "correctAnswer": "3"
    },
    {
      "question": "In the UK, the body controlling the regulation of clinical trials is the MHRA. This stands for?",
      "questionType": "text",
      "answers": [
        "Medicines and Health Rules Agency",
        "Medicines and Healthcare products Regulation Awards",
        "Medical Healthcare Regulators’ Authority",
        "Medicines and Healthcare products Regulatory Association"
              ],
      "correctAnswer": "4"
    },
    {
      "question": "Clinical trials are NOT are used to test the safety and efficacy of…?",
      "questionType": "text",
      "answers": [
        "Drugs and combinations of drugs",
        "Approaches to surgery",
        "Procedures including radiation therapy",
        "Individual doctor performance"
      ],
      "correctAnswer": "4"
        }
      ]
    },
          "discussion": ""
    },
          
        {"topic": 'Evolution',
         "vidsource": 'GEQJcU6p4W8',
         "title": 'Evolution',
         "img": evolution,
         "science": {
          vidsource: ""
                },
         "opinion": [  
                  {
                    img:evoopinionimage1,
                    tag: "A US Congressman's opinon",
                    text: "WATCH this short film from the Guardian website depicting one person’s opinion about evolution Wikimedia Commons", 
                    links: "http://www.theguardian.com/world/2012/oct/06/republican-congressman-paul-broun-evolution-video"
                     },
                  {
                    img:evoopinionimage2,
                    tag: "Atheist and theist views",
                    text: "WATCH these BBC Class Clips about the purpose of evolution and how the atheist and theist views differ", 
                    links: "http://www.bbc.co.uk/education/topics/zy86n39/resources/1"
                      },
                  {
                    img:evoopinionimage3,
                    tag: "A futuristic movie idea",
                    text: "WATCH this short movie trailer from ZUguide exploring how your genes might determine your life in the future", 
                    links: "https://www.youtube.com/watch?v=ZppWok6SX88"
                      }
                ]
              ,
              
            "activities": [
              {              
                im:evoactivityimage1,
                tag: "The history",              
                text: "READ the story of the Great Debate from the Oxford University Museum of Natural History", 
                links: "http://www.oum.ox.ac.uk/learning/pdfs/debate.pdf"
                 },
              {
                im:evoactivityimage2,
                tag: "Contemporary overview",
                text: "READ this article for a modern overview of evolution from the New Scientist", 
                links: "http://www.newscientist.com/topic/evolution"
                  },
              {
                im:evoactivityimage3,
                tag: "Evolution of superbugs",
                text: "WATCH this short film about the evolution of drug resistant superbugs from the American Museum of Natural History ", 
                links: "https://www.youtube.com/watch?v=iLhSk_0tWJ4"
                  },
            ],
          "quiz": {
  "quizTitle": "Evolution Quiz ",
  "questions": [
    {
      "question": "Which of these did Darwin think?",
      "questionType": "text",
      "answers": [
        "Creatures least suited to island life would survive to breed despite all odds",
        "Creatures least suited to island life would survive by adapting their features and passing the new versions on to their offspring",
        "Creatures best suited to island life would survive to breed but could never become a new species over many generations",
        "Creatures best suited to island life would survive to breed and pass on their features to their offspring"      
        ],
      "correctAnswer": "4"
    },
    {
      "question": "The earliest fossils that have been found were alive.....?",
      "questionType": "text",
      "answers": [
        "3.5 billion years ago and were very simple cells",
        "3.5 billion years ago and had tissues and organs",
        "2000 years ago and were similar organisms to those alive today",
        "2000 years ago and were very simple cells"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Which of the following did Darwin use to support his ideas about evolution?",
      "questionType": "text",
      "answers": [
        "Genes tell the cells of an organism how to make the organism’s tissues, characteristics and control what happens inside the organism",
        "Mixing genes from two parents can give a large variety of possible gene combinations resulting in characteristics which could be advantageous",
        "When parent genes are copied, a mutation can give rise to new gene combinations and mutations which can cause changes in the organism's characteristics",
        "Characteristics which give a better chance of survival are more likely to be passed on from parent to offspring"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "Why are evolutionary biologists comparing protein molecules of different species?",
      "questionType": "text",
      "answers": [
         "To see how closely related they are",
        "Because all organisms have protein molecules",
        "To see if species with closely related skeletons also have closely related proteins",
        "All of the above"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "Which of the following CANNOT be explained by evolution by natural selection?",
      "questionType": "text",
      "answers": [
        "A huge diversity of life on Earth",
        "The increasing complexity of ancient fossils",
        "Why humans have a short tail bone",
        "The purpose of life and the universe"
      ],
      "correctAnswer": "4"
    },
     {
      "question": "Which other scientist had the same theory as Darwin’s?",
      "questionType": "text",
      "answers": [
        "Wallace",
        "Huxley",
        "The Bishop of Oxford",
        "Charles Lyell"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Which of the following does not provide evidence for evolution?",
      "questionType": "text",
      "answers": [
      "Observations of the peppered moth",
      "Antibiotic resistant bacteria",
      "The fossil record",
      "The Bible"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "All classes of tetrapods (vertebrates with four legs, including mammals and amphibians) possess the pentadactyl limb. This is a pattern of limb bones containing..?",
      "questionType": "text",
      "answers": [
        "One proximal bone, two distal bones, seven carpels, five metacarpals",
        "Two proximal bones, one distal bones, seven carpels, five metacarpals",
        "One proximal bone, seven distal bones, seven carpels, five metacarpals",
        "One proximal bone, five distal bones, five carpels, five metacarpals" 
              ],
      "correctAnswer": "1"
    },
    {
      "question": "Mitochondrial DNA is a good source of evidence for human evolution because..?",
      "questionType": "text",
      "answers": [
        "It has high mutation rates",
        "It does not degrade over time",
        "It is found in high levels in cells.",
        "All of the above"
              ],
      "correctAnswer": "4"
    },
    {
      "question": "Genes tell cells how to make proteins such as enzymes. So by comparing an enzyme that has the same function in different species, we know how similar their genes are because…?",
      "questionType": "text",
      "answers": [
        "Similar enzymes = similar proteins",
        "Similar functions = similar genes = enzymes",
        "Similar enzymes = similar genes = closely related",
        "Similar genes = similar genes = the same species"
      ],
      "correctAnswer": "3"
        }
      ]
    },
          "discussion": ""
    },
        
    ],
    
    net: (function () {
        console.log(TopicAPI3.topics);
        return TopicAPI3.topics[0].opinion.board[1].text
        
    }),
    
    jet: (function (topicFromPage) {
    //console.log(topicFromPage);
    var t = [];
        t = TopicAPI3.topics; //return array
        console.log(t);
        var res = t.filter(top => top.topic === topicFromPage);
        console.log(res.topic);
        return res[0];
    }),
    
    vid: (function (topicFromPage) {
    console.log(topicFromPage);
    var t = [];
    t = TopicAPI3.topics; //return array
    console.log(t);
    console.log(t[0].topic);
    var ros = t.filter(function (top){
    	console.log(topicFromPage);
        return top.topic === topicFromPage;
        	}) 
    console.log(ros[0].vidsource);
        return ros[0].vidsource //ros[0].vidsource; top => top.topic === topicFromPage
    })
        
        
//        t.forEach(function(top){
//            console.log(top);
//            if (top.topic === topicFromPage){
//            return top
//                }
//        })
// }),
//    topicInAPI: (function(top){
//            console.log(top);
//            if (top.topic === topicFromPage){
//            return top 
//                }
//        })

};
export default TopicAPI3;