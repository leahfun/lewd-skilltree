console.log("Here");

function start() {
    console.log("Start")
    let $ = go.GraphObject.make;
    let diagram = $(go.Diagram, "view", 
        { 
            "undoManager.isEnabled": true,
            layout: $(go.TreeLayout, 
                { angle: 90, layerSpacing: 35 })
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
            { routing: go.Link.Orthogonal, corner: 5 },
            $(go.Shape,
                { strokeWidth: 3, stroke: "#E62C27" }));

    let model = $(go.TreeModel);
    model.nodeDataArray = [
        { key: "anal_1", name: "Anal 1", source: "static/icons/anal_1.jpg", description: "Unlocks after first anal experience." },

        { key: "anal_2", parent: "anal_1", name: "Anal 2", source: "static/icons/anal_2.jpg", description: "Makes it all more pleasurable." },
        { key: "buffy_rim", parent: "anal_1", name: "Buffy rim", source: "static/icons/buffy_rim.jpg", description: "Not just a hole but a nice rim too." },
        { key: "anal_virginity", parent: "anal_1", name: "Anal virginity", source: "static/icons/anal_virginity.jpg", description: "Clears the memory of any anal experience while keeping all the skills and body modifications." },
        { key: "no_body_hair", parent: "anal_1", name: "No body hair", source: "static/icons/no_body_hair.jpg", description: "Hair growth on the body stops. Head hair, eyebrows and eyelashes are exceptions." },
        { key: "tail_1", parent: "anal_1", name: "Tail 1", source: "static/icons/tail_1.jpg", description: "Grows a short tail. Uncontrollable and barely feeling." },
        { key: "wider_hips_1", parent: "anal_1", name: "Wider hips 1", source: "static/icons/wider_hips_1.jpg", description: "More to grab onto. It is mostly fat though so more grip does not necessarily mean more control" },
        
        { key: "anal_3", parent: "anal_2", name: "Anal 3", source: "static/icons/anal_2.jpg", description: "More magical aspects of anal." },

        { key: "magnetic_toy", parent: "anal_3", name: "Magnetic toy", source: "static/icons/magnetic_toy.jpg", description: "Anal plug that has an invisible magical pull towards asshole. Force gets stronger over time." },
        { key: "magic_detection", parent: "anal_3", name: "Magic detection", source: "static/icons/magic_detection.jpg", description: "Butt starts leaking magic energy which interacts with magical items. In many cases making them glow." },

        { key: "anal_grip", parent: "anal_2", name: "Anal grip", source: "static/icons/anal_grip.jpg", description: "Anal muscles become stronger and the inner surface is rougher against pulling out." },
        { key: "stretch_1", parent: "anal_2", name: "Stretch", source: "static/icons/stretch.jpg", description: "Skin and muscles around the area get much more elastic." },
        { key: "anal_lube", parent: "anal_2", name: "Anal lube", source: "static/icons/anal_lube.jpg", description: "Anus starts producing lubrication similar to pussy." },
        
        { key: "candy_poop", parent: "anal_lube", name: "Candy poop", source: "static/icons/candy_poop.jpg", description: "Digestive system starts turning eaten food into sweet colorful candy. No more smelly poop." },
        
        { key: "tail_control_1", parent: "tail_1", name: "Tail control 1", source: "static/icons/tail_control_1.jpg", description: "Allows the tail to be controlled like any another limb. Might initially be clumsy." },
        { key: "feeling_tail", parent: "tail_1", name: "Feeling tail", source: "static/icons/sensitive_tail_1.jpg", description: "Tail can start feeling touch, but not much pain or pleasure." },
        
        { key: "tail_pain", parent: "feeling_tail", name: "Tail pain", source: "static/icons/sensitive_tail_2.jpg", description: "Tail starts feeling pain. Pain levels are different from person to person." },
        { key: "tail_pleasure", parent: "feeling_tail", name: "Tail pleasure", source: "static/icons/sensitive_tail_3.jpg", description: "Tail starts feeling pleasure. Usually massage pleasure, but in some cases sexual pleasure." },
        
        { key: "tail_control_2", parent: "tail_control_1", name: "Tail control 2", source: "static/icons/tail_control_2.jpg", description: "Really precice tail movements. Wielding weapons or writing letters with the tail." },
        { key: "tail_cock", parent: "tail_1", name: "Tail cock", source: "static/icons/tail_cock.jpg", description: "Tail gets thicker and the tip takes the shape of a cock." },
        
        { key: "wider_hips_2", parent: "wider_hips_1", name: "Wider hips 2", source: "static/icons/wider_hips_2.jpg", description: "50% of the body mass is there. Might mess with the balance." },
        { key: "wider_hips_3", parent: "wider_hips_2", name: "Wider hips 3", source: "static/icons/wider_hips_3.jpg", description: "Asscheeks so big that a smaller cock cannot even reach the butthole, even after spreading the cheeks." },

        { key: "durable_anus", parent: "stretch_1", name: "Durable anus", source: "static/icons/durable_anus.jpg", description: "Surface around and inside butthole becomes really hard to cut into. No more bleeding after dry fucking or sharp insertions." },
        { key: "long_gape", parent: "stretch_1", name: "Long gape", source: "static/icons/long_gape.jpg", description: "Anus holds a given shape for longer and revocers into it's initial shape slowly. Certain drugs / liquids can speed up the process." }
    ];
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