/*
 * This file is part of cssCV
 * cssCV is released under the MIT licence
 *
 * Author: Marco pascucci, 2019
 * mpascucci.github.io
*/

data = {
    "personal": {
        // "photo" : "https://d6d2h4gfvy8t8.cloudfront.net/8481511-orig.jpg",
        "photo": "http://makeitaflair.altervista.org/photos/DSCF8365_crop.jpg",
        "name": "Marco Pascucci",
        "email": "mpascucci@aup.edu",
        "emailIcon": "mpascucci @ aup.edu",
        // "telephone" : "0000000",
        "addressLine1": "Marco Pascucci",
        "addressLine2": "75020 - Paris (France)",
        "github": "http://mpascucci.github.io/",
        //"linkedinIcon": "https://fr.linkedin.com/in/marco-pascucci-302aaa174",
        "scholarIcon": "https://scholar.google.fr/citations?user=JHuiyroAAAAJ",
        "researchGate": "https://www.researchgate.net/",
        "motto": "CS Professor, Computer Scientist and enthusiastic software engineer,<br>always ready for creative and interdisciplinary projects."
    },
    "educationList":
        [{
            "title": "",
            "where": "About me",
            "date": "",
            "comment": "I am a teacher, scientist and a developer. My education, research experience and interests are oriented towards computer science and applications to image processing.<br> I proudly use, share and diffuse open-source software.",
            "display": true
        },
        {
            "title": "PostDoc",
            "where": "CEA - Neurospin",
            "date": "Nov 2020 - July 2022",
            "comment": "FolDico team<br>" +
                "The FolDico team tries to decyper the mistery of the folding structure in the human brain and to link it to functional aspects.",
            "display": true
        },
        {
            "title": "PostDoc",
            "where": "LaMME",
            "date": "Dec 2017 - Sept 2020",
            "comment": "Laboratoire de Mathématiques et Modélisation d'Évry LaMME (UMR 8071).<br>" +
                "in collaboration with MSF (see Projects).<br>" +
                "I designed a dedicated image processing library (C++) with python wrappings, embedded in a mobile app.." +
                "I designed an ExpertSystem engine and a Domain Specific Language (DSL) for microbiologists plus a web interface for internal test purposes.",
            "display": true
        },
        {
            "title": "PhD in physics",
            "where": "Neurophotonics lab",
            "date": "Oct 2017",
            "comment": "at Université de Paris. Thesis in super-resolution optical microscopy (adv. M.Guillon, V.Emiliani).",
            "skills": "Image processing, super-resolution microscopy",
            "display": true
        },
        {
            "title": "MS in computer science",
            "where": "CNAM",
            "date": "Dec 2016",
            "comment": "Secure Embedded Systems (at Conservatoire National des Arts et Metiers, Paris). I did a 6 month internship developing a driver for a 2-axis plotter and a rudimental static type-checker for python in OCaml.",
            "display": true
        },
        {
            "title": "Research intern",
            "where": "MSC",
            "date": "May - June 2014",
            "comment": "Laboratoire Matière et Systèmes Complexes, Université Paris Diderot",
            "display": true
        },
        {
            "title": "MS bio-physics",
            "where": "University of Rome",
            "date": "May 2013",
            "comment": "Tor Vergata University - Rome, IT ",
            "display": true
        },
        {
            "title": "Summer school",
            "where": "DESY",
            "date": "June – October 2011",
            "comment": "Deutsches Elektronen-Synchrotron - Center for Free-Electron Laser Science (CFEL). Development of a calibration software (and GUI) for x-ray detectors",
            "using": "Using: C, Cairo, Gtk",
            "display": true
        },
        {
            "title": "Exchange student",
            "where": "ERASMUS",
            "date": "Sep 2009 – Dec 2010",
            "comment": "at Ruprecht-Karls-Universitaet, Heidelberg (DE)",
            "display": true
        },
        ],
    "experienceList":
        [{
            "title": "Assistant professor of Computer Science",
            "where": "AUP Paris",
            "date": "Sept 2022 - now",
            "comment": "teaching Computer programming, database applications and web authoring",
            "display": true
        },
        {
            "title": "Research & Dev",
            "where": "SpirOps AI",
            "date": "April - july 2023",
            "comment": "Development of a POC for a real time video stream segmentation algorithm for processing 3D pointclouds data acquired by depth cameras. The software analyzes sceenes of passengers in a train and identifies abandoned luggage items.",
            "display": true
        },
        {
            "title": "FolDico",
            "where": "CEA - Neurospin",
            "date": "Nov 2020 - now",
            "comment": "Building a dictionary of the folding patterns in the human brain.",
            "dev skills": "Skills: 3D image processing, Point-Clouds, MRI Images, Python/C, ML",
            "display": true
        },
        {
            "title": "Microscopy and neural circuits",
            "where": "ICM - Paris",
            "date": "Nov 2021 - now",
            "comment": "Analisys of 3D functional volumetric images of the zebrafish brain over minutes of activity.",
            "dev skills": "Skills: 3D video processing, Cluster computing, Microscopy, Python/Bash",
            "display": true
        }],
    "pastExperienceList":
        [{
            "title": "An AI-based mobile app to fight antibiotic resistance",
            "where": "MSF Foundation",
            "date": "Dec 2017 - Sept 2020",
            "comment": "R&D - Lead dev. Creating an <b>open-source</b> <a href='https://fondation.msf.fr/projets/antibiogo'>mobile-health application</a> for <b>Médecins Sans Frontières Foundation</b> (MSF) for fighting antibiotic resistance. " +
                "The app is an offline <b>AI</b> that assists lab technicians in reading a biomedical test from an image taken with a smartphone." +
                "<br>" +
                "The project was awarded the <a href='https://www.blog.google/outreach-initiatives/google-org/ai-impact-challenge-grantees/'>Google AI Impact Challenge 2019</a>, among more than 2600 applications worldwide. It was granted 1.3M$ " +
                "and further boosted by the close collaboration with Google fellows, working together on the different aspects of the app development." +
                "<br>" +
                "Hired a software developper to comply with project deadlines.",
            "dev skills": "Skills: Image processing, Python, C++, openCV,  Cython, js, Git",
            "display": true
        }],
    "Publications":
        [
            {
                "date": "2023",
                "journal": "Nature Neuroscience",
                "authors": "M Carbo-Tano, M Lapoix, X Jia, O Thouvenin, M Pascucci, ..., Claire Wyart",
                "paperTitle": "The mesencephalic locomotor region recruits V2a reticulospinal neurons to drive forward locomotion in larval zebrafish.",
                "display": true,
                "url": "https://doi.org/10.1038/s41593-023-01418-0"
            },
            {
                "date": "2023",
                "journal": "Cerebral Cortex",
                "authors": "H De Vareilles, D Rivière, M Pascucci, ZY Sun, C Fischer, F Leroy, ...",
                "paperTitle": "Exploring the emergence of morphological asymmetries around the brain’s Sylvian fissure: A longitudinal study of shape variability in preterm infants.",
                "display": true,
                "url": "https://link.springer.com/chapter/10.1007/978-3-031-16431-6_8"
            },
            {
                "date": "2022",
                "journal": "International conference on medical image computing and computer-assisted intervention",
                "authors": "J Chavas, L Guillon, M Pascucci, B Dufumier, D Rivière, JF Mangin",
                "paperTitle": "Unsupervised representation learning of cingulate cortical folding patterns.",
                "display": true,
                "url": "https://link.springer.com/chapter/10.1007/978-3-031-16431-6_8"
            },
            {
                "date": "2022",
                "journal": "bioRxiv",
                "authors": "H de Vareilles, D Rivière, M Pascucci, Z Sun, C Fischer, F Leroy, ...",
                "paperTitle": "Exploring the emergence of morphological asymmetries around the brain’s Sylvian fissure: a longitudinal study of shape variability in preterm infants.",
                "display": true,
                "url": "https://doi.org/10.1101/2022.07.15.500199"
            },
            {
                "date": "2022",
                "journal": "bioRxiv",
                "authors": "H de Vareilles, D Rivière, M Pascucci, Z Sun, C Fischer, F Leroy, ...",
                "paperTitle": "Exploring the emergence of morphological asymmetries around the brain’s Sylvian fissure: a longitudinal study of shape variability in preterm infants.",
                "display": true,
                "url": "https://doi.org/10.1038/s41467-021-21187-3"
            },
            {
                "date": "2021",
                "journal": "Nature Comm.",
                "authors": "M. Pascucci, et Al.",
                "paperTitle": "AI-based mobile application to fight antibiotic resistance.",
                "display": true,
                "url": "https://doi.org/10.1038/s41467-021-21187-3"
            },
            {
                "date": "2020",
                "journal": "submitted",
                "authors": "V. Runge, N. Deschamps de Boishebert, M. Pascucci, G. Rigaill",
                "paperTitle": "Efficient Change-in-Slope Optimal Partitioning Algorithm in a Finite-Size Parameter Space",
                "display": true,
                "url": "https://arxiv.org/abs/2012.11573"
            },
            {
                "date": "2019",
                "journal": "Nature Comm.",
                "authors": "M. Pascucci, S. Ganesan, A. Tripathi, O. Katz, V. Emiliani, M. Guillon",
                "paperTitle": "Compressive three-dimensional super-resolution microscopy with speckle-saturated fluorescence excitation",
                "display": true,
                "url": "https://www.nature.com/articles/s41467-019-09297-5"
            },
            {
                "date": "2016",
                "journal": "Phys. Rev. Lett.",
                "authors": "M. Pascucci, G. Tessier, V. Emiliani, M. Guillon",
                "paperTitle": "Superresolution imaging of optical vortices in a speckle pattern",
                "display": true,
                "url": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.093904"
            },
            {
                "date": "2014",
                "authors": "F. Stellato, V. Minicozzi, G. L. Millhauser, M. Pascucci, O. Proux, G. C. Rossi, A. Spevacek, S. Morante",
                "journal": "Eur. Biophys. J.",
                "paperTitle": "Copper–zinc cross-modulation in prion protein binding",
                "display": true,
                "url": "https://link.springer.com/article/10.1007/s00249-014-0993-6"
            },
        ],
    "Miscellaneous":
        [
            {
                "where": "Teaching",
                "comment": "Statistics / Computer Programming / Data science (Bachelor and Master) @ Université Paris Saclay and American University of Paris",
                "display": true
            },
            {
                "where": "Attitude",
                "comment": "Collaborative, curious, seeking beauty in what I do. Creativity and learning are my first motivations.",
                "display": true
            },
            {
                "where": "Languages",
                "comment": "Italian (native) - French (proficient) - English (fluent) - German (good) - Spanish/portuguese (notions) - trying to learn arabic now",
                "display": true
            },
            {
                "where": "Interests",
                "comment": "playing music (piano/trombone) since childhood, drawing, DIY, cycling.",
                "display": true
            },
            {
                "where": "other exp",
                "comment": "Organization of an international music festival in Rome since 2010.",
                "display": true
            }
        ]
};
