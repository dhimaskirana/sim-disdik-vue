<template>
    <div id="sidebarMenu" class="sidebar-body">
        <div class="nav-group show">
            <a href="#" class="nav-label">Dashboard</a>
            <ul class="nav nav-sidebar">
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/"><i class="ri-file-text-line"></i> <span>Home</span>
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/sample"><i class="ri-file-text-line"></i> <span>Sample Page</span>
                    </RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/profile"><i class="ri-account-circle-line"></i> <span>Profile
                            Page</span>
                    </RouterLink>
                </li>
            </ul>
        </div><!-- nav-group -->
    </div><!-- sidebar-body -->
</template>