local showCards= function(cards, cardBackImage, boosterPackImage)
    SendNUIMessage({packImage = boosterPackImage, backImage = cardBackImage, items = cards})
    SetNuiFocus(true,true)
end
exports('showCards', showCards)

RegisterNUICallback('Close', function()
    SetNuiFocus(false,false)
end)