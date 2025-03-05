const programData = {
    "Bsc hones": { fullForm: "B.Sc. (Hons.) Agriculture is a 4-year degree focused on modern farming, agribusiness, and research.", duration: "4  years", career: "After B.Sc. (Hons.) Agriculture, you can pursue government jobs, private agribusiness, research, or entrepreneurship. " },
    "BUMS": { fullForm: "Bachelor of Unani Medicine and Surgery", duration: "5.5 years", career: "Unani Practitioner, Medical Officer, Pharmacist" },
    "BHMS": { fullForm: "Bachelor of Homeopathic Medicine and Surgery", duration: "5.5 years", career: "Homeopathic Doctor, Medical Consultant, Lecturer" }
};

const subjectsData = {
    "Bsc hones": {
        "1": {
            // --------------------------------horticulture subject---------------------------------------------------------------------
            "Horticulture": [
                { name: "Chapter 1: Horticulture introduction", file: "ch.1horticulture introduction.pdf", playlist: "https://youtu.be/M3BmUyfJBa4?si=5LPYgSCKNxGVnShY" },
                { name: "Chapter 2: Horticultural and botanical classification ", file: "ch.2 Horticultural and botanical classification.pdf ", playlist: "https://youtube.com/playlist?list=PLSs9AtlMObtSi2WQjh14QsOnwdLjcxxWx&si=ALav4Hw7gX9LS_eT" },
                { name: "Chapter 3: Climate and soil for horticultural crops ", file: "ch.3 Climate and soil for horticultural crops.pdf", playlist: "https://www.youtube.com/live/j75ssiz0vSM?si=xQEUfNZXW8oXnsCD" },
                { name: "Chapter 4: Nursery raising and its importance ", file: "ch.4 Nursery raising and its importance.pdf", playlist: "https://youtu.be/oUxSBloXbso?si=uhFw83Rw3MR9irQv" },
                { name: "Chapter 5: Plant propagation methods  ", file: "ch.5 Plant propagation methods.pdf", playlist: "https://youtu.be/cupvfkH9eOI?si=P3esOz3rNEEXLPqv" },
                { name: "Chapter 6:Propagating structures", file: "ch.6 Propagating structures.pdf", playlist: "https://youtu.be/6v-ZMVf_Llg?si=17i_tZGndW25rDYh" },
                { name: "Chapter 7:Seed dormancy and seed germination ", file: "ch.7 Seed dormancy and seed germination.pdf ", playlist: "" },
                { name: "Chapter 8:Principles of orchard establishment   ", file: "ch.8 Principles of orchard establishment.pdf", playlist: "https://youtu.be/HKYv-IwDAtM?si=zKzbGu-1uAEplY5X" },
                { name: "Chapter 9: Principles and methods of training and pruning   ", file: "ch.9 Principles and methods of training and pruning.pdf", playlist: "https://youtu.be/E_lZmGyXEn8?si=1As7GgffSb2_ttnj" },
                { name: "Chapter 10:Juvenility and flower bud differentiation; unfruitfulness; pollination, pollinizers and pollinators; fertilization and parthenocarpy", file: "ch.10 Juvenility and flower bud differentiation; unfruitfulness; pollination, pollinizers and pollinators; fertilization and parthenocarpy.pdf", playlist: "https://youtu.be/KNWZoLtd8Rw?si=7mvXWcqyHD_ynarg" },
                { name: "Chapter 11: Nursery raising and its importance", file: "ch.11 Nursery raising and its importance.pdf", playlist: "https://youtu.be/oUxSBloXbso?si=uhFw83Rw3MR9irQv" },
                { name: "Chapter 12: Importance of plant bio-regulators in horticulture   ", file: "ch.12 Importance of plant bio-regulators in horticulture.pdf", playlist: "https://www.youtube.com/live/Qm8AUXzWN3E?si=ZEmnzIHqwTJ3L1cl" },
                { name: "Chapter 13: Irrigation – methods, fertilizer application in horticultural crops  ", file: "ch.13 Irrigation – methods, fertilizer application in horticultural crops.pdf", playlist: "https://youtu.be/QaqPj2hu8WQ?si=asu0MeEDv0cMwvtp" },
            ],
            // -------------------------------plant biochmestery and biotechnology-------------------------------------------------------
            "Plant Biochemistry and Biotechnology ": [
                { name: "Chapter 1: Importance of biochemistry: Properties of water, pH and buffer  ", file: "Importance of biochemistry.pdf", playlist: "https://youtu.be/AY5VXIt_FlY?si=MtO7d1rsVfgyZ_aP" },
                { name: "Chapter 2: Carbohydrate: Importance and classification, reducing and non-reducing sugars  ", file: "Carbohydrate.pdf ", playlist: "https://youtu.be/WP9f0yy7URQ?si=SXQItYt0UN1SKEvz" },
                { name: "Chapter 3: Structures and properties of monosaccharides, disaccharides and polysaccharides  ", file: "Structures and properties of monosaccharides, disaccharides and polysaccharides.pdf", playlist: "https://youtu.be/TVlh9OH4H3Y?si=BKJ9PGBq_TU8Vnz8" },
                { name: "Chapter 4: Lipid: Importance and classification  ", file: "  Lipid.pdf", playlist: "https://youtu.be/dKT_9AjO9BE?si=HCYv1eGJIxKpBMhH" },
                { name: "Chapter 5: Structures and properties of fatty acids including membrane lipids  ", file: " Structures and properties of fatty acids including membrane lipids.pdf", playlist: "https://youtu.be/w_a6AIWd8GU?si=Maj9TFsDgX2ZL_Ut" },
                { name: "Chapter 6: Proteins: Importance and classification, structures ", file: "Proteins.pdf", playlist: "https://youtu.be/WToqssQUoVg?si=sZMlL28QT7ymsg-2" },
                { name: "Chapter 7: Titration and zwitter ion nature of amino acids", file: " Titration and zwitter ion nature of amino acids.pdf ", playlist: "https://youtu.be/URWMK57rXh8?si=eETGF1dSSqYRmjbP" },
                { name: "Chapter 8: Structural organization of proteins  ", file: " Structural organization of proteins.pdf", playlist: "https://youtu.be/C7otoSo9CJk?si=DX3mETVoxoIpT3nL" },
                { name: "Chapter 9: Enzymes: General properties, classification ", file: " Enzymes.pdf", playlist: "https://youtu.be/GtAdAOG7DhQ?si=66e-Ij1WDNJSAWWZ" },
                { name: "Chapter 10: Mechanism of action, allosteric enzymes  ", file: "Mechanism of action, allosteric enzymes.pdf", playlist: "https://youtu.be/n0xw-KkE24A?si=oIuuhxn0db3vSf4v" },
                { name: "Chapter 11: Nucleic acids: Importance and classification, structure of nucleotides  ", file: " Nucleic acids.pdf", playlist: "https://youtu.be/4WcjriEmlt0?si=MMRRQiiTPljBZXqF" },
                { name: "Chapter 12: Secondary and tertiary structures of nucleic acids ", file: "Secondary and tertiary structures of nucleic acids.pdf", playlist: "https://youtu.be/bplWymjGNrU?si=sjU7lzvdqIZYrONT" },
                { name: "Chapter 13: Metabolism of carbohydrates including glycolysis   ", file: "Metabolism of carbohydrates including glycolysis.pdf", playlist: "https://youtu.be/EDasivyODMc?si=ZqHKQIbvhrnMax8R" },
                { name: "Chapter 14: TCA cycle and electron transport chain    ", file: "TCA cycle and electron transport chain.pdf", playlist: "https://youtu.be/KSrKYp2Wj4w?si=3X-A4MlP_hFiMsX8" },
                { name: "Chapter 15: Metabolism of lipids: Beta oxidation and biosynthesis    ", file: "  Metabolism of lipids.pdf", playlist: "https://youtu.be/bk3IGg2ivAQ?si=uDx_cEmXTOHSH_La" },
                { name: "Chapter 16: Plant Biotechnology: Concepts, scope and applications  ", file: "Plant Biotechnology.pdf", playlist: "https://youtu.be/kFTQVFrXc4I?si=UYXxCY21EZJP7BDy" },
                { name: "Chapter 17: Scope and applications of organ cultures, embryo, cell suspension, callus, anther, pollen and  ovule culture   ", file: "Scope and applications of organ cultures, embryo, cell suspension, callus, anther, pollen and  ovule culture.pdf", playlist: "https://youtu.be/yJJgmfZTGAA?si=sanO38vXofNTJGbo" },
                { name: "Chapter 18: Micro-propagation methods: Organogenesis, embryogenesis, synthetic seeds and their significance  ", file: "Micro-propagation methods.pdf", playlist: "https://youtu.be/bfEaG22d1b8?si=s6MerM7UCLU5puqP" },
                { name: "Chapter 19: Embryo rescue and its significance   ", file: "Embryo rescue and its significance.pdf", playlist: "https://youtu.be/nptapx8faUU?si=LT0dNXdsL7U3KTTO" },
                { name: "Chapter 20: Somatic hybridization and cybrids   ", file: " Somatic hybridization and cybrids.pdf", playlist: "https://youtu.be/eYoqr43Ka5Q?si=yan-2vw_kK0piuTg" },
                { name: "Chapter 21: Somaclonal variation and its use in crop improvement and cryo-preservation   ", file: "Somaclonal variation and its use in crop improvement and cryo-preservation.pdf", playlist: "https://youtu.be/EQjr2F6YslA?si=2owkWDm3ddLtqm37" },
                { name: "Chapter 22: Introduction to recombinant DNA methods: Physical (Gene gun method), chemical (PEG mediated) and Agrobacterium mediated gene transfer methods  ", file: "Introduction to recombinant DNA methods.pdf", playlist: "https://youtu.be/i9nfJ5NNvLo?si=P5czu-OSuAvFnhRM" },
                { name: "Chapter 23: Transgenics: PCR techniques and its applications   ", file: "Transgenics.pdf", playlist: "https://youtu.be/jIpsma2gwVE?si=JgB0NmOdvXgIAXwA" },
                { name: "Chapter 24: Molecular Markers in crop improvement and biotechnology regulations   ", file: "Molecular Markers in crop improvement and biotechnology regulations.pdf", playlist: "https://www.youtube.com/live/n2BVNQfkjoA?si=WYws-rxn0K8qsu7z" },

            ],
            // -------------------------------soil science         -------------------------------------------------------
            " Soil Science ": [
                { name: "Chapter 1: Soil as a natural body, pedological and edaphological concepts of soil  ", file: "Soil as a natural body, pedological and edaphological concepts of soil.pdf", playlist: "https://www.youtube.com/live/Y9b3aku10bg?si=8UY8rvlG-bQiSSWs" },
                { name: "Chapter 2: Origin of earth crust, definition and composition   ", file: " Origin of earth crust, definition and composition.pdf ", playlist: "https://youtu.be/a43v-x-Yxq0?si=gdmuuU8R0JD-G19M" },
                { name: "Chapter 3: Soil genesis: soil forming rocks and their classification  ", file: "Soil genesis.pdf", playlist: "https://www.youtube.com/live/qtQGMODJ57U?si=2_c1EvL72JnZLJ2p" },
                { name: "Chapter 4: Minerals and their classification ", file: " Minerals and their classification.pdf", playlist: "https://youtu.be/f-X9V3kHAEg?si=F0kmsj44YV_vU15Y" },
                { name: "Chapter 5: Weathering: Physical, chemical and biological weathering of rocks ", file: " Weathering.pdf", playlist: "https://youtu.be/boYYUHyWb84?si=j0UXZBb-P1PYBMYu" },
                { name: "Chapter 6: Factors of soil formation  ", file: "Factors of soil formation.pdf", playlist: "https://youtu.be/nvvMgZYWM4c?si=9fjMeHAdW4ukrOHi" },
                { name: "Chapter 7: Pedogenic processes/soil forming processes", file: "Pedogenic processessoil forming processes.pdf ", playlist: "https://youtu.be/vd3MGJqxCSg?si=_3Clu57zXXXHswXN" },
                { name: "Chapter 8: Soil profile, components of soil ", file: " Soil profile, components of soil.pdf", playlist: "https://youtu.be/5zEuxscNmt4?si=FnZhTv83RYHyrI-s" },
                { name: "Chapter 9: Soil physical properties: Soil texture, classifications of soil separates, particle size analysis, stoke’s law ", file: "Soil physical properties.pdf", playlist: "https://youtu.be/H07vPBElZbU?si=me-ZOVtVm2gEeyCD" },
                { name: "Chapter 10: Soil structure and classification  ", file: "Soil structure and classification.pdf", playlist: "https://youtu.be/7Dkc3xPE5Ig?si=i9fULT77jbeS9CpL" },
                { name: "Chapter 11: Soil consistency: Dry, moist and wet soil consistence, agricultural significance, factors affecting it, Atterberg’s limit  ", file: "Soil consistency.pdf", playlist: "https://youtu.be/EWvt1GlH9rY?si=_jmk897IGtHAgNTQ" },
                { name: "Chapter 12: Bulk density, particle density and porosity, factors affecting them, agricultural significance and manipulation ", file: "Bulk density, particle density and porosity, factors affecting them, agricultural significance and manipulation.pdf", playlist: "https://youtu.be/r8P1Jqe3UoE?si=P411AsdBHK8xqApE" },
                { name: "Chapter 13: Soil colour and significance  ", file: "Soil colour and significance.pdf", playlist: "https://youtu.be/qQyC78mk0pQ?si=h5G8yASLXJqyjCOr" },
                { name: "Chapter 14: Soil taxonomy classification  ", file: "Soil taxonomy classification.pdf", playlist: "https://youtu.be/IjfEU82PHeI?si=89N4kw2obncva-C6" },
                { name: "Chapter 15: Soils of India  ", file: " Soils of India.pdf", playlist: "https://youtu.be/l63TjA3gAIU?si=WNayQR1pVKomrv-y" },
                { name: "Chapter 16: Soil water classification, soil water retention ", file: "Soil water classification, soil water retention.pdf", playlist: "https://youtu.be/6Xs9WVMXoVk?si=kImHluRn9UGc--33" },
                { name: "Chapter 17: Movement of soil water-infiltration, percolation, permeability and drainage and factors affecting it  ", file: "Movement of soil water-infiltration, percolation, permeability and drainage and factors affecting it.pdf", playlist: "https://youtu.be/Kd5ck-6YefA?si=WBOBBkJAsoJolOyQ0" },
                { name: "Chapter 18: Methods of soil moisture determination :- Gravimetric method, electrical resistance and neutron scattering method  ", file: "Methods of soil moisture determination.pdf", playlist: "https://youtu.be/8wQ6Fe7DVjg?si=QPuSJs_HPgcQwJtT" },
                { name: "Chapter 19: Soil air, composition, gaseous exchange, problem and plant growth ", file: "Soil air, composition, gaseous exchange, problem and plant growth.pdf", playlist: "https://youtu.be/mIqA_OkD_IY?si=bc6ooCwqj0WIAzGO" },
                { name: "Chapter 20: Soil temperature: Source, amount and flow of heat in soil ", file: " Soil temperature.pdf", playlist: "https://youtu.be/jMSQlCMwZJs?si=W08-BqJRXjC_hUPR" },
                { name: "Chapter 21: Soil reaction-pH, effect of pH on nutrient availability  ", file: "Soil reaction-pH, effect of pH on nutrient availability.pdf", playlist: "https://youtu.be/InpevuqVlNM?si=Ji3w8z4MvxVT-S_s" },
                { name: "Chapter 22: Soil acidity and alkalinity, buffering ", file: "Soil acidity and alkalinity, buffering.pdf", playlist: "https://youtu.be/VKPhFKYDw44?si=IbOMfdJFviyibSZY" },
                { name: "Chapter 23: Soil colloids: types, properties and their significance ", file: "Soil colloids.pdf", playlist: "https://youtube.com/playlist?list=PLg6dY4ATfXEsC-sif3-xnicEaZYoZzVmG&si=9T9f438BiL6YcTrr" },
                { name: "Chapter 24: 1:1, 2:1and 2:1:1 types of layer silicates, their structure and characteristics ", file: "types of layer silicates, their structure and characteristics.pdf", playlist: "https://youtu.be/eMitxmguJEU?si=u2xFp7teD7iz3iOI" },
                { name: "Chapter 25: Sources of charges on soil colloids ", file: " Sources of charges on soil colloids.pdf", playlist: "https://youtu.be/LKtyszazuBQ?si=0QPaJoZbFu5EsFC5" },
                { name: "Chapter 26: Cation and anion exchange phenomenon and factors influencing ion exchange and significance, base saturation ", file: "Cation and anion exchange phenomenon and factors influencing ion exchange and significance, base saturation.pdf", playlist: "https://youtu.be/H870CogLxEc?si=gySOxYGXhbMD43pY" },
                { name: "Chapter 27: Soil organisms: macro and micro organisms, their beneficial and harmful effects ", file: "Soil organisms.pdf", playlist: "https://youtu.be/fhhzKG3Op_c?si=XiNGs8Vj9ILlUmTA" },
                { name: "Chapter 28: Soil pollution behaviour of pesticides and inorganic contaminants", file: "Soil pollution behaviour of pesticides and inorganic contaminants.pdf", playlist: "https://youtu.be/0Y2L-N3kB5M?si=2d_F1vcnA8XYFcZ1" },
                { name: "Chapter 29: Prevention and mitigation of soil pollution ", file: " Prevention and mitigation of soil pollution.pdf", playlist: "https://youtu.be/6g8J5SAFCrE?si=TtmY8cm08omit_2y" },
            ],
            
            // --------------------------------------------forestry ---------------------------------------------------------
            "Forestry": [

                { name: "Chapter 1: Introduction-definitions of basic terms related to forestry, objectives of Silviculture ", file: "Introduction-definitions of basic terms related to forestry, objectives of Silviculture.pdf", playlist: "https://youtu.be/sxz_9eu6GOg?si=rcCmebu14yL98Kbx" },
                { name: "Chapter 2: Forest classification, salient features of Indian Forest Policies ", file: "Forest classification, salient features of Indian Forest Policies.pdf ", playlist: "https://youtu.be/3x4Ik8c-bqc?si=S1csoH8A6SZRWD9X" },
                { name: "Chapter 3: Forest regeneration, natural regeneration - natural regeneration from seed a vegetative parts, coppicing, pollarding, root suckers  ", file: "Forest regeneration.pdf", playlist: "https://youtu.be/d5V1sW8Ezqc?si=0q4kCUEsC6wq3_iz" },
                { name: "Chapter 4: Artificial regeneration-objectives, choice between natural and artificial regeneration, essential preliminary considerations ", file: "Artificial regeneration.pdf", playlist: "https://youtu.be/6OKs63bA4MA?si=aYqJttMXom34_2e_" },
                { name: "Chapter 5: Crown classification   ", file: " Crown classification.pdf", playlist: "https://youtu.be/_kif8beZ5bo?si=n2vsSYfWQMkCSpgQ" },
                { name: "Chapter 6: Tending operations-weeding, cleaning, thinning-mechanical, ordinary, crown and advance thinning ", file: "Tending operations-weeding.pdf", playlist: "https://youtu.be/yuyEGGFv0XI?si=0sd3QDXW6gOCvlZB" },
                { name: "Chapter 7: Forest mensuration-objectives, diameter measurement, instruments used in diameter measurement ", file: "Forest mensuration-objectives.pdf ", playlist: "https://youtu.be/dJvwxgbKW-8?si=Jz-zai6DiQ1x4lOm" },
                { name: "Chapter 8: Non instrumental methods of height measurement - shadow and single pole method  ", file: "Non instrumental methods.pdf", playlist: "https://www.youtube.com/live/GkgLEHtkuLk?si=JNzPmJDFkqG0UWZN" },
                { name: "Chapter 9: Instrumental methods of height measurement", file: "Instrumental methods of height measurement.pdf", playlist: "https://youtu.be/h6Q3EtkEAds?si=Es1GvjK0Jw3pFa-h" },
                { name: "Chapter 10: Agroforestry-definitions, importance, criteria of selection of trees in agroforestry, benefits of agroforestry ", file: "Agroforestry.pdf", playlist: "https://youtu.be/6htsXyZyFwQ?si=jCtsRJV--PjjMZGt" },
                { name: "Chapter 11: Different agroforestry systems prevalent in the country, shifting cultivation, taungya, alley cropping, wind breaks and shelter belts, home gardens ", file: "Different agroforestry systems.pdf", playlist: "https://youtu.be/1h9coI4LkGA?si=R6uRGAFdUEzMduBe" },
                { name: "Chapter 12: Cultivation practices of two important fast growing tree species of the region i.e. Neem (Azadirachta indica) and Ardu (Ailanthus excelsa)  ", file: "Cultivation practices.pdf", playlist: "https://youtu.be/-1mqy5TQa5Q?si=k8jl3MtKhw6yHQiz" },
                
            ],

             // --------------------------------------------Comprehension and Communication Skills in English---------------------------------------------------------
             "Comprehension and Communication Skills in English": [

                { name: "Chapter 1: War Minus Shooting- The sporting Spirit ", file: "ch.1englishagu.pdf", playlist: "https://youtu.be/YEUVx7O7AN0?si=XbD-89_EJQQocDUi" },
                { name: "Chapter 2: A Dilemma-A layman looks at Science Raymond B. Fosdick", file: "ch.2ccenglish.pdf ", playlist: "https://youtu.be/5U5Qf4PnKvs?si=9R9Ho9JRaB28p4Ua" },
                { name: "Chapter 3: You and Your English – Spoken English and broken English G. B. Shaw  ", file: "ch.3ccenlish.pdf", playlist: "https://youtu.be/1EGXj2V6R-8?si=omzbCPmUmsIT7Us8" },
                { name: "Chapter 4: Reading comprehension  ", file: "ch.4ccenglish.pdf", playlist: "https://www.youtube.com/live/YZ6Zz7SWr04?si=NGOAeBT9pP5lHQWt" },
                { name: "Chapter 5: Vocabulary: Antonyms, synonyms  ", file: " ch.5ccenglish.pdf", playlist: "https://www.youtube.com/live/umAcd4jeUXY?si=WElG7Qu42H9wV_YA" },
                { name: "Chapter 6: Homophones, homonyms and words often confused  ", file: "ch.6ccenglish.pdf", playlist: "https://youtu.be/CJULPzv6YZs?si=y628E_qCNk2u8el0" },
                { name: "Chapter 7: Exercises to help the students in the enrichment of vocabulary based on TOEFL and other competitive examinations  ", file: "ch.7ccenglish.pdf ", playlist: "https://youtu.be/POzmFgERec8?si=2UYsARj48IaD5O39" },
                { name: "Chapter 8: Functional grammar: Articles, prepositions, verb, subject verb agreement ", file: "ch.8ccenglish.pdf", playlist: "https://youtu.be/zfbUzWqsH74?si=QMtQNsATAelk74tt" },
                { name: "Chapter 9: Transformation, synthesis ", file: "ch.9ccenglish.pdf", playlist: "https://youtu.be/BtT87B3K_9E?si=wO3l7_-RhvfMfHtS" },
                { name: "Chapter 10: Direct and indirect narration ", file: "ch.10ccenglish.pdf", playlist: "https://youtu.be/VxHCs9W7tW4?si=iDlaMHQJd3hEAiIt" },
                { name: "Chapter 11: Written skills ", file: "ch.11ccenglish.pdf", playlist: "https://youtu.be/W3KI2rJm-Sc?si=Y5SQb2r4OmOcS-od" },
                { name: "Chapter 12: The Style: Importance of professional writing ", file: "ch.12ccenglish.pdf", playlist: "https://youtu.be/yl24vJ-qm1M?si=AOXxZxkdvcg2PB4S" },
                { name: "Chapter 13: Preparation of curriculum vitae and job applications  ", file: "ch.13ccenglish.pdf", playlist: "https://youtu.be/3Dz4Ey4ZXb4?si=MuvPNTcRue-ZrGlz" },
                { name: "Chapter 14: Synopsis writing  ", file: "ch.14ccenglish.pdf", playlist: "https://youtu.be/XFbifpBzYsM?si=BknFaRv7oAnIiFp5" },
                { name: "Chapter 15: Interviews: kinds, importance and process ", file: "ch.15ccenglish.pdf", playlist: "https://youtu.be/3NSMIEz_FkA?si=hRRPpM4T6thcytj1" },
                
            ],

            // --------------------------------------------Agronomy ---------------------------------------------------------
            "Agronomy ": [

                { name: "Chapter 1: Agronomy- Meaning and its scope", file: "ch.1agronomy.pdf", playlist: "https://youtu.be/kD3CzDhz8f4?si=i2GbcQpty7J6mh68" },
                { name: "Chapter 2: Types of seeds, dormancy of seeds", file: "ch.2agronomy.pdf ", playlist: "https://youtu.be/gpkihP9O6MQ?si=dhY2c-xW4FyEDxM9" },
                { name: "Chapter 3: Viability of seeds, seed treatment ", file: "ch.3agronomy.pdf", playlist: "https://youtu.be/5MgvzuIrl5I?si=1aS9uZFL9r5taVuQ" },
                { name: "Chapter 4: Sowing- Methods, depth, plant density ", file: "ch.4agronomy.pdf", playlist: "https://www.youtube.com/live/J2unvYrKw6I?si=snJfEXg1ChSHNoaL" },
                { name: "Chapter 5: Nursery bed and transplanting", file: " ch.5agronomy.pdf", playlist: "https://www.youtube.com/live/aTebDJ5Gm2E?si=jFNNdasPrlqln0LR" },
                { name: "Chapter 6: Tillage- Definition and types of tillage including minimum and no tillage ", file: "ch.6agronomy.pdf", playlist: "https://youtu.be/NjGGzZ3eoGs?si=UrZ9eHV76-fzK9En" },
                { name: "Chapter 7: Tilth- Definition and characteristics of good tilth   ", file: "ch.7agronomy.pdf ", playlist: "https://youtu.be/6uMHWDMS-X8?si=rz7hTjvlqXecEEFk" },
                { name: "Chapter 8: Crop density and geometry ", file: "ch.8agronomy.pdf", playlist: "https://youtu.be/tM6Cm2rWEZg?si=FQ6IKtH3gKq9FOr_" },
                { name: "Chapter 9: Crop nutrition- Essential nutrients classification, nutrient mobility in plants, factors affecting nutrient availability ", file: "ch.9agronomy.pdf", playlist: "https://youtu.be/o1W_-P3Fw6Q?si=c4OKzSZj4_zrX8me" },
                { name: "Chapter 10: Functions and deficiency symptoms of primary nutrients ", file: "ch.10agronomy.pdf", playlist: "https://www.youtube.com/live/v2NomYeYEFE?si=BIilEAVNchW9I3xF" },
                { name: "Chapter 11: Manures and fertilizers ", file: "ch.11agronomy.pdf", playlist: "https://www.youtube.com/live/TAoKiiNsbKs?si=786_TcI03RHqhmpw" },
                { name: "Chapter 12: Nutrient use efficiency and water resources; soil-plant-water relationship", file: "ch.12agronomy.pdf", playlist: "https://youtu.be/vBZepBiNOiM?si=KCitDkTojBe2Hhgl" },
                { name: "Chapter 13: Crop water requirement, water use efficiency, irrigation efficiency; different terms used and their importance ", file: "ch.13agronomy.pdf", playlist: "https://youtu.be/c_EHEsnBm2o?si=67mE0Yfbf1xtZ-0C" },
                { name: "Chapter 14: Scheduling of irrigation: meaning and different approaches for scheduling irrigation in field crops ", file: "ch.14agronomy.pdf", playlist: "https://youtu.be/Y2KOBVo3Smk?si=WetXY_Ms5DNPwbEX" },
                { name: "Chapter 15: Surface methods of irrigation; border, furrow, check basin and basin methods ", file: "ch.15agronomy.pdf", playlist: "https://youtu.be/GXurb1AallQ?si=s2N5xfaw4NRDjKl0" },
                { name: "Chapter 16: Sprinkler and drip methods; their layout, adaptability, advantages and limitations ", file: "ch.16agronomy.pdf", playlist: "https://youtu.be/o0Lwn0fSmqc?si=w2qkvWEB6gwTvk3m" },
                { name: "Chapter 17: Quality of irrigation water; water logging  ", file: "ch.17agronomy.pdf", playlist: "https://youtu.be/qBbvskfgQIA?si=VncoVakixJEZMkM0" },
                { name: "Chapter 18: Weeds – Definition, importance and classification  ", file: "ch.18agronomy.pdf", playlist: "https://youtu.be/eNeAadvHZhk?si=I1tMVIa4QzZzOdlv" },
                { name: "Chapter 19: Ecology of weeds, reproduction and seed dissemination  ", file: "ch.19agronomy.pdf", playlist: "https://youtu.be/2OjuI_Tmrdw?si=MYRFx5Zf9pvLM-8q" },
                { name: "Chapter 20: Crop-weed competition-concept  ", file: "ch.20agronomy.pdf", playlist: "https://youtu.be/WVIxgPLVN_8?si=meQIa9DCLDKjo-J8" },
                { name: "Chapter 21: Concepts of weed prevention, eradication and weed control ", file: "ch.21agronomy.pdf", playlist: "https://youtu.be/8vHFAfBRTpQ?si=KZG1BhDPmCN7c7pt" },
                { name: "Chapter 22: Concepts of weed management- Principles, physical and cultural methods of weed control ", file: "ch.22agronomy.pdf", playlist: "https://youtu.be/JTdRho4j3qw?si=W158ve7AjJ2WF5vr" },
                { name: "Chapter 23: Chemical and biological methods of weed control, integrated weed management - An introduction  ", file: "ch.23agronomy.pdf", playlist: "https://youtu.be/2mC9dqZ7H5I?si=1RXRNZVdiRQ6zTHW" },
                { name: "Chapter 24: Introduction to herbicides, advantages and limitations of herbicides usages; Allelopathy", file: "ch.24agronomy.pdf", playlist: "https://www.youtube.com/live/VTYu2rSwBKg?si=ZeQrs1ZMlmJXEO9I" },
                { name: "Chapter 25: Classification of herbicides ", file: "ch.25agronomy.pdf", playlist: "https://youtu.be/osHIk0Wtfxo?si=of74EZ_9P8IqkivL" },
                { name: "Chapter 26: Herbicidal selectivity and resistance  ", file: "ch.26agronomy.pdf", playlist: "https://youtu.be/HXlwcGjllYw?si=0cuPhkKlRXLVgC-J" },
                { name: "Chapter 27: Growth and development of crops, factors affecting growth and development  ", file: "ch.27agronomy.pdf", playlist: "https://youtu.be/NmspdE-Sjmo?si=hZkWYhbPfJj-8g4W" },
                { name: "Chapter 28: Plant ideotypes, crop rotation and its principles  ", file: "ch.28agronomy.pdf", playlist: "https://youtu.be/3TAYFdDsGfw?si=bJ1FFFLKv5eNzAxV" },
                { name: "Chapter 29: Adaptation and distribution of crops ", file: "ch.29agronomy.pdf", playlist: "https://youtu.be/yT2Jx1JHc3s?si=YiGoWwlrsgf3brX4" },
                { name: "Chapter 30: Crop management technologies in problematic areas ", file: "ch.30agronomy.pdf", playlist: "https://youtu.be/DfWbMlgY__E?si=MbE9bEJ7J111_bmC" },
                { name: "Chapter 31: Harvesting and threshing of crops  ", file: "ch.30agronomy.pdf", playlist: "https://youtu.be/rPzMhEBhFUg?si=ylOm6mbX6JSMOJOu" },
                
            ],

             // --------------------------------------------biology---------------------------------------------------------
             "Biology": [

                { name: "Chapter 1: Introduction to the living world ", file: "ch.1biology.pdf", playlist: "https://youtu.be/_XwdRy_Ym6c?si=rtDJZ5HiTlYnfNLA" },
                { name: "Chapter 2: Diversity and characteristics of life  ", file: "ch.2biology.pdf ", playlist: "https://youtu.be/qJm2JDKwjJI?si=R3SsW0X2fGEaElo-" },
                { name: "Chapter 3: Origin of life ", file: "ch.3biology.pdf", playlist: "https://youtu.be/PGTiStGKT_Y?si=t2Cbd7o2LHDgvd0E" },
                { name: "Chapter 4: Evolution and eugenics", file: "ch.4biology.pdf", playlist: "https://youtu.be/qPdzOv_HWKE?si=Z95BfbDEBi0wSKbZ" },
                { name: "Chapter 5: Binomial nomenclature and classification, cell and cell division  ", file: "ch.5biology.pdf", playlist: "https://youtu.be/_qgNVk13ttY?si=uQxYdF8p4W8_VZyg" },
                { name: "Chapter 6: Morphology of flowing plants ", file: "ch.6biology.pdf", playlist: "https://youtu.be/H3r8gcnonyU?si=mdh0YGdw5qqvsa2m" },
                { name: "Chapter 7: Seed and seed germination ", file: "ch.7biology.pdf ", playlist: "https://youtu.be/aQy1hpjSEQY?si=ddHn_8UrRB33H5DQ" },
                { name: "Chapter 8: Plant systematic- viz; Brassicaceae ", file: "ch.8biology.pdf", playlist: "https://youtu.be/kX1rFzPdYM8?si=BOoGR9b0A9FHAlRD" },
                { name: "Chapter 9: Plant systematic- viz. Fabaceae  ", file: "ch.9biology.pdf", playlist: "https://youtu.be/kX1rFzPdYM8?si=BOoGR9b0A9FHAlRD" },
                { name: "Chapter 10: Plant systematic- viz. Fabaceae   ", file: "ch.10biology.pdf", playlist: "https://youtu.be/kX1rFzPdYM8?si=BOoGR9b0A9FHAlRD" },
                { name: "Chapter 11: Role of animals in agriculture ", file: "ch.11biology.pdf", playlist: "https://youtu.be/EbWrvowGVGQ?si=D_5i-i7e2d9-zSno" },
            ],

            // --------------------------------------------Elementary Mathematics ---------------------------------------------------------
            "Elementary Mathematics ": [

                { name: "Chapter 1: Elementary Mathematics  ", file: "ch.1emath.pdf", playlist: "https://youtu.be/q7VDw_eHZPQ?si=psw2q0vrjtJH-RXx" },
                { name: "Chapter 2: Slope intercept form of equation of line   ", file: "ch.2emath.pdf ", playlist: "https://youtu.be/oSelpsQR-f0?si=3FHEeeoHMEUbMliz" },
                { name: "Chapter 3: Angles between two st. lines, parallel lines, perpendicular lines  ", file: "ch.3emath.pdf", playlist: "https://youtu.be/e4o7X6LyX-I?si=W-Vs1RjUdG3ldeA2" },
                { name: "Chapter 4: Circle", file: "ch.4emath.pdf", playlist: "https://www.youtube.com/live/OupX6YQCtB4?si=zXtyhV1mDxZj-EXI" },
                { name: "Chapter 5: Functions, evaluation of functions, operations with functions   ", file: "ch.5emath.pdf", playlist: "https://youtu.be/D6a3Y66KNUQ?si=ATrhchg9a29JK8w9" },
                { name: "Chapter 6: Limits, continuity ", file: "ch.6emath.pdf", playlist: "https://youtu.be/HWC3mLo8Nkk?si=6ijdBh8qbR-lUGz9" },
                { name: "Chapter 7: Problems on continuity ", file: "ch.7emath.pdf ", playlist: "https://www.youtube.com/live/Faz94yuaWKM?si=BOqEC5rmrX8LMJZ3" },
                { name: "Chapter 8: Differentiation of first principle  ", file: "ch.8emath.pdf", playlist: "https://youtu.be/FOhAAfip0Xo?si=eOn4aZ6cVRX75wmU" },
                { name: "Chapter 9: differentiation of sum and product of functions  ", file: "ch.9emath.pdf", playlist: "https://youtu.be/uYSPOIb8-DI?si=3eiNOLFDn2iIsMXR" },
                { name: "Chapter 10: Quotient Rule, function of functions  ", file: "ch.10emath.pdf", playlist: "https://youtu.be/8jVDEcQ0wXk?si=fTA0iIH-OZrgzSUP" },
                { name: "Chapter 11: Differentiation of function of functions, parametric equation ", file: "ch.11emath.pdf", playlist: "https://youtu.be/mnHlx-g3h5k?si=QNym_3tOFk3h3mVH" },
                { name: "Chapter 12: Logarithmic differentiation ", file: "ch.12emath.pdf", playlist: "https://youtu.be/bR80NILO3DU?si=aZGIjBiAZeI5fohE" },
                { name: "Chapter 13: Differentiation of inverse trigonometric functions ", file: "ch.13emath.pdf", playlist: "https://youtu.be/50OXGa5R4k4?si=kvWMjXysqb9EO-A-" },
                { name: "Chapter 14: Successive differentiation, maxima and minima ", file: "ch.14emath.pdf", playlist: "https://youtu.be/tIoBTJJ8S7c?si=pL9n4tkl93C4s8sl" },
                { name: "Chapter 15: Integration formulae  ", file: "ch.15emath.pdf", playlist: "https://youtu.be/NcoRlvM1dmg?si=RlR3E4flStnSo64g" },
                { name: "Chapter 16: Integration by substitution ", file: "ch.16emath.pdf", playlist: "https://youtu.be/sci1pls4Lc8?si=z0iiapIg5lx3r02Z" },
                { name: "Chapter 17: Integration by parts  ", file: "ch.17emath.pdf", playlist: "https://youtu.be/sWSLLO3DS1I?si=VlMI6p1KXVMLSsp8" },
                { name: "Chapter 18: Definite integration ", file: "ch.18emath.pdf", playlist: "https://www.youtube.com/live/ISth4dTVbWY?si=k2lAGOJSzwGF6NaI" },
                { name: "Chapter 19: Area under curves  ", file: "ch.19emath.pdf", playlist: "https://youtu.be/doc6zf-pddw?si=TYkquQXW-o_6HvhV" },
                { name: "Chapter 20: Matrices, matrix addition, equality of matrices, square matrix, identity, null matrix ", file: "ch.20emath.pdf", playlist: "https://youtu.be/hyhktV5pxrE?si=zvYVlo74MasqTpF8" },
                { name: "Chapter 21: Subtraction, scalar multiplication, matrix multiplication, transpose of a matrix  ", file: "ch.21emath.pdf", playlist: "https://youtu.be/IGXvOj3TeSY?si=qBO2RNsFWmfl4AwZ" },
                { name: "Chapter 22: Determinants  ", file: "ch.22emath.pdf", playlist: "https://www.youtube.com/live/_xCDWqtvFow?si=R6aebRNVJXlPCtxQ" },
                { name: "Chapter 23: Inverse up to 3rd order ", file: "ch.23emath.pdf", playlist: "https://youtu.be/MFE5tga2VUc?si=3UwCU66dnzQ8w6X6" },
            ],
            
             // ------------------------------------------Agricultural Heritage-----------------------------------------------------------
             "Agricultural Heritage": [

                { name: "Chapter 1: Introduction to the living world ", file: "ch.1biology.pdf", playlist: "https://youtu.be/_XwdRy_Ym6c?si=rtDJZ5HiTlYnfNLA" },
                { name: "Chapter 2: Diversity and characteristics of life  ", file: "ch.2biology.pdf ", playlist: "https://youtu.be/qJm2JDKwjJI?si=R3SsW0X2fGEaElo-" },
                { name: "Chapter 3: Origin of life ", file: "ch.3biology.pdf", playlist: "https://youtu.be/PGTiStGKT_Y?si=t2Cbd7o2LHDgvd0E" },
                { name: "Chapter 4: Evolution and eugenics", file: "ch.4biology.pdf", playlist: "https://youtu.be/qPdzOv_HWKE?si=Z95BfbDEBi0wSKbZ" },
                { name: "Chapter 5: Binomial nomenclature and classification, cell and cell division  ", file: "ch.5biology.pdf", playlist: "https://youtu.be/_qgNVk13ttY?si=uQxYdF8p4W8_VZyg" },
                { name: "Chapter 6: Morphology of flowing plants ", file: "ch.6biology.pdf", playlist: "https://youtu.be/H3r8gcnonyU?si=mdh0YGdw5qqvsa2m" },
                { name: "Chapter 7: Seed and seed germination ", file: "ch.7biology.pdf ", playlist: "https://youtu.be/aQy1hpjSEQY?si=ddHn_8UrRB33H5DQ" },
                { name: "Chapter 8: Plant systematic- viz; Brassicaceae ", file: "ch.8biology.pdf", playlist: "https://youtu.be/kX1rFzPdYM8?si=BOoGR9b0A9FHAlRD" },
                { name: "Chapter 9: Plant systematic- viz. Fabaceae  ", file: "ch.9biology.pdf", playlist: "https://youtu.be/kX1rFzPdYM8?si=BOoGR9b0A9FHAlRD" },
                { name: "Chapter 10: Plant systematic- viz. Fabaceae   ", file: "ch.10biology.pdf", playlist: "https://youtu.be/kX1rFzPdYM8?si=BOoGR9b0A9FHAlRD" },
                { name: "Chapter 11: Role of animals in agriculture ", file: "ch.11biology.pdf", playlist: "https://youtu.be/EbWrvowGVGQ?si=D_5i-i7e2d9-zSno" },
            ],
        },
        

        "2": {
            "Anatomy": [
                { name: "Chapter 1: Human Body", file: "pdf/anatomy_ch1.pdf", playlist: "videos/anatomy_ch1.mp4" },
                { name: "Chapter 2: Muscles", file: "pdf/anatomy_ch2.pdf", playlist: "videos/anatomy_ch2.mp4" },
                { name: "Chapter 3: Muscles", file: "pdf/anatomy_ch3.pdf", playlist: "videos/anatomy_ch3.mp4" },
            ]
        }
    },

    "BUMS": {
        "1": {
            "maderchod": [
                { name: "Chapter 1: Human Body", file: "pdf/anatomy_ch1.pdf", playlist: "videos/anatomy_ch1.mp4" },
                { name: "Chapter 2: Muscles", file: "pdf/anatomy_ch2.pdf", playlist: "videos/anatomy_ch2.mp4" }
            ]
        }
    }
};

function updateProgram() {
    let program = document.getElementById("program").value;
    let infoBox = document.getElementById("programInfo");
    document.getElementById("year").value = "";
    document.getElementById("subject").innerHTML = '<option value="" disabled selected>Choose Subject</option>';
    document.getElementById("notesDisplay").innerHTML = "";
    document.getElementById("playlistDisplay").innerHTML = "";

    if (programData[program]) {
        infoBox.innerHTML = `<strong>${programData[program].fullForm}</strong><br>Duration: ${programData[program].duration}<br>Career: ${programData[program].career}`;
    }
}

function updateSubjects() {
    let program = document.getElementById("program").value;
    let year = document.getElementById("year").value;
    let subjectDropdown = document.getElementById("subject");
    subjectDropdown.innerHTML = '<option value="" disabled selected>Choose Subject</option>';
    document.getElementById("notesDisplay").innerHTML = "";
    document.getElementById("playlistDisplay").innerHTML = "";

    if (subjectsData[program] && subjectsData[program][year]) {
        for (let subject in subjectsData[program][year]) {
            let option = document.createElement("option");
            option.value = subject;
            option.textContent = subject;
            subjectDropdown.appendChild(option);
        }
    }
}

function updateNotes() {
    let program = document.getElementById("program").value;
    let year = document.getElementById("year").value;
    let subject = document.getElementById("subject").value;
    let notesDisplay = document.getElementById("notesDisplay");
    let playlistDisplay = document.getElementById("playlistDisplay");
    notesDisplay.innerHTML = "";
    playlistDisplay.innerHTML = "";

    if (subjectsData[program] && subjectsData[program][year] && subjectsData[program][year][subject]) {
        subjectsData[program][year][subject].forEach(item => {
            notesDisplay.innerHTML += `<div class='pdf-box'><a href='${item.file}' target='_blank'>${item.name}</a></div>`;
            playlistDisplay.innerHTML += `<div class='playlist-box'><a href='${item.playlist}' target='_blank'>${item.name} Playlist</a></div>`;
        });
    }
}