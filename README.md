![Alt text](https://github.com/zach-morris-txt/Project-DnD-Tool/blob/main/dnd-tools/images/DnD-Proj.png?raw=true)       ![Alt text](https://github.com/zach-morris-txt/Project-DnD-Tool/blob/main/dnd-tools/images/Character-Sheet.png?raw=true)




[PLANNING]


Needs navigation

Needs library catalogue layout

Needs card components (spells, equipment, magic items, monsters etc) for array looping

Plan with all json files how best to use data

Refactor character sheet layout for functional form (split from blank form)




Specific inputs have predetermined values (dropdown) and should list ??from array data??

Perhaps a blank, fillable input sheet and computed character sheet should be split/kept as separate features.
    Blank, fillable fature with printme ease of functionality.

Form onSubmit should send values somehwere.. probably into an array initially until there is a robust backend attached.

Would be handy if left column home displayed character data specific to each input selected

Numeric, dice computed values could greatly benefit from dice-roller UI.

Explicit numeric values should probably be written with counters.

Predetermined dropdown values will have predetermined properties (classes and races come with various properties), these 
    should compute into their respective contexts upon selection.

Character leveling functionality should probably only be made available after an initial character sheet is completed. 
    This will simplify the demand on state by splitting character selection logic away from later conditional logic
    required to level.





Several later features will benefit and/or rely upon user account creation. However, character sheet completion and 
    character leveling should be manageable without heavy user backend work.
    ***User characters should have 'ownership' all selected data. This might be the best way of managing character state.



POSS user campaign publishing

POSS spell filtering-search, favorites, ?pending list? 