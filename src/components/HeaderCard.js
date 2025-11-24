<><template>
    <header class="header-bar">
        <div class="brand">
            <h1>Cooking Masterclass</h1>
            <p class="tag">Explore. Save. Cook.</p>
        </div>

        <div class="actions">
            <button class="wishlist-btn" aria-label="wishlist">
                 <span class="count">{{ wishlistCount }}</span>
            </button>
        </div>
    </header>
</template><script>
        export default {name}: 'HeaderCard',
        props: {wishlistCount}: {type}: Number,
        required: true
        
        
        
    </script><style scoped>
        .header-bar {display}: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.25rem;
        background: linear-gradient(90deg, #fff8f0, #fff);
        border-bottom: 1px solid rgba(0,0,0,0.06);
        
        .brand h1 {margin}: 0;
        font-size: 1.125rem;
        
        .tag {margin}: 0;
        font-size: 0.8rem;
        color: #666;
        
        .wishlist-btn {background}: none;
        border: 0;
        font-size: 1rem;
        cursor: default;
        
        .count {font - weight}: 700;
        margin-left: 0.35rem;
        
    </style></>