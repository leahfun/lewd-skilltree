function start() {
    let $ = go.GraphObject.make;
    let diagram = $(go.Diagram, "view", 
        { 
            "undoManager.isEnabled": true,
            layout: $(go.TreeLayout, 
                { angle: 90, layerSpacing: 50 })
        });
    diagram.nodeTemplate =
        $(go.Node, "Horizontal",
            { background: "#E62C27" },
            $(go.Picture,
                { margin: 10, width: 128, height: 128, background: "red" },
                new go.Binding("source")),
            $(go.Panel, go.Panel.Vertical, {}, 
                $(go.TextBlock, "[No name]",
                    { margin: 12, stroke: "white", font: "bold 16px sans-serif", wrap: go.TextBlock.WrapFit, width: 256, alignment: go.Spot.Top, alignmentFocus: go.Spot.Bottom },
                    new go.Binding("text", "name")),
                $(go.TextBlock, "[No description]",
                    { margin: 12, stroke: "white", font: "bold 16px sans-serif", wrap: go.TextBlock.WrapFit, width: 256 },
                    new go.Binding("text", "description"))
            )
        );
    
    diagram.linkTemplate =
        $(go.Link,
            { routing: go.Link.Orthogonal, corner: 25 },
            $(go.Shape,
                { strokeWidth: 5, stroke: "#E62C27" }));

    let model = $(go.TreeModel);
    let analSkillTree = [
        { key: "anal_1", name: "Anal 1", source: "static/icons/anal/anal_1.jpg", description: "Unlocks after first anal experience." },

        { key: "anal_2", parent: "anal_1", name: "Anal 2", source: "static/icons/anal/anal_2.jpg", description: "Makes it all more pleasurable." },
        { key: "buffy_rim", parent: "anal_1", name: "Buffy rim", source: "static/icons/anal/buffy_rim.jpg", description: "Not just a hole but a nice rim too." },
        { key: "anal_virginity", parent: "anal_1", name: "Anal virginity", source: "static/icons/anal/anal_virginity.jpg", description: "Clears the memory of any anal experience while keeping all the skills and body modifications." },
        { key: "no_body_hair", parent: "anal_1", name: "No body hair", source: "static/icons/anal/no_body_hair.jpg", description: "Hair growth on the body stops. Head hair, eyebrows and eyelashes are exceptions." },
        { key: "tail_1", parent: "anal_1", name: "Tail 1", source: "static/icons/anal/tail_1.jpg", description: "Grows a short tail. Uncontrollable and barely feeling." },
        { key: "wider_hips_1", parent: "anal_1", name: "Wider hips 1", source: "static/icons/anal/wider_hips_1.jpg", description: "More to grab onto. It is mostly fat though so more grip does not necessarily mean more control" },
        
        { key: "anal_3", parent: "anal_2", name: "Anal 3", source: "static/icons/anal/anal_2.jpg", description: "More magical aspects of anal." },

        { key: "magnetic_toy", parent: "anal_3", name: "Magnetic toy", source: "static/icons/anal/magnetic_toy.jpg", description: "Anal plug that has an invisible magical pull towards asshole. Force gets stronger over time." },
        { key: "magic_detection", parent: "anal_3", name: "Magic detection", source: "static/icons/anal/magic_detection.jpg", description: "Butt starts leaking magic energy which interacts with magical items. In many cases making them glow." },

        { key: "anal_grip", parent: "anal_2", name: "Anal grip", source: "static/icons/anal/anal_grip.jpg", description: "Anal muscles become stronger and the inner surface is rougher against pulling out." },
        { key: "stretch_1", parent: "anal_2", name: "Stretch", source: "static/icons/anal/stretch.jpg", description: "Skin and muscles around the area get much more elastic." },
        { key: "anal_lube", parent: "anal_2", name: "Anal lube", source: "static/icons/anal/anal_lube.jpg", description: "Anus starts producing lubrication similar to pussy." },
        
        { key: "candy_poop", parent: "anal_lube", name: "Candy poop", source: "static/icons/anal/candy_poop.jpg", description: "Digestive system starts turning eaten food into sweet colorful candy. No more smelly poop." },
        
        { key: "tail_control_1", parent: "tail_1", name: "Tail control 1", source: "static/icons/anal/tail_control_1.jpg", description: "Allows the tail to be controlled like any another limb. Might initially be clumsy." },
        { key: "feeling_tail", parent: "tail_1", name: "Feeling tail", source: "static/icons/anal/sensitive_tail_1.jpg", description: "Tail can start feeling touch, but not much pain or pleasure." },
        
        { key: "tail_pain", parent: "feeling_tail", name: "Tail pain", source: "static/icons/anal/sensitive_tail_2.jpg", description: "Tail starts feeling pain. Pain levels are different from person to person." },
        { key: "tail_pleasure", parent: "feeling_tail", name: "Tail pleasure", source: "static/icons/anal/sensitive_tail_3.jpg", description: "Tail starts feeling pleasure. Usually massage pleasure, but in some cases sexual pleasure." },
        
        { key: "tail_control_2", parent: "tail_control_1", name: "Tail control 2", source: "static/icons/anal/tail_control_2.jpg", description: "Really precice tail movements. Wielding weapons or writing letters with the tail." },
        { key: "tail_cock", parent: "tail_1", name: "Tail cock", source: "static/icons/anal/tail_cock.jpg", description: "Tail gets thicker and the tip takes the shape of a cock." },
        
        { key: "wider_hips_2", parent: "wider_hips_1", name: "Wider hips 2", source: "static/icons/anal/wider_hips_2.jpg", description: "50% of the body mass is there. Might mess with the balance." },
        { key: "wider_hips_3", parent: "wider_hips_2", name: "Wider hips 3", source: "static/icons/anal/wider_hips_3.jpg", description: "Asscheeks so big that a smaller cock cannot even reach the butthole, even after spreading the cheeks." },

        { key: "durable_anus", parent: "stretch_1", name: "Durable anus", source: "static/icons/anal/durable_anus.jpg", description: "Surface around and inside butthole becomes really hard to cut into. No more bleeding after dry fucking or sharp insertions." },
        { key: "long_gape", parent: "stretch_1", name: "Long gape", source: "static/icons/anal/long_gape.jpg", description: "Anus holds a given shape for longer and revocers into it's initial shape slowly. Certain drugs / liquids can speed up the process." }
    ];
    let oralSkillTree = [
        { key: "oral_1", name: "Oral 1", source: "static/icons/oral/choke.jpg", description: "Unlocks after first time sucking on something." },

        { key: "cock_dazzle_1", parent: "oral_1", name: "Cock dazzle 1", source: "static/icons/oral/cock_dazzle.jpg", description: "Mind loses control over body once a cock gets close enough for the face. Body starts moving on it's own. No obvious benefit for it." },
        { key: "flexible_neck", parent: "oral_1", name: "Flexible neck", source: "static/icons/oral/flexible_neck.jpg", description: "Gets in the right poses with ease and doesn't get stiff." },
        { key: "no_gag", parent: "oral_1", name: "No gag reflex", source: "static/icons/oral/no_gag.jpg", description: "Good for swallowing cocks and disliked foods." },
        { key: "extra_drool", parent: "oral_1", name: "Extra drool", source: "static/icons/oral/extra_drool.jpg", description: "Helps to make sure that the mouth doesn't dry up. Enough drool to fill a cup in a few minutes." },
        { key: "night_vision", parent: "oral_1", name: "Night vision", source: "static/icons/oral/night_vision.jpg", description: "Helps see in the dark better." },
        { key: "long_tongue_1", parent: "oral_1", name: "Long tongue 1", source: "static/icons/oral/long_tongue_1.jpg", description: "Tongue that easily reaches past chin or nose tip." },
        { key: "horns_1", parent: "oral_1", name: "Horns 1", source: "static/icons/oral/horns_1.jpg", description: "Horns on head, barely bigger than a fingertip." },
        
        { key: "cock_dazzle_2", parent: "cock_dazzle_1", name: "Cock dazzle 2", source: "static/icons/oral/cock_heat.jpg", description: "Mind blanks out completely when the dazzle is triggered. Good to avoid having to actually remember sucking cocks." },
        { key: "flexible_jaw", parent: "flexible_neck", name: "Flexible jaw", source: "static/icons/oral/flexible_jaw.jpg", description: "In a right situation opens further than normally." },
        { key: "lung_capacity", parent: "no_gag", name: "Lung capacity", source: "static/icons/oral/lung_capacity.jpg", description: "Last without breathing for minutes, even while under some physical workload." },
        { key: "drool_vomit", parent: "extra_drool", name: "Drool vomit", source: "static/icons/oral/drool_vomit.jpg", description: "Occasional unstoppable flow of drool from throat. Enough to fill a bucket in a few minutes." },
        { key: "glowing_eyes", parent: "night_vision", name: "Glowing eyes", source: "static/icons/oral/glowing_eyes.jpg", description: "Just looks cool. Some people are able to control the brightness and even color." },
        { key: "long_tongue_2", parent: "long_tongue_1", name: "Long tongue 2", source: "static/icons/oral/long_tongue_2.jpg", description: "Tongue that can easily wrap around a cock a few times." },
        { key: "feeling_horns", parent: "horns_1", name: "Feeling horns", source: "static/icons/oral/feeling_horns.jpg", description: "Horns can feel a touch. They might also need to be kept warm or cold in different weathers." },
        { key: "horns_2", parent: "horns_1", name: "Horns 2", source: "static/icons/oral/horns_2.jpg", description: "Horns big enough for grabbing. On some people the horns are sharp, so useful in combat." },

        { key: "sensitive_horns", parent: "feeling_horns", name: "Sensitive horns", source: "static/icons/oral/sensitive_horns.jpg", description: "Horns become sources of sexual pleasure." },
        { key: "horn_maintenance", parent: "horns_2", name: "Horn maintenance", source: "static/icons/oral/horn_maintenance.jpg", description: "Horns keep growing and need to be taken care of from time to time. Cutting or filing them shorter. Polishing them for better looks." },
        { key: "horns_3", parent: "horns_2", name: "Horns 3", source: "static/icons/oral/horns_3.jpg", description: "Massive horns that are comparable to the weight of the rest of the head. New balance takes time to get used to." },
        
        { key: "cumming_horns", parent: "sensitive_horns", name: "Cumming horns", source: "static/icons/oral/cumming_horns.jpg", description: "Horns can indicate orgasm or buildup to it. Varies from person to person. Glowing, sweating or shooting some liquid out from the tip." },
    ];
    model.nodeDataArray = oralSkillTree;
    diagram.model = model;
    window.diagram = diagram;
}

function renderImage() {
    let img = window.diagram.makeImageData({
        scale: 1,
        maxSize: new go.Size(Infinity, Infinity),
        type: "image/png",
        details: 0.9,
        background: "#233535"
    });
    document.getElementById("renderResult").src = img;
}