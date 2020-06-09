/*
 * This file is part of cssCV
 * cssCV is released under the MIT licence
 *
 * Author: Marco pascucci, 2019
 * mpascucci.github.io
*/

data = {
    "personal" : {
        // "photo" : "https://d6d2h4gfvy8t8.cloudfront.net/8481511-orig.jpg",
        "photo" : "http://makeitaflair.altervista.org/photos/DSCF8365_crop.jpg",
        "name": "Marco Pascucci",
        "email": "marco.pascucci@univ-evry.fr",
        "emailIcon": "marco.pascucci@univ-evry.fr",
        // "telephone" : "0000000",
        "addressLine1": "Marco Pascucci",
        "addressLine2": "75020 - Paris (France)",
        "github" : "http://mpascucci.github.io/",
        "linkedinIcon" : "https://fr.linkedin.com/in/marco-pascucci-302aaa174",
        "scholarIcon" : "https://scholar.google.fr/citations?user=JHuiyroAAAAJ",
        "researchGate" : "https://www.researchgate.net/",
        "motto": "Dynamic and enthusiastic postdoc researcher, always ready for a good challenge."
    },
    "educationList":
        [   {
                "title": "About me",
                "where" : "About me",
                "date" : "",
                "comment" : "My education, research experience and interests are oriented towards signal processing and computer science. I taught classes of scientific programming (R/Python), probability and statistics. I have supervised two Master students.<br>",
                "display" : true
            },
            {
                "title": "PostDoc",
                "where" : "LaMME",
                "date" : "dec 2017 - now",
                "comment" : "Laboratoire de Mathématiques et Modélisation d'Évry LaMME (UMR 8071).<br>"+
                  "in collaboration with MSF (see Projects).<br>"+
                  "I designed original image processing algorithms and implemented a C++ library, which is embedded in a mobile app. I wrote Python wrappings for the same library."+
                  " I designed an ExpertSystem engine and a Domain Specific Language (DSL) for microbiologists plus a web interface for internal test purposes.",
                "display" : true
            },
            {
                "title": "PhD in physics",
                "where": "Neurophotonics lab",
                "date" : "oct 2017",
                "comment" : "at Université de Paris. Thesis in super-resolution optical microscopy (adv. M.Guillon, V.Emiliani).",
                "skills" : "Image processing, super-resolution microscopy",
                "display" : true
            },
            {
                "title": "MS in computer science",
                "where" : "CNAM",
                "date" : "dec 2016",
                "comment" : "Secure Embedded Systems (at Conservatoire National des Arts et Metiers, Paris). I did a 6 month internship developing a driver for a 2-axis plotter and a rudimental static type-checker for python in OCaml.",
                "display" : true
            },
            {
                "title": "Research intern",
                "where" : "MSC",
                "date" : "may - june 2014",
                "comment" : "Laboratoire Matière et Systèmes Complexes, Université Paris Diderot",
                "display" : true
            },
            {
                "title": "MS bio-physics",
                "where" : "University of Rome",
                "date" : "may 2013",
                "comment" : "Tor Vergata University - Rome, IT ",
                "display" : true
            },
            {
                "title" : "Summer school",
                "where": "DESY",
                "date" : "June – October 2011",
                "comment" : "Deutsches Elektronen-Synchrotron - Center for Free-Electron Laser Science (CFEL). Development of a calibration software (and GUI) for x-ray detectors",
                "using" : "Using: C, Cairo, Gtk",
                "display" : true
            },
            {
                "title" : "Exchange student",
                "where": "ERASMUS",
                "date" : "Sep 2009 – Dec 2010",
                "comment" : "at Ruprecht-Karls-Universitaet, Heidelberg (DE)",
                "display" : true
            },
        ],
    "experienceList":
        [
            {
                "title": "R&D (lead developer)",
                "where" : "MSF Foundation",
                "date" : "dec 2017 - now",
                "comment" : "Creating an <b>open-source</b> <a href='https://fondation.msf.fr/projets/astapp'>mobile-health application</a> for <b>Médecins Sans Frontières Foundation</b> (MSF) for fighting antibiotic resistance. " +
                  "The app is an offline <b>AI</b> that assists lab technicians in reading a biomedical test from an image taken with a smartphone." +
                  "<br>" +
                  "The project was awarded the <a href='https://www.blog.google/outreach-initiatives/google-org/ai-impact-challenge-grantees/'>Google AI Impact Challenge 2019</a>, among more than 2600 applications worldwide. It was granted 1.3M$ "+
                  "and further boosted by the close collaboration with Google fellows, working together on the different aspects of the app development."+
                  "<br>"+
                  "Hired a software developper to comply with project deadlines.",
                "dev skills": "Skills: Image processing, Python, C++, openCV,  Cython, js, Git",
                "display" : true
            }
        ],
    "Publications":
        [
            {
            "date" : "2020",
            "journal" : "pending submission",
            "authors" : "M. Pascucci, et Al.",
            "paperTitle" : "AntibioGo: the first AI-based mobile application for Antibiotic Resistance Testing",
            "display" : true,
            "url" : ""
            },
            {
            "date" : "2020",
            "journal" : "pending submission",
            "authors" : "V. Runge, N. Deschamps de Boishebert, M. Pascucci, G. Rigaill",
            "paperTitle" : "Efficient Change-in-Slope Optimal Partitioning Algorithm in a Finite-Size Parameter Space",
            "display" : true,
            "url" : ""
            },
            {
            "date" : "2019",
            "journal" : "Nat Com",
            "authors" : "M. Pascucci, S. Ganesan, A. Tripathi, O. Katz, V. Emiliani, M. Guillon",
            "paperTitle" : "Compressive three-dimensional super-resolution microscopy with speckle-saturated fluorescence excitation",
            "display" : true,
            "url" : "https://www.nature.com/articles/s41467-019-09297-5"
            },
            {
            "date" : "2016",
            "journal" : "Phys Rev Lett",
            "authors" : "M. Pascucci, G. Tessier, V. Emiliani, M. Guillon",
            "paperTitle" : "Superresolution imaging of optical vortices in a speckle pattern",
            "display" : true,
            "url" : "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.116.093904"
            },
            {
            "date" : "2014",
            "authors" : "F. Stellato, V. Minicozzi, G. L. Millhauser, M. Pascucci, O. Proux, G. C. Rossi, A. Spevacek, S. Morante",
            "journal" : "Eur Biophys J",
            "paperTitle" : "Copper–zinc cross-modulation in prion protein binding",
            "display" : true,
            "url" : "https://link.springer.com/article/10.1007/s00249-014-0993-6"
            },
        ],
    "Miscellaneous":
        [
            {
                "where" : "Attitude",
                "comment": "Collaborative, curious, hard working, seeking beauty in what I do. Understanding and learning are my first motivations.",
                "display" : true
            },
            {
                "where" : "Languages",
                "comment": "Italian (native) - French (proficient) - English (fluent) - German (good) - Spanish/portuguese (notions)",
                "display" : true
            },
            {
                "where" : "Interests",
                "comment": "playing music (piano/trombone) since childhood, drawing, DIY, cycling.",
                "display" : true
            },
            {
                "where" : "other exp",
                "comment": "Organization of 8 editions of an international music festival.",
                "display" : true
            }
        ]
};
