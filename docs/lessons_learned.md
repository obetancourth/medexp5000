# Lessons Learned

### Alternative to $pull for only first match.
```
db.collection.updateOne(
  { _id: 1 },
  [
    { $set: {
         characters: {
             $let: {
                 vars: { ix: { $indexOfArray: [ "$characters", "8888" ] } },
                 in: { $concatArrays: [
                           { $slice: [ "$characters", 0, "$$ix"] },
                           [ ],
                           { $slice: [ "$characters", { $add: [ 1, "$$ix" ] }, { $size: "$characters" } ] }
                      ]
                 }
            }
        }
    }}
] )
```
