SELECT FI.ID, FI.LENGTH FROM FISH_INFO FI
JOIN (SELECT SFI.ID FROM FISH_INFO SFI ORDER BY SFI.LENGTH DESC LIMIT 10) SSFI ON SSFI.ID = FI.ID 
ORDER BY LENGTH DESC, ID ASC