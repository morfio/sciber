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


var TopicAPI2 = {
    topics: [
        {"topic": 'Stem-Cells',
         "vidsource": 'Kz8LgAsUAgE',
         "title": 'Stem Cells',
         "img": 'Stemr',
         "science": {
         	vidsource: ""
                },
         "opinion": [  
                  {
                    img:stemcellopinionimage1,
                    tag: "A pastor's opinion",
                    text: "A 2 minute clip giving a religious perspective on the use of embryonic stem cells.",
                    links: "https://www.tes.co.uk/teaching-resource/teachers-tv-starters--stem-cells-religious-angle-6049218"
                     },
                  {
                    img:stemcellopinionimage2,
                    tag: "A patient's opinion",
                    text: "Watch this video 'Stem Cells - The Issue' which describes the use of stem cells in treating Parkinson's Disease.",
                    links: "https://www.stem.org.uk/elibrary/resource/30879/stem-cell-research-the-issue"
                      },
                  {
                    img:stemcellopinionimage3,
                    tag: "A wheelchair user's opinion",
                    text: "A wheelchair user discusses his hopes and reservations about stem cell therapy in this 3-minute clip",
                    links: "https://www.tes.co.uk/teaching-resource/teachers-tv-stem-cells-wheelchair-user-6085240"
                      }
                ]
              ,
              
            "activities": [
              {
              
                img:stemcellactivity1,
                tag: "Differentiation",
                text: "READ through this BBC Bitesize learning module and click the WATCH link",
                links: "http://www.bbc.co.uk/schools/gcsebitesize/science/add_ocr_gateway/living_growing/growthdevrev5.shtml"
                 },
              {
               img:stemcellactivity2,
                tag: "Research",
                text: "EXPLORE the links to research stem cells from the University of Utah",
                links: "http://learn.genetics.utah.edu/content/stemcells/"
                  },
              {
                img:stemcellactivity3,
                tag: "BBC News",
                text: "WATCH and READ this news item from 2008 to find out about the four stages in a windpipe transplant",
                links: "http://news.bbc.co.uk/1/hi/health/7735696.stm"
                  },
            ],
          "quiz":{
  "quizTitle": "Stem-Cell Quiz ",
  "questions": [
    {
      "question": "Approximately, how many cells are there in an adult human?",
      "questionType": "text",
      "answers": [
        "Hundreds",
        "Thousands",
        "Millions",
        "Trillions "
      ],
      "correctAnswer": "4"
    },
    {
      "question": "Scientists find embryonic stem cells interesting because they can grow into all the cell types needed to make your",
      "questionType": "text",
      "answers": [
        "Tissues and organs",
        "Brain and heart",
        "Umbilical cord",
        "Thoughts and feelings"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "Adult stem cells help us to maintain and repair our bodies throughout our lives. Which of the following is NOT true about adult stem cells?",
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
      "question": "Human adult stem cells show great potential for future medical research. Which of the following is NOT true?",
      "questionType": "text",
      "answers": [
        "They can be found in bone marrow, the brain and skin",
        "They can be difficult to identify and harvest",
        "They can only give rise to only a limited number of body tissues.",
        "They are only found in adults "
      ],
      "correctAnswer": "4"
    },
    {
      "question": "Which is not allowed in the UK ?",
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
      "question": "How do scientists hope to use stem cells to treat diabetes",
      "questionType": "text",
      "answers": [
        "Turn stem cells into pancreatic cells that produce glucose",
        "Turn stem cells into liver cells that produce insulin",
        "Turn stem cells into insulin and inject",
        "Turn stem cells into pancreatic cells that produce insulin"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "The potential to use stem cell technology to make new nerve cells gives great hope to people who are:",
      "questionType": "text",
      "answers": [
        "Very nervous",
        "Suffering from heart disease",
        "Paralysed by spinal cord injuries",
        "Scared of the dark"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Embryonic stem cells have been harvested from embryos that:",
      "questionType": "text",
      "answers": [
        "Look like babies",
        "Have a nervous system and feel pain",
        "Are made of approximately 100 cells",
        "Have a heart beat"
              ],
      "correctAnswer": "3"
    }
  ]
} ,
          "discussion": ""
    },
    {"topic": 'Genetic-Engineering',
         "vidsource": 'fZrL7h2aqZQ',
         "title": 'Genetic Engineering',
         "img": genes,
         "science": {
          vidsource: ""
                },
         "opinion": [  
                  {
                    img:genesopinionimage1,
                    tag: "The ethics of genetic modification",
                    text: "Liz Bonnin from the BBC One series 'Bang Goes The Theory' interviews scientists who are in favour of or against genetic modification.",
                    links:"http://www.bbc.co.uk/schools/teachers/bang/series_3_4/videos/lesson13_genetic_modification.shtml"
                     },
                  {
                    img:genesopinionimage2,
                    tag: "GM in the news",
                    text: "READ this BBC News article to find out how some people are reacting to crop trials for a genetically modified variety of rice",
                    links:"http://www.bbc.co.uk/news/science-environment-23632042"
                      },
                  {
                    img:genesopinionimage3,
                    tag: "GM issues",
                    text: "This film is based on a play written by J. Lewis, R. Driver, J. Leach and C. Wood-Robinson presenting some opinions held by fictional characters to stimulate discussion.",
                    links:""
                      }
                ]
              ,
              
            "activities": [
              {
              
                img:geneactivityimage1,
                tag: "Interactive tour",
                text: "WATCH this interactive tour of DNA, genes and proteins from the University of Utah",
                links: "http://learn.genetics.utah.edu/content/basics/ "
                 },
              {
                img:geneactivityimage2,
                tag: "Learning module",
                text: "READ these two BBC Bitesize pages on genetic engineering and WATCH the animations",
                links: "http://www.bbc.co.uk/schools/gcsebitesize/science/add_edexcel/cells/dnarev5.shtml"
                  },
              {
                img:geneactivityimage3,
                tag: "Make some insulin",
                text: "WATCH the steps needed to genetically engineer insulin on the ABPI website. Can you do the drag and drop activity below?",
                links: "http://www.abpischools.org.uk/page/modules/diabetes/diabetes6.cfm?coSiteNavigation_allTopic=1"
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
        "Some of the instructions needed to make the different bits of an organism",
        "All of the molecules needed to make the different bits of an organism.",
        "The instructions needed to make a small part of an organism.",
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Genes are like recipes written in a special code. They are joined to each other in twisted chains called…?",
      "questionType": "text",
      "answers": [
        "Stringogenes",
        "DNA",
        "Nuclear spaghetti",
        "Chromophores"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which answer is INCORRECT: A chromosome is ...?",
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
      "question": "The instructions needed to make your whole body can be thought of as a recipe book. Which of the following is true?",
      "questionType": "text",
      "answers": [
        "Different cells have different recipe books",
        "Different cells contain different recipes",
        "All cells have the same recipe book but different cells use different recipes",
        "All cells use the whole recipe book"
      ],
      "correctAnswer": "3"
    },
     {
      "question": "Genetic engineering is responsible for some interesting research.Which of the following has NOT been done?",
      "questionType": "text",
      "answers": [
        "The gene for blue petals has been inserted into a rose",
        "The gene for gills has been inserted into a human",
        "A glowing gene from a jellyfish has been inserted into a rabbit",
        "A gene for pest resistance has been inserted into a crop plant"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which of the following is correct?",
      "questionType": "text",
      "answers": [
        "Genes are long strands of DNA that have been twisted and coiled up, there are 46 in most cells and each one contains many chromosomes",
        "Chromosomes are long strands of DNA that have been twisted and coiled up, there are 46 in most cells and each one contains many genes",
        "There are 46 cells in all living things that have been twisted and coiled up into a chromosome",
        "There are 46 genes in every cell that have been twisted and coiled up" 
      ],
      "correctAnswer": "2"
    }
    
  ]
} ,
          "discussion": ""
    },
        {"topic": 'Brain-Chemistry',
         "vidsource": 'fZrL7h2aqZQ',
         "title": 'Brain Chemistry',
         "img": brain,
         "science": {
          vidsource: ""
                },
         "opinion": [  
                  {
                    img:brainopinionimage1,
                    tag: "Smart drugs",
                    text: "READ this page from the University of Washington. Would you consider using smart drugs to help you pass your exams?",
                    links: "http://faculty.washington.edu/chudler/smartd.html"
                     },
                  {
                    img:brainopinionimage2,
                    tag: "Vote",
                    text: "EXPLORE this App from the Wellcome Trust. Vote on whether you think it is OK to improve brain function with cognitive enhancers",
                    links: "http://brainapp.wellcomeapps.com/"
                      },
                  {
                    img:brainopinionimage3,
                    tag: "Neuroethics",
                    text: "READ this page from the University of Washington. Which question do you think is most interesting? Why?",
                    links: "http://faculty.washington.edu/chudler/neuroe.html"
                      }
                ]
              ,
              
            "activities": [
              {
              
                img:brainactivityimage1,
                tag: "Current research",
                text: "WATCH Ossie’s tour around the body to see how neuroscience and physics are used to help us understand the brain (from Oxford Sparks)",
                links: "https://podcasts.ox.ac.uk/spin-around-brain"
                 },
              {
                img:brainactivityimage2,
                tag: "Learning module",
                text: "REVISE and TEST your knowledge of the Brain and mind with this BBC Bitesize learning module ",
                links: "http://www.bbc.co.uk/schools/gcsebitesize/science/add_ocr_pre_2011/brain_mind/"
                  },
              {
                img:brainactivityimage3,
                tag: "Drugs on the brain",
                text: "WATCH these movie clips from FRANK to see how different drugs can affect your brain.",
                links: "http://www.talktofrank.com/drugs-on-the-brain"
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
      "question": "Scientists find embryonic stem cells interesting because they can grow into all the cell types needed to make your",
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
      "question": "Which is NOT true for a reflex reaction?",
      "questionType": "text",
      "answers": [
        "They have been used to treat leukaemia",
        "Some can be found in bones",
        "They are found in children",
        "They can grow into any cell type"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Messages enter a neuron through it’s....",
      "questionType": "text",
      "answers": [
       " Dendrites",
        "Cell body",
        "Axon",
        "Electrical wires"
      ],
      "correctAnswer": "1"
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
      "question": "Which describes how a neuron passes messages happens? ?",
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
        "Hyperactivity"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "If too much neurotransmitter stays in the gap between neurons for too long, it can cause the next neuron to reduce its response – it becomes…?",
      "questionType": "text",
      "answers": [
        "Desensitized",
        "Defibrilated",
        "Decomposed",
        "Decontaminated"
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
        "dispersed, deactivated or reabsorbed.",
        "Sent off to the lungs",
        "Excreted though the cortex",
        "Sent down the axon of the next neuron"
              ],
      "correctAnswer": "1"
    }
  ]
} ,
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
                    tag: "MMR controversy",
                    text: "WATCH this 5 minute film. What swayed public confidence in the MMR vaccine? Why don't the Medical Research Council recommend 3 seperate vaccines?",
                    links: "https://youtu.be/LvnqCGEuOhM"
                     },
                  {
                    img:vacopinion2,
                    tag: "Should the MMR be compulsory?",
                    text: "READ the 'Swansea measles outbreak' link. Do you think the MMR vaccination should be compulsory? ",
                    links: "http://www.bbc.co.uk/news/uk-wales-23168519"
                      },
                  {
                    img:vacopinion3,
                    tag: "To vaccinate or not?",
                    text: "WATCH this BBC news video. What else could be done to increase public confidence in the MMR vaccine?",
                    links: "https://www.youtube.com/watch?v=yQG07nq8ia0&list=PLzpddRkJq49sYO3ClaYfEv3gvMJhhB-hs"
                      }
                ]
              ,
              
            "activities": [
              {              
                img:vacactivity1,
                tag: "Learning module",
                text: "READ through this BBC Bitesize learning module to discover the ddvantages and disadvantages of vaccinations",
                 },
              {
                img:vacactivity2,
                tag: "How vaccines work",
                text: "RESEARCH how vaccines protect us by watching these videos from the NHS",
                  },
              {
                img:vacactivity3,
                tag: "Jenner",
                text: "WATCH this HowStuffWorks video showing how vaccinations first came about through the work of Dr Edward Jenner.",
                  },
            ],
          "quiz": {
  "quizTitle": "Vaccinations Quiz",
  "questions": [
    {
      "question": "What are the chemicals produced by some white blood cells for targeting and destroying bacteria or viruses?",
      "questionType": "text",
      "answers": [
        "Antigens",
        "Antibodies",
        "Pathogens",
        "Antipathies"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Once your white cells have defeated a pathogen, they seem to remember how to make antibodies the next time it appears. This means...?",
      "questionType": "text",
      "answers": [
        "...it will take longer to destroy the pathogen.",
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
      "question": "Indirect methods of transmission include:",
      "questionType": "text",
      "answers": [
        "Spreading diseases through contaminated food (like salmonella)",
        "Spreading diseases through the air (like the influenza virus).",
        "Spreading diseases via a vector; another organism. (e.g. malaria is transmitted by the mosquito).",
        "All of the above"
      ],
      "correctAnswer": "4"
    },
    {
      "question": " Our first line of defence against infection stops pathogens entering your body with physical and chemical barriers. Which of the following is a chemical barrier?",
      "questionType": "text",
      "answers": [
        "Skin",
        "mucus in airways (which traps microorganisms)",
        "cilia in our airways",
        "Lysozymes (enzymes in tears)" 
              ],
      "correctAnswer": "4"
    },
    {
      "question": "Which is NOT passive immunisation ?",
      "questionType": "text",
      "answers": [
        "when we are given antibodies that we didn’t make ourselves",
        "an antibody injection (artificial immunity).",
        "mother’s breast milk (natural immunity).",
        "when our own lymphocytes respond to infections"
      ],
      "correctAnswer": "4"
    }
    
  ]
} ,
          "discussion": ""
    },
        {"topic": 'Clinical-Trials',
         "vidsource": 'WnREhRUmK_g',
         "title": 'Clinical Trials',
         "img": clinic,
         "science": {
          vidsource: ""
                },
         "opinion": [  
                  {
                    img:clinicopinionimage1,
                    tag: "Regulation and ethics",
                    text: "WATCH this BBC Class Clip describing the clinical trial process, the risks, the ethics and a news report where a trial went wrong.",
                    links: "http://bigpictureeducation.com/drug-development"
                     },
                  {
                    img:clinicopinionimage2,
                    tag: "Use of animals",
                    text: "Explore this website from Understanding Animal Research. Does this organisation approve of the use of animals for testing drugs? What do you think?",
                    links: "http://www.understandinganimalresearch.org.uk/schoolzone/making-medicines/"
                      },
                  {
                    img:clinicopinionimage3,
                    tag: "Trials in India",
                    text: "WATCH this video from BBC News. Why are people complaining about this drug trial? What is 'informed consent'?",
                    links: "http://www.bbc.co.uk/news/world-asia-20163230"
    
                      }
                ]
              ,
              
            "activities": [
              {              
                img:clinicactivity1,
                tag: "Medicine or poison? ",
                text: "EXPLORE the 'Drug development animations' links from the Wellcome Trust. If you like them, why not order the free magazine? ",
                links: "http://bigpictureeducation.com/drug-development"
                 },
              {
                img:clinicactivity2,
                tag: "Developing drugs in the news",
                text: "READ through pages 1 and 2 from this BBC Bitesize learning module and watch the links ",
                links: "http://www.bbc.co.uk/schools/gcsebitesize/science/aqa/drugs_use/drugsrev1.shtml"
                  },
              {
                img:clinicactivity3,
                tag: "Tim's Journey",
                text: "READ about Tim's quest to find a more convenient treatment for his asthma from the Centre of the Cell. ",
                links: "https://www.centreofthecell.org/learn-play/patient-journeys/clinical-research/"
                  },
            ],
          "quiz":  {
  "quizTitle": "Clinical-Trials Quiz",
  "questions": [
    {
      "question": "The first stage in a drug trial for a new medicine is to test the effect of the drug...?",
      "questionType": "text",
      "answers": [
        "In animals",
        "In healthy volunteers",
        "In healthy volunteers",
        "On cells and tissues"
      ],
      "correctAnswer": "4"
    },
    {
      "question": " A placebo is...?",
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
      "question": "Scientists try to reduce the number of tests carried out on animals through The 3 Rs. Which of the following is NOT one of the 3 Rs?",
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
      "question": "Why do drugs continue to be monitored after they have passed phase 3 trials and been approved for use?",
      "questionType": "text",
      "answers": [
        "To see if any unknown side effects develop over a period of time",
        "So drug companies can earn more money",
        "To find the correct dose for patients",
        "To find out if the drug can be used to treat other diseases"
              ],
      "correctAnswer": "1"
    },
    {
      "question": " Pharmaceutical companies need to show that the medicine is safe by sending their clinical trial results to …?",
      "questionType": "text",
      "answers": [
        "MHRA",
        "MDMA",
        "MOMA",
        "MWAH" 
              ],
      "correctAnswer": "1"
    },
    
    {
      "question": "Approximately how long does it take for a drug to complete all 3 phases of clinical trials before the licensing stage?",
      "questionType": "text",
      "answers": [
        "3 – 5 Years",
        "10 – 15 years",
        "10 – 15 months",
        "200 – 300 days"
      ],
      "correctAnswer": "3"
      }
    ]
  },
          "discussion": ""
    },
        {"topic": 'Evolution',
         "vidsource": 'WnREhRUmK_g',
         "title": 'Evolution',
         "img": evolution,
         "science": {
          vidsource: ""
                },
         "opinion": [  
                  {
                    img:evoopinionimage1,
                    tag: "Creationism in school?",
                    text: "Seven opinions about whether creationism should be taught in schoosl from 4Thought.TV",
                    links: "http://www.channel4.com/programmes/4thoughttv/?autoplay=true"
                     },
                  {
                    img:evoopinionimage2,
                    tag: "Atheist and theist views",
                    text: "WATCH these BBC Class Clips about the purpose of evolution and how the atheist and theist views differ.",
                    links: "http://www.bbc.co.uk/education/topics/zy86n39/resources/1"
                      },
                  {
                    img:evoopinionimage3,
                    tag: "Evolution in schools?",
                    text: "This survey by the British Council shows how the people in different countries feel about which evolutionary theories should be taught in schools.",
                    links: "http://ncse.com/files/pub/evolution/09-Survey-BritishCouncil-globaleducationDarwineducation-MORIEducationDataTables-FINAL.pdf"
                      }
                ]
              ,
              
            "activities": [
              {              
                im:evoactivityimage1,
                tag: "The history",
                text: "READ the story of the Great Debate from the Oxford University Museum of Natural History",
                links: "http://www.bbc.co.uk/schools/gcsebitesize/science/aqa/evolutiontheories/theoriesofevolutionrev5.shtml"
                 },
              {
                im:evoactivityimage2,
                tag: "Contemporary overview",
                text: "READ this article for a modern overview of evolution from the New Scientist",
                links: "http://www.bbc.co.uk/nature/life"
                  },
              {
                im:evoactivityimage3,
                tag: "Evolution of superbugs",
                text: "WATCH this short film about the evolution of drug resistant superbugs from the American Museum of Natural History ",
                links: "http://www.bbc.co.uk/schools/gcsebitesize/science/aqa/evolutiontheories/theoriesofevolutionact.shtml"
                  },
            ],
          "quiz":{
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
      "question": " We don't have fossils to show all the species between the first life form and the organisms alive today. What reason would a scientist be LEAST likely to give for this?",
      "questionType": "text",
      "answers": [
        "The organism must get trapped in sediment, peat, resin or ice before it decays",
        "The organisms in between never existed",
        "We haven't found all of the fossils in between yet",
        "The species we have not found may have decayed or got eaten before they had chance to become fossils" 
      ],
      "correctAnswer": "2"
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
         "Genes tell the cells of an organism how to make the organism’s tissues, characteristics and control what happens inside the organism.",
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
      "question": " Which of the following CANNOT explained by evolution by natural selection?",
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
      "question": "Natural selection can be summarised into which six stages?",
      "questionType": "text",
      "answers": [
      "Variation > excess offspring > struggle > survive > reproduce > repeat",
      "Variation > excess offspring > strangle > survive > reproduce > repeat",
      "Variation > excess offspring > snuggle > survive > reproduce > repeat",
      "Variation > excess offspring > shuffle > survive > reproduce > repeat" 
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Darwin wrote a famous book called…?",
      "questionType": "text",
      "answers": [
        "The Origin of Species",
        "The Finches of Galapagos",
        "Survival of the Fittest",
        "50 Shades of Selection"
              ],
      "correctAnswer": "1"
    },
    {
      "question": " Which other scientist had the same theory as Darwin’s?",
      "questionType": "text",
      "answers": [
        "Huxley",
        "The Bishop of Oxford",
        "Wallace",
        "Albert Einstein"
              ],
      "correctAnswer": "3"
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
        }
      ]
    },
          "discussion": ""
    },
        
    ],
    
    net: (function () {
        console.log(TopicAPI2.topics);
        return TopicAPI2.topics[0].opinion.board[1].text
        
    }),
    
    jet: (function (topicFromPage) {
    //console.log(topicFromPage);
    var t = [];
        t = TopicAPI2.topics; //return array
        console.log(t);
        var res = t.filter(top => top.topic === topicFromPage);
        console.log(res.topic);
        return res[0];
    }),
    
    vid: (function (topicFromPage) {
    console.log(topicFromPage);
    var t = [];
    t = TopicAPI2.topics; //return array
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
export default TopicAPI2;