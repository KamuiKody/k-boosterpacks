## client sided exports

```lua
    local cardBackImage = "https://raw.githubusercontent.com/KamuiKody/card-images/main/ygoback.png"
    local boosterPackImage = "https://raw.githubusercontent.com/KamuiKody/card-images/main/lob-boosterpack.png"
    local cards = {
        {
            name = 'lob-085', -- can be any unique identifier doesnt have to be the name of the card. must be different from other cards.
            image = "https://raw.githubusercontent.com/KamuiKody/card-images/main/lob-085.png" --Url
        },
        {
            name = 'lob-049',
            image = "https://raw.githubusercontent.com/KamuiKody/card-images/main/lob-049.png"
        }
    }
    exports['k-boosterpacks']:showCards(cards, cardBackImage, boosterPackImage)
```
