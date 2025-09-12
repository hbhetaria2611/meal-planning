// This file acts as a simple database for your recipes.
// To add a new permanent recipe, copy one of the existing recipe objects,
// paste it at the end of the list, and change the details.
// Make sure each recipe has a unique 'id'.

window.initialRecipes = [
    {
        id: 1, name: "Paneer Butter Masala", cuisine: "Indian", description: "A rich and creamy dish of paneer (Indian cheese) in a tomato, butter, and cashew sauce.", prepTime: 15, cookTime: 30,
        ingredients: ["250g Paneer", "2 Onions, chopped", "3 Tomatoes, pureed", "1/4 cup Cashews", "1 tbsp Ginger-garlic paste", "1 tsp Turmeric powder", "1 tsp Red chili powder", "1 tsp Garam masala", "2 tbsp Butter", "2 tbsp Fresh cream"],
        instructions: "1. Soak cashews in hot water for 15 mins. Grind to a smooth paste.\n2. Sauté onions in butter until golden. Add ginger-garlic paste and cook for a minute.\n3. Add tomato puree, turmeric, chili powder and cook until oil separates.\n4. Add cashew paste and cook for 5 more minutes.\n5. Add water, garam masala, salt, and paneer cubes. Simmer for 10 minutes.\n6. Stir in fresh cream and serve hot.",
        imageUrl: "https://placehold.co/600x400/f59e0b/ffffff?text=Paneer+Masala"
    },
    {
        id: 2, name: "Vegetable Biryani", cuisine: "Indian", description: "A fragrant and flavorful rice dish with mixed vegetables, spices, and herbs.", prepTime: 20, cookTime: 40,
        ingredients: ["1 cup Basmati rice", "2 cups Mixed vegetables (carrots, peas, beans)", "1 Onion, sliced", "1 Tomato, chopped", "1/2 cup Yogurt", "1 tbsp Biryani masala", "1/2 tsp Turmeric powder", "Mint and Coriander leaves", "Whole spices (bay leaf, cinnamon, cloves)"],
        instructions: "1. Wash and soak rice for 30 minutes.\n2. In a pot, sauté whole spices and onions until golden.\n3. Add vegetables, tomato, and spice powders. Cook for 5 minutes.\n4. Whisk yogurt and add it to the pot. Cook for 2 more minutes.\n5. Layer the partially cooked rice over the vegetable mixture. Top with mint and coriander.\n6. Cover and cook on low heat (dum) for 20 minutes.",
        imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=Veg+Biryani"
    },
    {
        id: 3, name: "Lemon Herb Risotto", cuisine: "Italian", description: "A bright and creamy risotto with fresh herbs, lemon zest, and Parmesan cheese.", prepTime: 10, cookTime: 35,
        ingredients: ["1 cup Arborio rice", "5 cups Vegetable broth, warm", "1 Onion, finely chopped", "2 cloves Garlic, minced", "1/2 cup Dry white wine", "1/2 cup grated Parmesan cheese", "2 tbsp Olive oil", "2 tbsp Butter", "Zest of 1 lemon", "Fresh herbs (parsley, thyme)"],
        instructions: "1. In a large pan, sauté onions and garlic in olive oil until soft.\n2. Add the Arborio rice and toast for 1 minute.\n3. Pour in the white wine and cook until it's absorbed.\n4. Add the warm vegetable broth one ladle at a time, stirring continuously, waiting for it to be absorbed before adding the next.\n5. Once the rice is creamy and al dente, stir in the butter, Parmesan cheese, lemon zest, and fresh herbs. Season with salt and pepper.",
        imageUrl: "https://placehold.co/600x400/8b5cf6/ffffff?text=Lemon+Risotto"
    },
    {
        id: 4, name: "Margherita Pizza", cuisine: "Italian", description: "A classic Neapolitan pizza, made with San Marzano tomatoes, fresh mozzarella, fresh basil, salt, and extra-virgin olive oil.", prepTime: 20, cookTime: 15,
        ingredients: ["1 Pizza dough", "1/2 cup Tomato sauce (San Marzano)", "150g Fresh mozzarella, sliced", "Fresh basil leaves", "2 tbsp Olive oil", "Salt to taste"],
        instructions: "1. Preheat your oven to its highest temperature (around 250°C / 475°F).\n2. Stretch out the pizza dough on a floured surface.\n3. Spread a thin layer of tomato sauce over the dough.\n4. Arrange the mozzarella slices on top.\n5. Drizzle with olive oil and sprinkle with salt.\n6. Bake for 10-15 minutes, until the crust is golden and the cheese is bubbly.\n7. Top with fresh basil leaves before serving.",
        imageUrl: "https://placehold.co/600x400/ef4444/ffffff?text=Margherita+Pizza"
    },
    {
        id: 5, name: "Black Bean Enchiladas", cuisine: "Mexican", description: "Corn tortillas filled with a savory black bean mixture, smothered in red enchilada sauce and melted cheese.", prepTime: 15, cookTime: 25,
        ingredients: ["8 Corn tortillas", "1 can (15 oz) Black beans, rinsed", "1 can (15 oz) Red enchilada sauce", "1 cup Shredded Monterey Jack cheese", "1 small Onion, chopped", "1 tsp Cumin powder", "Optional toppings: sour cream, cilantro, avocado"],
        instructions: "1. Preheat oven to 190°C / 375°F.\n2. In a bowl, mash half the black beans. Mix in the rest of the beans, onion, and cumin.\n3. Warm the tortillas to make them pliable. Spread some enchilada sauce in a baking dish.\n4. Fill each tortilla with the bean mixture, roll it up, and place it seam-side down in the dish.\n5. Pour the remaining enchilada sauce over the tortillas and top with shredded cheese.\n6. Bake for 20-25 minutes, until heated through and the cheese is melted and bubbly.",
        imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Bean+Enchiladas"
    },
    {
        id: 6, name: "Veggie Fajitas", cuisine: "Mexican", description: "A sizzling mix of bell peppers and onions seasoned with classic fajita spices, served with warm tortillas.", prepTime: 15, cookTime: 15,
        ingredients: ["2 Bell peppers (different colors), sliced", "1 large Onion, sliced", "1 tbsp Fajita seasoning", "1 tbsp Oil", "Warm flour or corn tortillas", "Toppings: guacamole, salsa, sour cream"],
        instructions: "1. In a large skillet or cast iron pan, heat oil over medium-high heat.\n2. Add the sliced onions and bell peppers.\n3. Cook, stirring occasionally, until the vegetables are tender-crisp and slightly charred (about 10-12 minutes).\n4. Sprinkle with fajita seasoning and stir to coat everything well.\n5. Cook for another minute.\n6. Serve immediately with warm tortillas and your favorite toppings.",
        imageUrl: "https://placehold.co/600x400/f97316/ffffff?text=Veggie+Fajitas"
    },
    {
        id: 7, name: "Chana Masala", cuisine: "Indian", description: "A popular North Indian curry made with chickpeas, onions, tomatoes, and a blend of spices.", prepTime: 10, cookTime: 25,
        ingredients: ["1 can (15 oz) Chickpeas", "1 Onion, finely chopped", "2 Tomatoes, pureed", "1 tbsp Ginger-garlic paste", "1 tsp Cumin seeds", "1 tsp Coriander powder", "1/2 tsp Turmeric powder", "1 tsp Chana Masala powder"],
        instructions: "1. Heat oil in a pan, add cumin seeds. Once they splutter, add onions and cook until golden.\n2. Add ginger-garlic paste and cook for a minute.\n3. Add tomato puree and all spice powders. Cook until oil separates.\n4. Add the cooked chickpeas, salt, and some water. Simmer for 10 minutes.\n5. Garnish with coriander leaves and serve.",
        imageUrl: "https://placehold.co/600x400/fb923c/ffffff?text=Chana+Masala"
    },
    {
        id: 8, name: "Palak Paneer", cuisine: "Indian", description: "A classic vegetarian dish where paneer is cooked in a smooth and creamy spinach gravy.", prepTime: 15, cookTime: 20,
        ingredients: ["200g Paneer, cubed", "1 large bunch Spinach (Palak)", "1 Onion, chopped", "1 Tomato, chopped", "2 cloves Garlic, minced", "1 inch Ginger", "1/4 cup Cream", "1 tsp Garam Masala"],
        instructions: "1. Blanch spinach leaves in hot water for 2-3 minutes, then plunge into cold water. Puree the spinach.\n2. Sauté onions, ginger, and garlic until translucent. Add tomatoes and cook until soft.\n3. Add the spinach puree, salt, and garam masala. Cook for 5 minutes.\n4. Add paneer cubes and cream. Simmer for another 2-3 minutes.\n5. Serve hot with naan or rice.",
        imageUrl: "https://placehold.co/600x400/22c55e/ffffff?text=Palak+Paneer"
    },
    {
        id: 9, name: "Pasta Primavera", cuisine: "Italian", description: "A delightful pasta dish loaded with fresh spring vegetables in a light cream or olive oil sauce.", prepTime: 15, cookTime: 20,
        ingredients: ["250g Pasta (like Penne or Fettuccine)", "1 cup Mixed spring vegetables (asparagus, peas, broccoli)", "2 cloves Garlic, minced", "1/4 cup Heavy cream", "1/4 cup grated Parmesan cheese", "2 tbsp Olive oil", "Fresh basil"],
        instructions: "1. Cook pasta according to package directions. Drain, reserving some pasta water.\n2. While pasta cooks, sauté garlic in olive oil. Add vegetables and cook until tender-crisp.\n3. Add the cooked pasta to the skillet with vegetables. Stir in heavy cream and Parmesan cheese.\n4. Add a splash of reserved pasta water to create a light sauce. Season with salt and pepper.\n5. Garnish with fresh basil and serve.",
        imageUrl: "https://placehold.co/600x400/a3e635/ffffff?text=Pasta+Primavera"
    },
    {
        id: 10, name: "Caprese Salad Skewers", cuisine: "Italian", description: "A simple and elegant appetizer featuring cherry tomatoes, fresh mozzarella balls, and basil, drizzled with balsamic glaze.", prepTime: 15, cookTime: 0,
        ingredients: ["1 pint Cherry tomatoes", "200g Fresh mozzarella balls (ciliegine)", "Fresh basil leaves", "Balsamic glaze", "Olive oil", "Salt and pepper", "Wooden skewers"],
        instructions: "1. Thread one cherry tomato, one mozzarella ball, and one folded basil leaf onto each skewer.\n2. Repeat until the skewer is full.\n3. Arrange the skewers on a platter.\n4. Drizzle with olive oil and balsamic glaze just before serving.\n5. Sprinkle with a little salt and freshly ground black pepper.",
        imageUrl: "https://placehold.co/600x400/f87171/ffffff?text=Caprese+Skewers"
    },
    {
        id: 11, name: "Veggie Quesadillas", cuisine: "Mexican", description: "A quick and easy meal with tortillas filled with cheese, beans, and sautéed vegetables, grilled until golden.", prepTime: 10, cookTime: 10,
        ingredients: ["4 large Flour tortillas", "2 cups Shredded cheese (Mexican blend)", "1 can (15 oz) Black beans, rinsed", "1 Bell pepper, chopped", "1 small Onion, chopped", "1 tbsp Oil", "Serve with: salsa, sour cream, guacamole"],
        instructions: "1. Sauté the bell pepper and onion in oil until softened.\n2. Lay a tortilla flat. Sprinkle cheese over one half. Top with the sautéed vegetables and black beans.\n3. Sprinkle more cheese on top and fold the other half of the tortilla over.\n4. Cook in a lightly oiled pan or griddle over medium heat for 2-3 minutes per side, until golden brown and the cheese is melted.\n5. Cut into wedges and serve with your favorite dips.",
        imageUrl: "https://placehold.co/600x400/facc15/ffffff?text=Quesadillas"
    },
    {
        id: 12, name: "Spicy Tofu Tacos", cuisine: "Mexican", description: "Flavorful crumbled tofu seasoned with taco spices, serving as a delicious and healthy vegetarian taco filling.", prepTime: 10, cookTime: 15,
        ingredients: ["1 block Firm tofu, pressed and crumbled", "1 tbsp Taco seasoning", "1 tbsp Soy sauce", "1 tbsp Oil", "Taco shells or small tortillas", "Toppings: lettuce, tomato, cheese, salsa"],
        instructions: "1. Heat oil in a skillet over medium-high heat.\n2. Add the crumbled tofu and cook, stirring, until it starts to brown (about 5-7 minutes).\n3. Add the taco seasoning and soy sauce. Stir well to combine and cook for another 5 minutes until the tofu is well-seasoned and slightly crispy.\n4. Serve the tofu filling in taco shells or tortillas with your desired toppings.",
        imageUrl: "https://placehold.co/600x400/c084fc/ffffff?text=Tofu+Tacos"
    },
    {
        id: 13, name: "Aloo Gobi", cuisine: "Indian", description: "A classic vegetarian Indian dish made with potatoes (aloo) and cauliflower (gobi) cooked in a blend of aromatic spices.", prepTime: 15, cookTime: 25,
        ingredients: ["1 medium Cauliflower, cut into florets", "2 large Potatoes, cubed", "1 Onion, chopped", "1 Tomato, chopped", "1 tsp Cumin seeds", "1 tsp Turmeric powder", "1 tsp Coriander powder", "1/2 tsp Ginger paste"],
        instructions: "1. Heat oil in a pan, add cumin seeds. When they sizzle, add the onion and cook until translucent.\n2. Add ginger paste and cook for another minute.\n3. Add the potatoes and cauliflower, turmeric, and coriander powder. Mix well.\n4. Cover and cook on low-medium heat for 15-20 minutes, stirring occasionally, until vegetables are tender.\n5. Add chopped tomato and cook for another 5 minutes. Garnish with fresh cilantro.",
        imageUrl: "https://placehold.co/600x400/fbbf24/ffffff?text=Aloo+Gobi"
    },
    {
        id: 14, name: "Dal Makhani", cuisine: "Indian", description: "A rich, creamy, and flavorful lentil stew made with black lentils (urad dal) and kidney beans (rajma), simmered in a buttery tomato sauce.", prepTime: 10, cookTime: 60,
        ingredients: ["1 cup Black lentils (Urad dal)", "1/4 cup Kidney beans (Rajma)", "1 Onion, finely chopped", "2 Tomatoes, pureed", "2 tbsp Butter", "1 tbsp Ginger-garlic paste", "1/4 cup Cream", "1 tsp Garam masala"],
        instructions: "1. Soak lentils and kidney beans overnight. Pressure cook until very soft.\n2. In a separate pan, melt butter. Sauté onions until golden brown.\n3. Add ginger-garlic paste and tomato puree. Cook until the mixture thickens and oil separates.\n4. Pour this mixture into the cooked lentils. Add salt and garam masala.\n5. Simmer on low heat for at least 30 minutes, mashing slightly.\n6. Stir in cream before serving.",
        imageUrl: "https://placehold.co/600x400/92400e/ffffff?text=Dal+Makhani"
    },
    {
        id: 15, name: "Eggplant Parmesan", cuisine: "Italian", description: "Layers of breaded eggplant slices, rich marinara sauce, mozzarella, and Parmesan cheese, baked to perfection.", prepTime: 20, cookTime: 40,
        ingredients: ["1 large Eggplant, sliced", "1 cup Breadcrumbs", "1/2 cup Grated Parmesan cheese", "2 cups Marinara sauce", "1.5 cups Shredded mozzarella cheese", "1 Egg, beaten", "Olive oil for frying"],
        instructions: "1. Preheat oven to 375°F (190°C).\n2. Dip eggplant slices in beaten egg, then coat with a mixture of breadcrumbs and Parmesan cheese.\n3. Pan-fry the eggplant slices in olive oil until golden brown on both sides. Drain on paper towels.\n4. In a baking dish, spread a layer of marinara sauce. Arrange a layer of eggplant, followed by mozzarella and Parmesan.\n5. Repeat the layers, ending with a final layer of sauce and cheese.\n6. Bake for 25-30 minutes, or until the sauce is bubbly and the cheese is melted and golden.",
        imageUrl: "https://placehold.co/600x400/a855f7/ffffff?text=Eggplant+Parmesan"
    },
    {
        id: 16, name: "Spinach & Ricotta Stuffed Shells", cuisine: "Italian", description: "Jumbo pasta shells filled with a creamy mixture of spinach and ricotta cheese, baked in marinara sauce.", prepTime: 20, cookTime: 30,
        ingredients: ["12 Jumbo pasta shells", "15 oz Ricotta cheese", "1 cup Frozen spinach, thawed and squeezed dry", "1 cup Shredded mozzarella cheese", "1/2 cup Grated Parmesan cheese", "1 Egg", "2 cups Marinara sauce"],
        instructions: "1. Cook pasta shells according to package directions. Drain.\n2. Preheat oven to 375°F (190°C).\n3. In a bowl, mix ricotta, spinach, half of the mozzarella, Parmesan, and the egg. Season with salt and pepper.\n4. Spread a layer of marinara sauce in a baking dish.\n5. Fill each cooked shell with the ricotta mixture and arrange them in the dish.\n6. Top with remaining marinara sauce and mozzarella cheese.\n7. Bake for 20-25 minutes until heated through and bubbly.",
        imageUrl: "https://placehold.co/600x400/ec4899/ffffff?text=Stuffed+Shells"
    },
    {
        id: 17, name: "Vegetarian Chiles Rellenos", cuisine: "Mexican", description: "Roasted poblano peppers stuffed with cheese, dipped in a light egg batter, and fried until golden, often served with a tomato-based sauce.", prepTime: 25, cookTime: 20,
        ingredients: ["4 large Poblano peppers", "1 cup Queso Oaxaca or Monterey Jack cheese, shredded", "2 Eggs, separated", "1/4 cup Flour", "Oil for frying", "Tomato salsa for serving"],
        instructions: "1. Roast the poblano peppers over an open flame or under a broiler until the skin is blistered and blackened all over.\n2. Place them in a bowl and cover for 15 minutes to steam. Then, peel off the skin, make a slit, and carefully remove the seeds.\n3. Stuff each pepper with cheese.\n4. Beat egg whites until stiff peaks form. Gently fold in the egg yolks. Dredge stuffed peppers in flour, then dip into the egg batter.\n5. Fry in hot oil until golden brown on all sides. Drain on paper towels and serve with salsa.",
        imageUrl: "https://placehold.co/600x400/16a34a/ffffff?text=Chiles+Rellenos"
    },
    {
        id: 18, name: "Lentil Walnut Tacos", cuisine: "Mexican", description: "A hearty and nutritious taco filling made from cooked lentils and toasted walnuts, seasoned with classic taco spices.", prepTime: 10, cookTime: 20,
        ingredients: ["1 cup Brown or green lentils, cooked", "1/2 cup Walnuts, toasted and chopped", "1 tbsp Taco seasoning", "1/2 Onion, chopped", "2 cloves Garlic, minced", "Taco shells and desired toppings"],
        instructions: "1. Sauté onion and garlic in a pan until soft.\n2. Add the cooked lentils, chopped walnuts, and taco seasoning. Stir to combine.\n3. Cook for about 5-7 minutes, adding a little water if it becomes too dry, until heated through.\n4. Lightly mash some of the lentils to create a more cohesive filling.\n5. Serve the lentil-walnut mixture in taco shells with your favorite toppings.",
        imageUrl: "https://placehold.co/600x400/ca8a04/ffffff?text=Lentil+Tacos"
    },
    {
        id: 19, name: "Malai Kofta", cuisine: "Indian", description: "Deep-fried balls (kofta) made of potato and paneer are dunked in a rich, creamy, and lightly sweet gravy.", prepTime: 30, cookTime: 30,
        ingredients: ["For Kofta: 2 boiled Potatoes, 100g grated Paneer, 2 tbsp Cornflour", "For Gravy: 2 Onions, 2 Tomatoes, 10 Cashews, 1/4 cup Cream, 1 tsp Ginger-garlic paste"],
        instructions: "1. For kofta, mash potatoes and paneer. Add cornflour, salt, and form into small balls. Deep fry until golden brown.\n2. For gravy, make a paste of onions, and a separate paste of tomatoes and cashews.\n3. Sauté onion paste until golden. Add ginger-garlic paste, then the tomato-cashew paste. Cook until oil separates.\n4. Add spice powders (turmeric, coriander) and cook for a minute.\n5. Add water and simmer for 10 minutes. Stir in cream and garam masala.\n6. Add the fried koftas to the gravy just before serving.",
        imageUrl: "https://placehold.co/600x400/fca5a5/ffffff?text=Malai+Kofta"
    },
    {
        id: 20, name: "Gnocchi with Pesto", cuisine: "Italian", description: "Soft, pillowy potato gnocchi tossed in a vibrant and aromatic basil pesto sauce.", prepTime: 5, cookTime: 10,
        ingredients: ["1 package (500g) Potato gnocchi", "1/2 cup Basil pesto", "1/4 cup Grated Parmesan cheese", "Cherry tomatoes, halved (optional)", "Pine nuts for garnish"],
        instructions: "1. Cook the gnocchi according to package directions (they usually cook in 2-3 minutes and float to the top when done).\n2. Reserve a small amount of the cooking water, then drain the gnocchi.\n3. In a large bowl, toss the hot gnocchi with the basil pesto. Add a tablespoon or two of the reserved pasta water to help the sauce coat the gnocchi evenly.\n4. Stir in the Parmesan cheese and cherry tomatoes (if using).\n5. Serve immediately, garnished with extra Parmesan and pine nuts.",
        imageUrl: "https://placehold.co/600x400/4ade80/ffffff?text=Pesto+Gnocchi"
    },
    {
        id: 21, name: "Homemade Guacamole", cuisine: "Mexican", description: "A classic and essential Mexican dip made from mashed ripe avocados, onion, cilantro, lime juice, and jalapeños.", prepTime: 10, cookTime: 0,
        ingredients: ["3 ripe Avocados", "1/2 small Onion, finely chopped", "1/4 cup fresh Cilantro, chopped", "1 Jalapeño, minced (optional)", "Juice of 1 Lime", "Salt to taste"],
        instructions: "1. Halve the avocados, remove the pits, and scoop the flesh into a medium bowl.\n2. Coarsely mash the avocado with a fork, leaving some chunks for texture.\n3. Add the chopped onion, cilantro, jalapeño (if using), and lime juice.\n4. Stir everything together until well combined.\n5. Season generously with salt. Taste and adjust seasoning if necessary.\n6. Serve immediately with tortilla chips.",
        imageUrl: "https://placehold.co/600x400/84cc16/ffffff?text=Guacamole"
    },
    {
        id: 22, name: "Classic Bruschetta", cuisine: "Italian", description: "Toasted baguette slices topped with a fresh, vibrant mixture of diced tomatoes, garlic, basil, and olive oil.", prepTime: 15, cookTime: 5,
        ingredients: ["1 Baguette, sliced", "4 ripe Roma tomatoes, diced", "2 cloves Garlic, minced", "1/4 cup fresh Basil, chopped", "2 tbsp Olive oil", "Balsamic glaze for drizzling (optional)"],
        instructions: "1. Preheat oven to 375°F (190°C). Arrange baguette slices on a baking sheet and toast for 5-7 minutes until lightly golden.\n2. In a bowl, combine the diced tomatoes, minced garlic, chopped basil, and olive oil. Season with salt and pepper.\n3. Let the tomato mixture sit for about 10 minutes for the flavors to meld.\n4. Spoon the tomato mixture onto the toasted baguette slices.\n5. Drizzle with balsamic glaze just before serving, if desired.",
        imageUrl: "https://placehold.co/600x400/dc2626/ffffff?text=Bruschetta"
    },
    {
        id: 23, name: "Corn & Zucchini Tostadas", cuisine: "Mexican", description: "Crispy corn tortillas topped with refried beans, a fresh sauté of corn and zucchini, and crumbled cheese.", prepTime: 10, cookTime: 15,
        ingredients: ["8 Tostada shells", "1 can (15 oz) Refried beans, heated", "2 Zucchini, diced", "1 cup Corn kernels (fresh or frozen)", "1/2 Onion, chopped", "1 cup Cotija or Feta cheese, crumbled", "1 tbsp Olive oil"],
        instructions: "1. Heat olive oil in a skillet. Sauté the onion until soft, then add the zucchini and corn. Cook until tender-crisp, about 5-7 minutes. Season with salt and pepper.\n2. To assemble, spread a layer of warm refried beans on each tostada shell.\n3. Top with the corn and zucchini mixture.\n4. Sprinkle generously with crumbled cheese.\n5. Serve immediately, with salsa or sour cream on the side.",
        imageUrl: "https://placehold.co/600x400/f59e0b/ffffff?text=Veggie+Tostadas"
    },
    {
        id: 24, name: "Vegetable Samosas", cuisine: "Indian", description: "A popular Indian appetizer consisting of a crispy, fried pastry shell filled with a savory mixture of spiced potatoes and peas.", prepTime: 40, cookTime: 20,
        ingredients: ["For dough: 1 cup All-purpose flour, 2 tbsp oil, water", "For filling: 2 boiled Potatoes, mashed, 1/2 cup green Peas, 1 tsp Cumin seeds, 1 tsp ground Coriander, 1/2 tsp Garam masala", "Oil for deep frying"],
        instructions: "1. For the dough, mix flour, salt, and oil. Gradually add water to form a firm dough. Cover and rest for 30 minutes.\n2. For the filling, heat a little oil, add cumin seeds, then add mashed potatoes, peas, and all the spice powders. Mix well and cook for 5 minutes.\n3. Divide the dough into small balls. Roll each ball into a thin oval, then cut it in half to make two semicircles.\n4. Form a cone shape from a semicircle, fill it with the potato mixture, and seal the edges tightly using a little water.\n5. Deep fry the samosas on low-medium heat until they are golden brown and crispy.",
        imageUrl: "https://placehold.co/600x400/d97706/ffffff?text=Samosas"
    },
    {
        id: 25, name: "Khaman Dhokla", cuisine: "Gujarati", description: "A popular savory, steamed cake made from gram flour, it's soft, fluffy, and spongy.", prepTime: 15, cookTime: 20,
        ingredients: ["1 cup Gram flour (Besan)", "1 tbsp Semolina (Sooji)", "1 tsp Ginger-chili paste", "1 tsp Lemon juice", "1 tsp Eno fruit salt", "For tempering: 1 tbsp Oil, 1 tsp Mustard seeds, Curry leaves, Green chilies", "2 tbsp Sugar", "Coriander for garnish"],
        instructions: "1. Mix gram flour, semolina, ginger-chili paste, lemon juice, sugar, and salt with water to make a smooth batter.\n2. Let it rest for 15 minutes.\n3. Just before steaming, add Eno fruit salt and mix gently.\n4. Pour the batter into a greased steaming pan and steam for 15-20 minutes.\n5. For tempering, heat oil and add mustard seeds, curry leaves, and green chilies. Add a little water and sugar, and bring to a boil.\n6. Pour the tempering over the cooked dhokla. Garnish with coriander and serve.",
        imageUrl: "https://placehold.co/600x400/fcd34d/ffffff?text=Dhokla"
    },
    {
        id: 26, name: "Khandvi", cuisine: "Gujarati", description: "Soft, savory rolls made from gram flour and yogurt, tempered with mustard seeds and garnished with coconut.", prepTime: 10, cookTime: 20,
        ingredients: ["1 cup Gram flour (Besan)", "1 cup Sour yogurt", "2 cups Water", "1 tsp Ginger-chili paste", "1/4 tsp Turmeric powder", "For tempering: 1 tbsp Oil, 1 tsp Mustard seeds, a pinch of Asafoetida (hing)", "Grated coconut and cilantro for garnish"],
        instructions: "1. Whisk gram flour, yogurt, water, ginger-chili paste, turmeric, and salt until there are no lumps.\n2. Cook this mixture in a non-stick pan on low-medium heat, stirring continuously until it becomes very thick.\n3. Quickly spread a thin layer of the hot mixture onto a smooth, greased surface (like the back of a steel plate).\n4. Let it cool for 5-10 minutes. Cut into wide strips and carefully roll them up.\n5. Prepare the tempering by heating oil and adding mustard seeds and asafoetida.\n6. Pour the tempering over the Khandvi rolls. Garnish with grated coconut and cilantro.",
        imageUrl: "https://placehold.co/600x400/fef08a/ffffff?text=Khandvi"
    },
    {
        id: 27, name: "Undhiyu", cuisine: "Gujarati", description: "A classic Gujarati mixed vegetable casserole, traditionally cooked upside down underground in earthen pots.", prepTime: 30, cookTime: 45,
        ingredients: ["1 cup Mixed vegetables (Surti papdi, sweet potatoes, baby potatoes, eggplant)", "1 cup Methi Muthias (fenugreek dumplings)", "1/2 cup Grated coconut", "1/4 cup Peanuts, crushed", "2 tbsp Sesame seeds", "Ginger-garlic-chili paste", "1 tsp Garam masala", "Coriander leaves"],
        instructions: "1. Make a stuffing paste with coconut, peanuts, sesame seeds, ginger-garlic-chili paste, garam masala, and salt.\n2. Stuff the baby potatoes and eggplants with this mixture.\n3. In a pressure cooker, layer the sturdiest vegetables like potatoes and surti papdi at the bottom.\n4. Add the stuffed vegetables and the remaining unstuffed veggies.\n5. Sprinkle the rest of the masala on top. Add methi muthias.\n6. Add a little oil and water, and pressure cook for 2-3 whistles.\n7. Garnish with fresh coriander before serving.",
        imageUrl: "https://placehold.co/600x400/65a30d/ffffff?text=Undhiyu"
    },
    {
        id: 28, name: "Dal Dhokli", cuisine: "Gujarati", description: "A comforting one-pot meal where spiced whole wheat flour dumplings are simmered in a sweet and tangy lentil stew.", prepTime: 20, cookTime: 30,
        ingredients: ["For Dal: 1 cup Pigeon peas (Toor dal), 2 tbsp Peanuts, 1 piece Jaggery", "For Dhokli: 1 cup Whole wheat flour, 1 tsp Red chili powder, 1/4 tsp Turmeric", "For tempering: 1 tbsp Ghee, 1 tsp Mustard seeds, 1 tsp Cumin seeds, Curry leaves, a pinch of Asafoetida (hing)"],
        instructions: "1. Pressure cook the toor dal with peanuts, salt, and turmeric until soft. Whisk until smooth.\n2. Add water to the dal to reach desired consistency. Add jaggery, lemon juice, and red chili powder. Let it simmer.\n3. For dhokli, make a firm dough with wheat flour, spices, a little oil, and water. Roll it thin and cut into diamond shapes.\n4. Drop the dhokli pieces into the simmering dal one by one. Cook for 15 minutes until the dhokli is cooked through.\n5. Prepare tempering with ghee, mustard seeds, cumin seeds, curry leaves, and asafoetida. Pour over the dal dhokli.\n6. Garnish with cilantro and serve hot.",
        imageUrl: "https://placehold.co/600x400/f59e0b/ffffff?text=Dal+Dhokli"
    },
    {
        id: 29, name: "Fluffy Pancakes", cuisine: "Breakfast", description: "Classic, light, and fluffy American-style pancakes, perfect with maple syrup and berries.", prepTime: 10, cookTime: 15,
        ingredients: ["1.5 cups All-purpose flour", "3.5 tsp Baking powder", "1 tsp Salt", "1 tbsp White sugar", "1.25 cups Milk", "1 Egg", "3 tbsp Butter, melted"],
        instructions: "1. In a large bowl, sift together the flour, baking powder, salt, and sugar.\n2. Make a well in the center and pour in the milk, egg, and melted butter; mix until smooth.\n3. Heat a lightly oiled griddle or frying pan over medium-high heat.\n4. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.\n5. Brown on both sides and serve hot with your favorite toppings.",
        imageUrl: "https://placehold.co/600x400/7c3aed/ffffff?text=Pancakes"
    },
    {
        id: 30, name: "Buttermilk Biscuits", cuisine: "Breakfast", description: "Warm, flaky, and tender buttermilk biscuits that are perfect for breakfast, served with butter and jam.", prepTime: 15, cookTime: 15,
        ingredients: ["2 cups All-purpose flour", "1 tbsp Baking powder", "1/2 tsp Salt", "1/2 cup Cold butter, cubed", "3/4 cup Buttermilk"],
        instructions: "1. Preheat oven to 425°F (220°C).\n2. In a large bowl, whisk together flour, baking powder, and salt.\n3. Cut in the cold butter using a pastry blender or your fingers until the mixture resembles coarse crumbs.\n4. Stir in the buttermilk until a soft dough forms.\n5. Turn the dough out onto a floured surface and knead briefly 3-4 times. Pat or roll the dough out to 1/2-inch thickness.\n6. Cut out biscuits with a round cutter and place them on an ungreased baking sheet.\n7. Bake for 12-15 minutes, or until golden brown.",
        imageUrl: "https://placehold.co/600x400/ea580c/ffffff?text=Biscuits"
    },
    {
        id: 31, name: "Tofu Scramble", cuisine: "Breakfast", description: "A popular vegan alternative to scrambled eggs, seasoned with nutritional yeast and turmeric for a cheesy, savory flavor and yellow color.", prepTime: 5, cookTime: 10,
        ingredients: ["1 block Firm tofu, pressed", "1 tbsp Olive oil", "1/4 cup Nutritional yeast", "1/2 tsp Turmeric powder", "1/2 tsp Garlic powder", "Salt and black pepper to taste", "Optional: chopped onions, bell peppers, spinach"],
        instructions: "1. Crumble the pressed tofu with your hands into a bowl.\n2. Heat olive oil in a skillet over medium heat. If using veggies, sauté them now until soft.\n3. Add the crumbled tofu to the skillet.\n4. Sprinkle with nutritional yeast, turmeric, garlic powder, salt, and pepper.\n5. Stir and cook for 5-7 minutes until the tofu is heated through and has absorbed the spices.\n6. Serve immediately.",
        imageUrl: "https://placehold.co/600x400/f59e0b/ffffff?text=Tofu+Scramble"
    },
    {
        id: 32, name: "Classic Oatmeal", cuisine: "Breakfast", description: "A simple, healthy, and hearty bowl of oatmeal, easily customizable with your favorite fruits, nuts, and sweeteners.", prepTime: 2, cookTime: 8,
        ingredients: ["1/2 cup Rolled oats", "1 cup Water or milk (or a mix)", "Pinch of salt", "Toppings: Berries, banana slices, walnuts, maple syrup, cinnamon"],
        instructions: "1. In a small saucepan, bring the water or milk to a simmer.\n2. Stir in the rolled oats and a pinch of salt.\n3. Reduce the heat to low and cook for 5-7 minutes, stirring occasionally, until the oats are tender and have absorbed most of the liquid.\n4. Pour the oatmeal into a bowl.\n5. Add your favorite toppings like fresh berries, sliced banana, a sprinkle of cinnamon, and a drizzle of maple syrup.",
        imageUrl: "https://placehold.co/600x400/64748b/ffffff?text=Oatmeal"
    },
    {
        id: 33, name: "Thepla", cuisine: "Gujarati", description: "A soft, spiced flatbread made from wheat flour, gram flour, and fenugreek leaves (methi). A travel essential!", prepTime: 20, cookTime: 20,
        ingredients: ["1 cup Whole wheat flour", "1/4 cup Gram flour (Besan)", "1/2 cup chopped Fenugreek leaves (Methi)", "1/4 cup Yogurt", "1 tsp Red chili powder", "1/2 tsp Turmeric powder", "Oil for cooking"],
        instructions: "1. In a bowl, mix all ingredients except oil to form a soft dough. Use a little water if needed.\n2. Let the dough rest for 15 minutes.\n3. Divide the dough into small balls and roll them out into thin circles.\n4. Cook on a hot griddle (tava) on both sides, applying a little oil, until golden brown spots appear.\n5. Serve hot with yogurt, chutney, or pickles.",
        imageUrl: "https://placehold.co/600x400/a16207/ffffff?text=Thepla"
    },
    {
        id: 34, name: "Sev Tameta nu Shaak", cuisine: "Gujarati", description: "A sweet, spicy, and tangy tomato curry topped with a generous amount of crispy gram flour noodles (sev).", prepTime: 10, cookTime: 15,
        ingredients: ["4 large Tomatoes, chopped", "1 cup Sev (thick variety)", "1 tsp Cumin seeds", "1 tsp Ginger-chili paste", "1/2 tsp Turmeric powder", "1 tsp Red chili powder", "1 tbsp Jaggery", "Coriander for garnish"],
        instructions: "1. Heat oil in a pan, add cumin seeds. Once they splutter, add ginger-chili paste.\n2. Add the chopped tomatoes and cook until they become soft and mushy.\n3. Add turmeric, chili powder, jaggery, and salt. Mix well.\n4. Add 1 cup of water and bring the curry to a boil. Let it simmer for 5-7 minutes.\n5. Turn off the heat. Just before serving, add the sev to the curry and garnish with coriander. Serve immediately to keep the sev crispy.",
        imageUrl: "https://placehold.co/600x400/b91c1c/ffffff?text=Sev+Tameta"
    },
    {
        id: 35, name: "Patra", cuisine: "Gujarati", description: "A savory snack made by smearing a spiced gram flour paste on colocasia leaves, which are then rolled, steamed, and pan-fried.", prepTime: 25, cookTime: 30,
        ingredients: ["8-10 Colocasia leaves (Arbi ke patte)", "1.5 cups Gram flour (Besan)", "1/4 cup Jaggery", "2 tbsp Tamarind pulp", "1 tsp Ginger-chili paste", "1 tsp Red chili powder", "For tempering: Oil, mustard seeds, sesame seeds"],
        instructions: "1. Make a thick paste of gram flour, jaggery, tamarind pulp, ginger-chili paste, and spices.\n2. Wash and de-vein the colocasia leaves. Place one leaf upside down and spread a thin layer of the paste.\n3. Place another leaf on top and repeat. Stack about 3-4 leaves.\n4. Fold the sides and roll the stack tightly. Steam the rolls for 20-25 minutes.\n5. Let the rolls cool completely, then slice them into 1/2-inch thick pieces.\n6. For tempering, heat oil and add mustard and sesame seeds. Add the patra slices and pan-fry until crispy.",
        imageUrl: "https://placehold.co/600x400/15803d/ffffff?text=Patra"
    },
    {
        id: 36, name: "Handvo", cuisine: "Gujarati", description: "A savory, baked or pan-fried cake made from a fermented batter of rice and lentils, often with bottle gourd (dudhi).", prepTime: 20, cookTime: 40,
        ingredients: ["1 cup Rice", "1/2 cup mixed Lentils (Toor, Chana)", "1/2 cup grated Bottle Gourd (Dudhi)", "1/4 cup Yogurt", "1 tsp Ginger-chili paste", "1 tsp Eno fruit salt", "For tempering: Oil, mustard seeds, sesame seeds, curry leaves"],
        instructions: "1. Soak rice and lentils for 4-5 hours. Grind to a coarse batter. Let it ferment overnight.\n2. To the fermented batter, add grated bottle gourd, yogurt, ginger-chili paste, sugar, and salt. Mix well.\n3. Heat oil in a pan for tempering. Add mustard seeds, sesame seeds, and curry leaves. Pour half of this into the batter.\n4. Add Eno fruit salt to the batter and mix gently.\n5. Pour the batter into a greased baking pan, top with the remaining tempering, and bake at 350°F (180°C) for 30-40 minutes, or until a toothpick comes out clean.",
        imageUrl: "https://placehold.co/600x400/b45309/ffffff?text=Handvo"
    },
    {
        id: 37, name: "Gujarati Kadhi", cuisine: "Gujarati", description: "A sweet, spicy, and tangy soup-like dish made from yogurt and gram flour, distinct from its North Indian counterpart.", prepTime: 5, cookTime: 15,
        ingredients: ["1 cup Yogurt (slightly sour)", "2 tbsp Gram flour (Besan)", "1 tbsp Ginger-chili paste", "2 tbsp Sugar or Jaggery", "For tempering: 1 tbsp Ghee, 1 tsp Mustard seeds, 1 tsp Cumin seeds, Cinnamon stick, Cloves, Curry leaves"],
        instructions: "1. Whisk yogurt and gram flour together until smooth, ensuring no lumps. Add about 2-3 cups of water.\n2. Add ginger-chili paste, sugar/jaggery, and salt. Mix well.\n3. Bring this mixture to a boil over medium heat, stirring continuously to prevent it from curdling.\n4. Simmer for 10-12 minutes until the kadhi thickens slightly and the raw taste of besan is gone.\n5. For the tempering, heat ghee in a small pan. Add all tempering ingredients and let them splutter. Pour this over the simmering kadhi.\n6. Garnish with fresh coriander and serve hot with rice.",
        imageUrl: "https://placehold.co/600x400/fefce8/000000?text=Gujarati+Kadhi"
    },
    {
        id: 38, name: "Lilva Kachori", cuisine: "Gujarati", description: "A delectable fried pastry filled with a savory mixture of fresh pigeon peas (lilva) and spices.", prepTime: 30, cookTime: 25,
        ingredients: ["For dough: 1 cup All-purpose flour", "For filling: 1 cup fresh Pigeon Peas (Lilva), 1 tbsp Ginger-chili paste, 1 tbsp Sugar, 1 tsp Lemon juice, Garam masala", "Oil for deep frying"],
        instructions: "1. Make a firm dough with flour, a little oil, salt, and water. Rest for 20 minutes.\n2. Coarsely grind the fresh pigeon peas. In a pan, sauté the ground peas with ginger-chili paste and spices. Add sugar and lemon juice. Let it cool.\n3. Make small balls from the dough and roll them into small circles.\n4. Place a spoonful of the filling in the center, bring the edges together, and seal to form a ball.\n5. Deep fry the kachoris on low-medium heat until they are golden brown and crisp.",
        imageUrl: "https://placehold.co/600x400/84cc16/ffffff?text=Lilva+Kachori"
    },
    {
        id: 39, name: "Mohanthal", cuisine: "Gujarati", description: "A traditional, dense, fudgy sweet made from roasted gram flour (besan), ghee, sugar, and flavored with cardamom and nuts.", prepTime: 10, cookTime: 40,
        ingredients: ["2 cups Gram flour (Besan)", "1.5 cups Ghee", "1.5 cups Sugar", "1 cup Milk", "1 tsp Cardamom powder", "Sliced almonds and pistachios for garnish"],
        instructions: "1. In a heavy-bottomed pan, roast the gram flour in ghee on low heat, stirring continuously, until it turns golden brown and aromatic (about 25-30 mins).\n2. In a separate pan, prepare a sugar syrup of one-string consistency by boiling sugar and water.\n3. Pour the hot sugar syrup into the roasted besan mixture. Stir vigorously to avoid lumps.\n4. Add milk and cardamom powder. Cook for another 5-7 minutes until the mixture thickens and leaves the sides of the pan.\n5. Pour the mixture into a greased tray. Garnish with nuts and let it set for a few hours. Cut into squares.",
        imageUrl: "https://placehold.co/600x400/f9a8d4/ffffff?text=Mohanthal"
    },
    {
        id: 40, name: "Basundi", cuisine: "Gujarati", description: "A rich, creamy, and sweet dessert made by slowly simmering and reducing milk until it thickens, flavored with cardamom and nuts.", prepTime: 5, cookTime: 50,
        ingredients: ["1 liter Full-fat milk", "1/2 cup Sugar", "1/2 tsp Cardamom powder", "A few strands of Saffron", "Chopped almonds and pistachios"],
        instructions: "1. In a heavy, wide pan, bring the milk to a boil.\n2. Reduce the heat to medium-low and simmer, stirring every few minutes to prevent it from sticking to the bottom.\n3. Scrape the cream that forms on the sides and stir it back into the milk. This makes the basundi thick and rich.\n4. Continue to simmer until the milk is reduced to about half its original volume.\n5. Add sugar, cardamom powder, and saffron. Stir until the sugar dissolves.\n6. Cook for another 5 minutes. Garnish with chopped nuts. Serve chilled or warm.",
        imageUrl: "https://placehold.co/600x400/fed7aa/000000?text=Basundi"
    },
    {
        id: 41, name: "Pudla (Savory Pancakes)", cuisine: "Gujarati", description: "Quick and savory pancakes made from a gram flour batter, often mixed with chopped vegetables and spices.", prepTime: 10, cookTime: 15,
        ingredients: ["1 cup Gram flour (Besan)", "1/4 cup finely chopped Onion", "1/4 cup finely chopped Tomato", "1 Green chili, minced", "1/4 tsp Turmeric powder", "A pinch of Asafoetida (hing)", "Oil for cooking"],
        instructions: "1. In a bowl, whisk gram flour with water to make a smooth, lump-free batter of pouring consistency.\n2. Add all the chopped vegetables, chili, turmeric, asafoetida, and salt. Mix well.\n3. Heat a non-stick pan or griddle and lightly grease it with oil.\n4. Pour a ladleful of batter and spread it in a circular motion to form a pancake.\n5. Drizzle a little oil around the edges and cook for 2-3 minutes on each side, until golden brown and crisp.\n6. Serve hot with chutney or ketchup.",
        imageUrl: "https://placehold.co/600x400/fcd34d/ffffff?text=Pudla"
    },
    {
        id: 42, name: "Dabeli", cuisine: "Gujarati", description: "A popular street food where a sweet and spicy potato mixture is stuffed into a pav (burger bun) and garnished with sev, pomegranate, and roasted peanuts.", prepTime: 20, cookTime: 15,
        ingredients: ["4 Pav buns", "2 boiled Potatoes, mashed", "2 tbsp Dabeli masala", "1 tbsp Tamarind chutney", "For garnish: Nylon sev, roasted peanuts, pomegranate seeds, chopped onion"],
        instructions: "1. Heat a little oil and sauté the dabeli masala for a minute. Add the mashed potatoes, tamarind chutney, and a little water. Mix well and cook for 5 minutes.\n2. Slit the pav buns horizontally, leaving one side intact.\n3. Apply tamarind chutney on one inner side and garlic chutney (optional) on the other.\n4. Fill the buns with a generous amount of the potato mixture.\n5. Garnish the filling with roasted peanuts, pomegranate seeds, and chopped onion.\n6. Press fine sev on all open sides. Lightly toast the stuffed pav on a hot griddle with butter and serve immediately.",
        imageUrl: "https://placehold.co/600x400/fb7185/ffffff?text=Dabeli"
    },
    {
        id: 43, name: "Rotlo", cuisine: "Gujarati", description: "A traditional flatbread made from millet flour (bajra), typically cooked on a clay griddle and served with ghee and jaggery.", prepTime: 10, cookTime: 15,
        ingredients: ["1 cup Millet flour (Bajra)", "Warm water as needed", "Salt to taste", "Ghee for serving"],
        instructions: "1. In a bowl, mix millet flour and salt. Gradually add warm water and knead to form a smooth, soft dough.\n2. Divide the dough into equal portions.\n3. Take one portion and flatten it between your palms, gently patting and pressing to form a round, flat circle (about 5-6 inches in diameter).\n4. Cook the rotlo on a hot clay or cast-iron griddle on medium heat.\n5. Flip it when one side is partially cooked. Cook the other side, then place it directly on a low flame using tongs. It will puff up.\n6. Serve immediately with a generous dollop of ghee, jaggery, and garlic chutney.",
        imageUrl: "https://placehold.co/600x400/a17a4d/ffffff?text=Rotlo"
    },
    {
        id: 44, name: "Fafda", cuisine: "Gujarati", description: "A crunchy, fried snack made from gram flour, typically enjoyed for breakfast with a side of fried green chilies and papaya chutney (sambharo).", prepTime: 15, cookTime: 20,
        ingredients: ["1 cup Gram flour (Besan)", "1/4 tsp Baking soda", "A pinch of Asafoetida (hing)", "1 tbsp Oil", "Salt and pepper to taste", "Oil for deep frying"],
        instructions: "1. Make a firm dough by mixing gram flour, baking soda, asafoetida, oil, salt, pepper, and just enough water.\n2. Knead the dough well for 5-7 minutes until it is smooth and pliable.\n3. Take a small portion of the dough and place it on a greased wooden board.\n4. Using the base of your palm, press and drag the dough in a straight line to form a long, thin strip.\n5. Carefully lift the strip with a thin knife and deep fry in hot oil until it is light yellow and crisp.\n6. Serve immediately with fried chilies and papaya chutney.",
        imageUrl: "https://placehold.co/600x400/fde047/000000?text=Fafda"
    },
    
    // Additional Indian Recipes
    {
        id: 45, name: "Rajma (Kidney Bean Curry)", cuisine: "Indian", description: "A hearty North Indian curry made with kidney beans in a rich tomato-based gravy.", prepTime: 20, cookTime: 45,
        ingredients: ["1 cup Kidney beans (Rajma), soaked overnight", "2 Onions, chopped", "3 Tomatoes, pureed", "1 tbsp Ginger-garlic paste", "1 tsp Cumin seeds", "2 tsp Coriander powder", "1 tsp Garam masala", "1 tsp Red chili powder"],
        instructions: "1. Pressure cook soaked rajma for 15-20 minutes until soft.\n2. Heat oil, add cumin seeds, then onions. Cook until golden.\n3. Add ginger-garlic paste, cook for a minute.\n4. Add tomato puree and all spices. Cook until oil separates.\n5. Add cooked rajma with cooking water. Simmer for 15 minutes.\n6. Garnish with cilantro and serve with rice.",
        imageUrl: "https://placehold.co/600x400/dc2626/ffffff?text=Rajma+Curry"
    },
    {
        id: 46, name: "Bhindi Masala", cuisine: "Indian", description: "Crispy okra cooked with onions, tomatoes, and aromatic spices.", prepTime: 15, cookTime: 25,
        ingredients: ["500g Okra (Bhindi), cut", "2 Onions, sliced", "2 Tomatoes, chopped", "1 tsp Turmeric powder", "1 tsp Coriander powder", "1/2 tsp Red chili powder", "1 tsp Cumin seeds", "Dry mango powder (Amchur)"],
        instructions: "1. Wash and dry okra completely. Cut into 1-inch pieces.\n2. Heat oil, add cumin seeds, then okra. Fry until crispy.\n3. Remove okra and set aside.\n4. In same pan, add onions, cook until golden.\n5. Add tomatoes and spices, cook until soft.\n6. Add fried okra back, mix gently and cook for 5 minutes.",
        imageUrl: "https://placehold.co/600x400/16a34a/ffffff?text=Bhindi+Masala"
    },
    {
        id: 47, name: "Chole (Chickpea Curry)", cuisine: "Indian", description: "Spicy and tangy chickpea curry, a popular North Indian dish.", prepTime: 15, cookTime: 30,
        ingredients: ["2 cups Chickpeas (Chole), cooked", "2 Onions, chopped", "3 Tomatoes, pureed", "1 tbsp Ginger-garlic paste", "2 tsp Chole masala powder", "1 tsp Cumin seeds", "1 Bay leaf", "2 Green chilies"],
        instructions: "1. Heat oil, add cumin seeds and bay leaf.\n2. Add onions, cook until golden brown.\n3. Add ginger-garlic paste and green chilies.\n4. Add tomato puree and chole masala. Cook until thick.\n5. Add cooked chickpeas with water. Simmer for 15 minutes.\n6. Garnish with onions and cilantro.",
        imageUrl: "https://placehold.co/600x400/f59e0b/ffffff?text=Chole+Curry"
    },
    {
        id: 48, name: "Methi Thepla", cuisine: "Indian", description: "Nutritious flatbread made with fresh fenugreek leaves and spices.", prepTime: 20, cookTime: 25,
        ingredients: ["2 cups Whole wheat flour", "1 cup Fresh fenugreek leaves (Methi)", "1/4 cup Yogurt", "1 tsp Ginger-chili paste", "1/2 tsp Turmeric powder", "1 tsp Red chili powder", "Salt to taste", "Oil for cooking"],
        instructions: "1. Clean and chop fenugreek leaves finely.\n2. Mix flour, methi, yogurt, and all spices.\n3. Add water gradually to make a soft dough.\n4. Rest the dough for 15 minutes.\n5. Roll into thin circles and cook on hot tava with oil.\n6. Serve with pickle and yogurt.",
        imageUrl: "https://placehold.co/600x400/65a30d/ffffff?text=Methi+Thepla"
    },
    {
        id: 49, name: "Baingan Bharta", cuisine: "Indian", description: "Smoky roasted eggplant mash cooked with onions, tomatoes, and spices.", prepTime: 10, cookTime: 30,
        ingredients: ["2 large Eggplants (Baingan)", "2 Onions, chopped", "3 Tomatoes, chopped", "1 tbsp Ginger-garlic paste", "2 Green chilies", "1 tsp Cumin seeds", "1/2 tsp Turmeric powder", "Fresh cilantro"],
        instructions: "1. Roast eggplants over open flame until skin is charred and flesh is soft.\n2. Peel and mash the roasted eggplant.\n3. Heat oil, add cumin seeds, then onions.\n4. Add ginger-garlic paste and green chilies.\n5. Add tomatoes and spices, cook until soft.\n6. Add mashed eggplant, mix well and cook for 10 minutes.",
        imageUrl: "https://placehold.co/600x400/8b5cf6/ffffff?text=Baingan+Bharta"
    },
    {
        id: 50, name: "Masala Dosa", cuisine: "Indian", description: "Crispy South Indian crepe filled with spiced potato curry.", prepTime: 30, cookTime: 20,
        ingredients: ["For batter: 2 cups Rice, 1/2 cup Urad dal", "For filling: 4 Potatoes, boiled", "1 Onion, chopped", "2 Green chilies", "1 tsp Mustard seeds", "Curry leaves", "1/2 tsp Turmeric powder"],
        instructions: "1. Soak rice and urad dal separately for 4 hours, then grind to smooth batter.\n2. Ferment batter overnight.\n3. For filling: heat oil, add mustard seeds, curry leaves, onion, chilies.\n4. Add mashed potatoes and turmeric, mix well.\n5. Make thin crepes with batter, fill with potato mixture.\n6. Serve with coconut chutney and sambar.",
        imageUrl: "https://placehold.co/600x400/fbbf24/ffffff?text=Masala+Dosa"
    },

    // Additional Italian Recipes  
    {
        id: 51, name: "Arancini (Rice Balls)", cuisine: "Italian", description: "Sicilian rice balls stuffed with cheese, coated in breadcrumbs and fried until golden.", prepTime: 25, cookTime: 30,
        ingredients: ["2 cups Arborio rice, cooked and cooled", "1 cup Mozzarella cheese, cubed", "2 Eggs, beaten", "1 cup Breadcrumbs", "1/2 cup Parmesan cheese", "Oil for frying", "Saffron (optional)"],
        instructions: "1. Mix cooled risotto with one beaten egg and Parmesan.\n2. Take a portion of rice, place cheese cube in center, form into ball.\n3. Dip rice balls in remaining beaten egg, then breadcrumbs.\n4. Deep fry until golden brown and crispy.\n5. Drain on paper towels.\n6. Serve hot as appetizer or side dish.",
        imageUrl: "https://placehold.co/600x400/f97316/ffffff?text=Arancini"
    },
    {
        id: 52, name: "Panzanella (Tuscan Bread Salad)", cuisine: "Italian", description: "Traditional Tuscan salad made with day-old bread, tomatoes, and fresh vegetables.", prepTime: 20, cookTime: 0,
        ingredients: ["4 cups Day-old bread, cubed", "4 large Tomatoes, chopped", "1 Cucumber, diced", "1/2 Red onion, thinly sliced", "1/4 cup Fresh basil", "3 tbsp Red wine vinegar", "4 tbsp Olive oil"],
        instructions: "1. Soak bread cubes in water for 10 minutes, then squeeze out excess water.\n2. Combine tomatoes, cucumber, and red onion in a large bowl.\n3. Add squeezed bread and torn basil leaves.\n4. Whisk together vinegar and olive oil.\n5. Toss salad with dressing, season with salt and pepper.\n6. Let sit for 30 minutes before serving.",
        imageUrl: "https://placehold.co/600x400/dc2626/ffffff?text=Panzanella"
    },
    {
        id: 53, name: "Focaccia", cuisine: "Italian", description: "Soft, herb-topped Italian flatbread perfect as a side or appetizer.", prepTime: 30, cookTime: 25,
        ingredients: ["3 cups All-purpose flour", "1 packet Active dry yeast", "1 tsp Sugar", "1 tsp Salt", "3 tbsp Olive oil", "Fresh rosemary", "Cherry tomatoes", "Coarse sea salt"],
        instructions: "1. Mix yeast, sugar, and warm water. Let foam for 5 minutes.\n2. Combine flour and salt, add yeast mixture and olive oil.\n3. Knead until smooth, let rise for 1 hour.\n4. Press dough into oiled pan, dimple with fingers.\n5. Top with rosemary, tomatoes, and coarse salt.\n6. Bake at 425°F for 20-25 minutes until golden.",
        imageUrl: "https://placehold.co/600x400/65a30d/ffffff?text=Focaccia"
    },
    {
        id: 54, name: "Pasta alla Norma", cuisine: "Italian", description: "Sicilian pasta with fried eggplant, tomato sauce, and ricotta salata.", prepTime: 15, cookTime: 30,
        ingredients: ["12 oz Pasta (rigatoni or penne)", "2 Eggplants, cubed", "2 cups Tomato sauce", "3 cloves Garlic", "1/2 cup Ricotta salata, grated", "Fresh basil", "Olive oil for frying"],
        instructions: "1. Salt eggplant cubes and let drain for 30 minutes.\n2. Fry eggplant in olive oil until golden, set aside.\n3. Cook pasta until al dente.\n4. Heat tomato sauce with garlic and basil.\n5. Toss pasta with sauce and fried eggplant.\n6. Serve topped with ricotta salata and fresh basil.",
        imageUrl: "https://placehold.co/600x400/a855f7/ffffff?text=Pasta+Norma"
    },
    {
        id: 55, name: "Ribollita", cuisine: "Italian", description: "Hearty Tuscan soup made with vegetables, beans, and day-old bread.", prepTime: 20, cookTime: 45,
        ingredients: ["2 cups Day-old bread, cubed", "1 can Cannellini beans", "1 bunch Kale, chopped", "2 Carrots, diced", "2 Celery stalks, diced", "1 Onion, diced", "4 cups Vegetable broth", "Olive oil"],
        instructions: "1. Sauté onion, carrots, and celery in olive oil.\n2. Add kale and cook until wilted.\n3. Add beans and vegetable broth, simmer 30 minutes.\n4. Add bread cubes and let them absorb liquid.\n5. Season with salt, pepper, and herbs.\n6. Let rest overnight, reheat and serve with olive oil drizzle.",
        imageUrl: "https://placehold.co/600x400/16a34a/ffffff?text=Ribollita"
    },
    {
        id: 56, name: "Stuffed Bell Peppers", cuisine: "Italian", description: "Colorful bell peppers stuffed with rice, vegetables, and herbs, baked until tender.", prepTime: 20, cookTime: 45,
        ingredients: ["4 large Bell peppers, tops cut off", "1 cup Cooked rice", "1 Onion, diced", "2 Carrots, diced", "2 Celery stalks, diced", "1/2 cup White wine", "1 can Diced tomatoes", "1/2 cup Parmesan cheese", "Fresh basil and oregano"],
        instructions: "1. Preheat oven to 375°F. Remove seeds from bell peppers.\n2. Sauté onion, carrots, and celery until softened.\n3. Add wine and let reduce by half.\n4. Mix in rice, diced tomatoes, and herbs. Season with salt and pepper.\n5. Stuff peppers with the rice mixture, top with Parmesan.\n6. Bake for 35-40 minutes until peppers are tender.",
        imageUrl: "https://placehold.co/600x400/8b4513/ffffff?text=Stuffed+Peppers"
    },

    // Additional Mexican Recipes
    {
        id: 57, name: "Chiles en Nogada", cuisine: "Mexican", description: "Roasted poblano peppers stuffed with fruit and nut mixture, topped with walnut cream sauce.", prepTime: 45, cookTime: 30,
        ingredients: ["6 Poblano peppers", "1 cup Walnuts", "1/2 cup Mexican crema", "2 cups Mixed fruits (apple, pear, peach)", "1/2 cup Almonds", "1/4 cup Raisins", "Pomegranate seeds", "Fresh cheese"],
        instructions: "1. Roast and peel poblano peppers, remove seeds carefully.\n2. Soak walnuts in hot water, peel and blend with crema.\n3. Sauté diced fruits with almonds and raisins.\n4. Stuff peppers with fruit mixture.\n5. Top with walnut cream sauce.\n6. Garnish with pomegranate seeds.",
        imageUrl: "https://placehold.co/600x400/16a34a/ffffff?text=Chiles+en+Nogada"
    },
    {
        id: 58, name: "Pozole Verde", cuisine: "Mexican", description: "Green pozole soup made with hominy, tomatillos, and green chilies.", prepTime: 20, cookTime: 40,
        ingredients: ["2 cups Hominy, cooked", "1 lb Tomatillos", "2 Poblano peppers", "1 bunch Cilantro", "1 White onion", "4 cups Vegetable broth", "2 Serrano chilies", "Oregano", "Lime wedges"],
        instructions: "1. Roast tomatillos and poblano peppers until charred.\n2. Blend roasted vegetables with cilantro and serrano chilies.\n3. Strain the green sauce.\n4. Simmer sauce with vegetable broth for 20 minutes.\n5. Add hominy and cook for 15 minutes.\n6. Serve with oregano, onion, and lime.",
        imageUrl: "https://placehold.co/600x400/65a30d/ffffff?text=Pozole+Verde"
    },
    {
        id: 59, name: "Elote (Mexican Street Corn)", cuisine: "Mexican", description: "Grilled corn on the cob slathered with mayonnaise, cheese, and chili powder.", prepTime: 5, cookTime: 15,
        ingredients: ["4 ears Corn", "1/4 cup Mayonnaise", "1/4 cup Cotija cheese, crumbled", "1 tsp Chili powder", "1 Lime, cut in wedges", "Cilantro, chopped"],
        instructions: "1. Grill corn over medium-high heat, turning occasionally.\n2. Cook until kernels are lightly charred, about 10-15 minutes.\n3. Brush corn with mayonnaise.\n4. Sprinkle with crumbled cotija cheese.\n5. Dust with chili powder.\n6. Serve with lime wedges and cilantro.",
        imageUrl: "https://placehold.co/600x400/fbbf24/ffffff?text=Elote"
    },
    {
        id: 60, name: "Tamales de Dulce", cuisine: "Mexican", description: "Sweet tamales made with masa, raisins, and cinnamon, steamed in corn husks.", prepTime: 60, cookTime: 90,
        ingredients: ["2 cups Masa harina", "1/2 cup Vegetable shortening", "1/2 cup Sugar", "1 tsp Baking powder", "1 tsp Cinnamon", "1/2 cup Raisins", "Pink food coloring", "Corn husks, soaked"],
        instructions: "1. Beat shortening until fluffy, add sugar and beat well.\n2. Mix masa harina, baking powder, and cinnamon.\n3. Combine wet and dry ingredients, add coloring.\n4. Spread masa on corn husks, add raisins.\n5. Fold husks and tie with strips.\n6. Steam for 60-90 minutes until masa pulls away from husk.",
        imageUrl: "https://placehold.co/600x400/f97316/ffffff?text=Tamales+de+Dulce"
    },
    {
        id: 61, name: "Sopa de Tortilla", cuisine: "Mexican", description: "Traditional Mexican soup with tomato broth, topped with crispy tortilla strips and avocado.", prepTime: 15, cookTime: 25,
        ingredients: ["6 Roma tomatoes", "1/4 White onion", "2 cloves Garlic", "4 cups Vegetable broth", "4 Corn tortillas, cut in strips", "1 Avocado", "Mexican crema", "Queso fresco", "Pasilla chilies"],
        instructions: "1. Char tomatoes, onion, and garlic on comal or skillet.\n2. Blend charred vegetables with a little broth.\n3. Strain mixture into a pot and simmer.\n4. Add remaining broth and season with salt.\n5. Fry tortilla strips until crispy.\n6. Serve soup topped with tortilla strips, avocado, and cheese.",
        imageUrl: "https://placehold.co/600x400/dc2626/ffffff?text=Sopa+de+Tortilla"
    },
    {
        id: 62, name: "Rajas con Crema", cuisine: "Mexican", description: "Roasted poblano pepper strips in a creamy sauce, a classic Mexican side dish.", prepTime: 20, cookTime: 15,
        ingredients: ["6 Poblano peppers", "1 White onion, sliced", "1 cup Mexican crema", "1 cup Corn kernels", "1/2 cup Queso fresco", "Salt and pepper"],
        instructions: "1. Roast poblano peppers until skin is charred.\n2. Place in plastic bag to steam, then peel and cut into strips.\n3. Sauté onion until translucent.\n4. Add poblano strips and corn, cook 5 minutes.\n5. Stir in Mexican crema and simmer gently.\n6. Top with crumbled queso fresco before serving.",
        imageUrl: "https://placehold.co/600x400/16a34a/ffffff?text=Rajas+con+Crema"
    },
    
    // Additional Mediterranean Recipes
    {
        id: 63, name: "Greek Moussaka", cuisine: "Mediterranean", description: "Layered casserole with eggplant, lentils, and creamy béchamel sauce.", prepTime: 30, cookTime: 60,
        ingredients: ["2 large Eggplants, sliced", "1 cup Green lentils, cooked", "2 Onions, chopped", "3 Tomatoes, diced", "1/2 cup Red wine", "2 cups Milk", "3 tbsp Flour", "3 tbsp Butter", "1/2 cup Parmesan cheese"],
        instructions: "1. Salt eggplant slices and drain for 30 minutes. Brush with oil and bake until golden.\n2. Sauté onions, add cooked lentils, tomatoes, and wine. Simmer until thick.\n3. Make béchamel: melt butter, whisk in flour, gradually add milk until thick.\n4. Layer eggplant, lentil mixture, and béchamel in baking dish.\n5. Top with Parmesan and bake at 375°F for 45 minutes until golden.",
        imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Greek+Moussaka"
    },
    {
        id: 64, name: "Spanish Tortilla", cuisine: "Spanish", description: "Thick potato and egg omelet, a classic Spanish comfort food.", prepTime: 15, cookTime: 25,
        ingredients: ["4 large Potatoes, thinly sliced", "6 Eggs", "1 large Onion, sliced", "1/2 cup Olive oil", "Salt to taste"],
        instructions: "1. Heat olive oil in a large pan. Cook potatoes and onions slowly until tender.\n2. Drain potatoes and onions, reserving oil.\n3. Beat eggs in a large bowl, add potato mixture and salt.\n4. Heat 2 tbsp reserved oil in pan. Add egg mixture and cook on low heat.\n5. When edges are set, flip tortilla using a plate. Cook other side until golden.\n6. Serve warm or at room temperature.",
        imageUrl: "https://placehold.co/600x400/f59e0b/ffffff?text=Spanish+Tortilla"
    },
    {
        id: 65, name: "Mediterranean Stuffed Tomatoes", cuisine: "Mediterranean", description: "Large tomatoes stuffed with rice, herbs, and pine nuts, drizzled with olive oil.", prepTime: 20, cookTime: 40,
        ingredients: ["6 large Tomatoes", "1 cup Rice", "1/4 cup Pine nuts", "1/4 cup Raisins", "1 bunch Fresh parsley", "1 bunch Fresh mint", "1/4 cup Olive oil", "1 Onion, finely chopped"],
        instructions: "1. Cut tops off tomatoes, scoop out flesh and chop.\n2. Sauté onion in olive oil, add rice and chopped tomato flesh.\n3. Add pine nuts, raisins, herbs, and 2 cups water. Simmer until rice is tender.\n4. Stuff tomatoes with rice mixture.\n5. Place in baking dish with a little water, drizzle with olive oil.\n6. Bake at 375°F for 30-35 minutes.",
        imageUrl: "https://placehold.co/600x400/dc2626/ffffff?text=Stuffed+Tomatoes"
    },

    // Asian Vegetarian Recipes
    {
        id: 66, name: "Thai Green Curry", cuisine: "Thai", description: "Aromatic coconut curry with vegetables and Thai basil.", prepTime: 15, cookTime: 20,
        ingredients: ["2 tbsp Green curry paste", "1 can Coconut milk", "2 cups Mixed vegetables (eggplant, bell peppers, bamboo shoots)", "1 tbsp Soy sauce", "1 tbsp Palm sugar", "Thai basil leaves", "Lime juice"],
        instructions: "1. Heat thick coconut milk, add curry paste and fry until fragrant.\n2. Add remaining coconut milk and bring to a boil.\n3. Add vegetables and simmer until tender.\n4. Season with soy sauce, palm sugar, and lime juice.\n5. Add Thai basil leaves just before serving.\n6. Serve with jasmine rice.",
        imageUrl: "https://placehold.co/600x400/16a34a/ffffff?text=Thai+Green+Curry"
    },
    {
        id: 67, name: "Korean Bibimbap", cuisine: "Korean", description: "Mixed rice bowl with seasoned vegetables, served with spicy gochujang sauce.", prepTime: 25, cookTime: 30,
        ingredients: ["2 cups Cooked rice", "1 cup Spinach", "1 cup Carrots, julienned", "1 cup Bean sprouts", "1 cup Zucchini, julienned", "1 cup Cucumber, julienned", "2 Eggs", "2 tbsp Gochujang", "Sesame oil", "Sesame seeds"],
        instructions: "1. Blanch and season each vegetable separately with sesame oil, salt, and garlic.\n2. Marinate cucumber strips with sesame oil and salt.\n3. Fry eggs sunny-side up.\n4. Arrange rice in bowls, top with vegetables in separate sections.\n5. Place fried egg on top, sprinkle with sesame seeds.\n6. Serve with gochujang sauce on the side.",
        imageUrl: "https://placehold.co/600x400/dc2626/ffffff?text=Bibimbap"
    },
    {
        id: 68, name: "Japanese Vegetable Tempura", cuisine: "Japanese", description: "Light and crispy battered vegetables, served with dipping sauce.", prepTime: 20, cookTime: 15,
        ingredients: ["Mixed vegetables (sweet potato, eggplant, bell peppers, broccoli)", "1 cup Ice-cold water", "1 cup Flour", "1 Egg yolk", "Oil for deep frying", "For sauce: 1/4 cup Soy sauce, 2 tbsp Mirin, 1 tbsp Rice vinegar"],
        instructions: "1. Cut vegetables into bite-sized pieces.\n2. Mix egg yolk with ice-cold water, lightly fold in flour (don't overmix).\n3. Heat oil to 340°F. Dip vegetables in batter and fry until golden.\n4. Drain on paper towels.\n5. Mix sauce ingredients together.\n6. Serve tempura immediately with dipping sauce.",
        imageUrl: "https://placehold.co/600x400/fbbf24/ffffff?text=Vegetable+Tempura"
    },

    // Middle Eastern Recipes
    {
        id: 69, name: "Falafel", cuisine: "Middle Eastern", description: "Crispy deep-fried balls made from chickpeas and herbs.", prepTime: 20, cookTime: 15,
        ingredients: ["2 cups Dried chickpeas, soaked overnight", "1/2 cup Fresh parsley", "1/4 cup Fresh cilantro", "1 small Onion", "4 cloves Garlic", "1 tsp Cumin", "1 tsp Coriander", "Oil for frying"],
        instructions: "1. Drain chickpeas (don't cook them). Add to food processor with herbs, onion, and garlic.\n2. Pulse until mixture is coarse but holds together.\n3. Add spices and salt, mix well.\n4. Form into small balls and chill for 30 minutes.\n5. Deep fry in hot oil until golden brown and crispy.\n6. Serve with tahini sauce and pita bread.",
        imageUrl: "https://placehold.co/600x400/d97706/ffffff?text=Falafel"
    },
    {
        id: 70, name: "Tabbouleh", cuisine: "Middle Eastern", description: "Fresh parsley salad with bulgur, tomatoes, and lemon dressing.", prepTime: 30, cookTime: 0,
        ingredients: ["2 cups Fresh parsley, finely chopped", "1/4 cup Bulgur wheat", "2 Tomatoes, diced", "1/2 cup Green onions, chopped", "1/4 cup Fresh mint", "1/4 cup Lemon juice", "1/4 cup Olive oil"],
        instructions: "1. Soak bulgur in hot water for 20 minutes until tender. Drain well.\n2. Mix parsley, mint, tomatoes, and green onions in a large bowl.\n3. Add drained bulgur and mix well.\n4. Whisk together lemon juice and olive oil.\n5. Pour dressing over salad and toss.\n6. Chill for at least 1 hour before serving.",
        imageUrl: "https://placehold.co/600x400/84cc16/ffffff?text=Tabbouleh"
    },
    {
        id: 71, name: "Stuffed Grape Leaves", cuisine: "Middle Eastern", description: "Tender grape leaves stuffed with rice, herbs, and spices.", prepTime: 45, cookTime: 30,
        ingredients: ["30 Grape leaves, blanched", "1 cup Rice", "1/4 cup Pine nuts", "1 Onion, finely chopped", "1/4 cup Fresh dill", "1/4 cup Fresh parsley", "1/4 cup Lemon juice", "1/4 cup Olive oil"],
        instructions: "1. Sauté onion in olive oil until soft. Add rice and cook for 2 minutes.\n2. Add pine nuts, herbs, lemon juice, and 1 cup water. Simmer until rice is tender.\n3. Place a spoonful of filling on each grape leaf, roll tightly.\n4. Arrange rolls in a pot, drizzle with olive oil and lemon juice.\n5. Add enough water to cover, place a plate on top to weigh down.\n6. Simmer for 25-30 minutes until tender.",
        imageUrl: "https://placehold.co/600x400/65a30d/ffffff?text=Stuffed+Grape+Leaves"
    },

    // More International Options
    {
        id: 72, name: "Ethiopian Lentil Stew (Misir Wot)", cuisine: "Ethiopian", description: "Spicy red lentil stew with berbere spice blend.", prepTime: 10, cookTime: 25,
        ingredients: ["1 cup Red lentils", "2 tbsp Berbere spice blend", "1 Onion, chopped", "3 cloves Garlic, minced", "1 tbsp Ginger, minced", "2 tbsp Olive oil", "2 cups Vegetable broth", "Salt to taste"],
        instructions: "1. Heat oil in a pot, sauté onion until golden.\n2. Add garlic and ginger, cook for 1 minute.\n3. Add berbere spice and cook until fragrant.\n4. Add lentils and vegetable broth, bring to a boil.\n5. Reduce heat and simmer for 20 minutes until lentils are soft.\n6. Season with salt and serve with injera or rice.",
        imageUrl: "https://placehold.co/600x400/dc2626/ffffff?text=Lentil+Stew"
    },
    {
        id: 73, name: "Moroccan Tagine", cuisine: "Moroccan", description: "Slow-cooked vegetable stew with warm spices and dried fruits.", prepTime: 20, cookTime: 45,
        ingredients: ["2 cups Mixed vegetables (carrots, zucchini, bell peppers)", "1 can Chickpeas", "1/2 cup Dried apricots", "1 Onion, sliced", "2 tsp Ras el hanout spice", "1 can Diced tomatoes", "1 cup Vegetable broth", "Fresh cilantro"],
        instructions: "1. Sauté onion until soft, add ras el hanout spice.\n2. Add vegetables and cook for 5 minutes.\n3. Add tomatoes, chickpeas, apricots, and broth.\n4. Bring to a boil, then reduce heat and simmer covered for 30 minutes.\n5. Cook uncovered for 10 minutes to thicken.\n6. Garnish with fresh cilantro and serve with couscous.",
        imageUrl: "https://placehold.co/600x400/f97316/ffffff?text=Moroccan+Tagine"
    },
    {
        id: 74, name: "Brazilian Black Bean Stew (Feijoada)", cuisine: "Brazilian", description: "Rich and hearty black bean stew with vegetables and spices.", prepTime: 15, cookTime: 60,
        ingredients: ["2 cups Black beans, soaked overnight", "1 Onion, chopped", "4 cloves Garlic, minced", "1 Bell pepper, chopped", "2 Bay leaves", "1 tsp Cumin", "1 tsp Smoked paprika", "2 tbsp Olive oil", "Orange zest"],
        instructions: "1. Cook soaked black beans with bay leaves for 45 minutes until tender.\n2. Heat oil, sauté onion, garlic, and bell pepper until soft.\n3. Add cumin and smoked paprika, cook for 1 minute.\n4. Add cooked beans with cooking liquid to the vegetable mixture.\n5. Simmer for 15 minutes, mashing some beans to thicken.\n6. Finish with orange zest and serve with rice.",
        imageUrl: "https://placehold.co/600x400/1f2937/ffffff?text=Black+Bean+Stew"
    }
];

