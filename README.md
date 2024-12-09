![Alt text](https://github.com/zach-morris-txt/Project-DnD-Tool/blob/main/dnd-tools/images/DnD-Proj.png?raw=true)       ![Alt text](https://github.com/zach-morris-txt/Project-DnD-Tool/blob/main/dnd-tools/images/Character-Sheet.png?raw=true)    ![Alt text](https://github.com/zach-morris-txt/Project-DnD-Tool/blob/main/dnd-tools/images/Table-Modeling.png?raw=true)




[PLANNING]

~~Needs navigation~~

~~Needs library catalogue layout~~

~~Needs card components (spells, equipment, magic items, monsters etc) for array looping~~

Handle User accounts (auth pages, BE PostgreSQL connection) 

Thoroughly plan the BE relations before furthering UI

Review CRUD middleware and helper functions heavily in order to plan 'character leveling' logic

Review RDMSs heavily in preparation for user buildout, character buildout, and all further features





[BACKEND HEAVY]

Probably easiest to start with User backend handling and develop the database from there forward

Character leveling functionality should probably only be made available after an initial character sheet is completed. 
    This will simplify the demand on state by splitting character selection logic away from later conditional logic
    required to level
    
Form onSubmit should send values somehwere, will have to decide ownership

Predetermined dropdown values will have predetermined properties (classes and races come with various properties), these 
    should compute into their respective contexts upon selection






Refactor character sheet layout for functional form (split from blank form). ?PrintMe for blank?

Establish dropdowns and numeric, prepare form for initial state 'Lvl1 save'
        Specific inputs have predetermined values (dropdown) and should list ??from array data??

Plan with all json files how best to use data









[UI FURTHER]

Would be handy if left column home displayed character data specific to each input selected. ?Drag drop functionality for equipment, items, spells, etc?

Explicit numeric values should probably be written with counters.

Numeric, dice computed values could greatly benefit from dice-roller UI.




[POSS FEATURES]

POSS Encounter Management w/ initiative tracker, NPCs, etc

POSS user campaign publishing

POSS spell filtering-search, favorites, ?pending list? 
