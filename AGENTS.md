
# MIXOLOGY & FLAVOR WIKI

A Knowledge Base of Mixology and Flavor Science

## 1. Project Overview

本專案以「調酒風味學與經典結構
（Mixology & Flavor Pairing）」為主題，
建立一套可持續擴充的知識庫。

專案目標：
1. 建立結構化 Markdown Wiki。
2. 建立 Wiki 頁面間的雙向連結。
3. 建立 JSON Knowledge Graph。
4. 使用 Wiki 作為知識檢索來源。
5. 根據 Wiki 生成 HTML 教學簡報。
6. 保存檢查紀錄、錯誤與修正過程。

## 2. Knowledge Structure

目前規劃八篇核心知識：

1. 六大基酒風味圖譜
2. 利口酒與加烈葡萄酒
3. 酸甜平衡黃金公式
4. 糖漿種類與口感質地
5. 搖盪法與攪拌法力學
6. 冰塊物理學與融水控制
7. 苦精與芳香分子點綴
8. 酒杯學與裝飾物功能

## 3. Technical Stack

- Markdown
- JSON
- HTML5
- CSS3
- Vanilla JavaScript
- GitHub
- GitHub Pages

## 4. Wiki Rules

每篇 Wiki 必須包含：

- 標題
- 核心定義
- 關鍵知識點
- 專有名詞解釋
- 白話說明
- 原始資料來源
- 相關 Wiki Links
- 待查證資訊

使用 Markdown 連結建立頁面關聯。

所有知識關係都必須有內容依據。

## 5. Source and Fact-checking Rules

- 保留使用者提供的原始資料。
- 區分原始資料、AI 整理內容與外部查證內容。
- 不可捏造書籍、作者、頁碼或引用。
- 無法確認的數據必須標記為「待查證」。
- 不可將 AI 推論寫成已確認事實。
- 保存資料整理與驗證過程。

## 6. Knowledge Graph Rules

知識圖譜使用 JSON 保存。

每個節點包含：
- id
- title
- category
- file

每條關係包含：
- source
- target
- relationship

## 7. Retrieval Rules

- 以 Wiki 作為主要知識來源。
- 回答必須能追溯至來源頁面。
- 不可任意加入知識庫以外的資訊。
- 找不到相關資料時，明確表示資料不足。

## 8. Presentation Rules

HTML 教學簡報必須：

- 以 Wiki 知識為內容基礎。
- 有清楚的教學順序。
- 使用繁體中文。
- 支援頁面切換與瀏覽。
- 標示知識來源。
- 不可生成與 Wiki 相互矛盾的內容。

## 9. Safety and Scope

本專案以風味科學、感官設計、
原料歷史與非酒精飲品的教學應用為主。

不提供酒精飲品的調製配方、
飲酒操作指引或飲酒建議。

## 10. Workflow

Source Ingestion
    ↓
Knowledge Extraction
    ↓
Wiki Generation
    ↓
Wiki Linking
    ↓
Knowledge Validation
    ↓
Knowledge Graph
    ↓
Knowledge Retrieval
    ↓
HTML Slide Generation
    ↓
Final Review

若驗證失敗，返回對應階段修正。
若簡報內容缺乏來源，重新檢索 Wiki。

## 11. Development Principles

- 每個階段都要有可檢查的輸出。
- 重要執行結果保存至 logs。
- 發生錯誤時記錄原因與修正方式。
- 不可只產生檔案而不檢查內容。
- 優先確保資料正確，再追求視覺效果。

